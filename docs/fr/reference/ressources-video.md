---
title: Ressources video
description: Audit et guide de reference pour la serie de 14 videos MasterClass RICOH360 avec statut de validite, lacunes de couverture et recommandations prioritaires pour la creation de nouveau contenu video.
outline: [2, 3]
---

# RICOH360 MasterClass -- Ressources Video

> 14 tutoriels video crees par Laura Dias (septembre 2024), publies sur la chaine YouTube RICOH360 Tours.
> Langue : francais. Format : cours structure en 3 parties (Camera Setup, Fonctionnalites, API).
> Plateforme de cours : Podia.

**Derniere mise a jour :** 2026-04-14
**Audit realise contre :** documentation produit RICOH360 a jour (app features, cloud technical, hardware specs)

---

## Table des matieres

1. [Partie I -- Configuration Camera](#partie-i--configuration-camera)
2. [Partie II -- Fonctionnalites RICOH360](#partie-ii--fonctionnalites-ricoh360)
3. [Partie III -- API](#partie-iii--api)
4. [Matrice de validite](#matrice-de-validite)
5. [Fonctionnalites non couvertes](#fonctionnalites-non-couvertes-gaps)
6. [Videos prioritaires a creer](#videos-prioritaires-a-creer)

---

## Statuts de validite

| Statut | Signification |
|--------|---------------|
| VALIDE | Le contenu est toujours exact et utilisable tel quel |
| PARTIELLEMENT VALIDE | Le contenu de base reste correct mais certains elements ont evolue ou manquent |
| OBSOLETE | L'interface ou les fonctionnalites ont significativement change |

---

## Partie I -- Configuration Camera

### Video 1/14 -- Introduction

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Introduction |
| **Lien** | https://youtu.be/gWGhXz-03t8 |
| **Sujet** | Presentation generale de l'ecosysteme RICOH360 |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** La structure generale de l'ecosysteme (camera + cloud + app) est inchangee.

**Ce qui a evolue :** La camera THETA A1 (modele enterprise) n'est pas mentionnee. Le modele commercial Business Pack (location camera + plateforme + support) a remplace l'approche centree sur la vente de cameras. Le positionnement EMEA (early adopter, co-construction) differe de ce qui etait presente a l'epoque.

---

### Video 2/14 -- Cameras RICOH THETA

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Cameras RICOH THETA |
| **Lien** | https://youtu.be/nmXo5zTguvE |
| **Sujet** | Presentation de la gamme THETA (specifications, differences entre modeles) |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** Les specifications de la THETA X (11K photo, 8K video, ecran tactile, batterie amovible) et de la THETA Z1 (capteurs 1 pouce, qualite d'image superieure) restent exactes.

**Ce qui a evolue :** La THETA A1 (IP64, 120 min de video, robustesse terrain) n'est pas couverte. La segmentation actuelle en trois cameras (X = deploiement standard, A1 = terrain enterprise, Z1 = imagerie premium) est absente. Les modeles d'acces (vente directe, Premium Pack, Business Pack) ne sont pas presentes.

---

### Video 3/14 -- Ajout des panoramas sur le Cloud

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Ajout des panoramas sur le Cloud360 |
| **Lien** | https://youtu.be/A0VD6f5HSRQ |
| **Sujet** | Comment transferer les panoramas vers le cloud RICOH360 |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** Le flux de base (capture, connexion WiFi, transfert automatique vers le cloud) fonctionne toujours de la meme maniere.

**Ce qui a evolue :** Le titre mentionne "Cloud360", une denomination obsolete (le nom actuel est "RICOH360"). Les trois modes de capture actuels (Simple Capture avec selection d'album sur la camera / Theta Twin standard / App Mobile) et la distinction entre l'arrivee dans un album vs. le pool Photos & Videos ne sont pas forcement bien expliques.

---

### Video 4/14 -- Gestion des cameras sur l'application RICOH360

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Gestion des cameras sur l'application RICOH360 |
| **Lien** | https://youtu.be/9k1jxIEstcE |
| **Sujet** | Comment gerer les cameras THETA depuis l'app mobile et la web app |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** Les fonctions de base de l'app mobile (connexion Bluetooth/WiFi, live preview, declenchement a distance, configuration WiFi, mise a jour firmware) sont inchangees.

**Ce qui a evolue :** La console d'administration web (Theta Management) offre desormais une gestion complete : liste des cameras, statut en ligne, batterie, firmware, espace restant, assignation d'albums, suppression automatique apres transfert. Le concept de "Twin" (jumeau numerique de la camera dans le cloud, avec proprietes modifiables a distance comme le timelapse et le reboot planifie) est probablement absent.

---

### Video 5/14 -- Mise a jour de la camera RICOH THETA

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Mise a jour de la camera RICOH THETA |
| **Lien** | https://youtu.be/jxDboxjp_v4 |
| **Sujet** | Procedure de mise a jour du firmware des cameras THETA |
| **Statut** | VALIDE |

**Ce qui reste valide :** La procedure de mise a jour firmware (via app mobile ou gestion automatique via les proprietes Twin) est stable. Le flux montre dans la video reste applicable.

---

### Video 6/14 -- Reglage camera : Interieur vs Exterieur

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Reglage camera : Prise de vue interieur VS exterieur |
| **Lien** | https://youtu.be/ml36-En7UwM |
| **Sujet** | Optimisation des reglages camera selon les conditions de luminosite (interieur/exterieur) |
| **Statut** | VALIDE |

**Ce qui reste valide :** Les modes HDR (HDR, HDR Handheld, Off), la compensation d'exposition, et les recommandations pour la capture interieur/exterieur sont des parametres hardware stables.

**Point d'attention :** Pour les cameras configurees en Simple Capture, le preset est fixe au kitting et non modifiable par l'utilisateur final. Cette nuance n'est pas couverte.

---

### Video 7/14 -- Reglage camera : Faible luminosite

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Reglage camera : Faible luminosite |
| **Lien** | https://youtu.be/Qfx7qdT8DXs |
| **Sujet** | Reglages optimaux pour les environnements sombres |
| **Statut** | VALIDE |

**Ce qui reste valide :** Les conseils de reglage en basse lumiere sont des parametres hardware stables. La THETA Z1 avec ses capteurs 1 pouce est particulierement performante dans ce contexte.

**Complement disponible :** Cote cloud, le traitement IA "Low-Light Enhancement" (`enhancement:alg_lle`) permet d'ameliorer les images sombres apres capture (couvert en video 12 pour la partie API).

---

## Partie II -- Fonctionnalites RICOH360

### Video 8/14 -- Super resolution

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Super resolution |
| **Lien** | https://youtu.be/PUrD701fmRw |
| **Sujet** | Fonctionnalite d'amelioration IA de la resolution des panoramas |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** La Super Resolution existe et fonctionne. Elle est accessible depuis le viewer web (bouton Enhancement).

**Ce qui a evolue :** L'algorithme par defaut combine desormais Super Resolution + Low-Light Enhancement automatiquement (`sr_lle_auto`). L'interface du viewer a pu evoluer. Le traitement est asynchrone avec mise en cache cote serveur (le premier appel prend du temps, les suivants sont instantanes).

---

### Video 9/14 -- Floutage automatique des personnes

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Floutage automatique des personnes |
| **Lien** | https://youtu.be/VXNK0fQgK4c |
| **Sujet** | Detection et floutage automatique des personnes dans les panoramas 360 |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** Le floutage automatique (Privacy Blur) est une fonctionnalite principale, accessible via le bouton "Blur" du viewer. La detection couvre les personnes entieres, pas seulement les visages.

**Ce qui a evolue :** L'interface du viewer peut avoir change. Point important : le floutage fonctionne uniquement sur les panoramas, pas sur les videos 360.

---

### Video 10/14 -- Visionneur de panoramas

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Visionneur de panoramas |
| **Lien** | https://youtu.be/adu_IuLef2M |
| **Sujet** | Utilisation du viewer 360 pour naviguer dans les panoramas |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** Les fonctions de base du viewer (navigation 360, zoom, rotation automatique, position initiale, plein ecran, filmstrip) sont inchangees.

**Ce qui a evolue :** Le viewer a gagne des fonctionnalites depuis septembre 2024 : annotations avec titre/description, outil de dessin libre, crop perspective (extraction de vues 2D depuis le 360), mode comparaison Side-by-Side. Ces fonctionnalites ne sont probablement pas montrees dans la video.

---

## Partie III -- API

### Video 11/14 -- Les API RICOH

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : Les API RICOH |
| **Lien** | https://youtu.be/PPrwvyuFi0s |
| **Sujet** | Vue d'ensemble des API RICOH360 disponibles |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** La Content API (CRUD medias) et l'authentification de base (OAuth2 Client Credentials via AWS Cognito) sont inchangees.

**Ce qui a evolue :** L'ecosysteme API s'est enrichi : Twin API (gestion cameras), Field Automation API (cartographie avec path tracking), Webhooks (notifications en temps reel), Team API Key (authentification simplifiee par cle directe), Viewer SDK (SDK JavaScript pour embedder un viewer 360 dans une app tierce, avec auth JWT RS256). Ces APIs ne sont probablement pas couvertes.

---

### Video 12/14 -- API : Amelioration de l'image

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : API : Amelioration de l'image |
| **Lien** | https://youtu.be/A-xUF1BihC4 |
| **Sujet** | Utilisation de l'API de transformation pour ameliorer les images 360 |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** L'endpoint de transformation Enhancement fonctionne toujours.

**Ce qui a evolue :** L'algorithme combine `sr_lle_auto` est devenu le defaut. Le chainage de transformations (`enhancement,p_cubic`), le forcement du mode Low-Light (`enhancement:alg_lle`), le crop perspective (`c_persp,fov_90,lat_0,lon_0,w_1920,h_1080`), et le staging ne sont probablement pas couverts. Le pattern de polling asynchrone avec header `Retry-After` et le cache serveur sont des details d'integration importants qui manquent potentiellement.

---

### Video 13/14 -- API : Floutage des personnes et cubics

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : API : Floutage des personnes et cubics |
| **Lien** | https://youtu.be/ZId5M16_5zA |
| **Sujet** | Utilisation de l'API pour le floutage (b_person) et la projection cubique (p_cubic) |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** Les transformations `b_person` (floutage des personnes) et `p_cubic` (projection cubique en 6 faces "dice") sont toujours disponibles et documentees.

**Ce qui a evolue :** Le chainage avec d'autres transformations (ex: `enhancement,b_person,p_cubic`) n'est probablement pas montre. Le crop perspective (`c_persp`), qui permet d'extraire des vues 2D depuis un panorama 360, est absent de cette video.

---

### Video 14/14 -- API : Dashboard camera

| | |
|---|---|
| **Titre** | MasterClass RICOH360 : API : Dashboard camera |
| **Lien** | https://youtu.be/G7azashJdoE |
| **Sujet** | Construire un dashboard de monitoring des cameras via l'API Twin |
| **Statut** | PARTIELLEMENT VALIDE |

**Ce qui reste valide :** L'API Twin (`GET /twins` avec proprietes battery_level, connection_state, firmware_version, remaining_space) fonctionne toujours.

**Ce qui a evolue :** Les proprietes modifiables via `PATCH /twins/{id}/properties` (timelapse, reboot planifie, auto-delete, mises a jour firmware) et les webhooks pour evenements camera (`twin.updated`, `twin.device_error.reported`) sont probablement absents.

---

## Matrice de validite

| # | Video | Statut | Impact |
|---|-------|--------|--------|
| 1 | Introduction | PARTIELLEMENT VALIDE | Camera A1 et modele Business Pack absents |
| 2 | Cameras RICOH THETA | PARTIELLEMENT VALIDE | THETA A1 et segmentation 3 cameras absentes |
| 3 | Ajout panoramas sur le Cloud | PARTIELLEMENT VALIDE | Nom "Cloud360" obsolete, modes capture evolues |
| 4 | Gestion cameras sur l'app | PARTIELLEMENT VALIDE | Console admin web et concept Twin absents |
| 5 | Mise a jour firmware | VALIDE | Procedure stable |
| 6 | Reglage interieur/exterieur | VALIDE | Parametres hardware stables |
| 7 | Reglage faible luminosite | VALIDE | Parametres hardware stables |
| 8 | Super resolution | PARTIELLEMENT VALIDE | Algorithme combine `sr_lle_auto` nouveau |
| 9 | Floutage automatique | PARTIELLEMENT VALIDE | UI possiblement changee, limitation video non mentionnee |
| 10 | Visionneur de panoramas | PARTIELLEMENT VALIDE | Annotations, dessin, crop, SBS absents |
| 11 | Les API RICOH | PARTIELLEMENT VALIDE | Twin API, Webhooks, Field Automation, SDK absents |
| 12 | API Enhancement | PARTIELLEMENT VALIDE | Nouveau defaut algo, chainage, crop absents |
| 13 | API Floutage et cubics | PARTIELLEMENT VALIDE | Chainage et crop perspective absents |
| 14 | API Dashboard camera | PARTIELLEMENT VALIDE | Proprietes modifiables et webhooks absents |

**Resume :** 3 videos VALIDES, 11 videos PARTIELLEMENT VALIDES, 0 video OBSOLETE.

---

## Fonctionnalites non couvertes (Gaps)

Les fonctionnalites suivantes du Business Pack n'ont aucune couverture video :

| Fonctionnalite | Priorite | Justification |
|---|---|---|
| **Projects & Floor Plans** | Haute | Fonctionnalite differenciante du Business Pack. Organisation spatiale, floor plans, markers, navigation par zones. |
| **Albums (double role)** | Haute | Conteneurs d'organisation ET destinations de capture Simple Capture. Concept central non explique. |
| **Simple Capture** | Haute | Mode de deploiement principal pour les clients Business Pack. Selection d'album sur camera, capture en un clic, transfert auto. |
| **Annotations** | Moyenne | Marqueurs interactifs sur les panoramas avec titre/description. Cle pour construction et inspection. |
| **Comparaison Side-by-Side** | Moyenne | Comparaison avant/apres de panoramas. Essentiel pour le suivi de chantier. |
| **Partage (liens, permissions)** | Moyenne | Comment diffuser du contenu 360 a l'externe. Liens publics, limitations, bonnes pratiques. |
| **Administration (equipe et cameras)** | Moyenne | Console admin : membres, roles, licences, gestion cameras. |
| **THETA A1** | Moyenne | Camera enterprise robuste (IP64, 120 min video). Non disponible en sept 2024. |
| **Viewer SDK (embeddable)** | Basse | SDK JavaScript pour embedder un viewer 360 dans une app tierce. Audience technique/partenaires. |
| **Webhooks** | Basse | Integration event-driven. Audience developpeurs. |
| **Field Automation API** | Basse | Path tracking pour reconstruction 3D (Cintoo). Niche mais strategique. |
| **App Connection / Marketplace** | Basse | Ecosysteme partenaires. Encore en phase precoce. |

---

## Videos prioritaires a creer

### Priorite 1 -- Indispensables (bloquent l'onboarding)

1. **Simple Capture : guide utilisateur**
   - Public : operateurs terrain
   - Contenu : selection d'album sur la camera, capture en un clic, transfert WiFi automatique, QR Code/Tag reader
   - Pourquoi : c'est le flux quotidien de 80% des utilisateurs Business Pack

2. **Projects & Floor Plans : organiser vos panoramas sur un plan**
   - Public : administrateurs, chefs de projet
   - Contenu : creation de projet, import de floor plan, positionnement de markers, navigation entre zones
   - Pourquoi : fonctionnalite differenciante vs. stockage photo basique

3. **Albums : organiser et structurer vos captures**
   - Public : tous les utilisateurs
   - Contenu : creation d'album, album comme destination de capture (lien Simple Capture), album comme unite d'organisation, assignation d'albums aux cameras
   - Pourquoi : concept central de la plateforme, pre-requis pour comprendre Simple Capture et Projects

### Priorite 2 -- Forte valeur ajoutee (accelerent l'adoption)

4. **Annotations : documenter vos panoramas**
   - Public : conducteurs de travaux, inspecteurs, facility managers
   - Contenu : creation d'annotation, edition, suppression, dessin libre, cas d'usage (defauts, points de controle, prelevement)

5. **Comparaison Side-by-Side : suivi d'avancement**
   - Public : conducteurs de travaux, chefs de projet
   - Contenu : activation du mode comparaison, navigation independante, selection de panoramas

6. **THETA A1 : la camera enterprise**
   - Public : decision-makers, responsables deploiement
   - Contenu : specifications, positionnement vs THETA X, IP64, 120 min video, cas d'usage (terrain, longue duree)

### Priorite 3 -- Completent la bibliotheque

7. **Administration : gerer votre equipe et vos cameras**
   - Public : administrateurs
   - Contenu : gestion des membres, roles, licences, Theta Management, assignation d'albums

8. **Partage : diffuser vos panoramas 360**
   - Public : tous les utilisateurs
   - Contenu : liens publics, mise en "public", limitations (pas de partage d'album, annotations supprimees au partage)

9. **API : Webhooks et evenements**
   - Public : developpeurs, partenaires techniques
   - Contenu : configuration webhooks, types d'evenements, validation de signature
