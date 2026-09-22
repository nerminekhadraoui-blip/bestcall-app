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
      { view: "signalements", label: "Signalements" }
    ],
    direction: [
      { view: "conseillers", label: "Conseillers" },
      { view: "plannings", label: "Plannings" },
      { view: "signalements", label: "Signalements" }
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
  function emptyPlanningJours() {
    var o = {};
    JOURS.forEach(function (j) { o[j.key] = { debut: "09:00", fin: "17:00", repos: false, ferie: false }; });
    return o;
  }
  function computeSalary(jours, tauxSem, tauxDim) {
    var minNormales = 0, minDim = 0;
    JOURS.forEach(function (j) {
      var d = jours[j.key];
      if (!d || d.repos) return;
      var mins = durationMinutes(d.debut, d.fin);
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
    var email = $("login-email").value.trim();
    var pw = $("login-password").value;
    $("login-error").hidden = true;
    if (!email || !pw) { showLoginError("Email et mot de passe requis."); return; }
    auth.signInWithEmailAndPassword(email, pw).catch(function (e) {
      showLoginError(translateAuthError(e));
    });
  });
  $("btn-forgot").addEventListener("click", function () {
    var email = $("login-email").value.trim();
    if (!email) { showLoginError("Renseigne ton email d'abord, puis clique à nouveau."); return; }
    auth.sendPasswordResetEmail(email).then(function () {
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
    } else if (state.role === "conseiller") {
      $("week-input-conseiller").value = state.weekValue;
      $("week-input-conseiller").addEventListener("change", function () {
        state.weekValue = $("week-input-conseiller").value || currentIsoWeek();
        loadOwnPlanning();
      });
      loadOwnPlanning();
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
      tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><div class="big">Aucun conseiller</div>Ajoute le premier compte avec le bouton ci-dessus.</div></td></tr>';
      return;
    }
    tbody.innerHTML = rows.map(function (c) {
      var nomComplet = esc(((c.prenom || "") + " " + (c.nom || "")).trim()) || "(sans nom)";
      var statut = c.statut || "actif";
      var dateAjout = c.dateAjout ? new Date(c.dateAjout).toLocaleDateString("fr-FR") : "—";
      return '<tr>' +
        '<td class="name-cell">' + nomComplet + (c.email ? '<span class="email">' + esc(c.email) + '</span>' : '') + '</td>' +
        '<td><span class="badge badge-status-' + statut + '">' + (statut === "actif" ? "Actif" : "Inactif") + '</span></td>' +
        '<td>' + fmtEuros(c.tauxHoraireSemaine || 0) + '</td>' +
        '<td>' + fmtEuros(c.tauxHoraireDimancheFerie || 0) + '</td>' +
        '<td>' + fmtEuros(c.primeM1 || 0) + '</td>' +
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
    $("f-email").value = c ? (c.email || "") : "";
    $("f-email").disabled = !!c;
    $("f-password-wrap").hidden = !!c;
    $("f-password").value = "";
    $("f-taux-sem").value = c ? (c.tauxHoraireSemaine || 0) : "";
    $("f-taux-dim").value = c ? (c.tauxHoraireDimancheFerie || 0) : "";
    $("f-prime").value = c ? (c.primeM1 || 0) : 0;
    $("f-statut").value = c ? (c.statut || "actif") : "actif";
    $("btn-delete-conseiller").hidden = !c;
    $("btn-reset-password").hidden = !c;
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
    var errEl = $("conseiller-error");
    if (!prenom || !nom) { errEl.textContent = "Prénom et nom sont requis."; errEl.hidden = false; return; }
    if (!state.editingConseillerId && !email) { errEl.textContent = "Email requis pour créer le compte de connexion."; errEl.hidden = false; return; }
    var payload = {
      prenom: prenom, nom: nom, email: email,
      tauxHoraireSemaine: parseFloat($("f-taux-sem").value) || 0,
      tauxHoraireDimancheFerie: parseFloat($("f-taux-dim").value) || 0,
      primeM1: parseFloat($("f-prime").value) || 0,
      statut: $("f-statut").value
    };
    var btn = $("btn-save-conseiller");
    btn.disabled = true;

    if (state.editingConseillerId) {
      db.collection("conseillers").doc(state.editingConseillerId).update(payload)
        .then(function () { toast("Conseiller mis à jour."); closeModals(); })
        .catch(function (e) { errEl.textContent = "Erreur : " + (e && e.code || e); errEl.hidden = false; })
        .finally(function () { btn.disabled = false; });
      return;
    }

    var pw = $("f-password").value;
    if (!pw || pw.length < 6) { errEl.textContent = "Mot de passe temporaire requis (6 caractères min)."; errEl.hidden = false; btn.disabled = false; return; }

    // Créer le compte Auth via une instance Firebase secondaire pour ne pas déconnecter l'admin
    var secondaryName = "Secondary_" + Date.now();
    var secondaryApp = firebase.initializeApp(firebaseConfig, secondaryName);
    secondaryApp.auth().createUserWithEmailAndPassword(email, pw)
      .then(function (cred) {
        var newUid = cred.user.uid;
        return secondaryApp.auth().signOut().then(function () { return newUid; });
      })
      .then(function (newUid) {
        payload.dateAjout = new Date().toISOString();
        payload.uid = newUid;
        return db.collection("conseillers").add(payload).then(function (docRef) {
          return db.collection("users").doc(newUid).set({
            email: email, role: "conseiller", conseillerId: docRef.id, createdAt: new Date().toISOString()
          });
        });
      })
      .then(function () {
        toast("Conseiller ajouté. Communique-lui son email et mot de passe temporaire.");
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
        '</div>';
    }).join("");
    grid.querySelectorAll(".grid-days").forEach(function (row) {
      var repos = row.querySelector(".f-repos"), debut = row.querySelector(".f-debut"), fin = row.querySelector(".f-fin");
      repos.addEventListener("change", function () { debut.disabled = repos.checked; fin.disabled = repos.checked; recomputePlanningPreview(); });
      row.querySelector(".f-ferie").addEventListener("change", recomputePlanningPreview);
      debut.addEventListener("change", recomputePlanningPreview);
      fin.addEventListener("change", recomputePlanningPreview);
    });
    recomputePlanningPreview();
    showModal("modal-planning");
  }

  function readGridJours() {
    var jours = {};
    document.querySelectorAll("#planning-grid .grid-days").forEach(function (row) {
      var key = row.getAttribute("data-day");
      jours[key] = {
        debut: row.querySelector(".f-debut").value || "09:00",
        fin: row.querySelector(".f-fin").value || "17:00",
        repos: row.querySelector(".f-repos").checked,
        ferie: row.querySelector(".f-ferie").checked
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
      '<div class="salary-line total"><span>Total semaine</span><span>' + fmtEuros(sal.total) + '</span></div>' +
      '<div class="salary-line" style="color:var(--muted);"><span>Prime mois précédent (hors calcul semaine)</span><span>' + fmtEuros(c.primeM1 || 0) + '</span></div>';
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
        '<td><span class="badge badge-signal">' + (s.type === "absence" ? "Absence" : "Retard") + '</span></td>' +
        '<td>' + esc(s.date || "—") + '</td>' +
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
  // CONSEILLER — mon planning
  // ======================================================
  function loadOwnPlanning() {
    if (!state.conseillerId) return;
    var docId = state.weekValue + "_" + state.conseillerId;
    db.collection("plannings").doc(docId).get().then(function (docSnap) {
      var jours = docSnap.exists ? docSnap.data().jours : emptyPlanningJours();
      var mine = state.conseillers.find ? null : null;
      renderOwnPlanning(jours);
    }).catch(function (err) { console.error(err); });
  }
  function renderOwnPlanning(jours) {
    var tbody = $("mon-planning-tbody");
    var totalMin = 0;
    tbody.innerHTML = JOURS.map(function (j) {
      var d = jours[j.key];
      if (!d || d.repos) return '<tr><td>' + j.label + '</td><td><span class="day-off">Repos</span></td><td>0h</td></tr>';
      var mins = durationMinutes(d.debut, d.fin);
      totalMin += mins;
      return '<tr><td>' + j.label + '</td><td>' + esc(d.debut) + '–' + esc(d.fin) + '</td><td>' + fmtHours(mins) + '</td></tr>';
    }).join("");
    $("own-hours-stats").innerHTML = statCard(fmtHours(totalMin), "Heures cette semaine");
  }

  // ======================================================
  // CONSEILLER — signaler retard/absence
  // ======================================================
  $("btn-send-signal") && $("btn-send-signal").addEventListener("click", function () {
    var type = $("s-type").value;
    var date = $("s-date").value;
    var message = $("s-message").value.trim();
    var errEl = $("signal-error"), msgEl = $("signal-msg");
    errEl.hidden = true; msgEl.hidden = true;
    if (!date) { errEl.textContent = "Choisis une date."; errEl.hidden = false; return; }

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
        return db.collection("signalements").add({
          conseillerId: state.conseillerId, conseillerNom: conseillerNom,
          type: type, date: date, message: message,
          semaine: state.weekValue, createdAt: new Date().toISOString(), statut: "nouveau"
        });
      })
      .then(function () {
        return sendSignalEmail(conseillerNom, type, date, message);
      })
      .then(function () {
        msgEl.textContent = "Signalement envoyé, Marta a été notifiée.";
        msgEl.hidden = false;
        $("s-message").value = "";
      })
      .catch(function (e) {
        errEl.textContent = "Erreur : " + (e && e.message || e);
        errEl.hidden = false;
      })
      .finally(function () { btn.disabled = false; });
  });

  function sendSignalEmail(conseillerNom, type, date, message) {
    if (!emailjsReady) return Promise.resolve();
    return db.collection("users").where("role", "==", "direction").limit(1).get().then(function (snap) {
      if (snap.empty) return;
      var directionEmail = snap.docs[0].data().email;
      return emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        to_email: directionEmail,
        conseiller_nom: conseillerNom,
        type_signal: type === "absence" ? "Absence" : "Retard",
        date_signal: date,
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
          return '<tr><td>' + (s.type === "absence" ? "Absence" : "Retard") + '</td><td>' + esc(s.date) + '</td><td>' + esc(s.message || "") + '</td><td>' + declLe + '</td></tr>';
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
    ["modal-conseiller", "modal-planning", "modal-password"].forEach(function (m) { $(m).hidden = (m !== id); });
  }
  function closeModals() {
    $("modal-overlay").hidden = true;
    state.editingConseillerId = null;
    state.planningTarget = null;
  }
  document.addEventListener("click", function (e) { if (e.target && e.target.id === "modal-overlay") closeModals(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModals(); });
})();
