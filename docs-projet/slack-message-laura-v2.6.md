# Message Slack à envoyer à Laura — V2.6

Copie-colle dans Slack, ajuste si besoin avant d'envoyer.

---

Salut Laura,

J'ai traité ton dernier retour sur la cohérence MAJ firmware et les autorisations. Tu peux ouvrir la preview ici (recharge la page pour avoir la dernière version) :

🔗 **https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/**

**1. Incohérence MAJ firmware résolue (section 2)** ✅
Sur les 2 pages « Préparer votre caméra » (THETA X et A1), j'ai reformulé la section « Mettre à jour le firmware » pour ne plus présupposer que l'utilisateur a déjà l'application mobile. Le texte dit maintenant clairement que :
- La MAJ se fait soit depuis l'**application mobile RICOH360** (installée à l'étape suivante), soit depuis l'**application PC/Mac RICOH360**
- Si l'utilisateur n'a pas encore l'app, il peut soit revenir à cette étape juste après, soit attendre que l'app lui propose la MAJ à la première connexion
- Un encart info renvoie vers l'app PC/Mac comme alternative

**2. Mention autorisations en section 3** ✅
Sur la page « Installer l'application mobile », j'ai ajouté un encart info qui annonce brièvement que l'app va demander des autorisations (Bluetooth, localisation, etc.) et renvoie vers la section 5 pour le détail complet. Ton rassurant, pas alarmiste.

**3. Bloc Autorisations complet en section 5** ✅
Sur les 2 pages « Connecter votre caméra » (X et A1), juste après la procédure pas à pas, j'ai ajouté un bloc qui couvre tout ce que tu as listé :
- **Register** à la première connexion
- Explication de la **coche blanche** dans les paramètres Wi-Fi
- Procédure pour ouvrir les réglages et accorder les permissions
- Bouton **Done** pour finaliser
- 2 **accordéons** pliables : « Autorisations nécessaires sur iOS » (5 items) et « Autorisations nécessaires sur Android » (6 items)

J'ai fait un composant Vue réutilisable pour ce bloc — comme ça si tu veux ajouter ou modifier une autorisation plus tard, on le fait à un seul endroit et c'est propagé sur les 2 pages caméra.

---

**1 petite info à m'envoyer si tu l'as** : l'**URL exacte de l'application PC/Mac RICOH360** sur le site support. Je l'ai mentionnée comme alternative pour la MAJ firmware mais j'ai laissé le lien générique vers `support.ricoh360.com`. Si tu m'envoies l'URL précise, je l'intègre.

Dis-moi tes retours quand tu auras parcouru.

Thomas
