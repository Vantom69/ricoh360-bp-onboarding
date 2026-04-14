---
title: Configuration de Simple Capture
description: La methode la plus simple pour capturer des photos 360 sur le terrain. Vos operateurs selectionnent un album, appuient sur le declencheur, et les photos se transferent automatiquement. Aucune application requise.
outline: [2, 3]
---

# Configuration de Simple Capture

> La methode la plus simple pour capturer des photos 360 sur le terrain. Vos operateurs selectionnent un album, appuient sur le declencheur, et les photos se transferent automatiquement. Aucune application requise.

---

## 1. Qu'est-ce que Simple Capture ?

Simple Capture est un plugin installe sur la camera THETA X qui remplace l'interface standard par un ecran simplifie. Au lieu de naviguer dans les menus de la camera, les reglages d'exposition et les options de transfert, vos operateurs terrain ne voient que deux elements : une liste d'albums et un bouton declencheur.

Le flux de travail est volontairement minimaliste :

1. Selectionnez un album sur l'ecran tactile.
2. Appuyez sur le bouton declencheur.
3. Repartez. Les photos se transferent automatiquement vers le cloud des qu'une connexion WiFi est disponible.

Simple Capture est le flux de travail terrain principal pour les operateurs non techniques. Il supprime toute prise de decision du processus de capture, permettant a n'importe quel membre de votre equipe de produire une documentation 360 coherente et de haute qualite sans formation aux reglages de la camera.

> **Pour aller plus loin :** [Manuel Business Pack Type S](https://support.ricoh360.com/fr/manuals/business-package-type-s) | [Reference plugin Type S](https://support.ricoh360.com/fr/tags/bp-type-s-ref-plugin)

---

## 2. Ce qui distingue le Type S

Le Business Pack Type S est la variante du RICOH360 Business Pack concue specifiquement autour de Simple Capture. Il comprend :

- **1 camera THETA X en location** (l'ecran tactile est necessaire pour la selection d'album)
- **10 comptes utilisateurs** pour votre equipe
- **100 Go de stockage cloud** par licence
- **Ricoh Care** (1 remplacement gratuit de camera sur la duree du contrat)
- **Simple Capture pre-configure** sur la camera avant livraison

La difference cle avec le Business Pack Core : votre THETA X arrive pre-configuree avec un preset de capture et le plugin Simple Capture deja installe. La camera est prete pour une utilisation terrain des la reception, sans aucune configuration requise de la part de vos operateurs.

**Important :** Simple Capture est disponible exclusivement sur THETA X. Il n'est pas disponible sur THETA A1 ni THETA Z1. L'ecran tactile du THETA X est indispensable pour l'interface de selection d'album.

---

## 3. Configuration initiale (Administrateur)

La configuration de Simple Capture est effectuee avant que la camera n'arrive dans les mains de votre equipe. Cette section explique ce qui se passe en coulisses et ce que vous pouvez controler.

### Configuration du preset camera

Chaque THETA X equipee de Simple Capture fonctionne avec un unique preset de capture. Ce preset definit tous les parametres de prise de vue :

| Parametre | Valeurs courantes |
|-----------|-------------------|
| Mode de capture | Image (ou Video, mais pas les deux) |
| Resolution image | 11K ou 5.5K |
| Mode HDR | HDR, HDR Tenu a la main, ou Desactive |
| Retardateur | 2s, 5s, ou Desactive |
| Compensation d'exposition | -2.0 a +2.0 (pas de 1/3 EV) |
| Delai de veille | 3min, 10min, ou Desactive |
| Delai d'extinction | 12h, 24h, ou 48h |

### Comment le preset est applique

Le preset est configure par Ricoh via un kitting USB avant l'expedition de la camera. Il s'agit d'un processus physique utilisant un outil en ligne de commande connecte a la camera. Cela ne peut pas etre fait a distance, et cela ne peut pas etre fait par le client.

**Vous disposez d'un seul preset par camera.** Si vous devez modifier les parametres de capture (par exemple, passer de 11K a 5.5K, ou activer le HDR), contactez votre responsable de compte Ricoh. Un changement de preset necessite le renvoi de la camera ou un kitting sur site par Ricoh.

### Ce que vous controlez en tant qu'administrateur

Vous ne pouvez pas modifier le preset de capture, mais vous controlez tout le reste depuis l'application web RICOH360 :

- **Attribution des albums :** quels albums apparaissent sur l'ecran de cette camera (via THETA Management)
- **Suppression automatique apres transfert :** si les photos sont supprimees de la carte SD de la camera apres un transfert cloud reussi (configurable via les proprietes Twin)
- **Reseaux WiFi :** a quels reseaux la camera se connecte pour le transfert automatique
- **Mises a jour firmware :** gerees via l'application web

> **Pour aller plus loin :** [Parametres WLAN Type S](https://support.ricoh360.com/fr/tags/bp-type-s-wlan-settings) | [Gestion utilisateurs Type S](https://support.ricoh360.com/fr/tags/bp-type-s-user-management)

---

## 4. Fonctionnement sur le terrain (flux operateur)

Voici le flux de travail quotidien. Il faut moins de 30 secondes pour commencer a capturer.

### Etape 1 : Allumer la camera

Maintenez le bouton d'alimentation enfonce. L'interface Simple Capture se charge automatiquement. Vous verrez la liste des albums sur l'ecran tactile.

### Etape 2 : Selectionner l'album cible

Appuyez sur l'album dans lequel vous souhaitez envoyer vos photos. Les albums sont pre-assignes par votre administrateur, vous ne verrez donc que ceux qui correspondent a votre travail (noms de sites, codes projets, references d'intervention, etc.).

### Etape 3 : Appuyer sur le bouton declencheur

Tenez la camera, appuyez sur le bouton declencheur physique. La camera capture un panorama 360 complet avec les parametres pre-configures. Repetez l'operation pour chaque point de capture.

### Etape 4 : Les photos se transferent automatiquement

Lorsque la camera se connecte a un reseau WiFi enregistre (de retour au bureau, sur un site disposant d'un WiFi connu, ou via un point d'acces mobile), les photos se transferent vers le cloud en arriere-plan. Elles apparaissent dans l'album que vous avez selectionne, visibles par toute votre equipe dans l'application web RICOH360.

**C'est l'integralite du flux de travail terrain.** Aucune application mobile n'est necessaire pour la capture. Pas de transfert manuel. Pas de reglages a ajuster.

> **Pour aller plus loin :** [Guide de prise de vue Type S](https://support.ricoh360.com/fr/tags/bp-type-s-shooting) | [Transfert Type S](https://support.ricoh360.com/fr/tags/bp-type-s-upload)
>
> **Ressources video (FR) :** [Transfert vers le cloud](https://youtu.be/A0VD6f5HSRQ) | [Reglages interieur/exterieur](https://youtu.be/ml36-En7UwM)

---

## 5. Gestion des albums (Administrateur)

Les albums sont la colonne vertebrale organisationnelle de Simple Capture. Chaque album que vous attribuez a une camera devient une destination selectionnable sur l'ecran tactile de l'operateur.

### Creer et attribuer des albums

1. Dans l'application web RICOH360, rendez-vous dans **Albums** et creez les albums necessaires (un par site, par projet, par type d'intervention, selon votre flux de travail).
2. Allez dans **THETA Management** dans le panneau d'administration.
3. Selectionnez la camera et attribuez-lui les albums pertinents.
4. Les albums apparaitront sur l'ecran tactile de la camera lors de la prochaine synchronisation.

### Limite pratique d'albums

L'interface Simple Capture fonctionne bien avec **10 a 15 albums par camera**. Au-dela, la liste devient difficile a parcourir sur l'ecran tactile et les performances se degradent. Si vous avez besoin de plus de 15 destinations actives, envisagez une rotation d'albums (retirer les albums termines, en ajouter de nouveaux) plutot que de les accumuler.

### Lecteur de QR Code / Tag

Simple Capture prend en charge la lecture de QR codes pour la selection d'album. Si votre flux de travail utilise des QR codes aux points de capture, les operateurs peuvent scanner au lieu de faire defiler la liste des albums. C'est particulierement utile lorsque le nombre d'albums approche la limite pratique.

> **Pour aller plus loin :** [Parametres d'album Type S](https://support.ricoh360.com/fr/tags/bp-type-s-album-settings)
>
> **Ressource video (FR) :** [Gestion des cameras](https://youtu.be/9k1jxIEstcE)

---

## 6. WiFi et transfert automatique (Administrateur)

### Fonctionnement du transfert automatique

Le THETA X stocke les photos capturees sur sa carte SD interne. Lorsque la camera detecte un reseau WiFi enregistre, elle commence a transferer les photos vers le cloud RICOH360 en arriere-plan. Aucune action de l'utilisateur n'est requise.

Vous pouvez enregistrer plusieurs reseaux WiFi sur la camera (bureau, entrepot, base vie de chantier, point d'acces mobile). La camera se connectera a celui qui est disponible.

### Que se passe-t-il sans WiFi

Si aucun WiFi n'est disponible, les photos restent stockees localement sur la carte SD de la camera. Elles ne sont pas perdues. La prochaine fois que la camera se connecte a un reseau WiFi enregistre, toutes les photos en attente se transferent automatiquement.

### Suppression automatique apres transfert

Vous pouvez activer la suppression automatique des fichiers locaux apres un transfert cloud reussi. Cette option se configure via les proprietes Twin de la camera dans la section THETA Management de l'application web. L'activer permet de maintenir la carte SD libre et d'eviter les problemes de stockage lors de longues campagnes de capture.

> **Pour aller plus loin :** [Parametres WLAN Type S](https://support.ricoh360.com/fr/tags/bp-type-s-wlan-settings) | [Transfert Type S](https://support.ricoh360.com/fr/tags/bp-type-s-upload)

---

## 7. Limitations

Tenez compte de ces contraintes lors de la planification de votre deploiement Simple Capture :

| Limitation | Detail |
|-----------|--------|
| **THETA X uniquement** | Simple Capture n'est pas disponible sur THETA A1 ni THETA Z1. L'ecran tactile est requis. |
| **1 preset par camera** | Les parametres de capture (resolution, HDR, retardateur) sont fixes lors du kitting. Les modifier necessite une intervention Ricoh via USB. |
| **Limite pratique de 10-15 albums** | L'interface tactile se degrade avec des listes d'albums trop longues. Prevoyez une rotation des albums. |
| **Pas de video dans la plupart des deploiements** | Le preset est configure soit pour l'image, soit pour la video, pas les deux. La plupart des deploiements utilisent le mode image. |
| **Pas de modification a distance du preset** | Vous ne pouvez pas modifier les parametres de capture depuis l'application web. Contactez votre responsable de compte Ricoh pour tout changement. |
| **Kitting USB requis** | La camera doit etre kittee avant sa premiere utilisation. Elle ne peut pas etre configuree par le client. |
| **Pas de capture hybride** | Vous ne pouvez pas basculer entre les modes photo et video sur le terrain. Le preset determine le mode. |

---

## 8. Conseils pour les equipes terrain

Ces recommandations sont issues de deploiements reels. Partagez-les avec vos operateurs.

**Avant de partir sur le terrain :**
- Chargez completement la camera. Une charge complete suffit pour une journee entiere de captures dans la plupart des scenarios.
- Nettoyez les deux objectifs avec un chiffon microfibre. Les traces de doigts et la poussiere sont clairement visibles dans les panoramas 360.

**Pendant la capture :**
- Selectionnez le bon album **avant** de commencer a capturer. Si des photos arrivent dans le mauvais album, la seule solution est de les deplacer manuellement dans l'application web apres le transfert.
- Tenez la camera a bout de bras ou sur un monopode. Cela evite que votre corps n'apparaisse au centre du panorama.

**Apres la capture :**
- Verifiez l'icone WiFi sur l'ecran de la camera avant de quitter le site. Si vous voyez l'indicateur de connexion, les transferts sont en cours ou vont bientot commencer.
- Si vous avez capture sur un site sans WiFi, ramenez la camera a portee d'un reseau enregistre (bureau, point d'acces) pour declencher le transfert.

---

## 9. Et ensuite

Une fois Simple Capture en place, explorez ces guides pour tirer le meilleur parti de votre installation :

- [Installation du materiel](/fr/demarrage/installation-materiel) : deballage complet du THETA X et configuration physique
- [Premiers pas avec l'application web](/fr/demarrage/premiers-pas-web) : naviguez dans l'application web RICOH360, consultez vos photos transferees, gerez votre equipe
- [Organiser avec les albums](/fr/utilisation-quotidienne/organiser-avec-albums) : strategies d'albums, conventions de nommage et bonnes pratiques
- [Gestion de flotte de cameras](/fr/fonctionnalites-premium/gestion-flotte-camera) : gerez plusieurs cameras, surveillez la batterie et le stockage a distance, coordonnez vos activites entre sites
