/* ==========================================================
   BestCall Academia — moteur de l'onglet
   BCAcademy.mount(root, {
     userKey, firstName, isManager,
     store:    { list(), add(obj), remove(id) }      // ressources ajoutées par Marta (collection "academy")
     progress: { load(), save(data) }                // progression perso (collection "academyProgress/{uid}")
     emails:   function () -> [emails]               // (admin) e-mails des conseillers pour partager le Drive
   })
   ========================================================== */
(function () {
  "use strict";
  var BCA = window.BCA || {};
  var root = null, opts = {}, L = 0, extras = [], view = { page: "home" }, fc = null, tabSel = "resumo";
  var P = blank();

  function blank() { return { seen: {}, quiz: {}, flash: { reviewed: 0, known: 0, sessions: 0 }, daily: {}, days: {}, xp: 0, badges: {}, last: null }; }

  var UI = {
    hello: ["Olá", "Bonjour"],
    tagline: ["Aprende ao teu ritmo: episódios curtos, desafios e cartões de memória.", "Apprends à ton rythme : épisodes courts, défis et cartes mémoire."],
    level: ["Nível", "Niveau"], xp: ["XP", "XP"], toNext: ["para o próximo nível", "avant le niveau suivant"], max: ["Nível máximo!", "Niveau max !"],
    streak: ["dias seguidos", "jours d'affilée"], streak1: ["dia seguido", "jour d'affilée"],
    cont: ["Continuar", "Continuer"], contStart: ["Começar", "Commencer"], contSub: ["Retoma onde paraste", "Reprends là où tu t'es arrêtée"],
    daily: ["Desafio do dia", "Défi du jour"], dailySub: ["5 cartões · +25 XP", "5 cartes · +25 XP"], dailyDone: ["Feito hoje ✓ — volta amanhã", "Fait aujourd'hui ✓ — reviens demain"],
    flash: ["Flashcards", "Flashcards"], flashSub: ["75 cartões Suporte Wengo", "75 cartes Support Wengo"],
    tracks: ["Trilhas", "Parcours"], ep: ["EP", "ÉP"], episodes: ["episódios", "épisodes"],
    badgesH: ["Os teus selos", "Tes badges"], soon: ["Próximos episódios", "Prochains épisodes"], newContent: ["Novos conteúdos", "Nouveaux contenus"],
    back: ["← Academia", "← Academia"],
    tResumo: ["Resumo", "Résumé"], tPassos: ["Passo a passo", "Pas à pas"], tAtencao: ["Atenção", "Attention"], tQuiz: ["Quiz", "Quiz"], tRec: ["Recursos", "Ressources"],
    openDrive: ["Abrir no Drive", "Ouvrir dans Drive"], notes: ["Resumo e transcrição completa (Gemini)", "Résumé et transcription complète (Gemini)"],
    videoHelp: ["Vídeo em branco? Abre-o com a tua conta Google @ext.wengo.com (a mesma do Gemini).", "Vidéo vide ? Ouvre-la avec ton compte Google @ext.wengo.com (le même que pour Gemini)."],
    keys: ["O essencial", "L'essentiel"], markSeen: ["Marcar como visto · +20 XP", "Marquer comme vu · +20 XP"], seenOk: ["Visto ✓", "Vu ✓"],
    playlist: ["Nesta trilha", "Dans ce parcours"],
    good: ["Certo!", "Correct !"], bad: ["Ainda não — a resposta certa está a verde.", "Pas encore — la bonne réponse est en vert."],
    score: ["Resultado", "Résultat"], retry: ["Recomeçar", "Recommencer"],
    all: ["Todos", "Toutes"], shuffle: ["Baralhar", "Mélanger"], show: ["Ver a resposta", "Voir la réponse"], hide: ["Voltar à pergunta", "Revenir à la question"],
    know: ["Sabia", "Je savais"], dont: ["Não sabia", "Je ne savais pas"], done: ["Fim da série!", "Fin de la série !"],
    doneSub: ["Sabias {k} de {n}. Repete só os que falhaste: é assim que se memoriza.", "Tu savais {k} sur {n}. Refais seulement celles ratées : c'est comme ça qu'on mémorise."],
    redoMiss: ["Repetir os que falhei", "Refaire celles ratées"], restart: ["Recomeçar tudo", "Tout recommencer"],
    keyHelp: ["Teclado: espaço = virar · → sabia · ← não sabia", "Clavier : espace = retourner · → je savais · ← je ne savais pas"],
    flashTitle: ["Flashcards Suporte Wengo", "Flashcards Support Wengo"], flashIntro: ["Lê a pergunta, responde de cabeça, vira o cartão. +2 XP por cada cartão que sabias.", "Lis la question, réponds de tête, retourne la carte. +2 XP par carte que tu savais."],
    dailyTitle: ["Desafio do dia", "Défi du jour"], dailyIntro: ["5 cartões escolhidos para hoje. Termina para ganhar 25 XP e manter a tua sequência.", "5 cartes choisies pour aujourd'hui. Termine pour gagner 25 XP et garder ta série."],
    dailyEnd: ["Desafio concluído! +25 XP", "Défi terminé ! +25 XP"],
    addRes: ["Adicionar um recurso", "Ajouter une ressource"],
    addHelp: ["Vídeo do Drive, Notebook, Gem ou documento: aparece logo para todas.", "Vidéo Drive, Notebook, Gem ou document : visible tout de suite par toutes."],
    shareH: ["Partilhar os vídeos com a equipa", "Partager les vidéos avec l'équipe"],
    shareP: ["As conselheiras veem os vídeos com a conta Google @ext.wengo.com. A Marta partilha a pasta do Drive com estes e-mails (como Leitor). Não uses « qualquer pessoa com o link »: os vídeos mostram fichas reais.", "Les conseillères voient les vidéos avec leur compte Google @ext.wengo.com. Marta partage le dossier Drive avec ces e-mails (en Lecteur). N'utilise pas « tous les utilisateurs disposant du lien » : les vidéos montrent de vraies fiches."],
    copy: ["Copiar os e-mails", "Copier les e-mails"], copied: ["Copiado ✓", "Copié ✓"],
    fTheme: ["Tema", "Thème"], fNewTheme: ["+ Novo tema", "+ Nouveau thème"], fNewName: ["Nome do novo tema", "Nom du nouveau thème"],
    fTitle: ["Título", "Titre"], fUrl: ["Link (Drive, NotebookLM, Gemini, Docs…)", "Lien (Drive, NotebookLM, Gemini, Docs…)"],
    fNote: ["Descrição curta (opcional)", "Description courte (optionnelle)"], fSave: ["Adicionar", "Ajouter"], fCancel: ["Cancelar", "Annuler"],
    remove: ["Retirar", "Retirer"], removeQ: ["Retirar este recurso da Academia?", "Retirer cette ressource de l'Academia ?"],
    errUrl: ["Link inválido.", "Lien invalide."], errTitle: ["Falta o título.", "Il manque le titre."], errSave: ["Não foi possível guardar (regras Firestore?).", "Enregistrement impossible (règles Firestore ?)."],
    noRes: ["Sem recursos extra para este tema.", "Pas de ressource en plus pour ce thème."]
  };
  function u(k) { return UI[k][L]; }
  function T(x) { return Array.isArray(x) ? (x[L] || x[0]) : (x || ""); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function E(x) { return esc(T(x)); }
  function today() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

  /* ---------- logo ---------- */
  function logo(size, cls) {
    var s = size || 56;
    return '<svg class="' + (cls || "aca-logo") + '" width="' + s + '" height="' + s + '" viewBox="0 0 64 64" role="img" aria-label="BestCall Academia">' +
      '<circle cx="32" cy="32" r="30" fill="#1B2C54"/><circle cx="32" cy="32" r="27.5" fill="none" stroke="#D4A017" stroke-width="1.6" stroke-dasharray="2 3"/>' +
      '<path d="M18 39v-5a14 14 0 0 1 28 0v5" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>' +
      '<rect x="13.5" y="35" width="8" height="12" rx="3.2" fill="#D4A017"/><rect x="42.5" y="35" width="8" height="12" rx="3.2" fill="#D4A017"/>' +
      '<path d="M46.5 46.5c0 4.5-4 6.5-9 6.5h-2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="34" cy="53" r="2.4" fill="#fff"/>' +
      '<path d="M24 19v4.6c5.3 3 10.7 3 16 0V19z" fill="#B8860B"/><path d="M32 9.5 48 16 32 22.5 16 16z" fill="#F2C744"/>' +
      '<path d="M44.5 17.4v6.6" stroke="#F2C744" stroke-width="1.4"/><circle cx="44.5" cy="25" r="1.7" fill="#F2C744"/></svg>';
  }
  function wordmark() { return '<span class="aca-word"><b>BestCall</b><i>Academia</i></span>'; }

  /* ---------- levels / xp ---------- */
  var LEVELS = [
    { xp: 0, t: ["Estagiária", "Stagiaire"] }, { xp: 100, t: ["Exploradora", "Exploratrice"] },
    { xp: 300, t: ["Especialista", "Spécialiste"] }, { xp: 600, t: ["Mestre", "Experte"] }, { xp: 1000, t: ["Lenda BestCall", "Légende BestCall"] }
  ];
  function levelOf(xp) { var i = 0; while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++; return i; }
  function addXp(n, why) {
    if (!n) return;
    var before = levelOf(P.xp);
    P.xp = (P.xp || 0) + n;
    var after = levelOf(P.xp);
    toast("+" + n + " XP" + (why ? " · " + why : "") + (after > before ? " — " + u("level") + " " + (after + 1) + " : " + T(LEVELS[after].t) + " 🎉" : ""));
  }
  function touchDay() { P.days[today()] = 1; P.last = new Date().toISOString(); }
  function streak() {
    var n = 0, d = new Date();
    if (!P.days[today()]) d.setDate(d.getDate() - 1);
    for (;;) {
      var k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      if (!P.days[k]) break; n++; d.setDate(d.getDate() - 1);
    }
    return n;
  }
  function toast(msg) {
    var t = document.createElement("div"); t.className = "aca-toast"; t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.classList.add("in"); }, 10);
    setTimeout(function () { t.classList.remove("in"); setTimeout(function () { t.remove(); }, 400); }, 2600);
  }

  /* ---------- persistence ---------- */
  function lsKey() { return "bc_academy2_" + (opts.userKey || "anon"); }
  function lsLoad() { try { return JSON.parse(localStorage.getItem(lsKey())); } catch (e) { return null; } }
  var saveT = null;
  function save() {
    P.updatedAt = new Date().toISOString();
    try { localStorage.setItem(lsKey(), JSON.stringify(P)); } catch (e) {}
    if (opts.progress && opts.progress.save) {
      clearTimeout(saveT);
      saveT = setTimeout(function () {
        var nSeen = Object.keys(P.seen).length;
        var nQuiz = Object.keys(P.quiz).filter(function (k) { return P.quiz[k].best === P.quiz[k].of; }).length;
        opts.progress.save({ seen: P.seen, quiz: P.quiz, flash: P.flash, daily: P.daily, days: P.days, xp: P.xp, badges: P.badges, last: P.last, updatedAt: P.updatedAt, nSeen: nSeen, nQuizOk: nQuiz, nTemas: allThemes().length })
          .catch(function (e) { console.warn("Academy: sauvegarde distante impossible", e); });
      }, 700);
    }
  }
  function mergeP(a, b) {
    if (!b) return a;
    var o = blank();
    o.seen = Object.assign({}, a.seen, b.seen);
    o.days = Object.assign({}, a.days, b.days);
    o.daily = Object.assign({}, a.daily, b.daily);
    o.badges = Object.assign({}, a.badges, b.badges);
    o.quiz = Object.assign({}, a.quiz);
    Object.keys(b.quiz || {}).forEach(function (k) { var x = a.quiz[k] || {}, y = b.quiz[k]; o.quiz[k] = (y.best || 0) >= (x.best || 0) ? y : x; });
    var fa = a.flash || {}, fb = b.flash || {};
    o.flash = { reviewed: Math.max(fa.reviewed || 0, fb.reviewed || 0), known: Math.max(fa.known || 0, fb.known || 0), sessions: Math.max(fa.sessions || 0, fb.sessions || 0) };
    o.xp = Math.max(a.xp || 0, b.xp || 0);
    o.last = (a.last || "") > (b.last || "") ? a.last : b.last;
    return o;
  }

  /* ---------- drive helpers ---------- */
  function driveId(url) {
    var m = String(url || "").match(/\/d\/([A-Za-z0-9_-]{10,})/) || String(url || "").match(/[?&]id=([A-Za-z0-9_-]{10,})/);
    return m ? m[1] : null;
  }
  function isDriveFile(url) { return /drive\.google\.com\/file\//.test(url || ""); }
  function videoBlock(id, title) {
    return '<div class="aca-video"><iframe src="https://drive.google.com/file/d/' + esc(id) + '/preview" title="' + esc(title) + '" allow="autoplay; fullscreen" loading="lazy"></iframe></div>' +
      '<div class="aca-video-foot"><span>' + u("videoHelp") + '</span><a href="https://drive.google.com/file/d/' + esc(id) + '/view" target="_blank" rel="noopener">' + u("openDrive") + ' ↗</a></div>';
  }

  /* ---------- themes ---------- */
  function allThemes() {
    var list = (BCA.temas || []).slice(), extraThemes = {};
    extras.forEach(function (x) {
      if (!x.tema || list.some(function (t) { return t.id === x.tema; })) return;
      if (!extraThemes[x.tema]) extraThemes[x.tema] = { id: x.tema, fam: "novos", custom: true, t: [x.temaTitulo || x.tema, x.temaTitulo || x.tema] };
    });
    Object.keys(extraThemes).forEach(function (k) { list.push(extraThemes[k]); });
    return list;
  }
  function families() {
    var f = (BCA.familias || []).slice();
    if (allThemes().some(function (t) { return t.fam === "novos"; })) f.push({ id: "novos", ico: "🆕", t: UI.newContent });
    return f;
  }
  function extrasFor(id) { return extras.filter(function (x) { return x.tema === id; }); }
  function themeById(id) { return allThemes().find(function (t) { return t.id === id; }); }
  function famThemes(fid) { return allThemes().filter(function (t) { return t.fam === fid; }); }
  function quizOk(id) { var q = P.quiz[id]; return q && q.best === q.of; }
  function themeDone(t) { return !!P.seen[t.id] && (!t.quiz || quizOk(t.id)); }

  var FAMCOL = { bobi: ["#2563A8", "#1B2C54"], pagamentos: ["#1F7A50", "#16304A"], conta: ["#8A4FBF", "#1B2C54"], fidelidade: ["#C2410C", "#3B1F16"], ia: ["#B8860B", "#1B2C54"], novos: ["#475569", "#1E293B"] };
  function thumb(t, n) {
    var c = FAMCOL[t.fam] || FAMCOL.novos, fam = families().find(function (f) { return f.id === t.fam; }) || { ico: "🎬" };
    return '<span class="aca-thumb" style="--c1:' + c[0] + ';--c2:' + c[1] + '"><span class="aca-thumb-ico">' + fam.ico + '</span><span class="aca-thumb-ep">' + u("ep") + ' ' + String(n).padStart(2, "0") + '</span>' +
      (t.dur ? '<span class="aca-thumb-dur">' + esc(t.dur) + '</span>' : '') + '<span class="aca-thumb-play">▶</span>' + (themeDone(t) ? '<span class="aca-thumb-ok">✓</span>' : '') + '</span>';
  }

  /* ---------- badges ---------- */
  function badgeList() {
    var list = families().filter(function (f) { return f.id !== "novos"; }).map(function (f) {
      var ts = famThemes(f.id);
      return { id: "fam-" + f.id, ico: f.ico, t: f.t, ok: ts.length && ts.every(themeDone), hint: [ts.filter(themeDone).length + "/" + ts.length, ts.filter(themeDone).length + "/" + ts.length] };
    });
    list.push({ id: "flash50", ico: "🃏", t: ["50 cartões certos", "50 cartes réussies"], ok: (P.flash.known || 0) >= 50, hint: [Math.min(P.flash.known || 0, 50) + "/50", Math.min(P.flash.known || 0, 50) + "/50"] });
    var s = streak();
    list.push({ id: "streak5", ico: "🔥", t: ["5 dias seguidos", "5 jours d'affilée"], ok: s >= 5 || !!P.badges.streak5, hint: [Math.min(s, 5) + "/5", Math.min(s, 5) + "/5"] });
    return list;
  }
  function checkBadges() {
    badgeList().forEach(function (b) {
      if (b.ok && !P.badges[b.id]) { P.badges[b.id] = new Date().toISOString(); setTimeout(function () { toast("🏅 " + T(b.t)); }, 900); }
    });
  }

  /* ---------- render ---------- */
  function render() {
    if (!root) return;
    if (view.page === "tema") renderTema(view.id);
    else if (view.page === "flash") renderFlash();
    else renderHome();
    wire();
  }

  function stage() {
    var lv = levelOf(P.xp), cur = LEVELS[lv], nxt = LEVELS[lv + 1];
    var pct = nxt ? Math.round((P.xp - cur.xp) * 100 / (nxt.xp - cur.xp)) : 100, s = streak();
    return '<header class="aca-stage">' +
      '<div class="aca-brand">' + logo(76) + '<div>' + wordmark() + '<p>' + (opts.firstName ? u("hello") + ' ' + esc(opts.firstName) + '! ' : '') + u("tagline") + '</p></div></div>' +
      '<div class="aca-me"><div class="aca-lvl"><span class="aca-lvl-n">' + (lv + 1) + '</span><div><b>' + E(cur.t) + '</b><div class="aca-xpbar"><i style="width:' + pct + '%"></i></div>' +
      '<small>' + P.xp + ' ' + u("xp") + ' · ' + (nxt ? (nxt.xp - P.xp) + ' XP ' + u("toNext") : u("max")) + '</small></div></div>' +
      '<div class="aca-streak' + (s ? ' on' : '') + '">🔥 <b>' + s + '</b><small>' + (s === 1 ? u("streak1") : u("streak")) + '</small></div></div></header>';
  }

  function renderHome() {
    var themes = allThemes();
    var next = themes.find(function (t) { return P.seen[t.id] && !themeDone(t); }) || themes.find(function (t) { return !P.seen[t.id]; }) || themes[0];
    var dailyDone = P.daily[today()] && P.daily[today()].done;
    var h = stage();

    h += '<div class="aca-actions">' +
      (next ? '<button type="button" class="aca-act aca-act-cont" data-tema="' + esc(next.id) + '"><span class="aca-act-k">' + (Object.keys(P.seen).length ? u("cont") : u("contStart")) + '</span><b>' + E(next.t) + '</b><small>' + u("contSub") + '</small><span class="aca-act-go">▶</span></button>' : '') +
      '<button type="button" class="aca-act aca-act-daily' + (dailyDone ? ' is-done' : '') + '" data-act="daily"><span class="aca-act-k">⚡ ' + u("daily") + '</span><b>' + (dailyDone ? u("dailyDone") : u("dailySub")) + '</b><small>' + today().split("-").reverse().join("/") + '</small><span class="aca-act-go">→</span></button>' +
      '<button type="button" class="aca-act aca-act-flash" data-go="flash"><span class="aca-act-k">🃏 ' + u("flash") + '</span><b>' + u("flashSub") + '</b><small>' + (P.flash.known || 0) + ' ✓ · ' + (P.flash.reviewed || 0) + '</small><span class="aca-act-go">→</span></button></div>';

    if (opts.isManager) {
      h += '<div class="aca-admin"><div><b>🔒 ' + u("shareH") + '</b><p>' + u("shareP") + '</p></div><div class="aca-row"><button type="button" class="aca-btn" data-act="copy">' + u("copy") + '</button><button type="button" class="aca-btn ghost" data-act="add">+ ' + u("addRes") + '</button></div></div><div id="aca-form-slot"></div>';
    }

    h += '<h2 class="aca-h">' + u("tracks") + '</h2>';
    var n = 0;
    families().forEach(function (f) {
      var ts = famThemes(f.id); if (!ts.length) return;
      var d = ts.filter(themeDone).length, pct = Math.round(d * 100 / ts.length);
      h += '<section class="aca-track"><div class="aca-track-h"><span class="aca-track-ring" style="--p:' + pct + '"><span>' + f.ico + '</span></span><div><h3>' + E(f.t) + '</h3><small>' + d + ' / ' + ts.length + ' ' + u("episodes") + '</small></div></div><div class="aca-eps">';
      ts.forEach(function (t) {
        n++;
        h += '<button type="button" class="aca-ep' + (themeDone(t) ? ' is-done' : '') + '" data-tema="' + esc(t.id) + '">' + thumb(t, n) + '<b>' + E(t.t) + '</b>' + (t.intro ? '<small>' + E(t.intro) + '</small>' : '') + '</button>';
      });
      h += '</div></section>';
    });

    h += '<h2 class="aca-h">' + u("badgesH") + '</h2><div class="aca-badges">' + badgeList().map(function (b) {
      return '<div class="aca-badge' + (b.ok ? ' on' : '') + '"><span class="aca-badge-ico">' + b.ico + '</span><b>' + E(b.t) + '</b><small>' + (b.ok ? '✓' : E(b.hint)) + '</small></div>';
    }).join("") + '</div>';

    if ((BCA.embreve || []).length) {
      h += '<h2 class="aca-h">🎬 ' + u("soon") + '</h2><div class="aca-soon">' + BCA.embreve.map(function (s) { return '<span>' + E(s) + '</span>'; }).join("") + '</div>';
    }
    root.innerHTML = '<div class="aca">' + h + '</div>';
  }

  function list(arr, cls, tag) { return '<' + (tag || "ul") + ' class="' + cls + '">' + arr.map(function (x) { return '<li>' + E(x) + '</li>'; }).join("") + '</' + (tag || "ul") + '>'; }

  function renderTema(id) {
    var t = themeById(id);
    if (!t) { view = { page: "home" }; return renderHome(); }
    var fam = families().find(function (f) { return f.id === t.fam; }) || { t: UI.newContent, ico: "🎬" };
    var xs = extrasFor(id);
    var vids = xs.filter(function (x) { return isDriveFile(x.url) && driveId(x.url); });
    var links = (t.links || []).map(function (l) { return { t: T(l.t), url: l.url }; })
      .concat(xs.filter(function (x) { return !(isDriveFile(x.url) && driveId(x.url)); }).map(function (x) { return { t: x.titulo, url: x.url, note: x.nota, id: x.id }; }));

    var tabs = [["resumo", u("tResumo")]];
    if (t.passos || t.tabela) tabs.push(["passos", u("tPassos")]);
    if (t.atencao) tabs.push(["atencao", "⚠️ " + u("tAtencao")]);
    if (t.quiz && t.quiz.length) tabs.push(["quiz", "🧠 " + u("tQuiz") + (quizOk(id) ? " ✓" : "")]);
    tabs.push(["rec", "🔗 " + u("tRec") + (links.length ? " · " + links.length : "")]);
    if (!tabs.some(function (x) { return x[0] === tabSel; })) tabSel = "resumo";

    var h = '<div class="aca"><div class="aca-bar"><button type="button" class="aca-back" data-go="home">' + u("back") + '</button>' + logo(30, "aca-logo-s") + '</div>';
    h += '<div class="aca-player"><div class="aca-main">';
    h += '<div class="aca-ep-k" style="--c1:' + (FAMCOL[t.fam] || FAMCOL.novos)[0] + '">' + fam.ico + ' ' + E(fam.t) + '</div><h1 class="aca-title">' + E(t.t) + '</h1>';
    h += '<div class="aca-meta">' + (t.dur ? '<span>⏱ ' + esc(t.dur) + '</span>' : '') + (t.data ? '<span>📅 ' + esc(t.data) + '</span>' : '') +
      '<button type="button" class="aca-btn' + (P.seen[id] ? ' ghost' : ' gold') + '" data-act="seen">' + (P.seen[id] ? u("seenOk") : u("markSeen")) + '</button></div>';
    if (t.video) {
      h += videoBlock(t.video, T(t.t));
      if (t.notas) h += '<a class="aca-notes" href="https://docs.google.com/document/d/' + esc(t.notas) + '/edit" target="_blank" rel="noopener">📝 ' + u("notes") + ' ↗</a>';
    }
    vids.forEach(function (x) {
      h += '<div class="aca-extra"><div class="aca-extra-h"><b>🎬 ' + esc(x.titulo) + '</b>' + (opts.isManager ? '<button type="button" class="aca-x" data-del="' + esc(x.id) + '">' + u("remove") + '</button>' : '') + '</div>' + (x.nota ? '<p>' + esc(x.nota) + '</p>' : '') + videoBlock(driveId(x.url), x.titulo) + '</div>';
    });

    h += '<div class="aca-tabs" role="tablist">' + tabs.map(function (x) { return '<button type="button" role="tab" class="aca-tab" aria-selected="' + (x[0] === tabSel) + '" data-tab="' + x[0] + '">' + x[1] + '</button>'; }).join("") + '</div><div class="aca-panel">';
    if (tabSel === "resumo") {
      h += (t.intro ? '<p class="aca-lead">' + E(t.intro) + '</p>' : '') + (t.pontos ? '<h3>' + u("keys") + '</h3>' + list(t.pontos, "aca-points") : '');
      if (!t.intro && !t.pontos) h += '<p class="aca-muted">' + u("noRes") + '</p>';
    } else if (tabSel === "passos") {
      if (t.passos) h += list(t.passos, "aca-steps", "ol");
      if (t.tabela) h += '<div class="aca-table-wrap"><table class="aca-table"><thead><tr>' + t.tabela.cab.map(function (c) { return '<th>' + E(c) + '</th>'; }).join("") + '</tr></thead><tbody>' +
        t.tabela.lin.map(function (r) { return '<tr>' + r.map(function (c, i) { return (i === 0 ? '<th scope="row">' : '<td>') + E(c) + (i === 0 ? '</th>' : '</td>'); }).join("") + '</tr>'; }).join("") + '</tbody></table></div>';
    } else if (tabSel === "atencao") {
      h += '<div class="aca-warn">' + list(t.atencao, "aca-points") + '</div>';
    } else if (tabSel === "quiz") {
      h += t.quiz.map(function (q, qi) {
        return '<div class="aca-q" data-q="' + qi + '"><p class="aca-q-t"><b>' + (qi + 1) + '.</b> ' + E(q.q) + '</p><div class="aca-opts">' +
          q.o.map(function (o, oi) { return '<button type="button" class="aca-opt" data-o="' + oi + '">' + E(o) + '</button>'; }).join("") + '</div><p class="aca-q-fb" hidden></p></div>';
      }).join("") + '<p class="aca-score" hidden></p>';
    } else {
      h += links.length ? '<ul class="aca-links">' + links.map(function (l) {
        return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.t) + ' ↗</a>' + (l.note ? '<small>' + esc(l.note) + '</small>' : '') + (opts.isManager && l.id ? ' <button type="button" class="aca-x" data-del="' + esc(l.id) + '">' + u("remove") + '</button>' : '') + '</li>';
      }).join("") + '</ul>' : '<p class="aca-muted">' + u("noRes") + '</p>';
      if (opts.isManager) h += '<div class="aca-row" style="margin-top:12px"><button type="button" class="aca-btn ghost" data-act="add" data-tema-pre="' + esc(id) + '">+ ' + u("addRes") + '</button></div><div id="aca-form-slot"></div>';
    }
    h += '</div></div>';

    // playlist
    var ts = famThemes(t.fam), all = allThemes();
    h += '<aside class="aca-side"><h3>' + u("playlist") + '</h3>' + ts.map(function (x) {
      var n = all.indexOf(x) + 1;
      return '<button type="button" class="aca-pl' + (x.id === id ? ' is-cur' : '') + (themeDone(x) ? ' is-done' : '') + '" data-tema="' + esc(x.id) + '"><span class="aca-pl-n">' + (themeDone(x) ? '✓' : String(n).padStart(2, "0")) + '</span><span><b>' + E(x.t) + '</b>' + (x.dur ? '<small>' + esc(x.dur) + '</small>' : '') + '</span></button>';
    }).join("") + '<button type="button" class="aca-side-cta" data-act="daily">⚡ ' + u("daily") + '</button></aside></div></div>';
    root.innerHTML = h;
  }

  /* ---------- flashcards & daily ---------- */
  function newDeck(cat, only, daily) {
    var cards = (BCA.flash || []).map(function (c, i) { return i; }).filter(function (i) { return !cat || BCA.flash[i][0] === cat; });
    if (only) cards = only.slice();
    return { cat: cat || "", cards: cards, pos: 0, flip: false, know: [], miss: [], daily: !!daily, ended: false };
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function dailyCards() {
    var seed = today().split("-").join("") * 1 + String(opts.userKey || "").length, n = (BCA.flash || []).length, out = [];
    while (out.length < Math.min(5, n)) { seed = (seed * 9301 + 49297) % 233280; var i = Math.floor(seed / 233280 * n); if (out.indexOf(i) < 0) out.push(i); }
    return out;
  }

  function renderFlash() {
    if (!fc) fc = newDeck("");
    var cats = BCA.catFlash || {};
    var h = '<div class="aca"><div class="aca-bar"><button type="button" class="aca-back" data-go="home">' + u("back") + '</button>' + logo(30, "aca-logo-s") + '</div>' +
      '<div class="aca-fc-head"><h1>' + (fc.daily ? '⚡ ' + u("dailyTitle") : '🃏 ' + u("flashTitle")) + '</h1><p>' + (fc.daily ? u("dailyIntro") : u("flashIntro")) + '</p></div>';
    if (!fc.daily) {
      h += '<div class="aca-chips"><button type="button" class="aca-chip" aria-pressed="' + (!fc.cat) + '" data-cat="">' + u("all") + ' · ' + (BCA.flash || []).length + '</button>' +
        Object.keys(cats).map(function (k) {
          var n = (BCA.flash || []).filter(function (c) { return c[0] === k; }).length;
          return '<button type="button" class="aca-chip" aria-pressed="' + (fc.cat === k) + '" data-cat="' + k + '">' + E(cats[k]) + ' · ' + n + '</button>';
        }).join("") + '<button type="button" class="aca-chip aca-chip-act" data-act="shuffle">🔀 ' + u("shuffle") + '</button></div>';
    }
    if (fc.pos >= fc.cards.length) {
      if (!fc.ended) {
        fc.ended = true;
        P.flash.sessions = (P.flash.sessions || 0) + 1;
        if (fc.daily && !(P.daily[today()] && P.daily[today()].done)) { P.daily[today()] = { done: true, known: fc.know.length }; addXp(25, u("daily")); }
        touchDay(); checkBadges(); save();
      }
      h += '<div class="aca-fc-done"><div class="aca-confetti">' + (fc.daily ? '⚡' : '🎉') + '</div><h2>' + (fc.daily ? u("dailyEnd") : u("done")) + '</h2><p>' + esc(u("doneSub").replace("{k}", fc.know.length).replace("{n}", fc.cards.length)) + '</p><div class="aca-row">' +
        (fc.miss.length ? '<button type="button" class="aca-btn" data-act="redo">' + u("redoMiss") + ' (' + fc.miss.length + ')</button>' : '') +
        '<button type="button" class="aca-btn ghost" data-go="home">' + u("back") + '</button></div></div>';
    } else {
      var c = BCA.flash[fc.cards[fc.pos]];
      h += '<div class="aca-fc-bar"><span>' + (fc.pos + 1) + ' / ' + fc.cards.length + '</span><div class="aca-fc-prog"><i style="width:' + Math.round(fc.pos * 100 / fc.cards.length) + '%"></i></div><span class="aca-k">✓ ' + fc.know.length + '</span><span class="aca-m">✗ ' + fc.miss.length + '</span></div>' +
        '<div class="aca-fc-stack"><button type="button" class="aca-fc' + (fc.flip ? ' is-flip' : '') + '" data-act="flip">' +
        '<span class="aca-fc-face aca-fc-front"><span class="aca-fc-cat">' + E(cats[c[0]] || "") + '</span><span class="aca-fc-txt">' + E(c[1]) + '</span><span class="aca-fc-hint">' + u("show") + ' ↻</span></span>' +
        '<span class="aca-fc-face aca-fc-back"><span class="aca-fc-cat">' + E(cats[c[0]] || "") + '</span><span class="aca-fc-txt">' + E(c[2]) + '</span><span class="aca-fc-hint">' + u("hide") + ' ↻</span></span></button></div>' +
        '<div class="aca-row aca-fc-btns">' + (fc.flip ? '<button type="button" class="aca-btn aca-miss" data-act="miss">✗ ' + u("dont") + '</button><button type="button" class="aca-btn aca-know" data-act="know">✓ ' + u("know") + '</button>'
          : '<button type="button" class="aca-btn" data-act="flip">' + u("show") + '</button>') + '</div><p class="aca-keyhelp">' + u("keyHelp") + '</p>';
    }
    root.innerHTML = h + '</div>';
  }
  function answerCard(known) {
    (known ? fc.know : fc.miss).push(fc.cards[fc.pos]);
    P.flash.reviewed = (P.flash.reviewed || 0) + 1;
    if (known) { P.flash.known = (P.flash.known || 0) + 1; P.xp = (P.xp || 0) + 2; }
    fc.pos++; fc.flip = false; touchDay(); save();
  }

  /* ---------- admin form ---------- */
  function openForm(pre) {
    var slot = root.querySelector("#aca-form-slot"); if (!slot) return;
    var themes = allThemes();
    slot.innerHTML = '<form class="aca-form"><h3>' + u("addRes") + '</h3><p class="aca-muted">' + u("addHelp") + '</p>' +
      '<label>' + u("fTheme") + '<select name="tema">' + themes.map(function (t) { return '<option value="' + esc(t.id) + '"' + (t.id === pre ? ' selected' : '') + '>' + E(t.t) + '</option>'; }).join("") +
      '<option value="__new">' + u("fNewTheme") + '</option></select></label>' +
      '<label class="aca-newname" hidden>' + u("fNewName") + '<input name="novo" maxlength="80"></label>' +
      '<label>' + u("fTitle") + '<input name="titulo" maxlength="120" required></label>' +
      '<label>' + u("fUrl") + '<input name="url" type="url" required placeholder="https://drive.google.com/file/d/…"></label>' +
      '<label>' + u("fNote") + '<input name="nota" maxlength="200"></label>' +
      '<p class="aca-err" hidden></p><div class="aca-row"><button type="submit" class="aca-btn">' + u("fSave") + '</button><button type="button" class="aca-btn ghost" data-cancel>' + u("fCancel") + '</button></div></form>';
    var f = slot.querySelector("form");
    f.tema.addEventListener("change", function () { f.querySelector(".aca-newname").hidden = f.tema.value !== "__new"; });
    f.querySelector("[data-cancel]").addEventListener("click", function () { slot.innerHTML = ""; });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = f.querySelector(".aca-err"); err.hidden = true;
      var url = f.url.value.trim(), titulo = f.titulo.value.trim(), tema = f.tema.value, temaTitulo = "";
      if (!/^https:\/\//.test(url)) { err.textContent = u("errUrl"); err.hidden = false; return; }
      if (!titulo) { err.textContent = u("errTitle"); err.hidden = false; return; }
      if (tema === "__new") {
        temaTitulo = f.novo.value.trim(); if (!temaTitulo) { err.textContent = u("errTitle"); err.hidden = false; return; }
        tema = "x-" + temaTitulo.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
      } else { var ex = themeById(tema); if (ex && ex.custom) temaTitulo = T(ex.t); }
      opts.store.add({ tema: tema, temaTitulo: temaTitulo, titulo: titulo, url: url, nota: f.nota.value.trim(), criadoEm: new Date().toISOString() })
        .then(function () { slot.innerHTML = ""; return refresh(); })
        .catch(function () { err.textContent = u("errSave"); err.hidden = false; });
    });
  }
  function refresh() {
    if (!opts.store || !opts.store.list) return Promise.resolve();
    return opts.store.list().then(function (rows) { extras = rows || []; render(); }).catch(function () { extras = []; });
  }

  /* ---------- events ---------- */
  function go(page, id) { view = { page: page, id: id }; if (page === "tema") tabSel = "resumo"; render(); try { root.scrollIntoView({ block: "start" }); } catch (e) {} }
  function startDaily() { fc = newDeck("", dailyCards(), true); go("flash"); }

  function wire() {
    root.querySelectorAll("[data-go]").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.go === "flash" && (!fc || fc.daily)) fc = newDeck(""); go(b.dataset.go); }); });
    root.querySelectorAll("[data-tema]").forEach(function (b) { b.addEventListener("click", function () { go("tema", b.dataset.tema); }); });
    root.querySelectorAll("[data-tab]").forEach(function (b) { b.addEventListener("click", function () { tabSel = b.dataset.tab; render(); }); });
    root.querySelectorAll('[data-act="add"]').forEach(function (b) { b.addEventListener("click", function () { openForm(b.dataset.temaPre || ""); }); });
    root.querySelectorAll('[data-act="daily"]').forEach(function (b) { b.addEventListener("click", startDaily); });
    root.querySelectorAll("[data-del]").forEach(function (b) { b.addEventListener("click", function () { if (confirm(u("removeQ"))) opts.store.remove(b.dataset.del).then(refresh); }); });
    var cp = root.querySelector('[data-act="copy"]');
    if (cp) cp.addEventListener("click", function () {
      var list = (opts.emails ? opts.emails() : []).join(", ");
      var done = function () { cp.textContent = u("copied"); setTimeout(function () { cp.textContent = u("copy"); }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(list).then(done, function () { prompt("", list); });
      else prompt("", list);
    });
    var s = root.querySelector('[data-act="seen"]');
    if (s) s.addEventListener("click", function () {
      if (P.seen[view.id]) { delete P.seen[view.id]; }
      else { P.seen[view.id] = new Date().toISOString(); addXp(20); }
      touchDay(); checkBadges(); save(); render();
    });

    root.querySelectorAll(".aca-q").forEach(function (qe) {
      qe.querySelectorAll(".aca-opt").forEach(function (b) {
        b.addEventListener("click", function () {
          if (qe.dataset.done) return;
          var t = themeById(view.id), q = t.quiz[+qe.dataset.q], ok = +b.dataset.o === q.a;
          qe.dataset.done = ok ? "1" : "0";
          qe.querySelectorAll(".aca-opt").forEach(function (o) { o.disabled = true; if (+o.dataset.o === q.a) o.classList.add("is-good"); });
          if (!ok) b.classList.add("is-bad");
          var fb = qe.querySelector(".aca-q-fb"); fb.textContent = ok ? u("good") : u("bad"); fb.className = "aca-q-fb " + (ok ? "ok" : "ko"); fb.hidden = false;
          var all = root.querySelectorAll(".aca-q"), done = root.querySelectorAll(".aca-q[data-done]");
          if (all.length === done.length) {
            var n = root.querySelectorAll('.aca-q[data-done="1"]').length, sc = root.querySelector(".aca-score");
            var prev = P.quiz[view.id], wasPerfect = prev && prev.best === prev.of;
            P.quiz[view.id] = { best: Math.max(prev ? prev.best : 0, n), of: all.length, last: n, at: new Date().toISOString(), tries: ((prev && prev.tries) || 0) + 1 };
            if (n === all.length && !wasPerfect) addXp(30, "Quiz");
            if (n === all.length && !P.seen[view.id]) P.seen[view.id] = new Date().toISOString();
            touchDay(); checkBadges(); save();
            sc.innerHTML = u("score") + ' : <b>' + n + ' / ' + all.length + '</b> <button type="button" class="aca-btn ghost">' + u("retry") + '</button>';
            sc.hidden = false;
            sc.querySelector("button").addEventListener("click", function () { render(); });
          }
        });
      });
    });

    if (view.page === "flash") {
      root.querySelectorAll("[data-cat]").forEach(function (b) { b.addEventListener("click", function () { fc = newDeck(b.dataset.cat); render(); }); });
      root.querySelectorAll("[data-act]").forEach(function (b) {
        var a = b.dataset.act;
        if (["flip", "know", "miss", "shuffle", "redo"].indexOf(a) < 0) return;
        b.addEventListener("click", function () {
          if (a === "flip") fc.flip = !fc.flip;
          else if (a === "know" || a === "miss") answerCard(a === "know");
          else if (a === "shuffle") { fc = newDeck(fc.cat); shuffle(fc.cards); }
          else if (a === "redo") { var d = fc.daily; fc = newDeck(fc.cat, fc.miss); shuffle(fc.cards); fc.daily = false; }
          render();
        });
      });
    }
  }

  function onKey(e) {
    if (!root || view.page !== "flash" || !root.offsetParent || !fc || fc.pos >= fc.cards.length) return;
    if (/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
    if (e.key === " ") { e.preventDefault(); fc.flip = !fc.flip; render(); }
    else if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && fc.flip) { e.preventDefault(); answerCard(e.key === "ArrowRight"); render(); }
  }

  function syncLang() { var l = window.BCI18N ? BCI18N.lang : "pt"; L = l === "fr" ? 1 : 0; }

  window.BCAcademy = {
    logo: logo,
    mount: function (el, o) {
      root = el; opts = o || {}; root.classList.add("aca-root");
      P = mergeP(blank(), lsLoad());
      syncLang(); render(); refresh();
      if (opts.progress && opts.progress.load) {
        opts.progress.load().then(function (remote) { if (remote) { P = mergeP(P, remote); render(); } }).catch(function () {});
      }
      window.addEventListener("bc-lang", function () { syncLang(); render(); });
      document.addEventListener("keydown", onKey);
    },
    _driveId: driveId
  };
})();
