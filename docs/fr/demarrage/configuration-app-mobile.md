---
title: Configuration de l'application mobile
description: Installez l'application RICOH360, appairez votre camera et decouvrez ce que vous pouvez faire depuis votre telephone.
outline: [2, 3]
---

# Configuration de l'application mobile

> Installez l'application RICOH360, appairez votre camera et decouvrez ce que vous pouvez faire depuis votre telephone.

---

## 1. Telechargement et installation

L'application RICOH360 est disponible sur les deux plateformes :

- **iOS :** Recherchez "RICOH360" sur l'App Store (necessite iOS 16 ou ulterieur).
- **Android :** Recherchez "RICOH360" sur Google Play (necessite Android 11 ou ulterieur).

L'application est gratuite. Vous avez besoin d'un compte RICOH360 (fourni avec votre Business Pack) pour vous connecter.

**Conseil pratique :** Assurez-vous que votre telephone dispose du Bluetooth et du WiFi. La plupart des smartphones des cinq dernieres annees fonctionneront sans probleme.

**Pour aller plus loin :**
- Helpcenter : [Configuration initiale de l'application](https://support.ricoh360.com/fr/tags/ricoh360-app-prepare)
- Video : [MasterClass 1/14 - Introduction](https://youtu.be/gWGhXz-03t8) (FR)

---

## 2. Premiere connexion

1. **Ouvrez l'application** et appuyez sur "Se connecter."
2. **Saisissez vos identifiants.** Utilisez l'adresse e-mail et le mot de passe fournis lors de l'onboarding de votre Business Pack. S'il s'agit de votre premiere connexion, il vous sera peut-etre demande de definir un nouveau mot de passe.
3. **Selectionnez votre equipe.** Si votre compte appartient a plusieurs equipes, selectionnez celle avec laquelle vous souhaitez travailler. La plupart des utilisateurs ne verront qu'une seule equipe.
4. **Autorisez les permissions.** L'application demandera l'acces au Bluetooth, au WiFi (services de localisation sur certains appareils) et a la camera. Accordez toutes les permissions. L'application en a besoin pour communiquer avec votre camera THETA.

Vous etes maintenant sur l'ecran d'accueil de l'application, pret a connecter une camera.

![Selecteur d'equipe de l'application mobile affichant l'abonnement Business Pack](/images/mobile/team_selector.png)

**Pour aller plus loin :**
- Helpcenter : [Parametres de l'application](https://support.ricoh360.com/fr/tags/ricoh360-app-settings)

---

## 3. Connexion a votre camera

C'est l'etape la plus importante. L'application RICOH360 se connecte a votre camera THETA en combinant Bluetooth et WiFi.

### Etape par etape

1. **Allumez votre camera THETA.**
2. **Dans l'application**, appuyez sur l'icone de connexion camera (en haut de l'ecran).
3. **L'application recherche via Bluetooth** les cameras THETA a proximite. Assurez-vous que le Bluetooth est active sur votre telephone et sur la camera.
4. **Selectionnez votre camera** dans la liste. Elle apparaitra avec son numero de serie (imprime sous le boitier de la camera).
5. **L'application etablit une connexion WiFi** avec la camera. Votre telephone se deconnectera temporairement de votre reseau WiFi habituel pour se connecter au reseau WiFi propre de la camera.
6. **Une fois connecte**, vous verrez un apercu en direct de ce que voit la camera.

![Ecran de detail de la camera affichant le modele, le numero de serie et les parametres](/images/mobile/camera_detail.png)

### Problemes courants et solutions testees sur le terrain

| Probleme | Ce qui se passe | Solution |
|----------|-----------------|----------|
| Le telephone perd sans cesse la connexion a la camera | Votre telephone revient vers un reseau WiFi enregistre qui a acces a internet. C'est le probleme le plus frequent sur les sites actifs. | Avant de commencer une session de capture, allez dans les parametres WiFi de votre telephone et desactivez la connexion automatique sur tous les autres reseaux enregistres. Cela empeche votre telephone de quitter le reseau de la camera. |
| La camera n'apparait pas dans la liste Bluetooth | Le Bluetooth est desactive sur la camera, ou la camera est appairee a un autre telephone. | Sur la THETA X, balayez vers le bas sur l'ecran tactile et verifiez que le Bluetooth est active. Si la camera etait precedemment appairee a un autre telephone, desappairez-la d'abord. |
| Avertissement "Pas d'internet" sur le telephone | C'est normal et attendu. Le reseau WiFi de la camera ne fournit pas d'acces internet. | Ignorez l'avertissement. Sur certains telephones Android, appuyez sur "Rester connecte" ou "Maintenir la connexion WiFi" lorsque le message apparait. |
| La connexion fonctionne mais l'apercu en direct est lent ou saccade | Interferences WiFi provenant d'autres reseaux sur le meme canal, frequentes sur les chantiers avec plusieurs points d'acces. | Eloignez-vous des autres routeurs ou points d'acces. Si possible, utilisez la bande 5 GHz (la THETA A1 supporte les bandes 2,4 GHz et 5 GHz). |

**Conseil pratique issu de deployments reels :** Sur les chantiers actifs, les operateurs ont generalement 3 a 4 reseaux WiFi enregistres sur leur telephone (bureau de chantier, partage de connexion, reseau client). Le telephone essaie constamment de se reconnecter a un reseau avec internet, ce qui coupe la connexion camera en pleine session. La solution la plus efficace est d'oublier ou de desactiver la connexion automatique pour tous les autres reseaux avant de commencer a capturer. Cela prend 30 secondes et evite beaucoup de frustration.

**Pour aller plus loin :**
- Helpcenter : [Connecter smartphone et camera](https://support.ricoh360.com/fr/manual/x-ricoh360-app-connection-01) | [Guides de connexion de l'application](https://support.ricoh360.com/fr/tags/ricoh360-app-connection-theta)
- Helpcenter FAQ : [Problemes de connexion WiFi](https://support.ricoh360.com/fr/faq/ricoh360-app-connection-001)
- Video : [MasterClass 2/14 - Cameras](https://youtu.be/nmXo5zTguvE) (FR) | [MasterClass 4/14 - Gestion des cameras](https://youtu.be/9k1jxIEstcE) (FR)

---

## 4. Configurer le WiFi sur la camera

Votre camera a besoin de sa propre connexion WiFi pour envoyer les photos vers le RICOH360 Cloud. Cette connexion est distincte de la connexion telephone-camera decrite ci-dessus.

### Ajouter un reseau WiFi

1. Dans l'application mobile, allez dans les **parametres de la camera** (icone engrenage lorsque vous etes connecte a la camera).
2. Selectionnez **Configuration WiFi**.
3. Saisissez le nom du reseau (SSID) et le mot de passe du WiFi disponible sur votre site.
4. Enregistrez. La camera tentera de se connecter.

Vous pouvez enregistrer plusieurs reseaux WiFi. C'est utile si votre equipe travaille sur differents sites. La camera se connectera automatiquement au reseau enregistre disponible.

### Limitation du portail captif

De nombreux reseaux d'entreprise et d'hotel utilisent un portail captif (une page web qui apparait pour vous demander d'accepter des conditions ou de saisir un code avant d'accorder l'acces). **Les cameras THETA ne peuvent pas interagir avec les portails captifs.** Elles n'ont pas de navigateur web.

Si votre site utilise un portail captif, demandez a votre equipe IT l'une de ces alternatives :
- Un reseau avec une authentification par mot de passe WPA2 standard (sans portail)
- Une liste blanche d'adresses MAC pour la camera
- Un partage de connexion depuis un telephone comme solution temporaire

**Conseil pratique :** La batterie se decharge plus vite lorsque la camera recherche activement un reseau WiFi ou y est connectee, surtout si le GPS et le Bluetooth sont egalement actifs. Si vous effectuez une longue session de capture et n'avez pas besoin d'un envoi immediat vers le cloud, vous pouvez configurer le WiFi plus tard et envoyer les photos en lot a la fin de la journee.

**Pour aller plus loin :**
- Helpcenter FAQ : [Problemes de connexion WiFi](https://support.ricoh360.com/fr/faq/ricoh360-app-connection-001)
- Helpcenter : [Parametres de l'application](https://support.ricoh360.com/fr/tags/ricoh360-app-settings)

---

## 5. Prendre des photos et des videos

Une fois votre telephone connecte a la camera, l'application devient votre telecommande.

### Commandes de capture

| Commande | Fonction |
|----------|----------|
| **Bouton declencheur** | Appuyez pour capturer une photo 360 ou pour demarrer/arreter un enregistrement video |
| **Apercu en direct** | Vue en temps reel de ce que voit la camera, affichee sur l'ecran de votre telephone |
| **Minuteur** | Definissez un delai de 2 ou 5 secondes avant le declenchement. Vous laisse le temps de vous eloigner de la camera. |
| **Resolution** | Choisissez entre 11K (detail maximum) et 5.5K (fichiers plus legers, envoi plus rapide) |
| **Mode HDR** | Activez HDR ou HDR Handheld pour les scenes a eclairage mixte (fenetres lumineuses et coins sombres) |
| **Compensation d'exposition** | Ajustez la luminosite a la hausse ou a la baisse si l'exposition automatique n'est pas ideale |

### Recommandations pratiques

- **Utilisez le minuteur.** Reglez toujours un delai d'au moins 2 secondes pour pouvoir reculer. Rester juste a cote de la camera placera votre corps en evidence dans le panorama.
- **Utilisez le monopode.** Deployez-le completement et tenez la camera a bout de bras au-dessus de votre tete, ou posez-le au sol pour un cliche stable.
- **Verifiez l'apercu en direct avant chaque prise.** Cela prend 3 secondes et vous evite de capturer avec un doigt sur l'objectif ou dans une mauvaise position.

![Ecran de capture avec resolution 11K, commandes de declenchement et parametres d'exposition](/images/mobile/capture_screen.jpg)

**Pour aller plus loin :**
- Helpcenter : [Capturer avec l'application](https://support.ricoh360.com/fr/tags/ricoh360-app-capture) | [Previsualiser les images](https://support.ricoh360.com/fr/tags/ricoh360-app-preview-image)

---

## 6. Transfert vers le cloud

Apres la capture, vos photos sont stockees localement sur la camera. Vous devez les transferer vers le RICOH360 Cloud pour que votre equipe puisse y acceder depuis l'application web.

### Envoi manuel

1. Dans l'application mobile, allez dans la section **transfert**.
2. Selectionnez les photos que vous souhaitez envoyer (ou selectionnez tout).
3. Appuyez sur **Envoyer vers le Cloud**.
4. La camera envoie les fichiers via sa connexion WiFi vers le RICOH360 Cloud. La vitesse d'envoi depend de votre reseau. Un panorama 11K prend generalement 10 a 30 secondes sur une connexion standard.

### Envoi automatique

Si votre camera est connectee a un reseau WiFi enregistre, vous pouvez activer l'envoi automatique. Les nouvelles captures sont envoyees vers le cloud des que le WiFi est disponible, sans intervention manuelle.

![Onglet Cloud affichant les panoramas envoyes](/images/mobile/cloud_gallery.png)

### Simple Capture (THETA X uniquement)

Si votre Business Pack est de Type S avec Simple Capture active, le flux de travail est encore plus simple. L'ecran de la camera affiche uniquement la selection d'album et un bouton declencheur. Les photos sont envoyees vers l'album assigne automatiquement lorsque la camera se connecte au WiFi. Aucune interaction avec l'application n'est necessaire pour le transfert. Consultez le guide [Configuration de Simple Capture](/fr/demarrage/configuration-simple-capture) pour plus de details.

**Pour aller plus loin :**
- Helpcenter : [Envoyer et partager](https://support.ricoh360.com/fr/tags/ricoh360-app-upload-and-share)
- Video : [MasterClass 3/14 - Envoi vers le cloud](https://youtu.be/A0VD6f5HSRQ) (FR)

---

## 7. Mises a jour du firmware

Maintenez le firmware de votre camera a jour. Les mises a jour corrigent des bugs, ameliorent la stabilite et ajoutent parfois de nouvelles fonctionnalites.

### Comment verifier et installer

1. Connectez-vous a votre camera via l'application mobile.
2. L'application vous notifiera si une nouvelle version du firmware est disponible.
3. Assurez-vous que la camera a au moins **50 % de batterie** avant de commencer.
4. Appuyez sur la notification de mise a jour et suivez les instructions a l'ecran.
5. **N'eteignez pas la camera pendant la mise a jour.** La camera redemarrera automatiquement une fois la mise a jour terminee.

Les mises a jour du firmware peuvent aussi etre suivies depuis l'application web RICOH360 dans **Administration > THETA Management**, ou les administrateurs peuvent voir les versions de firmware de toutes les cameras enregistrees.

**Pour aller plus loin :**
- Helpcenter : [Mise a jour firmware](https://support.ricoh360.com/fr/tags/ricoh360-app-firm-update)
- Video : [MasterClass 5/14 - Mise a jour firmware](https://youtu.be/jxDboxjp_v4) (FR)

---

## 8. Differences entre l'application mobile et l'application web

L'application mobile est concue pour la **capture et le transfert**. L'application web sur [ricoh360.com](https://ricoh360.com) est l'espace de gestion, d'organisation et de collaboration.

| Fonctionnalite | Application mobile | Application web |
|----------------|:------------------:|:---------------:|
| Connexion camera et declenchement a distance | Oui | Non |
| Apercu en direct | Oui | Non |
| Capture photo/video | Oui | Non |
| Transfert vers le cloud | Oui | Non |
| Gestion WiFi et firmware | Oui | Limite (suivi firmware uniquement) |
| Visualiser les photos 360 | Oui (basique) | Oui (Viewer complet avec filmstrip) |
| Albums : creer et organiser | Non | Oui |
| Projets et plans | Non | Oui |
| Annotations et marquage | Non | Oui |
| Comparaison cote a cote | Non | Oui |
| Traitement IA (amelioration, floutage) | Non | Oui |
| Administration d'equipe | Non | Oui |
| Partage via lien public | Non | Oui |

**En resume :** Utilisez votre telephone sur le terrain pour capturer et envoyer. Utilisez votre ordinateur pour organiser, annoter, comparer et partager.

**Pour aller plus loin :**
- Helpcenter : [Guides de connexion de l'application](https://support.ricoh360.com/fr/tags/ricoh360-app-connection-theta)

---

## 9. Prochaines etapes

Votre application mobile est configuree et connectee a votre camera. Voici la suite :

- **Prenez votre premiere photo et envoyez-la.** Suivez le [Guide de demarrage rapide](/fr/demarrage/guide-demarrage-rapide) pour un parcours complet.
- **Approfondissez la connaissance de votre materiel.** Consultez le guide [Installation du materiel](/fr/demarrage/installation-materiel) pour le chargement, les voyants LED, les accessoires et l'entretien.
- **Explorez l'application web.** Consultez [Premiers pas sur l'application web](/fr/demarrage/premiers-pas-web) pour les albums, les projets et le Viewer 360.
- **Vous utilisez Simple Capture ?** Consultez [Configuration de Simple Capture](/fr/demarrage/configuration-simple-capture) pour le flux de travail guide directement sur la camera.

Si vous rencontrez des problemes de connectivite, consultez le tableau de depannage dans la section 3 ci-dessus, ou le guide [Problemes de connectivite](/fr/depannage/problemes-connectivite).

---

*Votre Business Pack inclut 10 comptes utilisateurs par licence. Une fois votre camera connectee, invitez votre equipe depuis l'application web pour que tout le monde puisse acceder au meme contenu 360.*
