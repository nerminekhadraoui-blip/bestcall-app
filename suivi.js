/* ==========================================================
   Suivi confidentiel (admin / direction uniquement)
   Qui a fait la formation, l'entraînement et l'Academia — les conseillers ne voient pas cet onglet
   et les règles Firestore les empêchent de lire la progression des autres.
   BCSuivi.render(el, { people:[{nom, code, email, role, statut, formation, academy}] })
   ========================================================== */
(function () {
  "use strict";
  var state = { rows: [], q: "", sort: "activite", open: {} };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fr(x) { return Array.isArray(x) ? (x[1] || x[0]) : (x || ""); }
  function mods() { return (window.BCF && BCF.modules) || []; }
  function temas() { return (window.BCA && BCA.temas) || []; }
  function fmtDate(iso) {
    if (!iso) return "—";
    var d = new Date(iso), now = new Date(), days = Math.floor((now - d) / 86400000);
    var txt = d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
    if (days <= 0) return "Aujourd'hui";
    if (days === 1) return "Hier";
    if (days < 7) return "Il y a " + days + " j";
    return txt;
  }
  function daysSince(iso) { return iso ? Math.floor((Date.now() - new Date(iso)) / 86400000) : 9999; }
  var LV = [0, 100, 300, 600, 1000];
  function lvl(xp) { var i = 0; while (i + 1 < LV.length && xp >= LV[i + 1]) i++; return i + 1; }

  function compute(p) {
    var f = p.formation || {}, a = p.academy || {}, total = mods().length || f.total || 20;
    var done = mods().filter(function (m) { return f.quiz && f.quiz[m.id] && f.quiz[m.id].passed; }).length || f.done || 0;
    var started = mods().filter(function (m) { return Object.keys(f.seen || {}).some(function (k) { return k.indexOf(m.id + ":") === 0; }); }).length;
    var tr = f.treino || {};
    var nT = temas().length || a.nTemas || 11;
    var seen = Object.keys(a.seen || {}).length;
    var quizOk = Object.keys(a.quiz || {}).filter(function (k) { return a.quiz[k].best === a.quiz[k].of; }).length;
    var lastF = f.updatedAt || null, lastA = a.updatedAt || a.last || null;
    var last = (lastF || "") > (lastA || "") ? lastF : lastA;
    var st = !lastF && !lastA ? "none" : (done >= total ? "done" : "prog");
    return { done: done, total: total, started: started, tr: tr, nT: nT, seen: seen, quizOk: quizOk, xp: a.xp || 0, flash: a.flash || {}, lastF: lastF, lastA: lastA, last: last, st: st };
  }

  function bar(v, max, cls) { var p = max ? Math.round(v * 100 / max) : 0; return '<div class="sv-bar ' + (cls || "") + '"><i style="width:' + p + '%"></i></div>'; }

  function detail(p, c) {
    var f = p.formation || {}, a = p.academy || {};
    var h = '<div class="sv-detail"><div><h4>Formation — modules</h4><ul class="sv-mods">' + mods().map(function (m) {
      var q = f.quiz && f.quiz[m.id], st = q && q.passed ? "ok" : (Object.keys(f.seen || {}).some(function (k) { return k.indexOf(m.id + ":") === 0; }) ? "part" : "no");
      return '<li class="' + st + '"><span>' + (st === "ok" ? "✓" : st === "part" ? "…" : "–") + '</span>' + esc(fr(m.t || m.title)) + (q ? ' <small>quiz ' + q.best + '/' + q.of + '</small>' : '') + '</li>';
    }).join("") + '</ul></div><div><h4>Academia — épisodes</h4><ul class="sv-mods">' + temas().map(function (t) {
      var seen = a.seen && a.seen[t.id], q = a.quiz && a.quiz[t.id];
      var st = seen && (!t.quiz || (q && q.best === q.of)) ? "ok" : (seen || q ? "part" : "no");
      return '<li class="' + st + '"><span>' + (st === "ok" ? "✓" : st === "part" ? "…" : "–") + '</span>' + esc(fr(t.t)) + (q ? ' <small>quiz ' + q.best + '/' + q.of + '</small>' : '') + '</li>';
    }).join("") + '</ul><h4 style="margin-top:12px">Entraînement & flashcards</h4><p class="sv-small">' +
      (c.tr.answered || 0) + ' questions d\'entraînement (' + (c.tr.answered ? Math.round((c.tr.correct || 0) * 100 / c.tr.answered) : 0) + ' % justes) · ' +
      (c.flash.reviewed || 0) + ' flashcards revues, ' + (c.flash.known || 0) + ' sues · ' + Object.keys(a.daily || {}).length + ' défi(s) du jour · ' + Object.keys(a.days || {}).length + ' jour(s) actif(s) sur l\'Academia</p></div></div>';
    return h;
  }

  function draw(el) {
    var rows = state.rows.map(function (p) { return { p: p, c: compute(p) }; });
    var q = state.q.toLowerCase();
    if (q) rows = rows.filter(function (r) { return (r.p.nom + " " + r.p.code + " " + r.p.email).toLowerCase().indexOf(q) >= 0; });
    rows.sort(function (x, y) {
      if (state.sort === "formation") return (y.c.done - x.c.done) || x.p.nom.localeCompare(y.p.nom);
      if (state.sort === "academy") return (y.c.xp - x.c.xp) || x.p.nom.localeCompare(y.p.nom);
      if (state.sort === "nom") return x.p.nom.localeCompare(y.p.nom);
      return String(y.c.last || "").localeCompare(String(x.c.last || ""));
    });
    var all = state.rows.map(compute);
    var n = all.length, fDone = all.filter(function (c) { return c.done >= c.total; }).length;
    var none = all.filter(function (c) { return c.st === "none"; }).length;
    var active7 = all.filter(function (c) { return daysSince(c.lastA) <= 7; }).length;
    var avg = n ? Math.round(all.reduce(function (s, c) { return s + c.done; }, 0) / n * 10) / 10 : 0;
    var notStarted = state.rows.filter(function (p, i) { return all[i].st === "none"; }).map(function (p) { return p.nom; });

    el.innerHTML =
      '<div class="sv-cards">' +
      '<div class="sv-card"><b>' + fDone + ' / ' + n + '</b><span>ont terminé la formation</span></div>' +
      '<div class="sv-card"><b>' + avg + '</b><span>modules validés en moyenne (sur ' + (mods().length || 20) + ')</span></div>' +
      '<div class="sv-card"><b>' + active7 + '</b><span>actives sur l\'Academia ces 7 derniers jours</span></div>' +
      '<div class="sv-card ' + (none ? 'warn' : '') + '"><b>' + none + '</b><span>n\'ont encore rien commencé</span></div></div>' +
      (notStarted.length ? '<p class="sv-alert">⚠️ Pas encore commencé : ' + notStarted.map(esc).join(", ") + '</p>' : '') +
      '<div class="search-row sv-tools"><input type="text" id="sv-q" placeholder="Rechercher une conseillère…" value="' + esc(state.q) + '">' +
      '<select id="sv-sort"><option value="activite">Trier : dernière activité</option><option value="formation">Trier : formation</option><option value="academy">Trier : Academia (XP)</option><option value="nom">Trier : nom</option></select></div>' +
      '<div class="table-wrap"><table class="sv-table"><thead><tr><th>Conseillère</th><th>Formation</th><th>Entraînement</th><th>Academia</th><th>Dernière activité</th><th>Statut</th><th></th></tr></thead><tbody>' +
      rows.map(function (r) {
        var p = r.p, c = r.c, id = p.key;
        var stLabel = c.st === "none" ? '<span class="sv-chip none">Pas commencé</span>' : c.st === "done" ? '<span class="sv-chip ok">Formation terminée</span>' : '<span class="sv-chip prog">En cours</span>';
        var acTxt = c.seen || c.xp ? c.seen + ' / ' + c.nT + ' épisodes · niv. ' + lvl(c.xp) + ' (' + c.xp + ' XP)' : '—';
        return '<tr class="sv-row" data-k="' + esc(id) + '"><td><b>' + esc(p.nom) + '</b>' + (p.code ? ' <small class="sv-code">' + esc(p.code) + '</small>' : '') + (p.role === "formation" ? ' <small class="sv-code">accès formation</small>' : '') + '</td>' +
          '<td><div class="sv-cell">' + bar(c.done, c.total) + '<span>' + c.done + ' / ' + c.total + '</span></div>' + (c.started > c.done ? '<small class="sv-small">' + (c.started - c.done) + ' en cours</small>' : '') + '</td>' +
          '<td>' + (c.tr.answered ? c.tr.answered + ' q · ' + Math.round((c.tr.correct || 0) * 100 / c.tr.answered) + ' %' : '—') + '</td>' +
          '<td><div class="sv-cell">' + bar(c.seen, c.nT, "gold") + '</div><small class="sv-small">' + acTxt + '</small></td>' +
          '<td>' + fmtDate(c.last) + '</td><td>' + stLabel + '</td><td><button class="btn btn-ghost btn-sm sv-more" type="button">' + (state.open[id] ? 'Masquer' : 'Détails') + '</button></td></tr>' +
          (state.open[id] ? '<tr class="sv-detail-row"><td colspan="7">' + detail(p, c) + '</td></tr>' : '');
      }).join("") + '</tbody></table></div>' +
      '<p class="sv-small" style="margin-top:10px">🔒 Visible uniquement par les comptes Administrateur et Direction. Les conseillères ne voient ni cet onglet ni la progression des autres.</p>';

    var qi = el.querySelector("#sv-q"); qi.oninput = function () { state.q = qi.value; draw(el); var n2 = el.querySelector("#sv-q"); n2.focus(); n2.setSelectionRange(n2.value.length, n2.value.length); };
    var so = el.querySelector("#sv-sort"); so.value = state.sort; so.onchange = function () { state.sort = so.value; draw(el); };
    el.querySelectorAll(".sv-row").forEach(function (tr) { tr.querySelector(".sv-more").onclick = function () { var k = tr.dataset.k; state.open[k] = !state.open[k]; draw(el); }; });
  }

  function css() {
    if (document.getElementById("sv-css")) return;
    var s = document.createElement("style"); s.id = "sv-css";
    s.textContent = ".sv-cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:14px}" +
      ".sv-card{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px}.sv-card b{display:block;font:800 24px/1.1 Manrope,sans-serif;color:var(--ink)}.sv-card span{font-size:12.5px;color:var(--muted)}" +
      ".sv-card.warn{border-color:#E7B9B0;background:var(--danger-soft)}.sv-alert{background:var(--warm-soft);border:1px solid #EBCB79;border-radius:6px;padding:9px 12px;font-size:13px;margin-bottom:12px}" +
      ".sv-tools{margin-bottom:10px}.sv-cell{display:flex;align-items:center;gap:8px}.sv-bar{flex:none;width:90px;height:7px;background:var(--surface-2);border-radius:99px;overflow:hidden}.sv-bar i{display:block;height:100%;background:var(--accent)}.sv-bar.gold i{background:var(--warm)}" +
      ".sv-small{font-size:11.5px;color:var(--muted)}.sv-code{font-size:11px;color:var(--muted);background:var(--surface-2);padding:1px 6px;border-radius:4px;margin-left:4px}" +
      ".sv-chip{display:inline-block;font-size:11.5px;font-weight:600;padding:3px 8px;border-radius:99px;white-space:nowrap}.sv-chip.none{background:var(--danger-soft);color:var(--danger)}.sv-chip.prog{background:var(--warm-soft);color:#7A5A00}.sv-chip.ok{background:#DDF1E6;color:#1F7A50}" +
      ".sv-detail{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:6px 4px}.sv-detail h4{font:700 13px/1.3 Manrope,sans-serif;margin:0 0 6px}.sv-mods{list-style:none;margin:0;padding:0;columns:1;font-size:12.5px}" +
      ".sv-mods li{padding:2px 0}.sv-mods li span{display:inline-block;width:18px;font-weight:700}.sv-mods li.ok span{color:#1F7A50}.sv-mods li.part span{color:#B8860B}.sv-mods li.no{color:var(--muted)}.sv-mods small{color:var(--muted)}" +
      ".sv-detail-row td{background:var(--surface-2)}" +
      "@media(max-width:900px){.sv-cards{grid-template-columns:1fr 1fr}.sv-detail{grid-template-columns:1fr}}";
    document.head.appendChild(s);
  }

  window.BCSuivi = {
    render: function (el, data) { css(); state.rows = (data && data.people) || []; draw(el); },
    loading: function (el, msg) { el.innerHTML = '<div class="empty-state">' + esc(msg || "Chargement…") + '</div>'; }
  };
})();
