---
title: Problemes de connectivite
description: Guide de depannage pour les problemes WiFi, Bluetooth et de transfert avec les cameras RICOH THETA et la plateforme RICOH360.
outline: [2, 3]
---

# Problemes de connectivite - Guide de depannage

> Ce guide couvre les problemes WiFi, Bluetooth et de transfert avec les cameras RICOH THETA et la plateforme RICOH360. Beaucoup de ces solutions proviennent de retours reels lors de deployments terrain. La connectivite WiFi est le probleme le plus frequemment signale par les equipes terrain, et la plupart des problemes ont des solutions simples.

---

## Le telephone ne trouve pas le WiFi de la camera

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| Le reseau WiFi de la camera n'apparait pas dans les parametres du telephone | Le WiFi de la camera est desactive | Sur THETA X : verifiez l'icone WiFi sur l'ecran tactile. Sur THETA A1 : assurez-vous que la camera est allumee et que le mode WiFi est actif |
| Le SSID de la camera est visible mais le telephone ne se connecte pas | Trop loin de la camera | Rapprochez-vous a 3-5 metres de la camera. Le signal WiFi diminue significativement au-dela de cette distance |
| Le WiFi de la camera apparait par intermittence | Conflit de canal WiFi avec d'autres reseaux | C'est courant sur les chantiers ou bureaux avec de nombreux points d'acces. Redemarrez la camera pour forcer un changement de canal. Si le probleme persiste, essayez de vous connecter dans une zone moins congestionnee |
| Le telephone affiche "mot de passe incorrect" | Le mot de passe par defaut a ete change, ou la camera a ete reinitialisee | Verifiez les identifiants WiFi de la camera. Sur la THETA X, ils apparaissent dans les Parametres. Si necessaire, reinitialisez la configuration WiFi via l'application mobile |

---

## Le telephone se connecte puis se deconnecte

C'est le probleme terrain le plus signale. Il se produit parce que les smartphones sont concus pour privilegier les reseaux avec acces internet, et le WiFi de la camera THETA n'a pas d'internet.

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| Le telephone se connecte a la camera, puis bascule sur un autre reseau en quelques secondes | Le telephone rejoint automatiquement un reseau WiFi connu avec internet | **Etape 1 :** Desactivez la "connexion automatique" sur tous les autres reseaux WiFi enregistres avant de vous connecter a la camera. **Etape 2 :** Sur Android, desactivez "Basculer vers les donnees mobiles" dans les parametres WiFi |
| Le telephone perd la connexion a la camera de maniere repetee | Les donnees mobiles prennent le dessus sur le WiFi de la camera (sans internet) | Desactivez temporairement les donnees mobiles sur votre telephone pendant l'utilisation de la camera. Reactivez-les quand vous avez termine |
| La connexion se coupe apres quelques minutes | Mode economie d'energie WiFi du telephone | Desactivez l'optimisation de batterie pour l'application mobile RICOH360. Gardez l'application au premier plan pendant la capture |

**C'est le probleme terrain numero 1.** L'approche la plus fiable : avant de commencer une session de capture, (1) oubliez ou desactivez la connexion automatique sur les reseaux WiFi a proximite, (2) desactivez les donnees mobiles, (3) connectez-vous au WiFi de la camera, (4) ouvrez l'application mobile RICOH360.

---

## Avertissement "Pas d'internet" sur le telephone

Quand vous connectez votre telephone au WiFi de la camera, votre telephone peut afficher un avertissement disant "Ce reseau n'a pas d'acces internet" ou "Connecte, pas d'internet."

**C'est tout a fait normal.** La camera cree une connexion WiFi directe pour le transfert de donnees, pas pour la navigation internet. Fermez simplement l'avertissement et gardez la connexion active.

Sur certains telephones Android, vous pouvez voir une invite demandant "Rester connecte ?" Appuyez toujours sur "Oui" ou "Garder la connexion."

---

## WiFi d'entreprise et portails captifs

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| La camera ne peut pas se connecter au WiFi du bureau | Le reseau necessite une page de connexion (portail captif) | Les cameras THETA ne peuvent pas interagir avec les pages de portail captif. Demandez a votre equipe IT de creer un reseau WPA2 simple pour les appareils IoT, ou utilisez un partage de connexion mobile a la place |
| La camera se connecte mais ne transfere jamais | Le pare-feu du reseau bloque les connexions sortantes | La camera a besoin d'un acces HTTPS (port 443) aux serveurs cloud RICOH360. Demandez a votre equipe IT d'autoriser les domaines requis |
| Le WiFi fonctionne sur certains sites mais pas d'autres | Configurations reseau differentes selon les sites | Configurez plusieurs reseaux WiFi sur la camera (via l'application mobile). La camera se connectera automatiquement au reseau enregistre disponible |

**Solution pratique pour les reseaux restreints :** Utilisez le partage de connexion mobile de votre telephone comme reseau WiFi de la camera. Configurez les identifiants du partage de connexion sur la camera une seule fois, et elle se connectera chaque fois que le partage est actif. Cela contourne entierement les restrictions du reseau d'entreprise.

---

## Echecs d'appairage Bluetooth

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| La camera n'apparait pas dans la liste des appareils Bluetooth | Le Bluetooth est desactive sur la camera ou le telephone | Verifiez que le Bluetooth est active sur les deux appareils. Sur la THETA X, verifiez l'icone Bluetooth sur l'ecran tactile |
| Le Bluetooth s'appaire mais l'application ne peut pas controler la camera | Le Bluetooth seul ne suffit pas pour le controle complet | Le Bluetooth est utilise pour la decouverte initiale et le reveil. Le controle complet de la camera necessite une connexion WiFi. Apres l'appairage Bluetooth, l'application vous invitera a vous connecter egalement en WiFi |
| L'appairage fonctionnait avant mais s'est arrete | Cache d'appairage Bluetooth corrompu | Supprimez la camera de la liste des appareils Bluetooth appaires de votre telephone, puis recommencez l'appairage depuis l'application mobile RICOH360 |

---

## Transfert bloque ou lent

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| Les photos sont transferees mais n'apparaissent jamais sur la plateforme | Le traitement cote serveur prend du temps | Apres le transfert, le cloud traite chaque image (assemblage, tagage IA). Cela peut prendre 1 a 5 minutes par image. Attendez et rafraichissez l'application web |
| La barre de progression du transfert est bloquee a 0% | La camera n'est pas connectee a un reseau WiFi avec internet | Verifiez que la camera est connectee a un reseau WiFi disposant d'un acces internet (pas le WiFi telephone-camera). Le transfert necessite une connectivite cloud |
| Transfert extremement lent | Reseau WiFi lent ou fichiers volumineux | Les panoramas 11K font environ 20 a 30 Mo chacun. Sur des connexions lentes, les transferts peuvent prendre plusieurs minutes par photo. Connectez-vous a un reseau plus rapide si possible |
| Certaines photos transferees, d'autres non | Le transfert a ete interrompu (coupure WiFi, camera en veille) | La camera reprendra le transfert automatiquement une fois reconnectee au WiFi. Vous pouvez aussi declencher une synchronisation manuelle depuis la console d'administration |

---

## Transfert automatique non fonctionnel (Simple Capture)

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| La camera capture les photos mais elles n'apparaissent jamais dans le cloud | La camera n'est pas connectee a un reseau WiFi de transfert | Simple Capture necessite un reseau WiFi configure pour le transfert cloud. Le WiFi camera-telephone sert uniquement au controle en direct, pas au transfert vers le cloud |
| Le transfert automatique fonctionne sur un site mais pas un autre | Reseaux WiFi differents, un seul est configure | Ajoutez le reseau WiFi du nouveau site a la camera via l'application mobile. La camera enregistre plusieurs reseaux et se connecte automatiquement |
| Les transferts ne se font qu'au retour au bureau | Pas de WiFi avec acces internet sur le site terrain | C'est normal si le site terrain n'a pas de WiFi. Les photos sont stockees localement et se transferent quand la camera se connecte a un reseau enregistre. Envisagez de configurer un partage de connexion mobile si le transfert en temps reel est necessaire sur site |
| Les photos apparaissent dans le mauvais album | L'assignation d'album a change ou n'est pas correctement configuree | Avec Simple Capture, verifiez que le bon album est selectionne sur l'ecran de la camera avant de capturer. Les assignations d'album sont configurees pendant le kitting |

---

## Camera non visible dans la console d'administration

| Symptome | Cause probable | Solution |
|----------|---------------|----------|
| La camera est allumee mais non visible dans l'application web | La camera n'a jamais ete enregistree (Twin non cree) | La camera doit etre enregistree dans votre equipe pendant l'onboarding. Contactez votre responsable de compte si la camera n'a pas ete configuree |
| La camera etait visible avant mais affiche maintenant "hors ligne" | La camera a perdu sa connexion WiFi | Reconnectez la camera a un reseau WiFi avec internet. Le statut du Twin se met a jour une fois la camera de retour en ligne |
| La camera affiche des informations obsoletes (ancien niveau de batterie, ancien firmware) | La camera n'a pas synchronise recemment | Le Twin reflete le dernier etat connu. Connectez la camera au WiFi pour qu'elle synchronise son etat actuel vers le cloud |
| Mise a jour firmware disponible mais ne s'installe pas | La camera a besoin d'une connexion WiFi stable et d'une batterie suffisante | Assurez-vous que la camera a au moins 50% de batterie et une connexion WiFi fiable avant de lancer une mise a jour firmware. Ne l'eteignez pas pendant la mise a jour |

> Voir aussi : [MasterClass : Mises a jour firmware (Video 5/14)](https://youtu.be/jxDboxjp_v4)

---

## Pour aller plus loin

- [FAQ Connexion WiFi (Centre d'aide)](https://support.ricoh360.com/fr/faq/ricoh360-app-connection-001)
- [FAQ Application RICOH360 (Centre d'aide)](https://support.ricoh360.com/fr/faqs/ricoh360-app)
- [Guide de mise a jour firmware (Centre d'aide)](https://support.ricoh360.com/fr/tags/ricoh360-app-firm-update)
- [MasterClass : Mises a jour firmware (Video 5/14)](https://youtu.be/jxDboxjp_v4)
- [Problemes camera](/fr/depannage/problemes-camera)
- [Installation materiel](/fr/demarrage/installation-materiel)
