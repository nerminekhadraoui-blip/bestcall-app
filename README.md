# BestCall — Gestion interne

Application indépendante (Firebase Auth + Firestore + Hosting) — 100% gratuit, plan Spark.

## Ce que l'appli fait déjà

- **Connexion email + mot de passe** (pas de compte Claude requis), avec "mot de passe oublié" et changement de mot de passe par l'utilisateur.
- **3 rôles** :
  - `admin` (toi) — tout voir, tout gérer, gérer les comptes techniques
  - `direction` (Marta) — tout voir/gérer : conseillers, plannings, salaires
  - `conseiller` — voit son propre planning + ses heures, peut signaler un retard/absence
- **Gestion des conseillers** : fiche, taux horaire semaine, taux horaire dimanche/férié, prime du mois précédent, statut.
- **Plannings hebdomadaires** avec calcul automatique du salaire (heures normales vs dimanche/férié).
- **Signalement de retard/absence** par un conseiller → enregistré + email automatique à la direction (via EmailJS).

## Étapes restantes avant mise en ligne

### 1. Finir EmailJS
Dans `config.js`, remplace les 3 valeurs `COLLE_..._ICI` par tes vraies clés EmailJS (Service ID, Template ID, Public Key).

Ton template EmailJS doit utiliser ces variables : `{{to_email}}`, `{{conseiller_nom}}`, `{{type_signal}}`, `{{date_signal}}`, `{{message_signal}}`.

### 2. Publier les règles de sécurité Firestore
Dans la console Firebase → Firestore Database → onglet **Règles**, colle le contenu du fichier `firestore.rules` fourni, puis clique **Publier**.

### 3. Créer ton propre compte admin (le tout premier)
Comme il n'y a encore aucun compte, il faut créer le tien manuellement une fois :
1. Dans la console Firebase → Authentication → Utilisateurs → **Ajouter un utilisateur** → renseigne ton email + un mot de passe.
2. Copie l'**UID** généré.
3. Dans Firestore Database → **Démarrer une collection** → nom `users` → ID de document = l'UID copié → ajoute les champs :
   - `email` (string) = ton email
   - `role` (string) = `admin`
   - `conseillerId` (string) = laisse vide ou ne l'ajoute pas

Une fois ce compte créé, connecte-toi à l'appli avec — tu pourras ensuite créer le compte de Marta (rôle `direction`) directement depuis l'interface une fois qu'on aura ajouté l'écran "Comptes" (prochaine étape), ou je peux te donner la même méthode manuelle en attendant.

### 4. Déployer sur Firebase Hosting
Depuis un terminal, dans ce dossier :

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# - Choisis le projet "gestion-bestcall"
# - Dossier public : . (le dossier courant)
# - Configurer comme single-page app : Non
# - Ne pas écraser index.html

firebase deploy
```

Firebase te donnera une URL du type `https://gestion-bestcall.web.app` — c'est le lien à partager avec Marta et les conseillers.

## Prochaines étapes possibles
- Écran "Comptes" pour que toi et Marta puissiez créer/gérer les comptes direction depuis l'interface (pas seulement via la console Firebase).
- Saisie des heures réellement travaillées (vs planning théorique) pour un calcul de salaire encore plus précis.
- Import automatique des données actuelles depuis le Google Sheet existant.
