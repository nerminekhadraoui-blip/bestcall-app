/* ==========================================================
   BestCall — calcul du mois, onglet Facturation (conseillers)
   et facture mensuelle (admin / direction).

   BCPay.computeMonth(opts)      → détail jour par jour d'un mois pour un conseiller
   BCPay.renderConseiller(el, r) → onglet « Facturation » du conseiller (FR / PT)
   BCPay.downloadInvoice(rows, mois) → facture .xlsx au format « Fatura MyBestPro »
   ========================================================== */
(function () {
  "use strict";

  var JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  var DEDUCTIBLES = ["absence", "maladie", "conge"];

  // ---------- petits outils ----------
  function tmin(t) { if (!t) return 0; var p = t.split(":"); return (+p[0]) * 60 + (+p[1]); }
  function dur(a, b) { var s = tmin(a), e = tmin(b); if (e <= s) e += 1440; return e - s; }
  function worked(d) {
    if (!d || d.repos) return 0;
    var m = dur(d.debut, d.fin);
    if (d.pauseDebut && d.pauseFin && d.pauseDebut !== d.pauseFin) m -= dur(d.pauseDebut, d.pauseFin);
    return Math.max(0, m);
  }
  function weekMonday(semaine) {
    var p = semaine.split("-W"), y = +p[0], w = +p[1];
    var s = new Date(Date.UTC(y, 0, 1 + (w - 1) * 7));
    var dow = s.getUTCDay() || 7;
    if (dow <= 4) s.setUTCDate(s.getUTCDate() - dow + 1); else s.setUTCDate(s.getUTCDate() + 8 - dow);
    return s;
  }
  function iso(d) { return d.toISOString().slice(0, 10); }
  function money(n) { return (Math.round(n * 100) / 100).toFixed(2).replace(".", ",") + " €"; }
  function hrs(m) { var h = Math.round(m / 6) / 10; return String(h).replace(".", ",") + " h"; }
  function signed(n, fmt) { return (n > 0 ? "+" : n < 0 ? "−" : "") + fmt(Math.abs(n)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function horaire(d) {
    if (!d || d.repos) return null;
    return d.debut + "–" + d.fin + (d.pauseDebut && d.pauseFin && d.pauseDebut !== d.pauseFin ? " (" + d.pauseDebut + "–" + d.pauseFin + ")" : "");
  }

  /* ----------------------------------------------------------
     Calcul d'un mois pour un conseiller, jour par jour.
     opts: { conseiller, plannings[], signalements[], prime (null si pas saisie), mois "YYYY-MM" }
     Les semaines qui débordent sur le mois d'avant/après sont découpées par date réelle.
     ---------------------------------------------------------- */
  function computeMonth(o) {
    var c = o.conseiller || {}, mois = o.mois;
    var tauxSem = +c.tauxHoraireSemaine || 0, tauxDim = +c.tauxHoraireDimancheFerie || 0;

    // absences déductibles : date -> type
    var abs = {};
    (o.signalements || []).forEach(function (s) {
      if (!s || !s.date || DEDUCTIBLES.indexOf(s.type) === -1) return;
      var cur = new Date(s.date + "T00:00:00Z"), fin = new Date((s.dateFin || s.date) + "T00:00:00Z");
      while (cur <= fin) { var k = iso(cur); if (k.slice(0, 7) === mois) abs[k] = s.type; cur.setUTCDate(cur.getUTCDate() + 1); }
    });

    // ajustements d'horaire (partir plus tôt / plus tard…) : date -> minutes (+/-)
    var ajust = {};
    (o.signalements || []).forEach(function (s) {
      if (!s || s.type !== "ajustement" || !s.date || s.date.slice(0, 7) !== mois) return;
      ajust[s.date] = (ajust[s.date] || 0) + (+s.ajustementMin || 0);
    });

    var days = [], modifs = [];
    (o.plannings || []).forEach(function (p) {
      if (!p || !p.semaine || !p.jours) return;
      var mon = weekMonday(p.semaine);
      JOURS.forEach(function (key, idx) {
        var dt = new Date(mon); dt.setUTCDate(dt.getUTCDate() + idx);
        var date = iso(dt);
        if (date.slice(0, 7) !== mois) return;
        var d = p.jours[key];
        var mins = worked(d);
        var base = mins, adj = 0;
        if (mins > 0 && ajust[date]) { adj = Math.max(-mins, ajust[date]); mins += adj; }
        var estDim = key === "dimanche" || !!(d && d.ferie);
        var taux = estDim ? tauxDim : tauxSem;
        var absent = abs[date] && mins > 0 ? abs[date] : null;
        days.push({
          adj: adj, date: date, key: key, jour: d || { repos: true }, mins: mins, estDim: estDim, taux: taux,
          absent: absent, payes: absent ? 0 : mins, montant: absent ? 0 : (mins / 60) * taux, perdu: absent ? (mins / 60) * taux : 0
        });
        if (adj) modifs.push({ date: date, at: "", jour: key, ajust: true, avantTxt: horaire(d), apresTxt: (adj < 0 ? "−" : "+") + hrs(Math.abs(adj)), diffMin: adj, diffEur: (adj / 60) * taux, message: "" });
      });
      // historique des changements faits par le conseiller (Mon planning → Modifier)
      (p.historique || []).forEach(function (h) {
        if (!h || !h.date || h.date.slice(0, 7) !== mois) return;
        var avant = worked(h.avant), apres = worked(h.apres);
        var dim = h.jour === "dimanche" || !!(h.apres && h.apres.ferie) || !!(h.avant && h.avant.ferie);
        var t = dim ? tauxDim : tauxSem;
        modifs.push({ date: h.date, at: h.at || "", jour: h.jour, avant: h.avant, apres: h.apres, diffMin: apres - avant, diffEur: ((apres - avant) / 60) * t, message: h.message || "" });
      });
    });
    days.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    modifs.sort(function (a, b) { return (a.at || a.date) < (b.at || b.date) ? 1 : -1; });

    var r = { mois: mois, conseiller: c, days: days, modifs: modifs, tauxSem: tauxSem, tauxDim: tauxDim,
      minNormales: 0, minDim: 0, minAbsence: 0, montantNormal: 0, montantDim: 0, montantPerdu: 0 };
    days.forEach(function (d) {
      if (d.absent) { r.minAbsence += d.mins; r.montantPerdu += d.perdu; return; }
      if (d.estDim) { r.minDim += d.payes; r.montantDim += d.montant; } else { r.minNormales += d.payes; r.montantNormal += d.montant; }
    });
    r.gainsHoraires = r.montantNormal + r.montantDim;
    r.primeLangue = +c.primeLangue || 0;
    r.primeTeletravail = +c.primeTeletravail || 0;
    r.primeVariableSet = o.prime !== null && o.prime !== undefined;
    r.primeVariable = r.primeVariableSet ? (+o.prime || 0) : 0;
    r.total = r.gainsHoraires + r.primeLangue + r.primeTeletravail + r.primeVariable;
    return r;
  }

  /* ----------------------------------------------------------
     Onglet « Facturation » du conseiller — bilingue
     ---------------------------------------------------------- */
  var TX = {
    title: ["A minha faturação", "Ma facturation"],
    sub: ["Estimativa do que vais receber este mês. Atualiza-se sozinha a cada alteração do teu horário, pausa, ausência ou férias.", "Estimation de ce que tu vas toucher ce mois-ci. Elle se met à jour toute seule à chaque changement d’horaire, de pause, d’absence ou de congé."],
    month: ["Mês", "Mois"],
    estimate: ["Estimativa do mês", "Estimation du mois"],
    provisional: ["Valor provisório: muda se o horário mudar até ao fim do mês.", "Montant provisoire : il change si le planning change d’ici la fin du mois."],
    hoursPaid: ["Horas pagas", "Heures payées"],
    lost: ["Perdido por ausências", "Perdu par absences"],
    breakdown: ["Como é calculado", "Comment c’est calculé"],
    lineSem: ["Horas de segunda a sábado", "Heures du lundi au samedi"],
    lineDim: ["Horas ao domingo / feriado", "Heures dimanche / férié"],
    pLangue: ["Prémio de língua", "Prime de langue"],
    pTele: ["Prémio de teletrabalho", "Prime de télétravail"],
    pVar: ["Prémio variável do mês", "Prime variable du mois"],
    pVarNone: ["Ainda não definido pela Marta", "Pas encore fixée par Marta"],
    pVarNote: ["Enquanto a Marta não o introduzir, não há prémio variável. Normalmente é definido no fim do mês: o total aqui atualiza-se nesse momento.", "Tant que Marta ne l’a pas saisie, il n’y a pas de prime variable. Elle la fixe en général en fin de mois : le total ici se mettra à jour à ce moment-là."],
    total: ["Total estimado", "Total estimé"],
    perHour: ["/h", "/h"],
    absencesH: ["Ausências descontadas", "Absences déduites"],
    absencesNone: ["Nenhuma ausência descontada este mês.", "Aucune absence déduite ce mois-ci."],
    modifsH: ["As tuas alterações e o impacto", "Tes modifications et leur impact"],
    modifsHelp: ["Cada vez que modificas um dia em « O meu horário », vês aqui quanto isso acrescenta ou retira.", "Chaque fois que tu modifies une journée dans « Mon planning », tu vois ici combien ça ajoute ou enlève."],
    modifsNone: ["Nenhuma alteração este mês.", "Aucune modification ce mois-ci."],
    daysH: ["Detalhe dia a dia", "Détail jour par jour"],
    cDate: ["Dia", "Jour"], cHor: ["Horário (pausa)", "Horaire (pause)"], cH: ["Horas", "Heures"], cTaux: ["Taxa", "Taux"], cAmt: ["Valor", "Montant"],
    cBefore: ["Antes", "Avant"], cAfter: ["Depois", "Après"], cImpact: ["Impacto", "Impact"], cReason: ["Motivo", "Motif"],
    rest: ["Folga", "Repos"], ferie: ["feriado", "férié"],
    noPlan: ["Ainda não há horário para este mês.", "Pas encore de planning pour ce mois."],
    types: { ajustement: ["Ajuste de horário", "Ajustement d’horaire"], absence: ["Ausência", "Absence"], maladie: ["Baixa médica", "Maladie"], conge: ["Férias", "Congé"] },
    rules: ["As regras", "Les règles"],
    rule1: ["Cada hora de segunda a sábado é paga à tua taxa normal; domingos e feriados à taxa domingo/feriado.", "Chaque heure du lundi au samedi est payée à ton taux normal ; dimanches et jours fériés au taux dimanche/férié."],
    rule2: ["As pausas não são pagas: uma pausa mais longa retira tempo, uma pausa mais curta acrescenta.", "Les pauses ne sont pas payées : une pause plus longue enlève du temps, une pause plus courte en ajoute."],
    rule3: ["Uma ausência, baixa ou férias comunicada em « Comunicar » retira as horas desse dia.", "Une absence, maladie ou un congé déclaré dans « Signaler » enlève les heures de ce jour-là."],
    rule4: ["Os prémios de língua e de teletrabalho são fixos por mês.", "Les primes de langue et de télétravail sont fixes chaque mois."],
    loading: ["A carregar…", "Chargement…"],
    err: ["Não foi possível carregar a faturação. Tenta mais tarde ou fala com a Nermine.", "Impossible de charger la facturation. Réessaie plus tard ou contacte Nermine."]
  };
  function L() { return window.BCI18N && BCI18N.lang === "fr" ? 1 : 0; }
  function t(k) { var v = TX[k]; return Array.isArray(v) ? v[L()] : v; }
  var JLAB = { lundi: ["Seg", "Lun"], mardi: ["Ter", "Mar"], mercredi: ["Qua", "Mer"], jeudi: ["Qui", "Jeu"], vendredi: ["Sex", "Ven"], samedi: ["Sáb", "Sam"], dimanche: ["Dom", "Dim"] };
  function dayLabel(date, key) { var p = date.split("-"); return JLAB[key][L()] + " " + p[2] + "/" + p[1]; }
  function horaireTxt(d) { return horaire(d) || t("rest"); }

  function css() {
    if (document.getElementById("bcpay-css")) return;
    var s = document.createElement("style"); s.id = "bcpay-css";
    s.textContent =
      ".pay-hero{display:grid;grid-template-columns:minmax(0,1.3fr) repeat(2,minmax(0,1fr));gap:10px;margin-bottom:22px}" +
      ".pay-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;min-width:0}" +
      ".pay-card.main{background:var(--accent);color:#fff;border-color:var(--accent)}" +
      ".pay-card .lbl{font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;opacity:.8;font-weight:600}" +
      ".pay-card .val{font-family:Manrope,sans-serif;font-size:26px;font-weight:700;line-height:1.15;margin-top:4px;font-variant-numeric:tabular-nums}" +
      ".pay-card .sm{font-size:12px;opacity:.85;margin-top:4px;line-height:1.4}" +
      ".pay-card.loss .val{color:var(--danger)}" +
      ".pay-calc{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:6px 16px;margin-bottom:8px}" +
      ".pay-row{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:6px 18px;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--border);font-size:13.5px}" +
      ".pay-row:last-child{border-bottom:0}" +
      ".pay-row .how{color:var(--muted);font-size:12.5px;font-variant-numeric:tabular-nums;white-space:nowrap}" +
      ".pay-row .amt{font-variant-numeric:tabular-nums;font-weight:600;white-space:nowrap;text-align:right;min-width:90px}" +
      ".pay-row.total{font-size:15px}.pay-row.total .amt{color:var(--accent);font-size:16px}" +
      ".pay-row .pending{display:inline-block;background:var(--warm-soft);color:#7A5A00;border-radius:999px;padding:1px 9px;font-size:11.5px;font-weight:600}" +
      ".pay-note{font-size:12.5px;color:var(--muted);margin:6px 0 0;line-height:1.5}" +
      ".pay-plus{color:#1F7A50;font-weight:600}.pay-minus{color:var(--danger);font-weight:600}" +
      "tr.pay-abs td{background:var(--danger-soft)}tr.pay-rest td{color:var(--muted)}" +
      ".pay-rules{margin:8px 0 0;padding-left:18px;font-size:12.5px;color:var(--ink-soft);line-height:1.6}" +
      ".pay-head{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap;margin-bottom:18px}" +
      ".pay-head h1{font-size:21px;margin:0 0 4px}.pay-head p{margin:0;color:var(--muted);font-size:13px;max-width:62ch}" +
      ".pay-head label{font-size:12px;color:var(--muted);display:flex;flex-direction:column;gap:3px;margin:0}" +
      "@media (max-width:760px){.pay-hero{grid-template-columns:1fr}.pay-row{grid-template-columns:minmax(0,1fr) auto}.pay-row .how{grid-column:1/-1;order:3}}";
    document.head.appendChild(s);
  }

  function renderConseiller(el, r, mois, onMonth) {
    css();
    var head = '<div class="pay-head"><div><h1>' + t("title") + '</h1><p>' + t("sub") + '</p></div>' +
      '<label for="pay-month">' + t("month") + '<input type="month" id="pay-month" value="' + esc(mois) + '" style="width:auto"></label></div>';
    if (r === "loading" || r === "error") {
      el.innerHTML = head + '<div class="table-wrap"><div class="empty-state">' + t(r === "loading" ? "loading" : "err") + '</div></div>';
      wireMonth(el, onMonth); return;
    }
    var paidMin = r.minNormales + r.minDim;
    var hero = '<div class="pay-hero">' +
      '<div class="pay-card main"><div class="lbl">' + t("estimate") + '</div><div class="val">' + money(r.total) + '</div><div class="sm">' + t("provisional") + '</div></div>' +
      '<div class="pay-card"><div class="lbl">' + t("hoursPaid") + '</div><div class="val">' + hrs(paidMin) + '</div><div class="sm">' + hrs(r.minNormales) + ' + ' + hrs(r.minDim) + ' ' + (L() ? "dim./férié" : "dom./feriado") + '</div></div>' +
      '<div class="pay-card loss"><div class="lbl">' + t("lost") + '</div><div class="val">' + (r.montantPerdu ? "−" + money(r.montantPerdu) : money(0)) + '</div><div class="sm">' + hrs(r.minAbsence) + '</div></div>' +
      '</div>';

    var pv = r.primeVariableSet ? money(r.primeVariable) : '<span class="pending">' + t("pVarNone") + '</span>';
    var calc = '<h2 class="section-title">' + t("breakdown") + '</h2><div class="pay-calc">' +
      row(t("lineSem"), hrs(r.minNormales) + " × " + money(r.tauxSem) + t("perHour"), money(r.montantNormal)) +
      row(t("lineDim"), hrs(r.minDim) + " × " + money(r.tauxDim) + t("perHour"), money(r.montantDim)) +
      row(t("pLangue"), "", money(r.primeLangue)) +
      row(t("pTele"), "", money(r.primeTeletravail)) +
      row(t("pVar"), "", pv) +
      '<div class="pay-row total"><span><strong>' + t("total") + '</strong></span><span class="how"></span><span class="amt">' + money(r.total) + '</span></div></div>' +
      (r.primeVariableSet ? "" : '<p class="pay-note">' + t("pVarNote") + '</p>');

    var absRows = r.days.filter(function (d) { return d.absent; });
    var abs = '<h2 class="section-title">' + t("absencesH") + '</h2>' + (absRows.length ?
      '<div class="table-wrap"><table><thead><tr><th>' + t("cDate") + '</th><th>' + (L() ? "Type" : "Tipo") + '</th><th>' + t("cH") + '</th><th>' + t("cImpact") + '</th></tr></thead><tbody>' +
      absRows.map(function (d) { return '<tr><td>' + dayLabel(d.date, d.key) + '</td><td>' + TX.types[d.absent][L()] + '</td><td>' + hrs(d.mins) + '</td><td class="pay-minus">−' + money(d.perdu) + '</td></tr>'; }).join("") +
      '</tbody></table></div>' : '<p class="pay-note">' + t("absencesNone") + '</p>');

    var mod = '<h2 class="section-title">' + t("modifsH") + '</h2><p class="section-help">' + t("modifsHelp") + '</p>' + (r.modifs.length ?
      '<div class="table-wrap"><table><thead><tr><th>' + t("cDate") + '</th><th>' + t("cBefore") + '</th><th>' + t("cAfter") + '</th><th>' + t("cH") + '</th><th>' + t("cImpact") + '</th><th>' + t("cReason") + '</th></tr></thead><tbody>' +
      r.modifs.map(function (m) {
        var cls = m.diffEur > 0 ? "pay-plus" : m.diffEur < 0 ? "pay-minus" : "";
        return '<tr><td>' + dayLabel(m.date, m.jour) + '</td><td>' + esc(m.ajust ? m.avantTxt : horaireTxt(m.avant)) + '</td><td>' + esc(m.ajust ? m.apresTxt : horaireTxt(m.apres)) + '</td><td class="' + cls + '">' + signed(m.diffMin, hrs) + '</td><td class="' + cls + '">' + signed(Math.round(m.diffEur * 100) / 100, money) + '</td><td>' + esc(m.message) + '</td></tr>';
      }).join("") + '</tbody></table></div>' : '<p class="pay-note">' + t("modifsNone") + '</p>');

    var dayRows = r.days.length ? '<div class="table-wrap"><table><thead><tr><th>' + t("cDate") + '</th><th>' + t("cHor") + '</th><th>' + t("cH") + '</th><th>' + t("cTaux") + '</th><th>' + t("cAmt") + '</th></tr></thead><tbody>' +
      r.days.map(function (d) {
        var restDay = !d.mins;
        var cls = d.absent ? "pay-abs" : restDay ? "pay-rest" : "";
        var note = d.absent ? ' · ' + TX.types[d.absent][L()] : (d.jour.ferie ? ' · ' + t("ferie") : "");
        return '<tr class="' + cls + '"><td>' + dayLabel(d.date, d.key) + '</td><td>' + esc(horaireTxt(d.jour)) + note + '</td><td>' + (restDay ? "—" : hrs(d.mins)) + '</td><td>' + (restDay ? "—" : money(d.taux) + t("perHour")) + '</td><td>' + (restDay ? "—" : d.absent ? '<span class="pay-minus">0,00 € (−' + money(d.perdu) + ')</span>' : money(d.montant)) + '</td></tr>';
      }).join("") + '</tbody></table></div>' : '<div class="table-wrap"><div class="empty-state">' + t("noPlan") + '</div></div>';

    var rules = '<h2 class="section-title">' + t("rules") + '</h2><ul class="pay-rules"><li>' + t("rule1") + '</li><li>' + t("rule2") + '</li><li>' + t("rule3") + '</li><li>' + t("rule4") + '</li></ul>';

    el.innerHTML = head + hero + calc + mod + abs + '<h2 class="section-title">' + t("daysH") + '</h2>' + dayRows + rules;
    wireMonth(el, onMonth);
  }
  function row(label, how, amt) { return '<div class="pay-row"><span>' + label + '</span><span class="how">' + how + '</span><span class="amt">' + amt + '</span></div>'; }
  function wireMonth(el, onMonth) {
    var i = el.querySelector("#pay-month");
    if (i && onMonth) i.addEventListener("change", function () { if (i.value) onMonth(i.value); });
  }

  /* ----------------------------------------------------------
     Facture mensuelle (.xlsx) au format du modèle « Fatura MyBestPro »
     rows : résultats de computeMonth pour chaque conseiller actif
     ---------------------------------------------------------- */
  var EXCELJS = "https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js";
  function loadExcel() {
    if (window.ExcelJS) return Promise.resolve(window.ExcelJS);
    return new Promise(function (res, rej) {
      var s = document.createElement("script"); s.src = EXCELJS;
      s.onload = function () { res(window.ExcelJS); };
      s.onerror = function () { rej(new Error("ExcelJS indisponible")); };
      document.head.appendChild(s);
    });
  }
  function isSup(c) { return /sup/i.test((c.codeAgent || "") + " " + (c.nom || "")); }
  function codeKey(c) { return (c.codeAgent || c.nom || "").replace(/\s+/g, ""); }

  function invoiceLines(rows) {
    var lines = [];
    rows.slice().sort(function (a, b) { return codeKey(a.conseiller).localeCompare(codeKey(b.conseiller), undefined, { numeric: true }); })
      .forEach(function (r) {
        var c = r.conseiller;
        if (isSup(c)) return; // Best Sup = Marta : ligne laissée à remplir à la main
        var code = c.codeAgent || ((c.prenom || "") + " " + (c.nom || "")).trim();
        if (r.minNormales > 0) lines.push({ code: code, h: r.minNormales / 60, desc: "Prestation du lundi au samedi", taux: r.tauxSem, dim: false });
        if (r.minDim > 0) lines.push({ code: code, h: r.minDim / 60, desc: "Prestation-dimanche/ ferie ", taux: r.tauxDim, dim: true });
      });
    var sup = rows.filter(function (r) { return isSup(r.conseiller); })[0];
    lines.push({ code: sup && sup.conseiller.codeAgent ? sup.conseiller.codeAgent : "Best Sup", h: null, desc: "Prestation du lundi au samedi", taux: sup ? (sup.tauxSem || 12) : 12, dim: false, manual: true });
    return lines;
  }

  function downloadInvoice(rows, mois) {
    var lines = invoiceLines(rows);
    return loadExcel().then(function (ExcelJS) {
      var wb = new ExcelJS.Workbook();
      wb.creator = "BestCall";
      var ws = wb.addWorksheet("Feuille 1");
      ws.columns = [{ width: 3.75 }, { width: 22.38 }, { width: 12 }, { width: 30 }, { width: 24.5 }, { width: 22.5 }, { width: 22.38 }];
      var EUR = '#,##0\\ [$€-1]', EUR2 = '#,##0.00\\ [$€-1]', PINK = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF4CCCC" } };
      var bold = { bold: true };
      ws.getCell("B2").value = "Descrição dos Serviços Prestados"; ws.getCell("B2").font = bold;
      ws.getCell("D2").value = mois; ws.getCell("D2").font = { italic: true, color: { argb: "FF6B7488" } };
      ["Conselheiro", "Nº de Horas ", "Descrição do serviço", "Valor / Hora ", "Total"].forEach(function (h, i) {
        var cell = ws.getRow(3).getCell(2 + i); cell.value = h; cell.font = bold;
      });
      var r0 = 4;
      lines.forEach(function (l, i) {
        var rn = r0 + i, row = ws.getRow(rn);
        row.getCell(2).value = l.code;
        row.getCell(3).value = l.h === null ? null : Math.round(l.h * 100) / 100;
        row.getCell(4).value = l.desc;
        row.getCell(5).value = l.taux;
        row.getCell(6).value = { formula: "C" + rn + "*E" + rn };
        [2, 3, 4, 5].forEach(function (k) { row.getCell(k).font = bold; });
        row.getCell(3).numFmt = "0.0#"; row.getCell(5).numFmt = EUR; row.getCell(6).numFmt = EUR;
        if (l.dim) [2, 3, 4, 5].forEach(function (k) { row.getCell(k).fill = PINK; });
        if (l.manual) {
          row.getCell(3).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF2CC" } };
          row.getCell(7).value = "À compléter par Marta";
          row.getCell(7).font = { italic: true, color: { argb: "FF9A6700" } };
        }
      });
      var last = r0 + lines.length - 1, tot = last + 1;
      ws.getCell("E" + tot).value = "Total a faturar"; ws.getCell("E" + tot).font = bold;
      ws.getCell("F" + tot).value = { formula: "SUM(F" + r0 + ":F" + last + ")" }; ws.getCell("F" + tot).numFmt = EUR2; ws.getCell("F" + tot).font = bold;
      ws.getCell("E" + (tot + 1)).value = "Crédito comercial por serviços complementares prestados."; ws.getCell("E" + (tot + 1)).font = bold;
      ws.getCell("F" + (tot + 1)).value = 0; ws.getCell("F" + (tot + 1)).numFmt = EUR2;
      ws.getCell("G" + (tot + 1)).value = "À compléter si besoin"; ws.getCell("G" + (tot + 1)).font = { italic: true, color: { argb: "FF9A6700" } };
      ws.getCell("E" + (tot + 2)).value = "Total a Pagar"; ws.getCell("E" + (tot + 2)).font = bold;
      ws.getCell("F" + (tot + 2)).value = { formula: "F" + tot + "-F" + (tot + 1) }; ws.getCell("F" + (tot + 2)).numFmt = EUR2; ws.getCell("F" + (tot + 2)).font = bold;
      return wb.xlsx.writeBuffer();
    }).then(function (buf) {
      var blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      var url = URL.createObjectURL(blob), a = document.createElement("a");
      a.href = url; a.download = "Fatura_Mybestpro_" + mois + ".xlsx";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      return lines;
    });
  }

  window.BCPay = { computeMonth: computeMonth, renderConseiller: renderConseiller, downloadInvoice: downloadInvoice, invoiceLines: invoiceLines, worked: worked };
})();
