/* ==========================================================
   BestCall — traduction de l'appli (FR / PT)
   L'appli est écrite en français ; ce fichier traduit à la volée
   tous les textes affichés quand la langue choisie est le portugais.
   - Pour ajouter une phrase : ajoute une ligne "français": "português" dans DICT.
   - La formation (onglet Formation) a sa propre traduction ; elle suit la même langue.
   ========================================================== */
(function () {
  "use strict";

  var DICT = {
    // --- connexion ---
    "Gestion interne": "Gestão interna",
    "Email ou code agent": "E-mail ou código de agente",
    "Mot de passe": "Palavra-passe",
    "Se connecter": "Entrar",
    "Mot de passe oublié ?": "Esqueceu-se da palavra-passe?",
    "Identifiant et mot de passe requis.": "Identificador e palavra-passe obrigatórios.",
    "Email ou mot de passe incorrect.": "E-mail ou palavra-passe incorretos.",
    "Trop de tentatives, réessaie plus tard.": "Demasiadas tentativas, tenta mais tarde.",
    "Email invalide.": "E-mail inválido.",
    "Renseigne ton email ou code agent d'abord, puis clique à nouveau.": "Indica primeiro o teu e-mail ou código de agente e clica outra vez.",
    "Email de réinitialisation envoyé si ce compte existe.": "Se esta conta existir, foi enviado um e-mail de redefinição.",
    "Compte non configuré. Contacte l'administrateur.": "Conta não configurada. Contacta o administrador.",

    // --- menu et barre latérale ---
    "Conseillers": "Conselheiros",
    "Plannings": "Horários",
    "Signalements": "Comunicações",
    "Paie": "Salários",
    "Formation": "Formação",
    "Mon planning": "O meu horário",
    "Signaler": "Comunicar",
    "Administrateur": "Administrador",
    "Direction": "Direção",
    "Conseiller": "Conselheiro",
    "Changer mon mot de passe": "Alterar a minha palavra-passe",
    "Déconnexion": "Sair",

    // --- conseillers (admin) ---
    "Comptes, rôles, statuts et taux horaires.": "Contas, funções, estados e taxas horárias.",
    "+ Ajouter un conseiller": "+ Adicionar um conselheiro",
    "Rechercher un nom ou un email…": "Pesquisar um nome ou e-mail…",
    "Tous les statuts": "Todos os estados",
    "Actif": "Ativo",
    "Inactif": "Inativo",
    "Actifs": "Ativos",
    "Code": "Código",
    "Nom": "Apelido",
    "Statut": "Estado",
    "Taux/h sem.": "Taxa/h sem.",
    "Taux/h dim.+férié": "Taxa/h dom.+feriado",
    "Prime langue": "Prémio de língua",
    "Prime télétravail": "Prémio de teletrabalho",
    "Ajouté le": "Adicionado a",
    "Chargement…": "A carregar…",
    "Comptes au total": "Contas no total",
    "Aucun conseiller": "Nenhum conselheiro",
    "Ajoute le premier compte avec le bouton ci-dessus.": "Adiciona a primeira conta com o botão acima.",
    "Modifier": "Modificar",
    "(sans nom)": "(sem nome)",
    "Ajouter un conseiller": "Adicionar um conselheiro",
    "Modifier le conseiller": "Modificar o conselheiro",
    "Un compte de connexion sera créé avec le mot de passe temporaire indiqué.": "Será criada uma conta de acesso com a palavra-passe temporária indicada.",
    "Prénom": "Nome",
    "Code agent (ex. Best 01)": "Código de agente (ex. Best 01)",
    "Email (identifiant de connexion)": "E-mail (identificador de acesso)",
    "Mot de passe temporaire": "Palavra-passe temporária",
    "Créer un mot de passe temporaire": "Criar uma palavra-passe temporária",
    "À communiquer au conseiller": "A comunicar ao conselheiro",
    "Taux/h semaine+samedi (€)": "Taxa/h semana+sábado (€)",
    "Taux/h dim.+férié (€)": "Taxa/h dom.+feriado (€)",
    "Prime langue (€/mois)": "Prémio de língua (€/mês)",
    "Prime télétravail (€/mois)": "Prémio de teletrabalho (€/mês)",
    "La prime variable se saisit chaque mois dans l'onglet Paie.": "O prémio variável introduz-se todos os meses no separador Salários.",
    "Envoyer lien mot de passe": "Enviar link de palavra-passe",
    "Supprimer": "Eliminar",
    "Annuler": "Cancelar",
    "Enregistrer": "Guardar",
    "Fermer": "Fechar",
    "Prénom et nom sont requis.": "Nome e apelido são obrigatórios.",
    "Email requis pour créer le compte de connexion.": "E-mail obrigatório para criar a conta de acesso.",
    "Mot de passe temporaire requis (6 caractères min).": "Palavra-passe temporária obrigatória (mín. 6 caracteres).",
    "Conseiller mis à jour.": "Conselheiro atualizado.",
    "Conseiller supprimé.": "Conselheiro eliminado.",
    "Suppression impossible.": "Não foi possível eliminar.",
    "Compte créé. Communique l'email et le mot de passe temporaire au conseiller.": "Conta criada. Comunica o e-mail e a palavra-passe temporária ao conselheiro.",
    "Impossible d'envoyer le lien.": "Não foi possível enviar o link.",
    "Supprimer ce conseiller ? Son compte de connexion ne sera plus lié (à supprimer manuellement dans Firebase Authentication si besoin).": "Eliminar este conselheiro? A conta de acesso deixará de estar ligada (eliminar manualmente no Firebase Authentication se necessário).",

    // --- plannings (admin) ---
    "Horaires hebdomadaires et salaire estimé par conseiller.": "Horários semanais e salário estimado por conselheiro.",
    "Lun": "Seg", "Mar": "Ter", "Mer": "Qua", "Jeu": "Qui", "Ven": "Sex", "Sam": "Sáb", "Dim": "Dom",
    "Lundi": "Segunda", "Mardi": "Terça", "Mercredi": "Quarta", "Jeudi": "Quinta", "Vendredi": "Sexta", "Samedi": "Sábado", "Dimanche": "Domingo",
    "Total": "Total",
    "Salaire sem.": "Salário sem.",
    "Aucun conseiller actif": "Nenhum conselheiro ativo",
    "Repos": "Folga",
    "Férié": "Feriado",
    "Pause": "Pausa",
    "Jour": "Dia",
    "Début": "Início",
    "Fin": "Fim",
    "Planning": "Horário",
    "Total hebdomadaire": "Total semanal",
    "Total semaine": "Total da semana",
    "Semaines": "Semanas",
    "Dupliquer ce planning sur les prochaines semaines": "Duplicar este horário nas próximas semanas",
    "Copie cet horaire tel quel sur les semaines suivantes — pratique pour un planning récurrent. Modifie ensuite uniquement les semaines qui changent.": "Copia este horário tal como está para as semanas seguintes — prático para um horário recorrente. Depois modifica só as semanas que mudam.",
    "Planning enregistré.": "Horário guardado.",
    "Enregistrement impossible.": "Não foi possível guardar.",
    "Indique un nombre de semaines valide.": "Indica um número de semanas válido.",
    "Erreur lors de la duplication.": "Erro ao duplicar.",

    // --- signalements (admin) ---
    "Retards et absences déclarés par les conseillers.": "Atrasos e ausências comunicados pelos conselheiros.",
    "Type": "Tipo",
    "Date": "Data",
    "Message": "Mensagem",
    "Déclaré le": "Comunicado a",
    "Aucun signalement": "Nenhuma comunicação",
    "Traité": "Tratado",
    "Nouveau": "Novo",
    "Marquer traité": "Marcar como tratado",
    "Retard": "Atraso",
    "Absence": "Ausência",
    "Maladie": "Baixa médica",
    "Congé": "Férias",

    // --- paie (admin) ---
    "Récapitulatif mensuel des gains par conseiller.": "Resumo mensal dos ganhos por conselheiro.",
    "Exporter en CSV": "Exportar em CSV",
    "H. normales": "H. normais",
    "H. dim/férié": "H. dom/feriado",
    "Gains horaires": "Ganhos horários",
    "Prime variable": "Prémio variável",
    "Absences déduites": "Ausências deduzidas",
    "Total mensuel": "Total mensal",
    "Masse salariale du mois": "Massa salarial do mês",
    "Conseillers actifs": "Conselheiros ativos",
    "Aucune donnée pour ce mois": "Sem dados para este mês",
    "Erreur de chargement.": "Erro de carregamento.",
    "Prime variable enregistrée.": "Prémio variável guardado.",
    "Rien à exporter pour ce mois.": "Nada para exportar neste mês.",

    // --- mon planning (conseiller) ---
    "Tes horaires et heures travaillées.": "Os teus horários e horas trabalhadas.",
    "Cette semaine. Le total d'heures tient déjà compte de ta pause. Clique \"Modifier\" sur un jour pour ajuster son horaire ou sa pause (ex. retard rattrapé le lendemain) — Marta est notifiée automatiquement à chaque changement.": "Esta semana. O total de horas já tem em conta a tua pausa. Clica em \"Modificar\" num dia para ajustar o horário ou a pausa (ex.: atraso compensado no dia seguinte) — a Marta é notificada automaticamente a cada alteração.",
    "Horaire": "Horário",
    "Heures": "Horas",
    "Heures cette semaine": "Horas esta semana",
    "Vue du mois": "Vista do mês",
    "Vue d'ensemble type agenda — repos en gris, jours travaillés en clair. Utilise les flèches pour changer de mois.": "Vista geral tipo agenda — folgas a cinzento, dias de trabalho a claro. Usa as setas para mudar de mês.",
    "Vue annuelle (à partir de septembre)": "Vista anual (a partir de setembro)",
    "Le total de chaque mois se remplit au fur et à mesure des semaines qui passent — un mois en cours ou à venir n'affiche donc pas encore son total final.": "O total de cada mês vai-se preenchendo à medida que as semanas passam — um mês em curso ou futuro ainda não mostra o total final.",
    "Mois": "Mês",
    "Heures totales": "Horas totais",
    "Modifier ce jour": "Modificar este dia",
    "Marta sera notifiée automatiquement de ce changement.": "A Marta será notificada automaticamente desta alteração.",
    "Début pause (optionnel)": "Início da pausa (opcional)",
    "Fin pause (optionnel)": "Fim da pausa (opcional)",
    "Journée de repos": "Dia de folga",
    "Raison (optionnel)": "Motivo (opcional)",
    "Ex : retard rattrapé demain": "Ex.: atraso compensado amanhã",
    "Jour mis à jour.": "Dia atualizado.",

    // --- signaler (conseiller) ---
    "Signaler un retard / une absence": "Comunicar um atraso / uma ausência",
    "Marta est notifiée automatiquement par email.": "A Marta é notificada automaticamente por e-mail.",
    "Date de début": "Data de início",
    "Date de fin (optionnel)": "Data de fim (opcional)",
    "Message (raison, heure d'arrivée prévue…)": "Mensagem (motivo, hora de chegada prevista…)",
    "Ex : arrivée prévue à 10h, embouteillage": "Ex.: chegada prevista às 10h, trânsito",
    "Envoyer le signalement": "Enviar a comunicação",
    "Choisis une date de début.": "Escolhe uma data de início.",
    "La date de fin doit être après la date de début.": "A data de fim tem de ser depois da data de início.",
    "Signalement envoyé, Marta a été notifiée.": "Comunicação enviada, a Marta foi notificada.",
    "Aucun signalement pour l'instant.": "Ainda nenhuma comunicação.",

    // --- mot de passe ---
    "Choisis un nouveau mot de passe pour ton compte.": "Escolhe uma nova palavra-passe para a tua conta.",
    "Mot de passe actuel": "Palavra-passe atual",
    "Nouveau mot de passe": "Nova palavra-passe",
    "Renseigne ton mot de passe actuel et un nouveau (6 caractères min).": "Indica a tua palavra-passe atual e uma nova (mín. 6 caracteres).",
    "Mot de passe modifié.": "Palavra-passe alterada."
  };

  var MOIS_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  var MOIS_PT = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // Phrases qui contiennent une partie variable (nom, date, nombre…)
  var PATTERNS = [
    [/^Lien de réinitialisation envoyé à (.+)$/, "Link de redefinição enviado para $1"],
    [/^Planning — (.+)$/, "Horário — $1"],
    [/^Semaine (.+)$/, "Semana $1"],
    [/^Modifier — (.+)$/, function (m, j) { return "Modificar — " + tr(j); }],
    [/^Planning dupliqué sur (\d+) semaine\(s\)\.$/, "Horário duplicado em $1 semana(s)."],
    [/^Erreur : (.+)$/, function (m, e) { return "Erro: " + tr(e); }],
    [/^Erreur de connexion \((.*)\)\.$/, "Erro de ligação ($1)."],
    [/^pause (.+)$/, "pausa $1"],
    [/^Heures normales \((.+)\) × (.+)$/, "Horas normais ($1) × $2"],
    [/^Heures dim\.\/férié \((.+)\) × (.+)$/, "Horas dom./feriado ($1) × $2"],
    [/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre) (\d{4})$/i, function (m, mo, y) {
      var i = MOIS_FR.indexOf(mo.toLowerCase()); return (mo.charAt(0) === mo.charAt(0).toUpperCase() ? cap(MOIS_PT[i]) : MOIS_PT[i]) + " de " + y;
    }]
  ];

  function tr(s) {
    if (lang !== "pt" || !s) return s;
    var m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
    var core = m[2];
    if (!core) return s;
    if (Object.prototype.hasOwnProperty.call(DICT, core)) return m[1] + DICT[core] + m[3];
    for (var i = 0; i < PATTERNS.length; i++) {
      if (PATTERNS[i][0].test(core)) return m[1] + core.replace(PATTERNS[i][0], PATTERNS[i][1]) + m[3];
    }
    return s;
  }

  var KEY = "bc_lang";
  var lang = "fr";
  try { lang = localStorage.getItem(KEY) || ""; } catch (e) {}
  if (lang !== "fr" && lang !== "pt") lang = /^pt/i.test(navigator.language || "") ? "pt" : "fr";
  var userChose = false;
  try { userChose = !!localStorage.getItem(KEY); } catch (e) {}

  var ATTRS = ["placeholder", "title", "aria-label"];
  var applying = false;

  function skip(node) {
    var el = node.nodeType === 1 ? node : node.parentNode;
    if (!el || !el.closest) return true;
    if (el.closest("#formation-root, script, style, .name-cell, .bc-lang, [data-no-i18n]")) return true;
    return false;
  }

  function doText(n) {
    if (skip(n)) return;
    var cur = n.nodeValue;
    // si l'appli a réécrit le texte, il devient la nouvelle source française
    if (n.__bcOut === undefined || cur !== n.__bcOut) n.__bcSrc = cur;
    var out = lang === "pt" ? tr(n.__bcSrc) : n.__bcSrc;
    n.__bcOut = out;
    if (cur !== out) n.nodeValue = out;
  }
  function doAttrs(el) {
    if (skip(el)) return;
    el.__bcA = el.__bcA || {};
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var cur = el.getAttribute(a), rec = el.__bcA[a];
      if (!rec || cur !== rec.out) rec = el.__bcA[a] = { src: cur };
      rec.out = lang === "pt" ? tr(rec.src) : rec.src;
      if (cur !== rec.out) el.setAttribute(a, rec.out);
    });
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1 || skip(root)) return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeType === 1 && n.matches && n.matches("#formation-root, script, style, .bc-lang")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }
  function applyAll() {
    applying = true;
    walk(document.body);
    document.documentElement.lang = lang === "pt" ? "pt" : "fr";
    applying = false;
    document.querySelectorAll(".bc-lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
  }

  var obs = new MutationObserver(function (muts) {
    if (applying) return;
    applying = true;
    muts.forEach(function (m) {
      if (m.type === "characterData") doText(m.target);
      else if (m.type === "attributes") doAttrs(m.target);
      else m.addedNodes.forEach(function (n) { walk(n); });
    });
    applying = false;
  });

  // confirm() traduit aussi
  var nativeConfirm = window.confirm.bind(window);
  window.confirm = function (msg) { return nativeConfirm(tr(String(msg))); };

  // Sélecteur de langue (écran de connexion + barre latérale)
  function langSwitch() {
    var d = document.createElement("div");
    d.className = "bc-lang";
    d.setAttribute("role", "group");
    d.setAttribute("aria-label", "Langue / Língua");
    d.innerHTML = '<button type="button" data-lang="pt">PT</button><button type="button" data-lang="fr">FR</button>';
    d.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lang]");
      if (b) api.set(b.dataset.lang, true);
    });
    return d;
  }
  function injectUI() {
    var css = document.createElement("style");
    css.textContent = ".bc-lang{display:inline-flex;border:1px solid var(--border,#E1DED2);border-radius:999px;overflow:hidden;background:var(--surface,#fff)}" +
      ".bc-lang button{border:0;background:none;padding:4px 12px;font:700 12px/1.4 Manrope,sans-serif;color:var(--muted,#6B7488);cursor:pointer;width:auto}" +
      ".bc-lang button[aria-pressed=true]{background:var(--accent,#1B2C54);color:#fff}" +
      ".login-card .bc-lang{display:flex;width:max-content;margin:0 auto 18px}" +
      ".sidebar-foot .bc-lang{margin:4px 0 10px}" +
      "@media (max-width:760px){.sidebar-foot{display:block!important;margin:0 0 0 auto;padding:0;border:0}.sidebar-foot>*:not(.bc-lang){display:none}.sidebar-foot .bc-lang{margin:0}}";
    document.head.appendChild(css);
    var card = document.querySelector(".login-card");
    if (card) card.insertBefore(langSwitch(), card.querySelector(".field"));
    var foot = document.querySelector(".sidebar-foot");
    if (foot) foot.insertBefore(langSwitch(), foot.firstChild);
  }

  var api = window.BCI18N = {
    t: tr,
    get lang() { return lang; },
    set: function (l, fromUser) {
      if (l !== "fr" && l !== "pt") return;
      lang = l;
      if (fromUser) { userChose = true; try { localStorage.setItem(KEY, l); } catch (e) {} }
      applyAll();
      if (window.BCFormation && BCFormation.setLang) BCFormation.setLang(l);
    },
    // appelé après connexion : un conseiller sans préférence voit l'appli en portugais
    defaultForRole: function (role) {
      if (!userChose && role === "conseiller" && lang !== "pt") api.set("pt");
    }
  };

  function start() {
    injectUI();
    applyAll();
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
