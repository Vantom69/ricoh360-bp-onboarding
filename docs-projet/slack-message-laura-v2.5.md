# Message Slack à envoyer à Laura — V2.5

Copie-colle dans Slack, ajuste si besoin avant d'envoyer.

---

Salut Laura,

J'ai traité ton retour V3. Trois chantiers réglés. Tu peux ouvrir la preview ici (recharge la page pour avoir la dernière version) :

🔗 **https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/**

**1. Checks ✓/●/○ dans le menu — bug corrigé** ✅
Les checks étaient bien codés depuis la V2.4 mais à cause d'un détail technique dans le lien des étapes du menu, ils ne s'affichaient pas sur la version preview. Maintenant que c'est corrigé, tu devrais voir :
- ○ sur les étapes que tu n'as pas encore cliquées,
- ● sur l'étape que tu visualises,
- ✓ sur les étapes que tu as déjà cliquées.

**Petite nuance par rapport à ton brief** : on a opté pour la logique « étape cliquée par l'utilisateur » plutôt que la logique strictement linéaire que tu décrivais (« toutes les étapes précédentes deviennent automatiquement ✓ »). Raison : on respecte le fait que l'utilisateur peut explorer le parcours dans l'ordre qu'il veut — par exemple s'il clique directement sur l'étape 10, seule l'étape 10 sera ● (les autres restent ○ tant qu'il ne les a pas vues).

Dis-moi si tu préfères qu'on bascule sur la logique linéaire stricte que tu avais écrite — ça se change en quelques minutes côté code.

**2. Nav X ↔ A1 corrigée** ✅
Le bouton « suivant » en bas de la page d'installation de la THETA X renvoie maintenant vers « 3. Installer l'application mobile », plus jamais vers la THETA A1. Pareil pour la THETA A1 et pour la page « Connecter votre caméra ». Les deux modèles convergent bien sur l'étape commune suivante sans jamais s'enchaîner l'un vers l'autre.

**3. 5 visuels intégrés** ✅
Tous tes visuels HubSpot sont en place :
- Photo de la **RICOH THETA X** sur la page d'installation correspondante
- Photo de la **RICOH THETA A1** sur la page d'installation correspondante
- Écran de **vérification de connexion** sur les 2 pages « Connecter votre caméra » (X et A1)
- Interface d'**annotation** sur la page Annotations
- Interface de **floutage** sur la page Flouter des personnes

Format : responsive, coins arrondis, alt texte renseigné — conforme aux critères de ton brief.

---

Petit récap des points encore ouverts (pas urgent, à voir quand tu pourras) :
- Les 6 questions structurantes de l'audit V2.1 (fusion section 1, persistance choix caméra, mention « premium » sur 10C/10D, etc.)
- L'URL support « améliorer la qualité de capture » que tu ne m'as pas envoyée
- Choix sémantique pour les checks sidebar (cf. point 1 ci-dessus)

Hâte d'avoir tes retours.

Thomas
