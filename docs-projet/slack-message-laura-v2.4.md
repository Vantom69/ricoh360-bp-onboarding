# Message Slack à envoyer à Laura — V2.4

Copie-colle dans Slack, ajuste si besoin avant d'envoyer.

---

Salut Laura,

J'ai intégré ton dernier retour (gamification + enrichissement contenu). Tu peux voir la nouvelle preview ici (recharge la page pour avoir la dernière version) :

🔗 **https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/**

Quatre chantiers cette fois :

**1. Une jauge de progression dans le menu latéral** ✅
En haut du menu gauche, tu vois un encart « Votre progression — X sur 12 étapes » avec une barre qui se remplit. La jauge se met à jour à chaque page de parcours visitée et persiste entre les sessions (localStorage).

**2. Cinq messages de réussite après les étapes clés** ✅
Comme tu l'avais demandé, des bandeaux courts apparaissent juste avant le bouton « Prochaine étape » sur les pages clés :
- Page « Installer l'application » → « Application installée »
- Page « Compte RICOH360 » → « Compte connecté »
- Pages « Connecter la caméra » (X et A1) → « Votre caméra est connectée »
- Page « Première capture » → « Premier panorama réalisé »
- Page « Retrouver et partager » → « Vous maîtrisez les étapes essentielles »

**3. CTAs harmonisés** ✅
- Icône de bouée retirée des liens support
- Boutons plus arrondis (radius xl)
- Espacement homogène entre eux

**4. Page d'accueil enrichie** ✅
La page « Bienvenue » contient maintenant 6 sections claires :
- Qu'est-ce que le RICOH360 Business Pack ?
- Ce que comprend votre Business Pack (5 cartes : caméra, app, cloud, premium, Ricoh Care)
- RICOH Care : utiliser votre matériel sereinement
- Tableau comparatif « usage standard vs Business Pack »
- Les fonctionnalités premium à découvrir (6 cartes cliquables vers les sections concernées)
- Ce que vous allez apprendre (le bloc objectifs déjà existant, conservé)

**Ce qui n'est pas encore fait — Phase K reportée**

Les **checks ✓/●/○ à côté des étapes du menu** et les **micro-animations item par item** demandent un override de la sidebar VitePress (le DOM n'est pas adressable nativement). C'est jouable mais plus risqué techniquement, alors je l'ai mis en Phase K pour ne pas retarder cette livraison. On le fera dans une prochaine itération une fois que tu auras validé le reste.

**Quelques points à valider visuellement de ton côté** :
- La jauge tient bien sur mobile (drawer sidebar)
- Les messages de réussite ne sont pas trop visibles / trop discrets selon ton goût
- Le tableau comparatif est lisible en mode clair ET en mode sombre
- Le décompte de la jauge utilise 12 sections (tu citais 10 dans ton brief — j'ai utilisé les 12 sections réelles du parcours, à confirmer)

Dis-moi tes retours quand tu as parcouru tout ça.

Thomas
