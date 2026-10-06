/* ==========================================================
   Academia BestCall — moteur de l'onglet Formation
   Usage :
     BCFormation.mount(element, {
       store: { load: () => Promise<data|null>, save: (data) => Promise },
       imgBase: "formation/img/"
     });
     BCFormation.renderAdmin(element, rows)   // vue de suivi admin/direction
   Le contenu vient de BCF (contenu-1.js, contenu-2.js).
   ========================================================== */
(function () {
  "use strict";

  var UI = {
    parcours: ["Percurso", "Parcours"], memo: ["Ficha memória", "Fiche mémo"],
    eyebrow: ["Academia BestCall · Wengo", "Academia BestCall · Wengo"],
    heroA: ["Aprenda o essencial ", "Apprends l’essentiel "], heroB: ["antes da reunião com a Marta", "avant la réunion avec Marta"],
    heroP: ["Faça os módulos pela ordem, ao seu ritmo. Cada módulo acaba com um quiz curto. Anote as suas dúvidas para as colocar na reunião de formação.", "Fais les modules dans l’ordre, à ton rythme. Chaque module se termine par un petit quiz. Note tes questions pour les poser pendant la réunion de formation."],
    validated: ["módulos validados", "modules validés"], resume: ["Continuar →", "Continuer →"], start: ["Começar →", "Commencer →"], allDone: ["Rever um módulo", "Revoir un module"],
    m1: ["Ler", "Lire"], m1s: ["Lições curtas", "Leçons courtes"],
    m2: ["Ver", "Voir"], m2s: ["Capturas reais do Bobi", "Vraies captures de Bobi"],
    m3: ["Testar", "Tester"], m3s: ["Um quiz por módulo", "Un quiz par module"],
    m4: ["Rever", "Réviser"], m4s: ["Ficha memória", "Fiche mémo"],
    step: ["Etapa", "Étape"], min: ["min", "min"], lessons: ["lições", "leçons"],
    done: ["Validado", "Validé"], todo: ["A fazer", "À faire"], part: ["Em curso", "En cours"],
    back: ["← Todos os módulos", "← Tous les modules"], quiz: ["Quiz do módulo", "Quiz du module"], lesson: ["Lição", "Leçon"],
    next: ["Seguinte →", "Suivant →"], prev: ["← Anterior", "← Précédent"], toQuiz: ["Fazer o quiz →", "Faire le quiz →"],
    home: ["Voltar ao percurso", "Retour au parcours"], nextMod: ["Módulo seguinte →", "Module suivant →"],
    score: ["respostas certas", "bonnes réponses"], passed: ["Módulo validado! Bom trabalho.", "Module validé ! Bravo."],
    retry: ["Precisa de 2/3 de respostas certas. Releia as lições e tente de novo.", "Il faut 2/3 de bonnes réponses. Relis les leçons et réessaie."],
    again: ["Refazer o quiz", "Refaire le quiz"], reread: ["← Reler as lições", "← Relire les leçons"],
    right: ["Certo!", "Bonne réponse !"], wrong: ["Não é isso.", "Pas tout à fait."],
    tip: ["Dica", "Astuce"], warn: ["Atenção", "Attention"], key: ["A reter", "À retenir"],
    shotTodo: ["Captura a adicionar", "Capture à ajouter"], zoom: ["Clique para ampliar", "Clique pour agrandir"],
    memoH: ["Os números a saber de cor", "Les chiffres à connaître par cœur"],
    memoP: ["Toque num cartão para ver a resposta. Tente responder antes de virar!", "Touche une carte pour voir la réponse. Essaie de répondre avant de la retourner !"],
    errH: ["Pesquisar um código de erro", "Chercher un code d’erreur"], errPh: ["Ex.: 39009, cartão, fundos…", "Ex. : 39009, carte, fonds…"], what: ["O que fazer", "Que faire"],
    contacts: ["Contactos Wengo por país", "Contacts Wengo par pays"],
    clfH: ["Exercício: que tipo de cliente?", "Exercice : quel type de client ?"], clfS: ["Introduza os dados de uma ficha e veja a resposta.", "Entre les infos d’une fiche et regarde la réponse."],
    clfTot: ["Consultas pagas (total)", "Consultations payées (total)"], clfFirst: ["Dias desde a 1.ª", "Jours depuis la 1re"], clfLast: ["Dias desde a última", "Jours depuis la dernière"],
    adminH: ["Acompanhamento dos conselheiros", "Suivi des conseillers"], adminP: ["Progresso de cada conselheira na formação.", "Progression de chaque conseillère dans la formation."],
    who: ["Conselheiro", "Conseiller"], prog: ["Progresso", "Progression"], mods: ["Módulos", "Modules"], last: ["Última atividade", "Dernière activité"],
    none: ["Ainda ninguém começou a formação.", "Personne n’a encore commencé la formation."]
  };

  var L = 0, S = { lang: "pt", seen: {}, quiz: {}, last: null }, view = { page: "home", m: 0, l: 0 }, root = null, opts = {}, answers = [];
  var T = function (v) { return Array.isArray(v) ? (v[L] != null ? v[L] : v[0]) : v; };
  var u = function (k) { return T(UI[k]); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var M = function () { return (window.BCF && BCF.modules) || []; };
  function lsKey() { return "bc_formation_v2" + (opts.userKey ? ":" + opts.userKey : ""); }

  function lsLoad() { try { var r = localStorage.getItem(lsKey()); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
  function lsSave(d) { try { localStorage.setItem(lsKey(), JSON.stringify(d)); } catch (e) {} }
  var saveTimer = null;
  function save() {
    S.updatedAt = new Date().toISOString();
    lsSave(S);
    if (opts.store && opts.store.save) {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { opts.store.save(summary()).catch(function (e) { console.warn("Formation: sauvegarde distante impossible", e); }); }, 600);
    }
  }
  function summary() {
    var done = M().filter(function (m) { return S.quiz[m.id] && S.quiz[m.id].passed; }).length;
    return { lang: S.lang, seen: S.seen, quiz: S.quiz, last: S.last, updatedAt: S.updatedAt, done: done, total: M().length };
  }

  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function status(m) {
    if (S.quiz[m.id] && S.quiz[m.id].passed) return "done";
    for (var k in S.seen) if (k.indexOf(m.id + ":") === 0) return "part";
    return "todo";
  }

  /* ---------- header ---------- */
  function header() {
    return '<div class="fm-top"><div class="fm-tabs">' +
      '<button class="fm-tab" data-go="home" aria-current="' + (view.page !== "memo") + '">' + u("parcours") + '</button>' +
      '<button class="fm-tab" data-go="memo" aria-current="' + (view.page === "memo") + '">' + u("memo") + '</button></div>' +
      '<span class="fm-spacer"></span>' +
      '<div class="fm-lang" role="group" aria-label="Língua / Langue"><button data-l="pt" aria-pressed="' + (L === 0) + '">PT</button><button data-l="fr" aria-pressed="' + (L === 1) + '">FR</button></div></div>';
  }

  /* ---------- home ---------- */
  function renderHome() {
    var mods = M(), done = mods.filter(function (m) { return status(m) === "done"; }).length;
    var pct = mods.length ? Math.round(done / mods.length * 100) : 0;
    var nextIdx = mods.findIndex(function (m) { return status(m) !== "done"; });
    var resumeLabel = done === 0 && !Object.keys(S.seen).length ? u("start") : (nextIdx === -1 ? u("allDone") : u("resume"));
    var html = header() +
      '<section class="fm-hero"><div><div class="fm-eyebrow">' + u("eyebrow") + '</div><h1>' + u("heroA") + '<em>' + u("heroB") + '</em></h1><p>' + u("heroP") + '</p></div>' +
      '<div class="fm-hero-side"><div class="fm-progress"><div class="fm-ring" style="--p:' + pct + '"><span>' + pct + '%</span></div><div><b>' + done + ' / ' + mods.length + '</b><small>' + u("validated") + '</small></div></div>' +
      '<button class="fm-resume" id="fm-resume">' + resumeLabel + '</button></div></section>' +
      '<div class="fm-method"><div><b>' + u("m1") + '</b><span>' + u("m1s") + '</span></div><div><b>' + u("m2") + '</b><span>' + u("m2s") + '</span></div><div><b>' + u("m3") + '</b><span>' + u("m3s") + '</span></div><div><b>' + u("m4") + '</b><span>' + u("m4s") + '</span></div></div>' +
      '<div id="fm-admin-slot"></div>';
    var n = 0;
    (BCF.phases || []).forEach(function (ph, pi) {
      var list = mods.map(function (m, i) { return { m: m, i: i }; }).filter(function (x) { return x.m.phase === ph.id; });
      if (!list.length) return;
      html += '<section class="fm-phase"><div class="fm-phase-h"><span class="fm-step">' + u("step") + ' ' + (pi + 1) + '</span><h2>' + T(ph.t) + '</h2><span>' + T(ph.d) + '</span></div><div class="fm-grid">' +
        list.map(function (x) {
          n++; var st = status(x.m);
          return '<button class="fm-card" style="--c:' + x.m.c + '" data-m="' + x.i + '"><span class="fm-num">' + (x.i + 1) + '</span><h3>' + T(x.m.title) + '</h3><p>' + T(x.m.desc) + '</p>' +
            '<span class="fm-meta">' + x.m.min + ' ' + u("min") + ' · ' + x.m.lessons.length + ' ' + u("lessons") + '<span class="fm-spacer"></span><span class="fm-pill ' + st + '">' + u(st) + '</span></span></button>';
        }).join("") + '</div></section>';
    });
    root.innerHTML = html;
    root.querySelectorAll(".fm-card").forEach(function (b) { b.onclick = function () { openMod(+b.dataset.m, 0); }; });
    root.querySelector("#fm-resume").onclick = function () {
      if (nextIdx === -1) { openMod(0, 0); return; }
      if (S.last && S.last.m === mods[nextIdx].id) { openMod(nextIdx, S.last.l || 0); } else openMod(nextIdx, 0);
    };
    if (opts.onHome) opts.onHome(root.querySelector("#fm-admin-slot"));
  }

  /* ---------- blocks ---------- */
  function shot(sh) {
    var src = opts.imgSrc ? opts.imgSrc(sh.f) : (opts.imgBase || "formation/img/") + sh.f;
    return '<figure class="fm-shot"><button type="button" class="fm-zoom" title="' + esc(u("zoom")) + '"><img loading="lazy" src="' + esc(src) + '" alt="' + esc(T(sh.cap)) + '" data-f="' + esc(sh.f) + '"></button><figcaption>' + T(sh.cap) + '</figcaption></figure>';
  }
  function block(b) {
    if (b.lead) return '<p class="fm-lead">' + T(b.lead) + '</p>';
    if (b.p) return '<p>' + T(b.p) + '</p>';
    if (b.list) return '<ul class="fm-list">' + b.list.map(function (x) { return '<li>' + T(x) + '</li>'; }).join("") + '</ul>';
    if (b.cards) return '<div class="fm-cards">' + b.cards.map(function (c) { return '<div class="fm-c"' + (c.cc ? ' style="--cc:' + c.cc + '"' : "") + '><div class="fm-ic">' + c.i + '</div><h4>' + T(c.t) + '</h4><p>' + T(c.p) + '</p></div>'; }).join("") + '</div>';
    if (b.steps) return '<div class="fm-steps">' + b.steps.map(function (s, i) { return '<div class="fm-st"><div class="fm-n">' + (i + 1) + '</div><div><h4>' + T(s.t) + '</h4><p>' + T(s.p) + '</p></div></div>'; }).join("") + '</div>';
    if (b.tip) return '<div class="fm-call tip"><span class="fm-ci">' + u("tip") + '</span><div>' + T(b.tip) + '</div></div>';
    if (b.warn) return '<div class="fm-call warn"><span class="fm-ci">' + u("warn") + '</span><div>' + T(b.warn) + '</div></div>';
    if (b.key) return '<div class="fm-call key"><span class="fm-ci">' + u("key") + '</span><div>' + T(b.key) + '</div></div>';
    if (b.compare) return '<div class="fm-compare">' + b.compare.map(function (c) { return '<div class="' + c.cls + '"><h4>' + T(c.h) + ' <span class="fm-pill">' + T(c.tag) + '</span></h4><ul>' + c.items.map(function (x) { return '<li>' + T(x) + '</li>'; }).join("") + '</ul></div>'; }).join("") + '</div>';
    if (b.table) return '<div class="fm-tw"><table><thead><tr>' + b.table.h.map(function (h) { return '<th>' + T(h) + '</th>'; }).join("") + '</tr></thead><tbody>' + b.table.r.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + T(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div>';
    if (b.script) return '<div class="fm-script">' + b.script.map(function (s, i) { return '<div class="fm-line"><span class="fm-av">' + (i + 1) + '</span><div class="fm-bub"><i>' + T(s.s) + '</i><br><span class="fm-tag">' + T(s.tag) + '</span></div></div>'; }).join("") + '</div>';
    if (b.shot) return shot(b.shot);
    if (b.chips) return '<div class="fm-chips">' + b.chips.map(function (c) { return '<div class="fm-chiprow"><span class="fm-chip ' + c.c + '">' + T(c.k) + '</span><span>' + T(c.p) + '</span></div>'; }).join("") + '</div>';
    if (b.classifier) return '<div class="fm-widget" id="fm-clf"><h4>' + u("clfH") + '</h4><div class="fm-sub">' + u("clfS") + '</div><div class="fm-form">' +
      '<label for="fm-cTot">' + u("clfTot") + '<input id="fm-cTot" type="number" min="0" value="2"></label>' +
      '<label for="fm-cFirst">' + u("clfFirst") + '<input id="fm-cFirst" type="number" min="0" value="12"></label>' +
      '<label for="fm-cLast">' + u("clfLast") + '<input id="fm-cLast" type="number" min="0" value="5"></label></div><div class="fm-result" id="fm-cRes"></div></div>';
    if (b.errors) return '<div class="fm-widget"><h4>' + u("errH") + '</h4><input class="fm-search" id="fm-errQ" placeholder="' + esc(u("errPh")) + '" aria-label="' + esc(u("errH")) + '"><div class="fm-tw"><table><thead><tr><th>Code</th><th>' + u("what") + '</th></tr></thead><tbody id="fm-errB"></tbody></table></div></div>';
    return "";
  }
  function classify(tot, first, last) {
    var R = [
      [["Prospect", "Nenhuma consulta paga."], ["Prospect", "Aucune consultation payée."]],
      [["Inativo", "Última consulta há mais de 3 meses."], ["Inactif", "Dernière consultation il y a plus de 3 mois."]],
      [["Novo", "Menos de 3 consultas, a 1.ª há menos de 30 dias."], ["Nouveau", "Moins de 3 consultations, la 1re il y a moins de 30 jours."]],
      [["Regular", "Mais de 3 consultas e pelo menos 1 nos últimos 30 dias."], ["Régulier", "Plus de 3 consultations et au moins 1 ces 30 derniers jours."]],
      [["Ocasional", "Pelo menos 1 consulta nos últimos 3 meses, mas pouco frequente."], ["Occasionnel", "Au moins 1 consultation ces 3 derniers mois, mais peu fréquent."]]
    ];
    var k = tot <= 0 ? 0 : last > 90 ? 1 : (tot < 3 && first < 30) ? 2 : (tot > 3 && last <= 30) ? 3 : 4;
    return R[k][L];
  }
  function wire() {
    var clf = root.querySelector("#fm-clf");
    if (clf) {
      var run = function () { var r = classify(+root.querySelector("#fm-cTot").value || 0, +root.querySelector("#fm-cFirst").value || 0, +root.querySelector("#fm-cLast").value || 0); root.querySelector("#fm-cRes").innerHTML = "<b>" + r[0] + "</b> — " + r[1]; };
      clf.querySelectorAll("input").forEach(function (i) { i.oninput = run; }); run();
    }
    var q = root.querySelector("#fm-errQ");
    if (q) {
      var runE = function () {
        var s = q.value.trim().toLowerCase();
        root.querySelector("#fm-errB").innerHTML = (BCF.errors || []).filter(function (e) { return !s || e[0].indexOf(s) > -1 || T(e[1]).toLowerCase().indexOf(s) > -1; })
          .map(function (e) { return '<tr><td><span class="fm-mono">' + e[0] + '</span></td><td>' + T(e[1]) + '</td></tr>'; }).join("") || '<tr><td colspan="2">—</td></tr>';
      };
      q.oninput = runE; runE();
    }
    root.querySelectorAll(".fm-shot img").forEach(function (img) {
      img.addEventListener("error", function () {
        var ph = document.createElement("div"); ph.className = "fm-ph";
        ph.innerHTML = '<i style="width:60%"></i><i></i><i style="width:40%"></i><small>' + esc(u("shotTodo")) + ' · img/' + esc(img.dataset.f) + '</small>';
        img.parentNode.replaceWith(ph);
      });
    });
    root.querySelectorAll(".fm-zoom").forEach(function (bt) {
      bt.onclick = function () {
        var lb = document.createElement("div"); lb.className = "fm-lb"; lb.setAttribute("role", "dialog");
        lb.innerHTML = '<img src="' + bt.querySelector("img").src + '" alt="">';
        lb.onclick = function () { lb.remove(); };
        document.addEventListener("keydown", function k(e) { if (e.key === "Escape") { lb.remove(); document.removeEventListener("keydown", k); } });
        document.body.appendChild(lb);
      };
    });
  }

  /* ---------- module ---------- */
  function openMod(m, l) { view = { page: "mod", m: m, l: l }; render(); try { root.scrollIntoView({ block: "start" }); } catch (e) {} }
  function renderMod() {
    var m = M()[view.m], isQuiz = view.l === m.lessons.length;
    if (!isQuiz) { S.seen[m.id + ":" + view.l] = 1; S.last = { m: m.id, l: view.l }; save(); }
    var passed = S.quiz[m.id] && S.quiz[m.id].passed;
    var rail = '<aside class="fm-rail"><button class="fm-back" id="fm-back">' + u("back") + '</button>' +
      '<div class="fm-mtitle"><span class="fm-num">' + (view.m + 1) + '</span><h3>' + T(m.title) + '</h3></div><div class="fm-lessons">' +
      m.lessons.map(function (ls, i) { var sn = S.seen[m.id + ":" + i]; return '<button class="fm-lbtn ' + (sn ? "seen" : "") + '" data-l="' + i + '" aria-current="' + (i === view.l) + '"><span class="fm-dot">' + (sn ? "✓" : "") + '</span>' + T(ls.t) + '</button>'; }).join("") +
      '<button class="fm-lbtn quiz ' + (passed ? "seen" : "") + '" data-l="' + m.lessons.length + '" aria-current="' + isQuiz + '"><span class="fm-dot">' + (passed ? "✓" : "?") + '</span>' + u("quiz") + '</button></div></aside>';
    var body;
    if (!isQuiz) {
      var ls = m.lessons[view.l], last = view.l === m.lessons.length - 1;
      body = '<div class="fm-kicker">' + u("lesson") + ' ' + (view.l + 1) + ' / ' + m.lessons.length + '</div><h2>' + T(ls.t) + '</h2>' +
        '<div class="fm-blocks">' + ls.b.map(block).join("") + '</div>' +
        '<div class="fm-nav">' + (view.l > 0 ? '<button class="fm-btn ghost" id="fm-prev">' + u("prev") + '</button>' : '<span></span>') +
        '<button class="fm-btn ' + (last ? "gold" : "") + '" id="fm-next">' + (last ? u("toQuiz") : u("next")) + '</button></div>';
    } else {
      answers = m.quiz.map(function () { return null; });
      body = '<div class="fm-kicker">' + u("quiz") + '</div><h2>' + T(m.title) + '</h2><div class="fm-quiz">' +
        m.quiz.map(function (q, i) {
          return '<div class="fm-q" data-q="' + i + '"><h4><span>' + (i + 1) + '.</span>' + T(q.q) + '</h4><div class="fm-opts">' +
            shuffle(q.o.map(function (o, j) { return j; })).map(function (j) { return '<button class="fm-opt" data-o="' + j + '">' + T(q.o[j]) + '</button>'; }).join("") + '</div><div class="fm-why" hidden></div></div>';
        }).join("") + '<div id="fm-scorebox"></div></div>';
    }
    root.innerHTML = header() + '<div class="fm-mod" style="--c:' + m.c + '">' + rail + '<section class="fm-content">' + body + '</section></div>';
    root.querySelector("#fm-back").onclick = function () { view.page = "home"; render(); };
    root.querySelectorAll(".fm-lbtn").forEach(function (b) { b.onclick = function () { openMod(view.m, +b.dataset.l); }; });
    if (!isQuiz) {
      root.querySelector("#fm-next").onclick = function () { openMod(view.m, view.l + 1); };
      var p = root.querySelector("#fm-prev"); if (p) p.onclick = function () { openMod(view.m, view.l - 1); };
      wire();
    } else wireQuiz(m);
  }
  function wireQuiz(m) {
    root.querySelectorAll(".fm-q").forEach(function (qe) {
      var i = +qe.dataset.q, q = m.quiz[i];
      qe.querySelectorAll(".fm-opt").forEach(function (ob) {
        ob.onclick = function () {
          var j = +ob.dataset.o; answers[i] = j === q.a;
          qe.querySelectorAll(".fm-opt").forEach(function (x) { x.disabled = true; if (+x.dataset.o === q.a) x.classList.add("right"); });
          if (j !== q.a) ob.classList.add("wrong");
          var w = qe.querySelector(".fm-why"); w.hidden = false; w.innerHTML = "<b>" + (j === q.a ? u("right") : u("wrong")) + "</b> " + T(q.w);
          if (answers.every(function (a) { return a !== null; })) score(m);
        };
      });
    });
  }
  function score(m) {
    var ok = answers.filter(Boolean).length, n = answers.length, passed = ok / n >= 2 / 3;
    var prev = S.quiz[m.id] || {};
    S.quiz[m.id] = { best: Math.max(prev.best || 0, ok), of: n, passed: !!(prev.passed || passed), at: new Date().toISOString() };
    save();
    var hasNext = view.m < M().length - 1;
    root.querySelector("#fm-scorebox").innerHTML = '<div class="fm-score"><b>' + ok + '/' + n + '</b><div><div>' + u("score") + '</div><div>' + (passed ? u("passed") : u("retry")) + '</div></div></div>' +
      '<div class="fm-nav">' + (passed
        ? '<button class="fm-btn ghost" id="fm-home2">' + u("home") + '</button>' + (hasNext ? '<button class="fm-btn gold" id="fm-nextmod">' + u("nextMod") + '</button>' : "")
        : '<button class="fm-btn ghost" id="fm-reread">' + u("reread") + '</button><button class="fm-btn" id="fm-again">' + u("again") + '</button>') + '</div>';
    var g = function (id) { return root.querySelector("#" + id); };
    if (g("fm-home2")) g("fm-home2").onclick = function () { view.page = "home"; render(); };
    if (g("fm-nextmod")) g("fm-nextmod").onclick = function () { openMod(view.m + 1, 0); };
    if (g("fm-again")) g("fm-again").onclick = function () { openMod(view.m, M()[view.m].lessons.length); };
    if (g("fm-reread")) g("fm-reread").onclick = function () { openMod(view.m, 0); };
    var qb = root.querySelector(".fm-lbtn.quiz");
    if (S.quiz[m.id].passed && qb) { qb.classList.add("seen"); qb.querySelector(".fm-dot").textContent = "✓"; }
  }

  /* ---------- memo ---------- */
  function renderMemo() {
    var html = header() + '<section class="fm-hero" style="grid-template-columns:1fr"><div><div class="fm-eyebrow">' + u("memo") + '</div><h1>' + u("memoH") + '</h1><p>' + u("memoP") + '</p></div></section>' +
      '<div class="fm-flash">' + (BCF.memo || []).map(function (c) {
        return '<button class="fm-fc" style="--fcol:' + c.c + '"><div class="fm-in"><div class="fm-face fm-front"><b>' + c.n + '</b><span>' + T(c.q) + '</span></div><div class="fm-face fm-back">' + T(c.a) + '</div></div></button>';
      }).join("") + '</div>' +
      '<h2 class="fm-section-h">' + u("errH") + '</h2><div style="--c:#B5493A;margin-bottom:28px">' + block({ errors: 1 }) + '</div>' +
      '<h2 class="fm-section-h">' + u("contacts") + '</h2><div class="fm-contacts">' + (BCF.contacts || []).map(function (p) {
        return '<div class="fm-contact"><h4>' + T(p.pays) + '</h4>' + p.rows.map(function (r) {
          return '<div><b>' + T(r[0]) + '</b><span class="fm-mono">' + esc(r[1]) + '</span>' + (r[2] ? ' · <span class="fm-mono">' + esc(r[2]) + '</span>' : "") + '</div>';
        }).join("") + '</div>';
      }).join("") + '</div>' + (BCF.adresse ? '<div class="fm-call key" style="max-width:780px"><span class="fm-ci">' + u("key") + '</span><div>' + T(BCF.adresse) + '</div></div>' : "");
    root.innerHTML = html;
    root.querySelectorAll(".fm-fc").forEach(function (f) { f.onclick = function () { f.classList.toggle("flip"); }; });
    wire();
  }

  /* ---------- router ---------- */
  function render() {
    if (!root) return;
    if (view.page === "home") renderHome(); else if (view.page === "memo") renderMemo(); else renderMod();
    root.querySelectorAll("[data-go]").forEach(function (b) { b.onclick = function () { view.page = b.dataset.go; render(); }; });
    root.querySelectorAll(".fm-lang button").forEach(function (b) { b.onclick = function () { L = b.dataset.l === "fr" ? 1 : 0; S.lang = b.dataset.l; save(); render(); }; });
  }

  function merge(a, b) {
    if (!b) return a;
    var out = { lang: b.lang || a.lang, seen: Object.assign({}, a.seen, b.seen), quiz: Object.assign({}, a.quiz), last: b.last || a.last };
    Object.keys(b.quiz || {}).forEach(function (k) {
      var x = a.quiz[k] || {}, y = b.quiz[k] || {};
      out.quiz[k] = { best: Math.max(x.best || 0, y.best || 0), of: y.of || x.of, passed: !!(x.passed || y.passed), at: y.at || x.at };
    });
    return out;
  }

  window.BCFormation = {
    mount: function (el, o) {
      root = el; opts = o || {}; root.classList.add("fm");
      view = { page: "home", m: 0, l: 0 };
      S = merge({ lang: "pt", seen: {}, quiz: {}, last: null }, lsLoad()); L = S.lang === "fr" ? 1 : 0;
      render();
      if (opts.store && opts.store.load) {
        opts.store.load().then(function (remote) {
          if (remote) { S = merge(S, remote); L = S.lang === "fr" ? 1 : 0; lsSave(S); if (view.page === "home") render(); }
        }).catch(function (e) { console.warn("Formation: lecture distante impossible", e); });
      }
    },
    show: function () { if (root && view.page !== "mod") render(); },
    lang: function () { return L; },
    renderAdmin: function (slot, rows) {
      if (!slot) return;
      if (!rows || !rows.length) { slot.innerHTML = '<section class="fm-admin"><div class="fm-phase-h"><h2>' + u("adminH") + '</h2><span>' + u("none") + '</span></div></section>'; return; }
      var total = M().length;
      slot.innerHTML = '<section class="fm-admin"><div class="fm-phase-h"><h2>' + u("adminH") + '</h2><span>' + u("adminP") + '</span></div><div class="fm-tw"><table><thead><tr><th>' + u("who") + '</th><th>' + u("mods") + '</th><th>' + u("prog") + '</th><th>' + u("last") + '</th></tr></thead><tbody>' +
        rows.map(function (r) {
          var d = r.done || 0, pct = Math.round(d / total * 100);
          return '<tr><td>' + esc(r.nom) + '</td><td>' + d + ' / ' + total + '</td><td><div class="fm-bar" title="' + pct + '%"><i style="width:' + pct + '%"></i></div></td><td>' + (r.updatedAt ? esc(new Date(r.updatedAt).toLocaleString(L ? "fr-FR" : "pt-PT")) : "—") + '</td></tr>';
        }).join("") + '</tbody></table></div></section>';
    }
  };
})();
