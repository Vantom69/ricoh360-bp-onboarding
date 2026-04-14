---
title: Traitement IA
description: RICOH360 inclut un traitement IA integre qui peut ameliorer la qualite d'image, flouter les personnes pour la conformite vie privee et extraire des images 2D plates a partir de vos panoramas 360.
outline: [2, 3]
---

# Traitement IA

> RICOH360 inclut un traitement IA integre qui peut ameliorer la qualite d'image, flouter les personnes pour la conformite vie privee et extraire des images 2D plates a partir de vos panoramas 360. Ces fonctionnalites s'executent dans le cloud et sont accessibles depuis le Viewer en un seul clic.

---

## 1. Vue d'ensemble des fonctionnalites IA

RICOH360 propose quatre fonctionnalites de traitement par IA, toutes accessibles depuis la barre d'outils du Viewer 360 :

| Fonctionnalite | Ce qu'elle fait |
|----------------|----------------|
| **Super Resolution + Amelioration** | Ameliore la qualite globale de l'image : affine les details, augmente la resolution et corrige automatiquement les zones sombres |
| **Floutage de visages (Privacy Blur)** | Detecte et floute les personnes dans le panorama pour la vie privee et la conformite |
| **Recadrage de perspective** | Extrait une image 2D plate depuis n'importe quel angle au sein du panorama 360 |

Ces trois fonctionnalites s'appliquent aux photos 360 (panoramas). Elles ne sont pas disponibles pour les videos 360.

![Panneau d'edition IA : Amelioration d'image et Floutage de personnes](/images/webapp/ai_editing.png)

---

## 2. Super Resolution et Amelioration

### Ce que ca fait

L'amelioration applique un algorithme IA combine qui ameliore la qualite d'image de deux manieres simultanees :

1. **Super Resolution** : Augmente la resolution effective et la nettete du panorama, rendant les details comme le texte sur les panneaux, les etiquettes d'equipement ou les textures de surface plus clairs lorsque vous zoomez.
2. **Amelioration en faible luminosite** : Detecte et corrige automatiquement les zones sous-exposees. Si certaines parties du panorama sont trop sombres (courant dans les captures en interieur, les sous-sols ou les pieces a eclairage mixte), l'algorithme eclaircit ces zones tout en preservant les tons naturels.

Par defaut, RICOH360 applique les deux ameliorations ensemble en une seule passe. Vous n'avez pas a choisir entre les deux.

### Comment l'utiliser

1. Ouvrez un panorama dans le Viewer 360.
2. Cliquez sur le bouton **Amelioration** dans la barre d'outils.
3. La premiere fois que vous ameliorez un panorama specifique, le traitement prend un moment (generalement quelques secondes a moins d'une minute). Un indicateur de progression affiche le statut.
4. Une fois le traitement termine, la version amelioree se charge automatiquement dans le viewer.
5. Lors des consultations suivantes, la version amelioree se charge instantanement car le resultat est mis en cache sur le serveur.

### Quand l'utiliser

- **Captures interieures sombres** : Sous-sols, locaux techniques ou entrepots mal eclaires.
- **Inspection de details** : Lorsque vous devez zoomer sur de petits details comme des numeros de serie, des dommages aux murs ou l'etat d'equipements.
- **Amelioration generale de la qualite** : L'amelioration optimise pratiquement tout panorama, meme ceux captures dans de bonnes conditions d'eclairage.

---

## 3. Floutage de visages (Privacy Blur)

### Ce que ca fait

Le floutage de visages utilise l'IA pour detecter les personnes dans le panorama et les flouter. La detection couvre les personnes entieres, pas seulement les visages. Si quelqu'un est visible dans le panorama, l'ensemble de son corps est floute, le rendant non identifiable. Cela repond aux exigences de vie privee (RGPD et reglementations similaires) lors du partage de documentation de site pouvant inclure des passants, des travailleurs ou des pietons.

### Comment l'utiliser

1. Ouvrez un panorama dans le Viewer 360.
2. Cliquez sur le bouton **Privacy Blur** dans la barre d'outils.
3. Le traitement s'execute dans le cloud. La premiere fois, cela prend quelques secondes ; les consultations suivantes chargent le resultat en cache instantanement.
4. La version floutee remplace l'originale dans le viewer. Toutes les personnes detectees sont floutees.

### Details importants

- La detection couvre les corps entiers, pas seulement les visages. Une personne vue de dos est egalement floutee.
- Le floutage est applique sur la copie traitee. Le panorama original non floute reste stocke et accessible.
- Vous ne pouvez pas flouter ou deflouter selectivement des personnes individuelles. La fonctionnalite s'applique a toutes les personnes detectees en une seule fois.

### Quand l'utiliser

- **Partage de documentation de site en externe** : Avant de generer un lien de partage pour un panorama, appliquez le Privacy Blur pour vous assurer qu'aucun individu n'est identifiable.
- **Conformite aux reglementations de vie privee** : Si votre organisation exige l'anonymisation des environnements captures avant le stockage ou la diffusion.
- **Chantiers et installations** : Ou des travailleurs, visiteurs ou le public peuvent apparaitre dans les panoramas.

---

## 4. Recadrage de perspective

### Ce que ca fait

Le recadrage de perspective vous permet d'extraire une image plate (2D) standard depuis n'importe quel angle de vue au sein d'un panorama 360. Au lieu de partager une vue 360 entiere, vous orientez le viewer vers une zone d'interet specifique et la recadrez comme une image rectangulaire classique.

### Comment l'utiliser

1. Ouvrez un panorama dans le Viewer 360.
2. Naviguez jusqu'a l'angle et au niveau de zoom souhaites.
3. Cliquez sur le bouton **Recadrer** dans la barre d'outils.
4. Ajustez le cadre de recadrage si necessaire (champ de vision, largeur, hauteur).
5. Confirmez le recadrage. Le systeme genere une image 2D plate a partir de cette perspective.
6. Telechargez ou utilisez l'image obtenue.

### Quand l'utiliser

- **Rapports et presentations** : Extrayez une vue specifique (par exemple, un defaut sur un mur, un gros plan d'equipement) sous forme d'image standard pour l'inclure dans des documents.
- **Communication par email** : Lorsque vous devez partager un detail specifique avec quelqu'un qui n'a pas besoin de l'experience 360 complete.
- **Documentation** : Creez des images ciblees a partir de vos captures 360 sans retourner sur site avec un appareil photo classique.

---

## 5. Comment fonctionne le traitement IA

Toutes les fonctionnalites IA suivent le meme schema :

1. **Premiere demande** : Vous cliquez sur le bouton. RICOH360 envoie le panorama au cloud pour traitement. C'est asynchrone, ce qui signifie que le traitement s'execute en arriere-plan.
2. **Traitement** : L'algorithme IA s'execute. La duree varie selon la fonctionnalite et la complexite de l'image, mais se termine generalement en quelques secondes.
3. **Mise en cache** : Une fois le traitement termine, le resultat est stocke sur le serveur. Toute demande future du meme traitement sur le meme panorama renvoie le resultat en cache immediatement.

Cela signifie :
- La premiere fois que vous ameliorez ou floutez un panorama, attendez-vous a un bref delai.
- Toutes les fois suivantes, le resultat apparait instantanement.
- Le traitement ne modifie pas le fichier original. Le panorama original est toujours preserve.

---

## 6. Limitations

| Limitation | Ce que cela implique en pratique |
|------------|----------------------------------|
| **Panoramas uniquement** | Les fonctionnalites de traitement IA s'appliquent aux photos 360. Elles ne sont pas disponibles pour les videos 360. |
| **Pas de traitement par lot depuis l'interface** | Vous declenchez le traitement un panorama a la fois depuis le Viewer. Il n'y a pas de bouton "ameliorer toutes les photos de cet album". |
| **Floutage de la personne entiere uniquement** | Le Privacy Blur floute toutes les personnes detectees dans le panorama. Vous ne pouvez pas flouter ou deflouter selectivement des individus specifiques. |
| **Temps de traitement a la premiere utilisation** | La premiere fois que vous traitez un panorama specifique, cela prend un moment. Les demandes suivantes sont instantanees (resultat en cache). |
| **Amelioration automatique** | L'algorithme combine (resolution + faible luminosite) s'execute en une seule passe. Vous ne pouvez pas controler separement l'intensite de chaque amelioration. |

---

## 7. Et ensuite

- **Comparaison cote a cote** : Apres avoir ameliore des panoramas, utilisez la comparaison cote a cote pour comparer la version amelioree avec l'originale, ou pour comparer des captures de dates differentes. Voir [Comparaison cote a cote](/fr/utilisation-quotidienne/comparaison-cote-a-cote).

- **Partage externe** : Avant de partager des panoramas en externe, appliquez d'abord le Privacy Blur pour assurer la conformite. Voir [Partage avec des intervenants externes](/fr/utilisation-quotidienne/partage-externe).

- **Rapports d'inspection** : Le traitement IA est particulierement precieux pour les flux d'inspection ou la clarte d'image et la conformite vie privee sont toutes deux importantes. Voir [Rapports d'inspection](/fr/cas-usage/rapports-inspection).

> **Pour aller plus loin**
> - [Video MasterClass 8/14 - Super Resolution (FR)](https://youtu.be/PUrD701fmRw)
> - [Video MasterClass 9/14 - Floutage de visages (FR)](https://youtu.be/VXNK0fQgK4c)
