/* ==========================================================
   BestCall Academy — moteur de l'onglet
   BCAcademy.mount(root, { userKey, isManager, store })
   store = { list(): Promise<[{id,...}]>, add(obj): Promise, remove(id): Promise }
   ========================================================== */
(function () {
  "use strict";
  var BCA = window.BCA || {};
  var root = null, opts = {}, L = 0, extras = [], view = { page: "home" }, fc = null;

  var UI = {
    eyebrow: ["Academia em autonomia", "Academy en autonomie"],
    title: ["BestCall <em>Academy</em>", "BestCall <em>Academy</em>"],
    sub: ["Um vídeo curto por tema, filmado pela Marta no Bobi, com o resumo, as regras a não esquecer e um mini-quiz. Quando o Bobi muda, só muda o vídeo desse tema.",
          "Une vidéo courte par thème, filmée par Marta dans Bobi, avec le résumé, les règles à ne pas oublier et un mini-quiz. Quand Bobi change, seule la vidéo du thème change."],
    seen: ["temas vistos", "thèmes vus"],
    flashTitle: ["Flashcards Suporte Wengo", "Flashcards Support Wengo"],
    flashSub: ["75 cartões para testar a memória: lê a pergunta, responde de cabeça, vira o cartão.", "75 cartes pour tester ta mémoire : lis la question, réponds de tête, retourne la carte."],
    flashGo: ["Treinar", "S'entraîner"],
    soon: ["Em breve", "Bientôt"],
    newContent: ["Novos conteúdos", "Nouveaux contenus"],
    back: ["Todos os temas", "Tous les thèmes"],
    video: ["Vídeo", "Vidéo"],
    openDrive: ["Abrir no Drive", "Ouvrir dans Drive"],
    notes: ["Resumo e transcrição completa (Gemini)", "Résumé et transcription complète (Gemini)"],
    videoHelp: ["O vídeo não aparece? Entra com a tua conta Google da BestCall/Wengo ou pede o acesso à Marta.", "La vidéo ne s'affiche pas ? Connecte-toi avec ton compte Google BestCall/Wengo ou demande l'accès à Marta."],
    steps: ["Passo a passo", "Pas à pas"],
    keys: ["O essencial", "L'essentiel"],
    warn: ["Atenção", "Attention"],
    links: ["Recursos", "Ressources"],
    quiz: ["Mini-quiz", "Mini-quiz"],
    check: ["Verificar", "Vérifier"],
    good: ["Certo!", "Correct !"],
    bad: ["Ainda não — a resposta certa está a verde.", "Pas encore — la bonne réponse est en vert."],
    score: ["Resultado", "Résultat"],
    retry: ["Recomeçar", "Recommencer"],
    markSeen: ["Marcar como visto", "Marquer comme vu"],
    seenOk: ["Visto ✓", "Vu ✓"],
    all: ["Todos", "Toutes"],
    shuffle: ["Baralhar", "Mélanger"],
    show: ["Ver a resposta", "Voir la réponse"],
    hide: ["Voltar à pergunta", "Revenir à la question"],
    know: ["Sabia", "Je savais"],
    dont: ["Não sabia", "Je ne savais pas"],
    done: ["Fim da série!", "Fin de la série !"],
    doneSub: ["Sabias {k} de {n}. Repete só os que falhaste: é assim que se memoriza.", "Tu savais {k} sur {n}. Refais seulement celles ratées : c'est comme ça qu'on mémorise."],
    redoMiss: ["Repetir os que falhei", "Refaire celles ratées"],
    restart: ["Recomeçar tudo", "Tout recommencer"],
    keyHelp: ["Teclado: espaço = virar · → sabia · ← não sabia", "Clavier : espace = retourner · → je savais · ← je ne savais pas"],
    addRes: ["Adicionar um recurso", "Ajouter une ressource"],
    addHelp: ["Cola o link de um vídeo do Drive, de um Notebook, de um Gem ou de um documento. Aparece logo para todas as conselheiras.", "Colle le lien d'une vidéo Drive, d'un Notebook, d'un Gem ou d'un document. Il apparaît tout de suite pour toutes les conseillères."],
    fTheme: ["Tema", "Thème"],
    fNewTheme: ["+ Novo tema", "+ Nouveau thème"],
    fNewName: ["Nome do novo tema", "Nom du nouveau thème"],
    fTitle: ["Título", "Titre"],
    fUrl: ["Link (Drive, NotebookLM, Gemini, Docs…)", "Lien (Drive, NotebookLM, Gemini, Docs…)"],
    fNote: ["Descrição curta (opcional)", "Description courte (optionnelle)"],
    fSave: ["Adicionar", "Ajouter"],
    fCancel: ["Cancelar", "Annuler"],
    remove: ["Retirar", "Retirer"],
    removeQ: ["Retirar este recurso da Academy?", "Retirer cette ressource de l'Academy ?"],
    errUrl: ["Link inválido.", "Lien invalide."],
    errTitle: ["Falta o título.", "Il manque le titre."],
    errSave: ["Não foi possível guardar (regras Firestore?).", "Enregistrement impossible (règles Firestore ?)."],
    extraVideo: ["Vídeo adicionado pela Marta", "Vidéo ajoutée par Marta"],
    open: ["Abrir", "Ouvrir"],
    min: ["min", "min"]
  };
  function u(k) { return UI[k][L]; }
  function T(x) { return Array.isArray(x) ? (x[L] || x[0]) : (x || ""); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function E(x) { return esc(T(x)); }

  // ---------- local progress ----------
  function lsKey() { return "bc_academy_" + (opts.userKey || "anon"); }
  function getSeen() { try { return JSON.parse(localStorage.getItem(lsKey())) || {}; } catch (e) { return {}; } }
  function setSeen(id, v) { var s = getSeen(); if (v) s[id] = Date.now(); else delete s[id]; try { localStorage.setItem(lsKey(), JSON.stringify(s)); } catch (e) {} }

  // ---------- drive helpers ----------
  function driveId(url) {
    var m = String(url || "").match(/\/d\/([A-Za-z0-9_-]{10,})/) || String(url || "").match(/[?&]id=([A-Za-z0-9_-]{10,})/);
    return m ? m[1] : null;
  }
  function isDriveFile(url) { return /drive\.google\.com\/file\//.test(url || ""); }
  function videoBlock(id, title) {
    return '<div class="ac-video"><iframe src="https://drive.google.com/file/d/' + esc(id) + '/preview" title="' + esc(title) + '" allow="autoplay; fullscreen" loading="lazy"></iframe></div>' +
      '<div class="ac-video-foot"><span>' + u("videoHelp") + '</span><a href="https://drive.google.com/file/d/' + esc(id) + '/view" target="_blank" rel="noopener">' + u("openDrive") + ' ↗</a></div>';
  }

  // ---------- themes (built-in + added) ----------
  function allThemes() {
    var list = (BCA.temas || []).slice();
    var extraThemes = {};
    extras.forEach(function (x) {
      if (!x.tema || list.some(function (t) { return t.id === x.tema; })) return;
      if (!extraThemes[x.tema]) extraThemes[x.tema] = { id: x.tema, fam: "novos", custom: true, t: [x.temaTitulo || x.tema, x.temaTitulo || x.tema] };
    });
    Object.keys(extraThemes).forEach(function (k) { list.push(extraThemes[k]); });
    return list;
  }
  function extrasFor(id) { return extras.filter(function (x) { return x.tema === id; }); }
  function themeById(id) { return allThemes().find(function (t) { return t.id === id; }); }

  // ---------- render ----------
  function render() {
    if (!root) return;
    if (view.page === "tema") renderTema(view.id);
    else if (view.page === "flash") renderFlash();
    else renderHome();
    wire();
  }

  function top() {
    return '<div class="ac-top">' + (view.page !== "home" ? '<button type="button" class="ac-back" data-go="home">← ' + u("back") + '</button>' : '') + '</div>';
  }

  function renderHome() {
    var themes = allThemes(), seen = getSeen();
    var nSeen = themes.filter(function (t) { return seen[t.id]; }).length;
    var pct = themes.length ? Math.round(nSeen * 100 / themes.length) : 0;
    var h = '<div class="fm-hero ac-hero"><div><div class="fm-eyebrow">' + u("eyebrow") + '</div><h1>' + u("title") + '</h1><p>' + u("sub") + '</p></div>' +
      '<div class="fm-hero-side"><div class="fm-progress"><div class="fm-ring" style="--p:' + pct + '"><span>' + pct + '%</span></div><div><b>' + nSeen + ' / ' + themes.length + '</b><small>' + u("seen") + '</small></div></div></div></div>';

    if (opts.isManager) h += '<div class="ac-admin"><button type="button" class="fm-btn" data-act="add">+ ' + u("addRes") + '</button><span>' + u("addHelp") + '</span></div><div id="ac-form-slot"></div>';

    h += '<button type="button" class="ac-flash-cta" data-go="flash"><span class="ac-flash-ico">🃏</span><span><b>' + u("flashTitle") + '</b><small>' + u("flashSub") + '</small></span><span class="ac-go">' + u("flashGo") + ' →</span></button>';

    var fams = (BCA.familias || []).slice();
    if (themes.some(function (t) { return t.fam === "novos"; })) fams.push({ id: "novos", ico: "🆕", t: UI.newContent });
    fams.forEach(function (f) {
      var ts = themes.filter(function (t) { return t.fam === f.id; });
      if (!ts.length) return;
      h += '<h2 class="ac-fam"><span>' + f.ico + '</span>' + E(f.t) + '</h2><div class="ac-grid">';
      ts.forEach(function (t) {
        var nx = extrasFor(t.id).length;
        h += '<button type="button" class="ac-card' + (seen[t.id] ? ' is-seen' : '') + '" data-tema="' + esc(t.id) + '">' +
          '<span class="ac-card-play">▶</span>' +
          '<b>' + E(t.t) + '</b>' +
          (t.intro ? '<small>' + E(t.intro) + '</small>' : '') +
          '<span class="ac-card-meta">' + (t.dur ? '<span>⏱ ' + esc(t.dur) + '</span>' : '') + (nx ? '<span>+' + nx + '</span>' : '') + (seen[t.id] ? '<span class="ac-ok">' + u("seenOk") + '</span>' : '') + '</span></button>';
      });
      h += '</div>';
    });
    if ((BCA.embreve || []).length) {
      h += '<h2 class="ac-fam"><span>🎬</span>' + u("soon") + '</h2><div class="ac-soon">' + BCA.embreve.map(function (s) { return '<span>' + E(s) + '</span>'; }).join("") + '</div>';
    }
    root.innerHTML = '<div class="ac-wrap">' + h + '</div>';
  }

  function list(arr, cls, tag) {
    return '<' + (tag || "ul") + ' class="' + cls + '">' + arr.map(function (x) { return '<li>' + E(x) + '</li>'; }).join("") + '</' + (tag || "ul") + '>';
  }

  function renderTema(id) {
    var t = themeById(id);
    if (!t) { view = { page: "home" }; return renderHome(); }
    var seen = getSeen();
    var h = top() + '<div class="ac-head"><div class="fm-eyebrow">' + E(((BCA.familias || []).find(function (f) { return f.id === t.fam; }) || { t: UI.newContent }).t) + '</div>' +
      '<h1>' + E(t.t) + '</h1>' + (t.intro ? '<p>' + E(t.intro) + '</p>' : '') +
      '<div class="ac-head-meta">' + (t.dur ? '<span>⏱ ' + esc(t.dur) + '</span>' : '') + (t.data ? '<span>📅 ' + esc(t.data) + '</span>' : '') +
      '<button type="button" class="fm-btn ' + (seen[id] ? 'ghost' : '') + '" data-act="seen">' + (seen[id] ? u("seenOk") : u("markSeen")) + '</button></div></div>';

    if (t.video) {
      h += videoBlock(t.video, T(t.t));
      if (t.notas) h += '<a class="ac-notes" href="https://docs.google.com/document/d/' + esc(t.notas) + '/edit" target="_blank" rel="noopener">📝 ' + u("notes") + ' ↗</a>';
    }

    // extra videos / links added from the app
    var xs = extrasFor(id);
    xs.filter(function (x) { return isDriveFile(x.url) && driveId(x.url); }).forEach(function (x) {
      h += '<div class="ac-extra"><div class="ac-extra-head"><b>🎬 ' + esc(x.titulo) + '</b>' + (opts.isManager ? '<button type="button" class="ac-x" data-del="' + esc(x.id) + '">' + u("remove") + '</button>' : '') + '</div>' +
        (x.nota ? '<p>' + esc(x.nota) + '</p>' : '') + videoBlock(driveId(x.url), x.titulo) + '</div>';
    });

    h += '<div class="ac-cols"><div>';
    if (t.passos) h += '<section class="ac-box"><h3>' + u("steps") + '</h3>' + list(t.passos, "ac-steps", "ol") + '</section>';
    if (t.tabela) {
      h += '<section class="ac-box"><div class="ac-table-wrap"><table class="ac-table"><thead><tr>' + t.tabela.cab.map(function (c) { return '<th>' + E(c) + '</th>'; }).join("") + '</tr></thead><tbody>' +
        t.tabela.lin.map(function (r) { return '<tr>' + r.map(function (c, i) { return (i === 0 ? '<th scope="row">' : '<td>') + E(c) + (i === 0 ? '</th>' : '</td>'); }).join("") + '</tr>'; }).join("") + '</tbody></table></div></section>';
    }
    if (t.pontos) h += '<section class="ac-box"><h3>' + u("keys") + '</h3>' + list(t.pontos, "ac-points") + '</section>';
    h += '</div><div>';
    if (t.atencao) h += '<section class="ac-box ac-warn"><h3>⚠️ ' + u("warn") + '</h3>' + list(t.atencao, "ac-points") + '</section>';
    var links = (t.links || []).map(function (l) { return { t: T(l.t), url: l.url }; })
      .concat(xs.filter(function (x) { return !(isDriveFile(x.url) && driveId(x.url)); }).map(function (x) { return { t: x.titulo, url: x.url, note: x.nota, id: x.id }; }));
    if (links.length) {
      h += '<section class="ac-box"><h3>🔗 ' + u("links") + '</h3><ul class="ac-links">' + links.map(function (l) {
        return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.t) + ' ↗</a>' + (l.note ? '<small>' + esc(l.note) + '</small>' : '') +
          (opts.isManager && l.id ? ' <button type="button" class="ac-x" data-del="' + esc(l.id) + '">' + u("remove") + '</button>' : '') + '</li>';
      }).join("") + '</ul></section>';
    }
    h += '</div></div>';

    if (t.quiz && t.quiz.length) {
      h += '<section class="ac-box ac-quiz"><h3>🧠 ' + u("quiz") + '</h3>' + t.quiz.map(function (q, qi) {
        return '<div class="ac-q" data-q="' + qi + '"><p class="ac-q-t"><b>' + (qi + 1) + '.</b> ' + E(q.q) + '</p><div class="ac-opts">' +
          q.o.map(function (o, oi) { return '<button type="button" class="ac-opt" data-o="' + oi + '">' + E(o) + '</button>'; }).join("") + '</div><p class="ac-q-fb" hidden></p></div>';
      }).join("") + '<p class="ac-score" hidden></p></section>';
    }
    if (opts.isManager) h += '<div class="ac-admin"><button type="button" class="fm-btn" data-act="add" data-tema-pre="' + esc(id) + '">+ ' + u("addRes") + '</button></div><div id="ac-form-slot"></div>';
    root.innerHTML = '<div class="ac-wrap">' + h + '</div>';
  }

  // ---------- flashcards ----------
  function newDeck(cat, only) {
    var cards = (BCA.flash || []).map(function (c, i) { return i; }).filter(function (i) { return !cat || BCA.flash[i][0] === cat; });
    if (only) cards = only.slice();
    return { cat: cat || "", cards: cards, pos: 0, flip: false, know: [], miss: [] };
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function renderFlash() {
    if (!fc) fc = newDeck("");
    var cats = BCA.catFlash || {};
    var h = top() + '<div class="ac-head"><h1>🃏 ' + u("flashTitle") + '</h1><p>' + u("flashSub") + '</p></div>' +
      '<div class="ac-chips"><button type="button" class="ac-chip" aria-pressed="' + (!fc.cat) + '" data-cat="">' + u("all") + ' · ' + (BCA.flash || []).length + '</button>' +
      Object.keys(cats).map(function (k) {
        var n = (BCA.flash || []).filter(function (c) { return c[0] === k; }).length;
        return '<button type="button" class="ac-chip" aria-pressed="' + (fc.cat === k) + '" data-cat="' + k + '">' + E(cats[k]) + ' · ' + n + '</button>';
      }).join("") + '<button type="button" class="ac-chip ac-chip-act" data-act="shuffle">🔀 ' + u("shuffle") + '</button></div>';

    if (fc.pos >= fc.cards.length) {
      h += '<div class="ac-fc-done"><h2>🎉 ' + u("done") + '</h2><p>' + esc(u("doneSub").replace("{k}", fc.know.length).replace("{n}", fc.cards.length)) + '</p><div class="ac-row">' +
        (fc.miss.length ? '<button type="button" class="fm-btn" data-act="redo">' + u("redoMiss") + ' (' + fc.miss.length + ')</button>' : '') +
        '<button type="button" class="fm-btn ghost" data-act="restart">' + u("restart") + '</button></div></div>';
    } else {
      var c = BCA.flash[fc.cards[fc.pos]];
      h += '<div class="ac-fc-bar"><span>' + (fc.pos + 1) + ' / ' + fc.cards.length + '</span><div class="ac-fc-prog"><i style="width:' + Math.round(fc.pos * 100 / fc.cards.length) + '%"></i></div><span class="ac-fc-k">✓ ' + fc.know.length + '</span><span class="ac-fc-m">✗ ' + fc.miss.length + '</span></div>' +
        '<button type="button" class="ac-fc' + (fc.flip ? ' is-flip' : '') + '" data-act="flip" aria-label="' + (fc.flip ? u("hide") : u("show")) + '">' +
        '<span class="ac-fc-cat">' + E(cats[c[0]] || "") + '</span><span class="ac-fc-txt">' + E(fc.flip ? c[2] : c[1]) + '</span><span class="ac-fc-hint">' + (fc.flip ? u("hide") : u("show")) + '</span></button>' +
        '<div class="ac-row ac-fc-btns">' + (fc.flip ? '<button type="button" class="fm-btn ac-miss" data-act="miss">✗ ' + u("dont") + '</button><button type="button" class="fm-btn ac-know" data-act="know">✓ ' + u("know") + '</button>'
          : '<button type="button" class="fm-btn" data-act="flip">' + u("show") + '</button>') + '</div><p class="ac-keyhelp">' + u("keyHelp") + '</p>';
    }
    root.innerHTML = '<div class="ac-wrap">' + h + '</div>';
  }

  // ---------- admin form ----------
  function openForm(pre) {
    var slot = root.querySelector("#ac-form-slot"); if (!slot) return;
    var themes = allThemes();
    slot.innerHTML = '<form class="ac-form"><h3>' + u("addRes") + '</h3>' +
      '<label>' + u("fTheme") + '<select name="tema">' + themes.map(function (t) { return '<option value="' + esc(t.id) + '"' + (t.id === pre ? ' selected' : '') + '>' + E(t.t) + '</option>'; }).join("") +
      '<option value="__new">' + u("fNewTheme") + '</option></select></label>' +
      '<label class="ac-newname" hidden>' + u("fNewName") + '<input name="novo" maxlength="80"></label>' +
      '<label>' + u("fTitle") + '<input name="titulo" maxlength="120" required></label>' +
      '<label>' + u("fUrl") + '<input name="url" type="url" required placeholder="https://drive.google.com/file/d/…"></label>' +
      '<label>' + u("fNote") + '<input name="nota" maxlength="200"></label>' +
      '<p class="ac-err" hidden></p><div class="ac-row"><button type="submit" class="fm-btn">' + u("fSave") + '</button><button type="button" class="fm-btn ghost" data-act="cancel">' + u("fCancel") + '</button></div></form>';
    var f = slot.querySelector("form");
    f.tema.addEventListener("change", function () { f.querySelector(".ac-newname").hidden = f.tema.value !== "__new"; });
    f.querySelector('[data-act="cancel"]').addEventListener("click", function () { slot.innerHTML = ""; });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = f.querySelector(".ac-err"); err.hidden = true;
      var url = f.url.value.trim(), titulo = f.titulo.value.trim(), tema = f.tema.value, temaTitulo = "";
      if (!/^https:\/\//.test(url)) { err.textContent = u("errUrl"); err.hidden = false; return; }
      if (!titulo) { err.textContent = u("errTitle"); err.hidden = false; return; }
      if (tema === "__new") {
        temaTitulo = f.novo.value.trim(); if (!temaTitulo) { err.textContent = u("errTitle"); err.hidden = false; return; }
        tema = "x-" + temaTitulo.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
      } else {
        var ex = themeById(tema); if (ex && ex.custom) temaTitulo = T(ex.t);
      }
      var obj = { tema: tema, temaTitulo: temaTitulo, titulo: titulo, url: url, nota: f.nota.value.trim(), criadoEm: new Date().toISOString() };
      opts.store.add(obj).then(function () { slot.innerHTML = ""; return refresh(); })
        .catch(function () { err.textContent = u("errSave"); err.hidden = false; });
    });
  }

  function refresh() {
    if (!opts.store || !opts.store.list) return Promise.resolve();
    return opts.store.list().then(function (rows) { extras = rows || []; render(); }).catch(function () { extras = []; });
  }

  // ---------- events ----------
  function go(page, id) { view = { page: page, id: id }; render(); var top = root.getBoundingClientRect().top + window.scrollY - 10; if (window.scrollY > top) window.scrollTo(0, Math.max(0, top)); }

  function wire() {
    root.querySelectorAll("[data-go]").forEach(function (b) { b.addEventListener("click", function () { go(b.dataset.go); }); });
    root.querySelectorAll("[data-tema]").forEach(function (b) { b.addEventListener("click", function () { go("tema", b.dataset.tema); }); });
    root.querySelectorAll('[data-act="add"]').forEach(function (b) { b.addEventListener("click", function () { openForm(b.dataset.temaPre || ""); }); });
    root.querySelectorAll("[data-del]").forEach(function (b) {
      b.addEventListener("click", function () { if (confirm(u("removeQ"))) opts.store.remove(b.dataset.del).then(refresh); });
    });
    var s = root.querySelector('[data-act="seen"]');
    if (s) s.addEventListener("click", function () { setSeen(view.id, !getSeen()[view.id]); render(); });

    // quiz
    root.querySelectorAll(".ac-q").forEach(function (qe) {
      qe.querySelectorAll(".ac-opt").forEach(function (b) {
        b.addEventListener("click", function () {
          if (qe.dataset.done) return;
          var t = themeById(view.id), q = t.quiz[+qe.dataset.q], ok = +b.dataset.o === q.a;
          qe.dataset.done = ok ? "1" : "0";
          qe.querySelectorAll(".ac-opt").forEach(function (o) { o.disabled = true; if (+o.dataset.o === q.a) o.classList.add("is-good"); });
          if (!ok) b.classList.add("is-bad");
          var fb = qe.querySelector(".ac-q-fb"); fb.textContent = ok ? u("good") : u("bad"); fb.className = "ac-q-fb " + (ok ? "ok" : "ko"); fb.hidden = false;
          var all = root.querySelectorAll(".ac-q"), done = root.querySelectorAll(".ac-q[data-done]");
          if (all.length === done.length) {
            var n = root.querySelectorAll('.ac-q[data-done="1"]').length, sc = root.querySelector(".ac-score");
            sc.innerHTML = u("score") + ' : <b>' + n + ' / ' + all.length + '</b> <button type="button" class="fm-btn ghost" data-act="retry">' + u("retry") + '</button>';
            sc.hidden = false;
            sc.querySelector("button").addEventListener("click", function () { render(); });
            if (n === all.length) setSeen(view.id, true);
          }
        });
      });
    });

    // flashcards
    if (view.page === "flash") {
      root.querySelectorAll("[data-cat]").forEach(function (b) { b.addEventListener("click", function () { fc = newDeck(b.dataset.cat); render(); }); });
      root.querySelectorAll("[data-act]").forEach(function (b) {
        var a = b.dataset.act;
        b.addEventListener("click", function () {
          if (a === "flip") fc.flip = !fc.flip;
          else if (a === "know" || a === "miss") { (a === "know" ? fc.know : fc.miss).push(fc.cards[fc.pos]); fc.pos++; fc.flip = false; }
          else if (a === "shuffle") { fc = newDeck(fc.cat); shuffle(fc.cards); }
          else if (a === "redo") { fc = newDeck(fc.cat, fc.miss); shuffle(fc.cards); }
          else if (a === "restart") fc = newDeck(fc.cat);
          else return;
          render();
        });
      });
    }
  }

  function onKey(e) {
    if (!root || view.page !== "flash" || !root.offsetParent || !fc || fc.pos >= fc.cards.length) return;
    if (/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
    if (e.key === " ") { e.preventDefault(); fc.flip = !fc.flip; render(); }
    else if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && fc.flip) { e.preventDefault(); (e.key === "ArrowRight" ? fc.know : fc.miss).push(fc.cards[fc.pos]); fc.pos++; fc.flip = false; render(); }
  }

  function syncLang() { var l = window.BCI18N ? BCI18N.lang : "pt"; L = l === "fr" ? 1 : 0; }

  window.BCAcademy = {
    mount: function (el, o) {
      root = el; opts = o || {}; root.classList.add("fm", "ac");
      syncLang(); render(); refresh();
      window.addEventListener("bc-lang", function () { syncLang(); render(); });
      document.addEventListener("keydown", onKey);
    },
    _driveId: driveId
  };
})();
