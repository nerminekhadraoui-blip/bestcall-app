(function () {
  "use strict";

  var JOURS = [
    { key: "lundi", label: "Lundi", short: "Lun" },
    { key: "mardi", label: "Mardi", short: "Mar" },
    { key: "mercredi", label: "Mercredi", short: "Mer" },
    { key: "jeudi", label: "Jeudi", short: "Jeu" },
    { key: "vendredi", label: "Vendredi", short: "Ven" },
    { key: "samedi", label: "Samedi", short: "Sam" },
    { key: "dimanche", label: "Dimanche", short: "Dim" }
  ];

  var NAV = {
    admin: [
      { view: "conseillers", label: "Conseillers" },
      { view: "plannings", label: "Plannings" },
      { view: "signalements", label: "Signalements" },
      { view: "paie", label: "Paie" }
    ],
    direction: [
      { view: "conseillers", label: "Conseillers" },
      { view: "plannings", label: "Plannings" },
      { view: "signalements", label: "Signalements" },
      { view: "paie", label: "Paie" }
    ],
    conseiller: [
      { view: "mon-planning", label: "Mon planning" },
      { view: "signaler", label: "Signaler" }
    ]
  };

  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var db = firebase.firestore();
  var emailjsReady = false;
  try {
    if (emailjsConfig.publicKey && emailjsConfig.publicKey.indexOf("COLLE_") !== 0) {
      emailjs.init({ publicKey: emailjsConfig.publicKey });
      emailjsReady = true;
    }
  } catch (e) { console.warn("EmailJS non initialisé", e); }

  var state = {
    uid: null,
    email: null,
    role: null,
    conseillerId: null,
    conseillers: [],
    weekValue: currentIsoWeek(),
    weekPlannings: {},
    signalements: [],
    editingConseillerId: null,
    planningTarget: null,
    moisPaie: null,
    paieRows: [],
    ownJours: null,
    ownAllPlannings: [],
    monthViewYear: new Date().getFullYear(),
    monthViewMonth: new Date().getMonth(),
    editingDayKey: null,
    unsub: {}
  };

  // ---------- helpers ----------
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = (s == null ? "" : String(s));
    return d.innerHTML;
  }
  function currentIsoWeek() {
    var now = new Date();
    var d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    var dayNum = (d.getUTCDay() + 6) % 7;
    d.setUTCDate(d.getUTCDate() - dayNum + 3);
    var firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
    var week = 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
    return d.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
  }
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._h);
    toast._h = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function timeToMinutes(t) { if (!t) return 0; var p = t.split(":"); return (+p[0]) * 60 + (+p[1]); }
  function durationMinutes(debut, fin) {
    // Gère les horaires qui chevauchent minuit (ex. 15:00 -> 00:00)
    var start = timeToMinutes(debut), end = timeToMinutes(fin);
    if (end <= start) end += 24 * 60;
    return end - start;
  }
  function fmtHours(mins) { return (Math.round((mins / 60) * 10) / 10) + "h"; }
  function fmtEuros(n) { return (Math.round(n * 100) / 100).toFixed(2) + " €"; }
  function slugCode(code) { return (code || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }
  var TYPE_LABELS = { retard: "Retard", absence: "Absence", maladie: "Maladie", conge: "Congé" };
  var TYPES_DEDUCTIBLES = ["absence", "maladie", "conge"];
  function currentMonth() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
  }
  function isoWeekMonday(semaine) {
    var parts = semaine.split("-W");
    var year = +parts[0], week = +parts[1];
    var simple = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));
    var dow = simple.getUTCDay() || 7;
    if (dow <= 4) simple.setUTCDate(simple.getUTCDate() - dow + 1);
    else simple.setUTCDate(simple.getUTCDate() + 8 - dow);
    return simple;
  }
  function dateForDayInWeek(semaine, dayIndex) {
    var d = new Date(isoWeekMonday(semaine));
    d.setUTCDate(d.getUTCDate() + dayIndex);
    return d;
  }
  function toDateStr(d) { return d.toISOString().slice(0, 10); }
  function monthOfDate(d) { return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0"); }
  function emptyPlanningJours() {
    var o = {};
    JOURS.forEach(function (j) { o[j.key] = { debut: "09:00", fin: "17:00", repos: false, ferie: false, pauseDebut: "", pauseFin: "" }; });
    return o;
  }
  function dayWorkedMinutes(d) {
    if (!d || d.repos) return 0;
    var mins = durationMinutes(d.debut, d.fin);
    if (d.pauseDebut && d.pauseFin) mins -= durationMinutes(d.pauseDebut, d.pauseFin);
    return Math.max(0, mins);
  }
  function computeSalary(jours, tauxSem, tauxDim) {
    var minNormales = 0, minDim = 0;
    JOURS.forEach(function (j) {
      var d = jours[j.key];
      if (!d || d.repos) return;
      var mins = dayWorkedMinutes(d);
      if (j.key === "dimanche" || d.ferie) minDim += mins; else minNormales += mins;
    });
    var montantNormal = (minNormales / 60) * (tauxSem || 0);
    var montantDim = (minDim / 60) * (tauxDim || 0);
    return {
      minNormales: minNormales, minDim: minDim,
      totalMin: minNormales + minDim,
      montantNormal: montantNormal, montantDim: montantDim,
      total: montantNormal + montantDim
    };
  }

  // ---------- auth ----------
  $("btn-login").addEventListener("click", function () {
    var raw = $("login-email").value.trim();
    var pw = $("login-password").value;
    $("login-error").hidden = true;
    if (!raw || !pw) { showLoginError("Identifiant et mot de passe requis."); return; }
    var btn = $("btn-login");
    btn.disabled = true;
    var resolveEmail = raw.indexOf("@") !== -1
      ? Promise.resolve(raw)
      : db.collection("agentLogins").doc(slugCode(raw)).get().then(function (docSnap) {
          if (!docSnap.exists) throw { code: "auth/user-not-found" };
          return docSnap.data().email;
        });
    resolveEmail
      .then(function (email) { return auth.signInWithEmailAndPassword(email, pw); })
      .catch(function (e) { showLoginError(translateAuthError(e)); })
      .finally(function () { btn.disabled = false; });
  });
  $("btn-forgot").addEventListener("click", function () {
    var raw = $("login-email").value.trim();
    if (!raw) { showLoginError("Renseigne ton email ou code agent d'abord, puis clique à nouveau."); return; }
    var resolveEmail = raw.indexOf("@") !== -1
      ? Promise.resolve(raw)
      : db.collection("agentLogins").doc(slugCode(raw)).get().then(function (docSnap) {
          if (!docSnap.exists) throw { code: "auth/user-not-found" };
          return docSnap.data().email;
        });
    resolveEmail.then(function (email) {
      return auth.sendPasswordResetEmail(email);
    }).then(function () {
      showLoginMsg("Email de réinitialisation envoyé si ce compte existe.");
    }).catch(function (e) { showLoginError(translateAuthError(e)); });
  });
  function showLoginError(msg) { var el = $("login-error"); el.textContent = msg; el.hidden = false; $("login-msg").hidden = true; }
  function showLoginMsg(msg) { var el = $("login-msg"); el.textContent = msg; el.hidden = false; $("login-error").hidden = true; }
  function translateAuthError(e) {
    var code = e && e.code || "";
    if (code.indexOf("user-not-found") !== -1 || code.indexOf("wrong-password") !== -1 || code.indexOf("invalid-credential") !== -1) return "Email ou mot de passe incorrect.";
    if (code.indexOf("too-many-requests") !== -1) return "Trop de tentatives, réessaie plus tard.";
    if (code.indexOf("invalid-email") !== -1) return "Email invalide.";
    return "Erreur de connexion (" + code + ").";
  }

  $("btn-logout").addEventListener("click", function () { auth.signOut(); });

  auth.onAuthStateChanged(function (user) {
    Object.keys(state.unsub).forEach(function (k) { if (state.unsub[k]) state.unsub[k](); });
    state.unsub = {};
    if (!user) {
      $("app").className = "";
      $("login-screen").hidden = false;
      state.uid = null; state.role = null; state.conseillerId = null;
      return;
    }
    state.uid = user.uid;
    state.email = user.email;
    db.collection("users").doc(user.uid).get().then(function (docSnap) {
      if (!docSnap.exists) {
        showLoginError("Compte non configuré. Contacte l'administrateur.");
        auth.signOut();
        return;
      }
      var data = docSnap.data();
      state.role = data.role;
      state.conseillerId = data.conseillerId || null;
      $("login-screen").hidden = true;
      $("app").className = "ready";
      $("user-email").textContent = state.email;
      var badge = $("role-badge");
      badge.textContent = roleLabel(state.role);
      badge.classList.toggle("is-admin", state.role === "admin" || state.role === "direction");
      renderNav();
      wireViewForRole();
    });
  });

  function roleLabel(r) {
    if (r === "admin") return "Administrateur";
    if (r === "direction") return "Direction";
    return "Conseiller";
  }

  // ---------- nav ----------
  function renderNav() {
    var items = NAV[state.role] || [];
    var nav = $("nav");
    nav.innerHTML = items.map(function (it, i) {
      return '<div class="nav-item' + (i === 0 ? " active" : "") + '" data-view="' + it.view + '">' + esc(it.label) + '</div>';
    }).join("");
    document.querySelectorAll("section[data-roles]").forEach(function (sec) {
      var roles = sec.getAttribute("data-roles").split(",");
      sec.hidden = roles.indexOf(state.role) === -1 || sec.id !== "view-" + items[0].view;
    });
    nav.querySelectorAll(".nav-item").forEach(function (el) {
      el.addEventListener("click", function () {
        nav.querySelectorAll(".nav-item").forEach(function (n) { n.classList.remove("active"); });
        el.classList.add("active");
        var view = el.getAttribute("data-view");
        document.querySelectorAll("section[data-roles]").forEach(function (sec) {
          sec.hidden = sec.id !== "view-" + view;
        });
      });
    });
  }

  function wireViewForRole() {
    if (state.role === "admin" || state.role === "direction") {
      subscribeConseillers();
      subscribePlanningsForWeek();
      subscribeSignalements();
      $("week-input").value = state.weekValue;
      $("week-input").addEventListener("change", function () {
        state.weekValue = $("week-input").value || currentIsoWeek();
        subscribePlanningsForWeek();
      });
      state.moisPaie = currentMonth();
      $("month-input").value = state.moisPaie;
      $("month-input").addEventListener("change", function () {
        state.moisPaie = $("month-input").value || currentMonth();
        loadPaie();
      });
      $("btn-export-paie").addEventListener("click", exportPaieCsv);
    } else if (state.role === "conseiller") {
      $("week-input-conseiller").value = state.weekValue;
      $("week-input-conseiller").addEventListener("change", function () {
        state.weekValue = $("week-input-conseiller").value || currentIsoWeek();
        loadOwnPlanning();
      });
      loadOwnPlanning();
      loadOwnAnnualView();
      subscribeMesSignalements();
    }
  }

  // ======================================================
  // CONSEILLERS
  // ======================================================
  $("search-conseillers") && $("search-conseillers").addEventListener("input", renderConseillersTable);
  $("filter-statut") && $("filter-statut").addEventListener("change", renderConseillersTable);
  $("btn-add-conseiller") && $("btn-add-conseiller").addEventListener("click", function () { openConseillerModal(null); });

  function subscribeConseillers() {
    state.unsub.conseillers = db.collection("conseillers").onSnapshot(function (snap) {
      state.conseillers = snap.docs.map(function (d) { var data = d.data() || {}; data._id = d.id; return data; });
      state.conseillers.sort(function (a, b) {
        return (a.nom || "").localeCompare(b.nom || "") || (a.prenom || "").localeCompare(b.prenom || "");
      });
      renderStats();
      renderConseillersTable();
      renderPlanningsTable();
      if (state.moisPaie) loadPaie();
    }, function (err) { console.error(err); });
  }

  function renderStats() {
    var total = state.conseillers.length;
    var actifs = state.conseillers.filter(function (c) { return c.statut !== "inactif"; }).length;
    $("conseiller-stats").innerHTML =
      statCard(total, "Comptes au total") + statCard(actifs, "Actifs");
  }
  function statCard(num, label) { return '<div class="stat"><div class="num">' + num + '</div><div class="label">' + esc(label) + '</div></div>'; }

  function renderConseillersTable() {
    var q = ($("search-conseillers").value || "").toLowerCase().trim();
    var statutFilter = $("filter-statut").value;
    var rows = state.conseillers.filter(function (c) {
      if (statutFilter && (c.statut || "actif") !== statutFilter) return false;
      if (q) {
        var hay = ((c.prenom || "") + " " + (c.nom || "") + " " + (c.email || "")).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    var tbody = $("conseillers-tbody");
    if (rows.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9"><div class="empty-state"><div class="big">Aucun conseiller</div>Ajoute le premier compte avec le bouton ci-dessus.</div></td></tr>';
      return;
    }
    tbody.innerHTML = rows.map(function (c) {
      var nomComplet = esc(((c.prenom || "") + " " + (c.nom || "")).trim()) || "(sans nom)";
      var statut = c.statut || "actif";
      var dateAjout = c.dateAjout ? new Date(c.dateAjout).toLocaleDateString("fr-FR") : "—";
      return '<tr>' +
        '<td>' + esc(c.codeAgent || "—") + '</td>' +
        '<td class="name-cell">' + nomComplet + (c.email ? '<span class="email">' + esc(c.email) + '</span>' : '') + '</td>' +
        '<td><span class="badge badge-status-' + statut + '">' + (statut === "actif" ? "Actif" : "Inactif") + '</span></td>' +
        '<td>' + fmtEuros(c.tauxHoraireSemaine || 0) + '</td>' +
        '<td>' + fmtEuros(c.tauxHoraireDimancheFerie || 0) + '</td>' +
        '<td>' + fmtEuros(c.primeLangue || 0) + '</td>' +
        '<td>' + fmtEuros(c.primeTeletravail || 0) + '</td>' +
        '<td>' + dateAjout + '</td>' +
        '<td><div class="row-actions"><button class="btn btn-ghost btn-sm" data-edit="' + c._id + '">Modifier</button></div></td>' +
        '</tr>';
    }).join("");
    tbody.querySelectorAll("[data-edit]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var c = state.conseillers.find(function (x) { return x._id === btn.getAttribute("data-edit"); });
        if (c) openConseillerModal(c);
      });
    });
  }

  function openConseillerModal(c) {
    state.editingConseillerId = c ? c._id : null;
    $("conseiller-error").hidden = true;
    $("conseiller-modal-title").textContent = c ? "Modifier le conseiller" : "Ajouter un conseiller";
    $("f-prenom").value = c ? (c.prenom || "") : "";
    $("f-nom").value = c ? (c.nom || "") : "";
    $("f-code").value = c ? (c.codeAgent || "") : "";
    $("f-email").value = c ? (c.email || "") : "";
    $("f-email").disabled = !!(c && c.uid && c.email);
    $("f-password-wrap").hidden = !!(c && c.uid && c.email);
    $("f-password-wrap").querySelector("label").textContent = (c && !c.uid) ? "Créer un mot de passe temporaire" : "Mot de passe temporaire";
    $("f-password").value = "";
    $("f-taux-sem").value = c ? (c.tauxHoraireSemaine || 0) : "";
    $("f-taux-dim").value = c ? (c.tauxHoraireDimancheFerie || 0) : "";
    $("f-prime-langue").value = c ? (c.primeLangue || 0) : 0;
    $("f-prime-tele").value = c ? (c.primeTeletravail || 0) : 0;
    $("f-statut").value = c ? (c.statut || "actif") : "actif";
    $("btn-delete-conseiller").hidden = !c;
    $("btn-reset-password").hidden = !(c && c.uid && c.email);
    showModal("modal-conseiller");
  }

  $("btn-cancel-conseiller").addEventListener("click", closeModals);
  $("btn-save-conseiller").addEventListener("click", saveConseiller);
  $("btn-delete-conseiller").addEventListener("click", deleteConseiller);
  $("btn-reset-password").addEventListener("click", function () {
    var email = $("f-email").value.trim();
    if (!email) return;
    auth.sendPasswordResetEmail(email).then(function () { toast("Lien de réinitialisation envoyé à " + email); })
      .catch(function () { toast("Impossible d'envoyer le lien."); });
  });

  function saveConseiller() {
    var prenom = $("f-prenom").value.trim();
    var nom = $("f-nom").value.trim();
    var email = $("f-email").value.trim();
    var codeAgent = $("f-code").value.trim();
    var errEl = $("conseiller-error");
    var existing = state.editingConseillerId ? state.conseillers.find(function (x) { return x._id === state.editingConseillerId; }) : null;
    var needsAccount = !existing || !existing.uid || !existing.email;

    if (!prenom || !nom) { errEl.textContent = "Prénom et nom sont requis."; errEl.hidden = false; return; }
    if (needsAccount && !email) { errEl.textContent = "Email requis pour créer le compte de connexion."; errEl.hidden = false; return; }
    var payload = {
      prenom: prenom, nom: nom, email: email, codeAgent: codeAgent,
      tauxHoraireSemaine: parseFloat($("f-taux-sem").value) || 0,
      tauxHoraireDimancheFerie: parseFloat($("f-taux-dim").value) || 0,
      primeLangue: parseFloat($("f-prime-langue").value) || 0,
      primeTeletravail: parseFloat($("f-prime-tele").value) || 0,
      statut: $("f-statut").value
    };
    var btn = $("btn-save-conseiller");
    btn.disabled = true;

    function saveAgentLogin() {
      if (!codeAgent || !email) return Promise.resolve();
      return db.collection("agentLogins").doc(slugCode(codeAgent)).set({ email: email });
    }

    if (existing && !needsAccount) {
      // Conseiller déjà pourvu d'un compte de connexion : simple mise à jour
      db.collection("conseillers").doc(state.editingConseillerId).update(payload)
        .then(saveAgentLogin)
        .then(function () { toast("Conseiller mis à jour."); closeModals(); })
        .catch(function (e) { errEl.textContent = "Erreur : " + (e && e.code || e); errEl.hidden = false; })
        .finally(function () { btn.disabled = false; });
      return;
    }

    // Création d'un compte de connexion (conseiller tout nouveau, ou conseiller
    // existant importé qui n'avait pas encore d'email/mot de passe)
    var pw = $("f-password").value;
    if (!pw || pw.length < 6) { errEl.textContent = "Mot de passe temporaire requis (6 caractères min)."; errEl.hidden = false; btn.disabled = false; return; }

    var secondaryName = "Secondary_" + Date.now();
    var secondaryApp = firebase.initializeApp(firebaseConfig, secondaryName);
    secondaryApp.auth().createUserWithEmailAndPassword(email, pw)
      .then(function (cred) {
        var newUid = cred.user.uid;
        return secondaryApp.auth().signOut().then(function () { return newUid; });
      })
      .then(function (newUid) {
        payload.uid = newUid;
        var conseillerId = existing ? existing._id : null;
        var savePromise;
        if (conseillerId) {
          savePromise = db.collection("conseillers").doc(conseillerId).update(payload).then(function () { return conseillerId; });
        } else {
          payload.dateAjout = new Date().toISOString();
          savePromise = db.collection("conseillers").add(payload).then(function (docRef) { return docRef.id; });
        }
        return savePromise.then(function (cId) {
          return db.collection("users").doc(newUid).set({
            email: email, role: "conseiller", conseillerId: cId, createdAt: new Date().toISOString()
          });
        });
      })
      .then(saveAgentLogin)
      .then(function () {
        toast("Compte créé. Communique l'email et le mot de passe temporaire au conseiller.");
        closeModals();
      })
      .catch(function (e) {
        errEl.textContent = "Erreur : " + translateAuthError(e);
        errEl.hidden = false;
      })
      .finally(function () {
        btn.disabled = false;
        secondaryApp.delete().catch(function () {});
      });
  }

  function deleteConseiller() {
    if (!state.editingConseillerId) return;
    if (!confirm("Supprimer ce conseiller ? Son compte de connexion ne sera plus lié (à supprimer manuellement dans Firebase Authentication si besoin).")) return;
    db.collection("conseillers").doc(state.editingConseillerId).delete()
      .then(function () { toast("Conseiller supprimé."); closeModals(); })
      .catch(function () { toast("Suppression impossible."); });
  }

  // ======================================================
  // PLANNINGS (admin/direction)
  // ======================================================
  function subscribePlanningsForWeek() {
    if (state.unsub.plannings) state.unsub.plannings();
    var week = state.weekValue;
    state.unsub.plannings = db.collection("plannings").where("semaine", "==", week)
      .onSnapshot(function (snap) {
        if (state.weekValue !== week) return;
        var map = {};
        snap.docs.forEach(function (d) { var data = d.data() || {}; map[data.conseillerId] = data; });
        state.weekPlannings = map;
        renderPlanningsTable();
      }, function (err) { console.error(err); });
  }

  function renderPlanningsTable() {
    var actifs = state.conseillers.filter(function (c) { return (c.statut || "actif") === "actif"; });
    var tbody = $("plannings-tbody");
    if (!tbody) return;
    if (actifs.length === 0) {
      tbody.innerHTML = '<tr><td colspan="10"><div class="empty-state"><div class="big">Aucun conseiller actif</div></div></td></tr>';
      return;
    }
    tbody.innerHTML = actifs.map(function (c) {
      var plan = state.weekPlannings[c._id];
      var jours = plan && plan.jours ? plan.jours : null;
      var dayCells = JOURS.map(function (j) {
        var d = jours ? jours[j.key] : null;
        if (!d || d.repos) return '<td><span class="day-off">Repos</span></td>';
        var cls = d.ferie || j.key === "dimanche" ? "day-hours day-ferie" : "day-hours";
        return '<td><span class="' + cls + '">' + esc(d.debut) + '–' + esc(d.fin) + '</span></td>';
      }).join("");
      var sal = jours ? computeSalary(jours, c.tauxHoraireSemaine, c.tauxHoraireDimancheFerie) : { totalMin: 0, total: 0 };
      var nomComplet = esc(((c.prenom || "") + " " + (c.nom || "")).trim());
      return '<tr>' +
        '<td class="name-cell">' + nomComplet + '</td>' + dayCells +
        '<td><strong>' + fmtHours(sal.totalMin) + '</strong></td>' +
        '<td>' + fmtEuros(sal.total) + '</td>' +
        '<td><div class="row-actions"><button class="btn btn-ghost btn-sm" data-plan="' + c._id + '">Modifier</button></div></td>' +
        '</tr>';
    }).join("");
    tbody.querySelectorAll("[data-plan]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var c = state.conseillers.find(function (x) { return x._id === btn.getAttribute("data-plan"); });
        if (c) openPlanningModal(c);
      });
    });
  }

  function openPlanningModal(c) {
    var existing = state.weekPlannings[c._id];
    var jours = existing && existing.jours ? JSON.parse(JSON.stringify(existing.jours)) : emptyPlanningJours();
    state.planningTarget = { conseillerId: c._id, conseiller: c, jours: jours };
    $("planning-modal-title").textContent = "Planning — " + ((c.prenom || "") + " " + (c.nom || "")).trim();
    $("planning-modal-sub").textContent = "Semaine " + state.weekValue;
    var grid = $("planning-grid");
    grid.innerHTML = JOURS.map(function (j) {
      var d = jours[j.key];
      return '<div class="grid-days" data-day="' + j.key + '">' +
        '<div class="day-name">' + j.label + '</div>' +
        '<div><input type="time" class="f-debut" value="' + esc(d.debut) + '" ' + (d.repos ? "disabled" : "") + '></div>' +
        '<div><input type="time" class="f-fin" value="' + esc(d.fin) + '" ' + (d.repos ? "disabled" : "") + '></div>' +
        '<label class="toggle"><input type="checkbox" class="f-repos" ' + (d.repos ? "checked" : "") + '> Repos</label>' +
        '<label class="toggle"><input type="checkbox" class="f-ferie" ' + (d.ferie ? "checked" : "") + '> Férié</label>' +
        '</div>' +
        '<div class="pause-row" data-pause-for="' + j.key + '">' +
        '<span class="pause-label">Pause</span>' +
        '<input type="time" class="f-pause-debut" value="' + esc(d.pauseDebut || "") + '" ' + (d.repos ? "disabled" : "") + '>' +
        '<span>–</span>' +
        '<input type="time" class="f-pause-fin" value="' + esc(d.pauseFin || "") + '" ' + (d.repos ? "disabled" : "") + '>' +
        '</div>';
    }).join("");
    grid.querySelectorAll(".grid-days").forEach(function (row) {
      var key = row.getAttribute("data-day");
      var pauseRow = grid.querySelector('.pause-row[data-pause-for="' + key + '"]');
      var repos = row.querySelector(".f-repos"), debut = row.querySelector(".f-debut"), fin = row.querySelector(".f-fin");
      var pDebut = pauseRow.querySelector(".f-pause-debut"), pFin = pauseRow.querySelector(".f-pause-fin");
      repos.addEventListener("change", function () {
        debut.disabled = repos.checked; fin.disabled = repos.checked;
        pDebut.disabled = repos.checked; pFin.disabled = repos.checked;
        recomputePlanningPreview();
      });
      row.querySelector(".f-ferie").addEventListener("change", recomputePlanningPreview);
      debut.addEventListener("change", recomputePlanningPreview);
      fin.addEventListener("change", recomputePlanningPreview);
      pDebut.addEventListener("change", recomputePlanningPreview);
      pFin.addEventListener("change", recomputePlanningPreview);
    });
    recomputePlanningPreview();
    showModal("modal-planning");
  }

  function readGridJours() {
    var jours = {};
    document.querySelectorAll("#planning-grid .grid-days").forEach(function (row) {
      var key = row.getAttribute("data-day");
      var pauseRow = document.querySelector('.pause-row[data-pause-for="' + key + '"]');
      jours[key] = {
        debut: row.querySelector(".f-debut").value || "09:00",
        fin: row.querySelector(".f-fin").value || "17:00",
        repos: row.querySelector(".f-repos").checked,
        ferie: row.querySelector(".f-ferie").checked,
        pauseDebut: pauseRow.querySelector(".f-pause-debut").value || "",
        pauseFin: pauseRow.querySelector(".f-pause-fin").value || ""
      };
    });
    return jours;
  }

  function recomputePlanningPreview() {
    var jours = readGridJours();
    var c = state.planningTarget.conseiller;
    var sal = computeSalary(jours, c.tauxHoraireSemaine, c.tauxHoraireDimancheFerie);
    $("planning-total").textContent = fmtHours(sal.totalMin);
    $("planning-salary").innerHTML =
      '<div class="salary-line"><span>Heures normales (' + fmtHours(sal.minNormales) + ') × ' + fmtEuros(c.tauxHoraireSemaine || 0) + '/h</span><span>' + fmtEuros(sal.montantNormal) + '</span></div>' +
      '<div class="salary-line"><span>Heures dim./férié (' + fmtHours(sal.minDim) + ') × ' + fmtEuros(c.tauxHoraireDimancheFerie || 0) + '/h</span><span>' + fmtEuros(sal.montantDim) + '</span></div>' +
      '<div class="salary-line total"><span>Total semaine</span><span>' + fmtEuros(sal.total) + '</span></div>';
  }

  function toIsoWeekString(d) {
    var date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
    var dayNum = (date.getUTCDay() + 6) % 7;
    date.setUTCDate(date.getUTCDate() - dayNum + 3);
    var firstThursday = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
    var week = 1 + Math.round(((date - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
    return date.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
  }
  function addWeeks(semaine, n) {
    var monday = isoWeekMonday(semaine);
    var d = new Date(monday);
    d.setUTCDate(d.getUTCDate() + n * 7);
    return toIsoWeekString(d);
  }

  $("btn-cancel-planning").addEventListener("click", closeModals);
  $("btn-save-planning").addEventListener("click", function () {
    if (!state.planningTarget) return;
    var jours = readGridJours();
    var docId = state.weekValue + "_" + state.planningTarget.conseillerId;
    var btn = $("btn-save-planning");
    btn.disabled = true;
    db.collection("plannings").doc(docId).set({
      conseillerId: state.planningTarget.conseillerId, semaine: state.weekValue, jours: jours,
      misAJourLe: new Date().toISOString()
    }).then(function () { toast("Planning enregistré."); closeModals(); })
      .catch(function () { toast("Enregistrement impossible."); })
      .finally(function () { btn.disabled = false; });
  });

  $("btn-duplicate-planning").addEventListener("click", function () {
    if (!state.planningTarget) return;
    var n = parseInt($("f-duplicate-weeks").value, 10) || 0;
    if (n < 1) { toast("Indique un nombre de semaines valide."); return; }
    var jours = readGridJours();
    var conseillerId = state.planningTarget.conseillerId;
    var baseWeek = state.weekValue;
    var btn = $("btn-duplicate-planning");
    btn.disabled = true;
    var batchPromises = [];
    for (var i = 1; i <= n; i++) {
      var week = addWeeks(baseWeek, i);
      var docId = week + "_" + conseillerId;
      batchPromises.push(db.collection("plannings").doc(docId).set({
        conseillerId: conseillerId, semaine: week, jours: jours, misAJourLe: new Date().toISOString()
      }));
    }
    Promise.all(batchPromises)
      .then(function () { toast("Planning dupliqué sur " + n + " semaine(s)."); closeModals(); })
      .catch(function () { toast("Erreur lors de la duplication."); })
      .finally(function () { btn.disabled = false; });
  });

  // ======================================================
  // SIGNALEMENTS — vue admin/direction
  // ======================================================
  function subscribeSignalements() {
    state.unsub.signalements = db.collection("signalements").orderBy("createdAt", "desc").limit(100)
      .onSnapshot(function (snap) {
        state.signalements = snap.docs.map(function (d) { var data = d.data() || {}; data._id = d.id; return data; });
        renderSignalementsTable();
      }, function (err) { console.error(err); });
  }
  function renderSignalementsTable() {
    var tbody = $("signalements-tbody");
    if (!tbody) return;
    if (state.signalements.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><div class="big">Aucun signalement</div></div></td></tr>';
      return;
    }
    tbody.innerHTML = state.signalements.map(function (s) {
      var declLe = s.createdAt ? new Date(s.createdAt).toLocaleString("fr-FR") : "—";
      return '<tr>' +
        '<td class="name-cell">' + esc(s.conseillerNom || "—") + '</td>' +
        '<td><span class="badge badge-signal">' + (TYPE_LABELS[s.type] || s.type) + '</span></td>' +
        '<td>' + esc(s.date || "—") + (s.dateFin ? " → " + esc(s.dateFin) : "") + '</td>' +
        '<td>' + esc(s.message || "") + '</td>' +
        '<td>' + declLe + '</td>' +
        '<td>' + (s.statut === "traite" ? "Traité" : "Nouveau") + '</td>' +
        '<td>' + (s.statut !== "traite" ? '<button class="btn btn-ghost btn-sm" data-traite="' + s._id + '">Marquer traité</button>' : '') + '</td>' +
        '</tr>';
    }).join("");
    tbody.querySelectorAll("[data-traite]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        db.collection("signalements").doc(btn.getAttribute("data-traite")).update({ statut: "traite" });
      });
    });
  }

  // ======================================================
  // PAIE — vue admin/direction
  // ======================================================
  function loadPaie() {
    var mois = state.moisPaie;
    var tbody = $("paie-tbody");
    tbody.innerHTML = '<tr><td colspan="9"><div class="empty-state">Chargement…</div></td></tr>';

    Promise.all([
      db.collection("plannings").get(),
      db.collection("signalements").get(),
      db.collection("primesMensuelles").where("mois", "==", mois).get()
    ]).then(function (results) {
      if (state.moisPaie !== mois) return; // l'utilisateur a changé de mois entre temps
      var planningsSnap = results[0], signalementsSnap = results[1], primesSnap = results[2];

      // absences déclarées (jours à exclure) pour ce mois, par conseiller
      var absencesParConseiller = {}; // conseillerId -> Set(dateStr)
      signalementsSnap.docs.forEach(function (d) {
        var s = d.data();
        if (!s.date || TYPES_DEDUCTIBLES.indexOf(s.type) === -1) return;
        var finRange = s.dateFin || s.date;
        // ignore complètement si toute la période est hors du mois affiché
        if (finRange.slice(0, 7) < mois || s.date.slice(0, 7) > mois) return;
        if (!absencesParConseiller[s.conseillerId]) absencesParConseiller[s.conseillerId] = {};
        var cur = new Date(s.date + "T00:00:00Z");
        var fin = new Date(finRange + "T00:00:00Z");
        while (cur <= fin) {
          var dStr = toDateStr(cur);
          if (dStr.slice(0, 7) === mois) absencesParConseiller[s.conseillerId][dStr] = true;
          cur.setUTCDate(cur.getUTCDate() + 1);
        }
      });

      // primes variables saisies pour ce mois
      var primesVariables = {};
      primesSnap.docs.forEach(function (d) {
        var p = d.data();
        primesVariables[p.conseillerId] = p.primeVariable || 0;
      });

      // regrouper les plannings du mois par conseiller
      var planningsParConseiller = {};
      planningsSnap.docs.forEach(function (d) {
        var p = d.data();
        if (!p.semaine || !p.jours) return;
        var monday = isoWeekMonday(p.semaine);
        if (monthOfDate(monday) !== mois) return;
        (planningsParConseiller[p.conseillerId] = planningsParConseiller[p.conseillerId] || []).push(p);
      });

      var actifs = state.conseillers.filter(function (c) { return (c.statut || "actif") === "actif"; });
      state.paieRows = actifs.map(function (c) {
        var minNormales = 0, minDim = 0, minAbsence = 0;
        var absSet = absencesParConseiller[c._id] || {};
        (planningsParConseiller[c._id] || []).forEach(function (p) {
          JOURS.forEach(function (j, idx) {
            var day = p.jours[j.key];
            if (!day || day.repos) return;
            var dateStr = toDateStr(dateForDayInWeek(p.semaine, idx));
            var mins = dayWorkedMinutes(day);
            var estDim = j.key === "dimanche" || day.ferie;
            if (absSet[dateStr]) {
              minAbsence += mins;
              return; // journée absente : non comptée dans les heures travaillées
            }
            if (estDim) minDim += mins; else minNormales += mins;
          });
        });
        var gainsHoraires = (minNormales / 60) * (c.tauxHoraireSemaine || 0) + (minDim / 60) * (c.tauxHoraireDimancheFerie || 0);
        var primeVariable = primesVariables.hasOwnProperty(c._id) ? primesVariables[c._id] : 0;
        var primeLangue = c.primeLangue || 0;
        var primeTeletravail = c.primeTeletravail || 0;
        var total = gainsHoraires + primeLangue + primeTeletravail + primeVariable;
        return {
          conseiller: c, minNormales: minNormales, minDim: minDim, minAbsence: minAbsence,
          gainsHoraires: gainsHoraires, primeLangue: primeLangue, primeTeletravail: primeTeletravail,
          primeVariable: primeVariable, total: total
        };
      });

      renderPaieTable();
    }).catch(function (err) {
      console.error(err);
      tbody.innerHTML = '<tr><td colspan="9"><div class="empty-state">Erreur de chargement.</div></td></tr>';
    });
  }

  function renderPaieTable() {
    var rows = state.paieRows || [];
    var tbody = $("paie-tbody");
    if (rows.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9"><div class="empty-state"><div class="big">Aucune donnée pour ce mois</div></div></td></tr>';
      $("paie-stats").innerHTML = "";
      return;
    }
    var totalGeneral = rows.reduce(function (s, r) { return s + r.total; }, 0);
    $("paie-stats").innerHTML = statCard(fmtEuros(totalGeneral), "Masse salariale du mois") + statCard(rows.length, "Conseillers actifs");

    tbody.innerHTML = rows.map(function (r, i) {
      var c = r.conseiller;
      var nomComplet = esc(((c.prenom || "") + " " + (c.nom || "")).trim());
      return '<tr>' +
        '<td class="name-cell">' + nomComplet + '</td>' +
        '<td>' + fmtHours(r.minNormales) + '</td>' +
        '<td>' + fmtHours(r.minDim) + '</td>' +
        '<td>' + fmtEuros(r.gainsHoraires) + '</td>' +
        '<td>' + fmtEuros(r.primeLangue) + '</td>' +
        '<td>' + fmtEuros(r.primeTeletravail) + '</td>' +
        '<td><input type="number" step="0.01" class="f-prime-variable" data-idx="' + i + '" value="' + r.primeVariable + '" style="width:90px;"></td>' +
        '<td>' + (r.minAbsence > 0 ? fmtHours(r.minAbsence) : "—") + '</td>' +
        '<td><strong>' + fmtEuros(r.total) + '</strong></td>' +
        '</tr>';
    }).join("");

    tbody.querySelectorAll(".f-prime-variable").forEach(function (input) {
      input.addEventListener("change", function () {
        var idx = +input.getAttribute("data-idx");
        var row = state.paieRows[idx];
        var val = parseFloat(input.value) || 0;
        row.primeVariable = val;
        row.total = row.gainsHoraires + row.primeLangue + row.primeTeletravail + val;
        var docId = state.moisPaie + "_" + row.conseiller._id;
        db.collection("primesMensuelles").doc(docId).set({
          conseillerId: row.conseiller._id, mois: state.moisPaie, primeVariable: val, misAJourLe: new Date().toISOString()
        }).then(function () { toast("Prime variable enregistrée."); renderPaieTable(); })
          .catch(function () { toast("Enregistrement impossible."); });
      });
    });
  }

  function exportPaieCsv() {
    var rows = state.paieRows || [];
    if (rows.length === 0) { toast("Rien à exporter pour ce mois."); return; }
    var header = ["Code agent", "Nom", "Prénom", "Heures normales", "Heures dim/férié", "Gains horaires (€)", "Prime langue (€)", "Prime télétravail (€)", "Prime variable (€)", "Heures absence déduites", "Total mensuel (€)"];
    var lines = [header.join(";")];
    rows.forEach(function (r) {
      var c = r.conseiller;
      lines.push([
        c.codeAgent || "", c.nom || "", c.prenom || "",
        (r.minNormales / 60).toFixed(2), (r.minDim / 60).toFixed(2),
        r.gainsHoraires.toFixed(2), r.primeLangue.toFixed(2), r.primeTeletravail.toFixed(2), r.primeVariable.toFixed(2),
        (r.minAbsence / 60).toFixed(2), r.total.toFixed(2)
      ].join(";"));
    });
    var csv = "\uFEFF" + lines.join("\n");
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "paie_bestcall_" + state.moisPaie + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ======================================================
  // CONSEILLER — mon planning
  // ======================================================
  function loadOwnPlanning() {
    if (!state.conseillerId) return;
    var docId = state.weekValue + "_" + state.conseillerId;
    db.collection("plannings").doc(docId).get().then(function (docSnap) {
      var jours = docSnap.exists ? docSnap.data().jours : emptyPlanningJours();
      renderOwnPlanning(jours);
    }).catch(function (err) { console.error(err); });
  }
  function renderOwnPlanning(jours) {
    state.ownJours = jours;
    var tbody = $("mon-planning-tbody");
    var totalMin = 0;
    tbody.innerHTML = JOURS.map(function (j) {
      var d = jours[j.key];
      var editBtn = '<button class="btn btn-ghost btn-sm" data-edit-day="' + j.key + '">Modifier</button>';
      if (!d || d.repos) return '<tr><td>' + j.label + '</td><td><span class="day-off">Repos</span></td><td>0h</td><td>' + editBtn + '</td></tr>';
      var mins = dayWorkedMinutes(d);
      totalMin += mins;
      var horaireTxt = esc(d.debut) + '–' + esc(d.fin) + (d.pauseDebut && d.pauseFin ? ' <span style="color:var(--muted);font-size:12px;">(pause ' + esc(d.pauseDebut) + '–' + esc(d.pauseFin) + ')</span>' : '');
      return '<tr><td>' + j.label + '</td><td>' + horaireTxt + '</td><td>' + fmtHours(mins) + '</td><td>' + editBtn + '</td></tr>';
    }).join("");
    $("own-hours-stats").innerHTML = statCard(fmtHours(totalMin), "Heures cette semaine");
    tbody.querySelectorAll("[data-edit-day]").forEach(function (btn) {
      btn.addEventListener("click", function () { openEditDayModal(btn.getAttribute("data-edit-day")); });
    });
  }

  function openEditDayModal(dayKey) {
    var jDef = JOURS.find(function (j) { return j.key === dayKey; });
    var current = (state.ownJours && state.ownJours[dayKey]) || { debut: "09:00", fin: "17:00", repos: false, ferie: false, pauseDebut: "", pauseFin: "" };
    state.editingDayKey = dayKey;
    $("edit-day-title").textContent = "Modifier — " + jDef.label;
    $("ed-debut").value = current.debut || "09:00";
    $("ed-fin").value = current.fin || "17:00";
    $("ed-pause-debut").value = current.pauseDebut || "";
    $("ed-pause-fin").value = current.pauseFin || "";
    $("ed-repos").checked = !!current.repos;
    $("ed-message").value = "";
    $("edit-day-error").hidden = true;
    showModal("modal-edit-day");
  }

  $("btn-cancel-edit-day").addEventListener("click", closeModals);
  $("btn-save-edit-day").addEventListener("click", function () {
    if (!state.editingDayKey || !state.conseillerId) return;
    var dayKey = state.editingDayKey;
    var jDef = JOURS.find(function (j) { return j.key === dayKey; });
    var ancien = (state.ownJours && state.ownJours[dayKey]) || { repos: true };
    var nouveau = {
      debut: $("ed-debut").value || "09:00",
      fin: $("ed-fin").value || "17:00",
      repos: $("ed-repos").checked,
      ferie: ancien.ferie || false,
      pauseDebut: $("ed-pause-debut").value || "",
      pauseFin: $("ed-pause-fin").value || ""
    };
    var message = $("ed-message").value.trim();
    var docId = state.weekValue + "_" + state.conseillerId;
    var btn = $("btn-save-edit-day");
    btn.disabled = true;
    var fieldUpdate = {};
    fieldUpdate["jours." + dayKey] = nouveau;
    fieldUpdate.conseillerId = state.conseillerId;
    fieldUpdate.semaine = state.weekValue;
    fieldUpdate.misAJourLe = new Date().toISOString();
    db.collection("plannings").doc(docId).set(fieldUpdate, { merge: true })
      .then(function () {
        toast("Jour mis à jour.");
        closeModals();
        loadOwnPlanning();
        return sendPlanningChangeEmail(jDef.label, ancien, nouveau, message);
      })
      .catch(function (e) {
        $("edit-day-error").textContent = "Erreur : " + (e && e.code || e);
        $("edit-day-error").hidden = false;
      })
      .finally(function () { btn.disabled = false; });
  });

  function sendPlanningChangeEmail(jourLabel, ancien, nouveau, message) {
    if (!emailjsReady) return Promise.resolve();
    return db.collection("conseillers").doc(state.conseillerId).get().then(function (cSnap) {
      var c = cSnap.data() || {};
      var conseillerNom = ((c.prenom || "") + " " + (c.nom || "")).trim();
      var ancienTxt = ancien.repos ? "Repos" : (ancien.debut + "–" + ancien.fin + (ancien.pauseDebut && ancien.pauseFin ? " (pause " + ancien.pauseDebut + "–" + ancien.pauseFin + ")" : ""));
      var nouveauTxt = nouveau.repos ? "Repos" : (nouveau.debut + "–" + nouveau.fin + (nouveau.pauseDebut && nouveau.pauseFin ? " (pause " + nouveau.pauseDebut + "–" + nouveau.pauseFin + ")" : ""));
      return db.collection("users").where("role", "==", "direction").limit(1).get().then(function (snap) {
        if (snap.empty) return;
        var directionEmail = snap.docs[0].data().email;
        return emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
          to_email: directionEmail,
          conseiller_nom: conseillerNom,
          type_signal: "Modification planning",
          date_signal: jourLabel + " (semaine " + state.weekValue + ") : " + ancienTxt + " → " + nouveauTxt,
          message_signal: message || "(aucun détail)"
        });
      });
    }).catch(function (e) { console.warn("Email non envoyé", e); });
  }

  function loadOwnAnnualView() {
    if (!state.conseillerId) return;
    var START_MONTH = "2026-09"; // vue annuelle : démarre à septembre, ne remonte pas avant
    db.collection("plannings").where("conseillerId", "==", state.conseillerId).get()
      .then(function (snap) {
        // cache brut pour la vue mensuelle (calendrier)
        state.ownAllPlannings = snap.docs.map(function (d) { return d.data(); }).filter(function (p) { return p.jours && p.semaine; });
        renderMonthView();

        var byMonth = {};
        state.ownAllPlannings.forEach(function (data) {
          var monday = isoWeekMonday(data.semaine);
          var mois = monthOfDate(monday);
          var totalMin = 0;
          JOURS.forEach(function (j) {
            totalMin += dayWorkedMinutes(data.jours[j.key]);
          });
          byMonth[mois] = (byMonth[mois] || 0) + totalMin;
        });
        var months = [];
        var startParts = START_MONTH.split("-");
        var startDate = new Date(Date.UTC(+startParts[0], +startParts[1] - 1, 1));
        for (var i = 0; i < 12; i++) {
          var d = new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth() + i, 1));
          months.push(monthOfDate(d));
        }
        var tbody = $("annual-view-tbody");
        tbody.innerHTML = months.map(function (m) {
          return '<tr><td>' + m + '</td><td>' + fmtHours(byMonth[m] || 0) + '</td></tr>';
        }).join("");
      }).catch(function (err) { console.error(err); });
  }

  function renderMonthView() {
    var monthDate = new Date(Date.UTC(state.monthViewYear, state.monthViewMonth, 1));
    var monthLabel = monthDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });
    $("month-view-label").textContent = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);

    // index date -> jour object, à partir des plannings déjà chargés
    var byDate = {};
    (state.ownAllPlannings || []).forEach(function (p) {
      JOURS.forEach(function (j, idx) {
        var day = p.jours[j.key];
        if (!day) return;
        var dateStr = toDateStr(dateForDayInWeek(p.semaine, idx));
        byDate[dateStr] = day;
      });
    });

    var firstOfMonth = new Date(Date.UTC(state.monthViewYear, state.monthViewMonth, 1));
    var lastOfMonth = new Date(Date.UTC(state.monthViewYear, state.monthViewMonth + 1, 0));
    var startOffset = (firstOfMonth.getUTCDay() + 6) % 7; // lundi = 0
    var todayStr = toDateStr(new Date());

    var cells = [];
    ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].forEach(function (lbl) {
      cells.push('<div class="cal-head">' + lbl + '</div>');
    });
    for (var i = 0; i < startOffset; i++) cells.push('<div class="cal-cell empty"></div>');
    for (var day = 1; day <= lastOfMonth.getUTCDate(); day++) {
      var d = new Date(Date.UTC(state.monthViewYear, state.monthViewMonth, day));
      var dateStr = toDateStr(d);
      var info = byDate[dateStr];
      var isToday = dateStr === todayStr;
      var content = '<div class="cal-daynum">' + day + '</div>';
      if (!info || info.repos) {
        content += '<div class="cal-repos">Repos</div>';
      } else {
        content += '<div class="cal-horaire">' + esc(info.debut) + '–' + esc(info.fin) + '</div>';
        if (info.pauseDebut && info.pauseFin) {
          content += '<div class="cal-pause">pause ' + esc(info.pauseDebut) + '–' + esc(info.pauseFin) + '</div>';
        }
      }
      cells.push('<div class="cal-cell' + (isToday ? " today" : "") + '">' + content + '</div>');
    }
    $("calendar-grid").innerHTML = cells.join("");
  }

  $("btn-prev-month") && $("btn-prev-month").addEventListener("click", function () {
    state.monthViewMonth--;
    if (state.monthViewMonth < 0) { state.monthViewMonth = 11; state.monthViewYear--; }
    renderMonthView();
  });
  $("btn-next-month") && $("btn-next-month").addEventListener("click", function () {
    state.monthViewMonth++;
    if (state.monthViewMonth > 11) { state.monthViewMonth = 0; state.monthViewYear++; }
    renderMonthView();
  });

  // ======================================================
  // CONSEILLER — signaler retard/absence
  // ======================================================
  $("btn-send-signal") && $("btn-send-signal").addEventListener("click", function () {
    var type = $("s-type").value;
    var date = $("s-date").value;
    var dateFin = $("s-date-fin").value || "";
    var message = $("s-message").value.trim();
    var errEl = $("signal-error"), msgEl = $("signal-msg");
    errEl.hidden = true; msgEl.hidden = true;
    if (!date) { errEl.textContent = "Choisis une date de début."; errEl.hidden = false; return; }
    if (dateFin && dateFin < date) { errEl.textContent = "La date de fin doit être après la date de début."; errEl.hidden = false; return; }

    var conseillerNom = "";
    var btn = $("btn-send-signal");
    btn.disabled = true;

    db.collection("users").doc(state.uid).get()
      .then(function () {
        return db.collection("conseillers").doc(state.conseillerId).get();
      })
      .then(function (cSnap) {
        var c = cSnap.data() || {};
        conseillerNom = ((c.prenom || "") + " " + (c.nom || "")).trim();
        var payload = {
          conseillerId: state.conseillerId, conseillerNom: conseillerNom,
          type: type, date: date, message: message,
          semaine: state.weekValue, createdAt: new Date().toISOString(), statut: "nouveau"
        };
        if (dateFin) payload.dateFin = dateFin;
        return db.collection("signalements").add(payload);
      })
      .then(function () {
        return sendSignalEmail(conseillerNom, type, date, dateFin, message);
      })
      .then(function () {
        msgEl.textContent = "Signalement envoyé, Marta a été notifiée.";
        msgEl.hidden = false;
        $("s-message").value = "";
        $("s-date-fin").value = "";
      })
      .catch(function (e) {
        errEl.textContent = "Erreur : " + (e && e.message || e);
        errEl.hidden = false;
      })
      .finally(function () { btn.disabled = false; });
  });

  function sendSignalEmail(conseillerNom, type, date, dateFin, message) {
    if (!emailjsReady) return Promise.resolve();
    return db.collection("users").where("role", "==", "direction").limit(1).get().then(function (snap) {
      if (snap.empty) return;
      var directionEmail = snap.docs[0].data().email;
      return emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        to_email: directionEmail,
        conseiller_nom: conseillerNom,
        type_signal: TYPE_LABELS[type] || type,
        date_signal: date + (dateFin ? " → " + dateFin : ""),
        message_signal: message || "(aucun détail)"
      });
    }).catch(function (e) { console.warn("Email non envoyé", e); });
  }

  function subscribeMesSignalements() {
    if (!state.conseillerId) return;
    state.unsub.mesSignalements = db.collection("signalements").where("conseillerId", "==", state.conseillerId)
      .orderBy("createdAt", "desc").limit(30).onSnapshot(function (snap) {
        var rows = snap.docs.map(function (d) { return d.data(); });
        var tbody = $("mes-signalements-tbody");
        if (rows.length === 0) { tbody.innerHTML = '<tr><td colspan="4"><div class="empty-state">Aucun signalement pour l\'instant.</div></td></tr>'; return; }
        tbody.innerHTML = rows.map(function (s) {
          var declLe = s.createdAt ? new Date(s.createdAt).toLocaleString("fr-FR") : "—";
          return '<tr><td>' + (TYPE_LABELS[s.type] || s.type) + '</td><td>' + esc(s.date) + (s.dateFin ? " → " + esc(s.dateFin) : "") + '</td><td>' + esc(s.message || "") + '</td><td>' + declLe + '</td></tr>';
        }).join("");
      }, function (err) { console.error(err); });
  }

  // ======================================================
  // Changement de mot de passe (self-service)
  // ======================================================
  $("btn-change-password").addEventListener("click", function () {
    $("pw-current").value = ""; $("pw-new").value = "";
    $("password-error").hidden = true;
    showModal("modal-password");
  });
  $("btn-cancel-password").addEventListener("click", closeModals);
  $("btn-save-password").addEventListener("click", function () {
    var current = $("pw-current").value;
    var next = $("pw-new").value;
    var errEl = $("password-error");
    if (!current || !next || next.length < 6) { errEl.textContent = "Renseigne ton mot de passe actuel et un nouveau (6 caractères min)."; errEl.hidden = false; return; }
    var user = auth.currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, current);
    user.reauthenticateWithCredential(cred)
      .then(function () { return user.updatePassword(next); })
      .then(function () { toast("Mot de passe modifié."); closeModals(); })
      .catch(function (e) { errEl.textContent = translateAuthError(e); errEl.hidden = false; });
  });

  // ---------- modal plumbing ----------
  function showModal(id) {
    $("modal-overlay").hidden = false;
    ["modal-conseiller", "modal-planning", "modal-password", "modal-edit-day"].forEach(function (m) { $(m).hidden = (m !== id); });
  }
  function closeModals() {
    $("modal-overlay").hidden = true;
    state.editingConseillerId = null;
    state.planningTarget = null;
    state.editingDayKey = null;
  }
  document.addEventListener("click", function (e) { if (e.target && e.target.id === "modal-overlay") closeModals(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModals(); });
})();
