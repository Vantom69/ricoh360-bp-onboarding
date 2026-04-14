---
title: Gestion de la flotte de cameras
description: La console d'administration RICOH360 inclut une section THETA Management qui offre aux administrateurs une vue centralisee de toutes les cameras enregistrees, avec des capacites de surveillance et de configuration a distance.
outline: [2, 3]
---

# Gestion de la flotte de cameras

> La console d'administration RICOH360 inclut une section THETA Management qui offre aux administrateurs une vue centralisee de toutes les cameras enregistrees. Vous pouvez surveiller les niveaux de batterie, les versions de firmware, l'etat du stockage et l'etat de connexion de l'ensemble de votre flotte. Pour les cameras fonctionnant avec Simple Capture, vous pouvez egalement assigner des albums et configurer des comportements a distance via le systeme Twin.

---

## 1. Qu'est-ce que THETA Management ?

THETA Management est la section d'administration des cameras au sein de la console d'administration de l'application web RICOH360. Elle fournit un tableau de bord listant chaque camera THETA enregistree dans votre equipe, avec un statut en temps reel et la possibilite de configuration a distance.

C'est l'endroit ou les administrateurs viennent repondre a des questions telles que :
- Toutes nos cameras sont-elles en ligne et connectees ?
- Quelles cameras doivent etre rechargees ?
- Y a-t-il une camera avec un firmware obsolete ?
- Combien de stockage reste-t-il sur chaque appareil ?
- Quels albums sont assignes a quelle camera ?

---

## 2. La liste des cameras

Lorsque vous ouvrez THETA Management dans la console d'administration, vous voyez un tableau listant toutes les cameras enregistrees.

### Informations disponibles par camera

| Propriete | Ce qu'elle affiche |
|-----------|-------------------|
| **Numero de serie** | L'identifiant unique de la camera physique |
| **Modele** | THETA X, THETA Z1 ou THETA A1 |
| **Etat de connexion** | Si la camera est actuellement en ligne (connectee au WiFi et joignable) ou hors ligne |
| **Niveau de batterie** | Pourcentage de batterie actuel (0-100%) |
| **Etat de la batterie** | Si la camera est en charge ou en decharge |
| **Version du firmware** | La version du firmware actuellement installee sur la camera |
| **Stockage restant** | Combien d'espace de stockage local reste sur la memoire interne de la camera |

Ces informations se mettent a jour lorsque la camera est connectee et communique avec le cloud. Si une camera est hors ligne, le tableau de bord affiche les dernieres valeurs connues.

![THETA Management affichant la liste des cameras avec batterie, firmware et etat du stockage](/images/webapp/admin_theta_management.png)

---

## 3. Comprendre le concept de Twin

Chaque camera THETA enregistree dans le cloud RICOH360 possede un **Twin**. Un Twin est une representation numerique (un "jumeau numerique") de la camera physique. Considerez-le comme un homologue virtuel qui reflète et controle l'appareil reel.

### Ce que le Twin permet

| Capacite | Description |
|----------|-------------|
| **Surveillance a distance** | Visualisez la batterie, le firmware, le stockage et l'etat de connexion depuis n'importe ou via l'application web |
| **Configuration a distance** | Modifiez certains comportements de la camera sans toucher physiquement l'appareil |
| **Suivi des evenements** | Le cloud enregistre quand la camera telecharge du contenu, se connecte, se deconnecte ou signale une erreur |

Le Twin existe dans le cloud meme lorsque la camera physique est eteinte ou deconnectee. Il stocke le dernier etat connu et met en file d'attente toutes les modifications de configuration que vous effectuez. Lorsque la camera se reconnecte, elle se synchronise avec son Twin et applique les modifications en attente.

### Modeles de cameras compatibles

| Modele | Support Twin | Simple Capture | Notes |
|--------|:-----------:|:--------------:|-------|
| **THETA X** | Oui | Oui | Fonctionnalites Twin completes incluant l'assignation d'albums Simple Capture |
| **THETA Z1** | Oui | Non | Surveillance uniquement, pas de Simple Capture |
| **THETA A1** | Oui | Non | Surveillance uniquement, pas de Simple Capture |

![Liste des cameras connectees dans l'application mobile](/images/mobile/theta_list.png)

---

## 4. Configuration a distance via les proprietes du Twin

Pour les cameras connectees, les administrateurs peuvent modifier certains comportements a distance via le Twin. Ces parametres s'appliquent lors de la prochaine synchronisation de la camera.

### Proprietes configurables

**Timelapse**
Configurez la camera pour capturer des panoramas automatiquement a intervalles reguliers. Vous definissez l'heure de debut, l'heure de fin, l'intervalle entre les captures (en secondes) et les jours de la semaine ou le timelapse est actif. C'est utile pour les chantiers ou les installations ou vous souhaitez une documentation automatisee periodique sans operateur.

**Redemarrage programme**
Definissez une heure de redemarrage quotidien (ex. 03h00) pour maintenir la camera en bon fonctionnement lors de deploiements prolonges. Les cameras qui fonctionnent en continu pendant de longues periodes beneficient d'un redemarrage periodique.

**Suppression automatique apres telechargement**
Lorsque cette option est activee, la camera supprime automatiquement les fichiers locaux apres leur transfert reussi vers le cloud RICOH360. Cela libere le stockage local pour que la camera ne soit jamais saturee pendant l'utilisation active. Cette option est fortement recommandee pour les cameras deployees sur le terrain avec Simple Capture.

**Mises a jour automatiques du firmware**
Activez ou desactivez les mises a jour automatiques du firmware. Lorsque cette option est activee, la camera telecharge et installe les nouvelles versions du firmware lorsqu'elle est connectee au WiFi. Maintenir le firmware a jour garantit que vous disposez des dernieres fonctionnalites et corrections de bugs.

---

## 5. Assigner des albums aux cameras (Simple Capture)

Pour les cameras THETA X fonctionnant avec Simple Capture, la console d'administration vous permet d'assigner des albums specifiques a chaque camera. Cela controle ce que l'operateur terrain voit sur l'ecran de la camera.

### Comment ca fonctionne

1. Ouvrez THETA Management dans la console d'administration.
2. Selectionnez une camera THETA X enregistree.
3. Dans les parametres de la camera, trouvez la section d'assignation d'albums.
4. Selectionnez les albums que cette camera doit afficher.
5. Enregistrez l'assignation.

Lors de la prochaine connexion et synchronisation de la camera, les albums assignes apparaissent sur son ecran. L'operateur terrain selectionne un album, capture un panorama, et la photo est automatiquement telechargee dans cet album dans le cloud.

### Bonnes pratiques pour l'assignation d'albums

- **Limitez la liste.** L'interface Simple Capture sur l'ecran de la camera est concue pour 10 a 15 albums. Au-dela, faire defiler une longue liste sur le petit ecran devient peu pratique.
- **Utilisez des noms d'albums clairs.** L'operateur voit le nom de l'album sur l'ecran de la camera. Des noms comme "Batiment A - Rez-de-chaussee" sont bien plus utiles que "Album 37".
- **Mettez a jour les assignations selon les besoins.** Lorsqu'une phase de projet se termine ou qu'un site est acheve, retirez les anciens albums et ajoutez-en de nouveaux. Cela garde l'ecran de l'operateur pertinent.

---

## 6. Suivi du firmware sur l'ensemble de votre flotte

Lorsque vous gerez plusieurs cameras sur differents sites, la coherence du firmware est importante. La liste THETA Management affiche la version du firmware de chaque camera, ce qui permet de reperer facilement les appareils en retard.

### Verifier l'etat du firmware

1. Ouvrez THETA Management.
2. Consultez la colonne de version du firmware. Toutes les cameras du meme modele devraient idealement utiliser la meme version.
3. Si une camera affiche une version anterieure, assurez-vous qu'elle est connectee au WiFi et que les mises a jour automatiques du firmware sont activees dans les proprietes de son Twin.

### Processus de mise a jour du firmware

Les mises a jour du firmware sont livrees par WiFi. Lorsqu'une camera est connectee et que les mises a jour automatiques sont activees, elle telecharge et installe le nouveau firmware sans intervention de l'operateur. Le processus de mise a jour necessite un redemarrage de la camera, il se produit donc automatiquement pendant les periodes d'inactivite.

Si les mises a jour automatiques sont desactivees, vous pouvez gerer les mises a jour manuellement via l'application mobile lorsque vous etes physiquement connecte a la camera.

---

## 7. Scenarios pratiques de gestion de flotte

### Scenario : Plusieurs cameras sur plusieurs sites

Une entreprise de facility management deploie cinq cameras THETA X sur cinq sites differents, chacune avec Simple Capture. L'administrateur :
- Assigne des albums specifiques a chaque camera (ex. la Camera 1 obtient les albums "Entrepot Lyon", la Camera 2 obtient les albums "Bureau Paris").
- Active la suppression automatique sur toutes les cameras pour que le stockage local ne se remplisse jamais.
- Programme un redemarrage nocturne a 03h00 sur toutes les cameras pour la stabilite.
- Consulte le tableau de bord chaque semaine pour verifier que toutes les cameras sont en ligne et que le firmware est a jour.

### Scenario : Verification periodique de l'etat des cameras

Une fois par semaine, l'administrateur ouvre THETA Management et passe en revue :
- **Etat de connexion** : Toute camera affichant "hors ligne" pendant une periode prolongee peut avoir un probleme de WiFi ou d'alimentation sur site.
- **Niveau de batterie** : Les cameras affichant systematiquement un niveau de batterie bas peuvent necesiter un ajustement de la station de charge a leur emplacement de deploiement.
- **Stockage** : Meme avec la suppression automatique activee, une verification rapide confirme que les telechargements se deroulent correctement.

---

## 8. Limitations

| Limitation | Ce que cela signifie en pratique |
|-----------|----------------------------------|
| **La camera doit etre en ligne** | La surveillance Twin et la configuration a distance ne fonctionnent que lorsque la camera est connectee au WiFi et communique avec le cloud. Une camera hors ligne affiche son dernier etat connu, et toute modification de configuration est mise en file d'attente jusqu'a sa reconnexion. |
| **Toutes les proprietes ne sont pas disponibles sur tous les modeles** | Simple Capture et l'assignation d'albums sont reserves a la THETA X. Les THETA Z1 et A1 supportent la surveillance de base (batterie, firmware, stockage, connexion) mais pas le flux de capture guidee. |
| **Les parametres de capture ne sont pas configurables a distance** | Les parametres comme le mode HDR, la resolution d'image et la compensation d'exposition sont definis lors de la configuration initiale de la camera (kitting). Vous ne pouvez pas les modifier depuis l'application web. Pour changer les parametres de capture, la camera doit etre physiquement reconfiguree. |
| **Pas de systeme d'alertes** | Le tableau de bord affiche l'etat actuel, mais il n'y a pas d'alertes automatisees (ex. email quand une camera passe hors ligne ou que la batterie descend sous 10%). Vous devez consulter le tableau de bord de maniere proactive. |
| **Simple Capture est limite a 10-15 albums** | Bien que vous puissiez techniquement assigner plus d'albums, l'ecran de la camera n'est pas concu pour de longues listes. Gardez les assignations d'albums ciblees et gerable. |

---

## 9. Conseils pour les administrateurs de flotte

**Consultez le tableau de bord regulierement.** Prenez l'habitude de verifier THETA Management au moins une fois par semaine, surtout si des cameras sont deployees sur des sites distants. Une verification de cinq minutes peut detecter des problemes avant qu'ils ne s'aggravent.

**Standardisez le firmware sur l'ensemble de votre flotte.** Activez les mises a jour automatiques du firmware sur toutes les cameras. Utiliser des versions de firmware differentes entre les appareils peut entrainer des comportements incoherents et complique le depannage.

**Activez la suppression automatique.** Pour toute camera utilisee dans un flux de capture routinier (en particulier Simple Capture), la suppression automatique apres telechargement cloud est presque toujours le bon choix. Cela empeche le stockage de se remplir et elimine le besoin pour quelqu'un de gerer manuellement les fichiers sur la camera.

**Etiquetez vos cameras.** Collez une etiquette physique sur chaque camera avec son numero de serie et le nom du site assigne. Quand le tableau de bord affiche "Camera YR10010018 est hors ligne", vous devez savoir a quel appareil physique cela correspond et ou il se trouve.

**Planifiez votre structure d'albums avant le deploiement.** Mettre en place des assignations d'albums claires avant d'envoyer les cameras sur le terrain reduit la confusion pour les operateurs et maintient votre stockage cloud bien organise des le premier jour.

---

## 10. Et ensuite

- **Gestion d'equipe** : La gestion de la flotte de cameras fonctionne main dans la main avec la gestion d'equipe. Assurez-vous que les bonnes personnes disposent de l'acces Admin pour gerer les cameras. Voir [Gestion d'equipe](/fr/fonctionnalites-premium/gestion-equipe).

- **Configuration Simple Capture** : Si vous deployez des cameras THETA X avec Simple Capture pour la premiere fois, commencez par le guide de configuration. Voir [Configuration Simple Capture](/fr/demarrage/configuration-simple-capture).

- **Documentation de site** : Pour un flux de travail complet combinant deploiement de cameras, capture et organisation pour la documentation de sites. Voir [Documentation de site](/fr/cas-usage/documentation-de-site).

> **Pour aller plus loin**
> - [Affichage de la liste THETA (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-theta-list-display)
> - [Video MasterClass 4/14 - Gestion des cameras (FR)](https://youtu.be/9k1jxIEstcE)
> - [Video MasterClass 14/14 - Tableau de bord API Camera (FR)](https://youtu.be/G7azashJdoE)
> - [Console d'administration (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-admin-console)
