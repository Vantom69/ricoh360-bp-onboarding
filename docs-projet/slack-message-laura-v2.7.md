# Message Slack à envoyer à Laura — V2.7

Copie-colle dans Slack, ajuste si besoin avant d'envoyer.

---

Salut Laura,

Étape importante : **on passe le site en multi-langue**. Cette V2.7 ouvre la voie pour EN, ES et JP. Première livraison aujourd'hui : la **version EN complète** miroir de la version FR validée.

🔗 **https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/**

**Comment ça marche maintenant** :
- L'URL racine `/` détecte automatiquement la langue du navigateur et redirige vers `/fr/...` ou `/en/...`
- Le **dropdown sélecteur de langue** s'affiche en haut à droite de la nav (à côté de la barre de recherche) — l'utilisateur peut switcher à tout moment sans perdre sa position dans le parcours
- Toutes les **22 pages** sont traduites en EN, avec le même contenu, les mêmes composants, le même ton CS-driven adapté à un B2B EN
- La **jauge de progression**, les **checks ✓/●/○ du menu**, le **bouton Reset**, les **messages de réussite** — tout est traduit
- Les URLs sont parallèles : `/fr/01-bienvenue/` et `/en/01-bienvenue/` (les slugs sont conservés pour rester simple et stable)
- Préparation déjà en place pour **ES et JP futurs** : il suffira d'ajouter une 3e/4e locale dans la config et de traduire les 22 pages — la mécanique est déjà là

**Sur la traduction** : faite en batch, avec une **grille de naturalisation EN** documentée (`docs-projet/grille-naturalisation-ton-en.md`) miroir de celle qu'on avait pour le FR. Vocabulaire métier strict : RICOH360, RICOH THETA X/A1, RICOH360 Cloud, Business Pack, RICOH Care, panorama 360°. Pas de calques du français.

**Ce que j'attendrais idéalement de toi** :
- Un spot-check rapide sur 2-3 pages EN représentatives (par exemple `01-welcome`, `02-installer-camera/theta-x`, `12-aide-depannage`) — si tu as un EN-native dispo c'est mieux, sinon ton œil suffira pour repérer les gros écueils.
- Le retour qu'on attend : « ton globalement OK » → on déroule éventuel ES/JP. « Ton à recaler » → on adapte la grille et je relance les pages concernées.

**Limitations connues à ce stade (à traiter plus tard)** :
- Les **vidéos** et **screenshots** sont encore les visuels FR (la voix-off et l'UI app sont en FR). À demander à Ricoh Japon des versions EN à terme.
- Les **liens vers support.ricoh360.com** pointent encore vers `/fr/manual/...` côté EN. Si les pages support existent en EN (`/en/manual/...`), on s'aligne. Tu peux confirmer ?

**Question subsidiaire** : la grille de naturalisation EN suit les conventions Microsoft/Google (tap, sign in, set up...). Si Ricoh a un guide de style EN officiel ailleurs (au Japon par exemple), je peux le suivre — sinon je continue sur ces bases.

Bon partage, dis-moi ce que tu en penses.

Thomas
