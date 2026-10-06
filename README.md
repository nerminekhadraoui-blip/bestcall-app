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

- **Formation (Academia BestCall)** : onglet "Formation" pour tous les rôles. 20 modules bilingues PT/FR tirés du guide des conseillers, avec captures, quiz, fiche mémo et contacts. La progression de chaque personne est enregistrée dans Firestore ; Marta et l'admin voient un tableau de suivi des conseillères en haut de l'onglet.

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

## Onglet Formation

Fichiers dans `formation/` :
- `contenu-1.js` et `contenu-2.js` : tout le texte de la formation (chaque phrase = `["português", "français"]`), les quiz, les codes d'erreur, la fiche mémo et les contacts.
- `formation.js` : le moteur (parcours, leçons, quiz, fiche mémo, suivi).
- `formation.css` : le style, préfixé `.fm` pour ne rien casser ailleurs.
- `img/` : les captures d'écran. Pour en ajouter une, dépose le fichier ici et référence-le dans un module avec `{ shot: { f: "nom.png", cap: ["légende PT", "légende FR"] } }`. Les emails, numéros et pseudos clients ont été floutés : fais de même pour les prochaines.

### Règle Firestore à ajouter (obligatoire pour enregistrer la progression)
Dans la console Firebase → Firestore Database → **Règles**, ajoute ce bloc à l'intérieur de `match /databases/{database}/documents { ... }`, puis **Publier** :

```
match /formation/{uid} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
  allow read: if request.auth != null
    && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'direction'];
}
```

Sans cette règle, la formation fonctionne quand même, mais la progression reste seulement dans le navigateur de la personne et le tableau de suivi reste vide.
