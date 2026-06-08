# Audit — Implémentation V2 vs brief Laura

**Date** : 2026-06-08
**Périmètre** : V2 sur branche `v2-refonte`, 21 pages V2 + 11 composants Vue + theme charte.
**Méthode** : Relecture du brief Laura (`Brief nouvelle espace d'onboarding.docx`) et comparaison à chaque page rédigée et chaque composant implémenté.

## Synthèse en une phrase

L'implémentation est **globalement alignée** sur le brief Laura, avec **2 écarts mineurs à corriger** (annotation manquante en section 10A, FAQ manquante en section 12) et **6 zones d'interprétation** à valider avec elle en réunion. Aucun écart structurel.

---

## 1. Alignement section par section

| Section | Brief Laura | Implémentation | Verdict |
|---------|-------------|----------------|---------|
| 1. Bienvenue | Welcome, 6 icônes d'objectifs, 6 items "ce que vous allez apprendre", choix caméra X/A1, CTA | Hero + CardGrid 6 cartes (fusion objectifs + outcomes) + CameraSelector + tip box | ⚠️ Fusion sémantique à valider |
| 2A. THETA X | Déballage, mise sous tension, charge, MAJ firmware | JourneyStep + Accordion contenu pack + steps + VideoPlaceholder firmware | ✅ Aligné |
| 2B. THETA A1 | Même structure miroir | Idem 2A, adapté A1 | ✅ Aligné |
| 3. Install app | QR codes Stores + rôle de l'app + message "app connecte caméra → captures → cloud" | CardGrid 3 rôles + QRCodePair + tip compatibilité | ✅ Aligné |
| 4. Compte | Message fort "mêmes identifiants mobile + web" + login mobile + login web | Tip box renforcée + 2 sous-sections avec VideoPlaceholder | ✅ Aligné |
| 5A. Pair X | Vidéo "Connecter une RICOH THETA X" + procédure pas à pas | JourneyStep + VideoPlaceholder + 5 steps + tip troubleshooting | ✅ Aligné |
| 5B. Pair A1 | Vidéo + procédure miroir | Idem 5A, adapté A1 | ✅ Aligné |
| 6. Première capture | 3 sous-sections : préparation, étapes capture, réglages simples (photo 360°, timer, support, luminosité) | CardGrid préparation + VideoPlaceholder + 4 réglages détaillés + ImagePlaceholder vérification | ✅ Aligné, 4 réglages couverts |
| 7. Cloud | Vidéo + diagramme Caméra → App → Cloud → Web | CloudFlowDiagram + VideoPlaceholder + 3 takeaways + info hors-ligne | ✅ Aligné |
| 8. Retrouver / partager | Web platform, trouver panorama, lien partage, copier/envoyer | Image trouver + Video share + Image gérer liens + warning sécurité | ✅ Aligné |
| 9A. Albums | Créer, ajouter, nommer, supprimer + "1 album par client/site/projet/date" | Video + steps + CardGrid 4 cas + tip convention nommage | ✅ Aligné |
| 9B. Projets | Suivre site/chantier/intervention dans le temps | Bloc "quand utiliser projet" + steps + 3 exploitations | ✅ Aligné |
| 9C. Plans | Positionner panoramas, naviguer entre points | Bloc pourquoi + steps + 3 bénéfices + tip terrain | ✅ Aligné |
| 10A. Annotations | Liste exemples : "À vérifier / À réparer / Intervention terminée / Point de contrôle / Non conforme / À valider / **Visuels à prévoir**" (7 items) | CardGrid 6 cartes | ⚠️ **1 étiquette manquante : "Visuels à prévoir"** |
| 10B. Comparer | Suivi chantier, avant/après, inspection | CardGrid 3 cas + conseils fiabilité | ✅ Aligné |
| 10C. Super-résolution | Rendu détaillé pour inspection | Bloc usage + procédure + bonne pratique | ✅ Aligné |
| 10D. Flouter | Préparer partage externe RGPD | Bloc cas + procédure + warning RGPD | ✅ Aligné |
| 11A. Construction | 5 pratiques : mêmes zones, plans, comparaison, annotations, organisation worksite/building/floor/zone | 5 pratiques structurées + cross-links | ✅ Aligné |
| 11B. Inspection | 5 pratiques : zones critiques, annotations précises, organisation site/date, vérifier partage, partage limité | 5 pratiques + tip audit/traçabilité | ✅ Aligné |
| 11C. Facility | 5 pratiques : zones techniques, avant/après, organisation bâtiment/étage/zone/équipement, annotations actions, historique | 5 pratiques + tip intervalle régulier | ✅ Aligné |
| 12. Aide | 6 FAQ : team selection, user licenses, batterie, Ricoh Care, GPS, **share limits**, mesure | 6 FAQ : équipe/orga, ajouter user, batterie, Ricoh Care, GPS, mesure | ⚠️ **FAQ "share limits" manquante** (et "user licenses" couverte partiellement par "ajouter user") |

---

## 2. Écarts à corriger avant push à Laura

### Écart #1 — Étiquette d'annotation "Visuels à prévoir" manquante (Section 10A)

**Brief** : Laura liste 7 exemples d'étiquettes utiles : "À vérifier", "À réparer", "Intervention terminée", "Point de contrôle", "Non conforme", "À valider", **"Visuels à prévoir"**.

**Implémentation actuelle** : `docs/fr/10-exploiter/annotations.md` n'a que 6 étiquettes dans le CardGrid (manque "Visuels à prévoir").

**Correction** : ajouter une 7e Card. Décision : passer à `cols="3"` pour aligner 3+3+1 ou rester `cols="2"` (3 lignes de 2 + 1 isolée), j'arbitre 3 cols pour la lisibilité visuelle.

### Écart #2 — FAQ "Limites de partage" manquante (Section 12)

**Brief** : Liste de 7 questions FAQ : équipe, **licences utilisateurs**, batterie, Ricoh Care, GPS, **limites de partage**, mesure de distance.

**Implémentation actuelle** : 6 FAQ. "Licences utilisateurs" est partiellement traitée par "Comment ajouter un utilisateur à mon équipe ?" — partiel mais pas exactement la même question. "Limites de partage" est totalement absente.

**Correction** : ajouter une 7e FAQ sur les limites de partage (combien de liens simultanés ? durée max ? téléchargements illimités ?). Reformuler la FAQ "ajouter utilisateur" pour qu'elle adresse aussi la notion de licences utilisateurs incluses.

### Écart #3 — Section 1 : structure 5 blocs vs ma fusion (4 blocs)

**Brief** : Laura demande 5 blocs visuels distincts sur la page d'accueil :
1. Welcome text rassurant
2. Learning objectives (6 icônes — "ce que vous allez préparer / installer / connecter…")
3. What you'll learn (6 items — résultats concrets que le client saura faire)
4. Camera choice (cartes X / A1)
5. Next step button

**Implémentation actuelle** : J'ai fusionné les blocs 2 et 3 en un seul `CardGrid cols="3"` avec 6 cartes mixées. Le résultat fonctionne mais c'est une **interprétation** : Laura voulait peut-être un bloc "objectifs verbe d'action" + un bloc "résultats apprenant".

**Correction proposée** : Soit on garde la fusion et on demande à Laura en réunion si ça lui va, soit on duplique en deux CardGrid distincts dès maintenant pour respecter sa structure. Je penche pour **garder la fusion et flag pour la réunion** : visuellement le résultat est plus aéré.

---

## 3. Zones d'interprétation à valider avec Laura

Décisions que j'ai prises par défaut, à confirmer ou corriger :

| # | Sujet | Décision prise | Risque si Laura veut autre chose |
|---|-------|---------------|----------------------------------|
| 1 | **Persistance du choix caméra** | Sauvegarde en localStorage du choix THETA X / A1, sans branchement automatique du parcours selon le modèle | Faible — Laura voudra peut-être que tout le parcours s'adapte automatiquement (cacher les pages A1 si X choisie, etc.) |
| 2 | **Rappel "Vous êtes sur THETA X" sur les pages 2A / 5A** | Non implémenté — la page sait juste son modèle dans son titre | Faible — Laura peut vouloir un encart visuel rappelant le modèle sélectionné |
| 3 | **Mention "fonctionnalité premium Business Pack"** sur 10C super-résolution et 10D flouter | Je l'ai mentionné comme bénéfice exclusif Business Pack | Faible — Laura peut préférer ne pas le mentionner si toutes les offres l'incluent |
| 4 | **Convention de nommage des albums** | J'ai proposé 4 axes (client / site / projet / campagne) | Faible — Laura peut avoir une convention officielle Ricoh Futures |
| 5 | **Ton "vous" vs "tu"** | "Vous" partout (B2B pro standard) | Aucun — c'est la norme RICOH360 |
| 6 | **Lien forward "Prochaine étape"** en bas de chaque page | Implémenté systématiquement pour guider la progression | Faible — Laura peut vouloir un composant `NextStep` stylisé plutôt qu'un simple lien markdown |

---

## 4. URLs et données à récupérer (Laura input requis)

Tout le contenu fonctionnel est en place, mais les URLs externes sont en placeholder. À récupérer avant go-live :

### URLs support.ricoh360.com

Dans `docs/fr/12-aide-depannage/index.md` :
- Voyants THETA X — `https://support.ricoh360.com/fr/theta-x/voyants` (placeholder)
- Voyants THETA A1 — `https://support.ricoh360.com/fr/theta-a1/voyants` (placeholder)
- Firmware THETA X — `https://support.ricoh360.com/fr/theta-x/firmware` (placeholder)
- Firmware THETA A1 — `https://support.ricoh360.com/fr/theta-a1/firmware` (placeholder)
- Améliorer qualité de capture — `https://support.ricoh360.com/fr/capture/qualite` (placeholder)
- Centre d'aide général — `https://support.ricoh360.com/fr` (placeholder)

### URLs App Store / Play Store

Dans `docs/.vitepress/theme/components/QRCodePair.vue` :
- App Store URL — actuellement `https://apps.apple.com/app/ricoh360/id1502996099` (à vérifier)
- Play Store URL — actuellement `https://play.google.com/store/apps/details?id=com.ricoh.theta360` (à vérifier)

### QR codes visuels

À générer une fois les URLs confirmées, puis poser des `.png` dans `docs/public/images/v2/qr-appstore.png` et `qr-playstore.png`. Le composant les chargera automatiquement.

### Médias vidéo / image

Cf. `docs-projet/media-mapping.md`. 25 médias listés, tous en statut `placeholder`. Workflow d'intégration décrit dans `docs-projet/media-procedure-laura.md`.

---

## 5. Éléments du brief Laura **non couverts** dans l'implémentation

Vérification exhaustive : qu'est-ce qui est dans le brief mais pas dans le code ?

| Élément | Statut | Décision |
|---------|--------|----------|
| Page 1 — Welcome bloc rassurant court | ✅ Hero VitePress | OK |
| Page 1 — 6 objectifs / 6 outcomes | ⚠️ Fusionnés (cf. Écart #3) | À valider avec Laura |
| Sélection THETA X / A1 dès l'entrée | ✅ CameraSelector | OK |
| Vidéos accélérées sur séquences répétitives | ✅ Prêt côté composant `VideoPlaceholder` (support `playbackRate`) | OK — implémentation finale dépend de la livraison des vidéos |
| Densité contrôlée (accordéons + cartes + ancres) | ✅ Implémenté | OK |
| Diagramme Cloud (Caméra → App → Cloud → Web) | ✅ `CloudFlowDiagram` | OK |
| 6 FAQ items | ⚠️ 6 implémentés mais sujet "limites de partage" manquant | Cf. Écart #2 |
| Liens vers support.ricoh360.com | ✅ 6 SupportLinks | OK structure, URLs à récupérer |
| Charte graphique appliquée | ✅ Palette élargie, Inter, tokens | OK |
| Ton CS-driven | ✅ Tous les pages utilisent "vous saurez…", outcomes explicites, tip boxes rassurantes | OK |
| Pas de feature dump | ✅ Les fonctions premium sont dans le flux 10A-D, pas dans une section dédiée | OK |
| Branchement modèle non fusionné | ✅ Pages 2A/2B et 5A/5B séparées | OK |

---

## 6. Recommandations pour la réunion de validation Laura

### Avant la réunion

- Lire ce doc + `notes-pour-laura.md` + `media-procedure-laura.md`
- Parcourir le preview en navigant les 12 sections
- Préparer une liste écrite de tout ce qui ne lui semble pas conforme à sa vision

### Pendant la réunion

Tour de table sur ces 6 questions structurantes :

1. **Section 1 (Bienvenue)** — la fusion objectifs + outcomes en une seule CardGrid te va-t-elle, ou tu veux 2 blocs distincts ?
2. **Section 10A (Annotations)** — confirmer la liste des 7 étiquettes (j'ajoute "Visuels à prévoir")
3. **Section 12 (FAQ)** — confirmer la liste des questions, valider l'ajout d'une FAQ "limites de partage"
4. **Persistance choix caméra** — souhaites-tu que le parcours s'adapte automatiquement (cache les pages A1 si X choisie) ?
5. **URLs support** — peux-tu fournir les URLs exactes de support.ricoh360.com pour les 6 liens ?
6. **Mention "fonctionnalité premium Business Pack"** — sur 10C et 10D, tu valides ou tu préfères ne pas le mentionner ?

### Après la réunion

- Appliquer les corrections sur la branche `v2-refonte`
- Lancer les retours médias selon `media-procedure-laura.md`
- Préparer une seconde itération preview pour validation finale
