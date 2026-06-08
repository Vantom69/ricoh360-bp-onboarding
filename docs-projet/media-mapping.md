# V2 — Mapping médias (vidéos + captures)

**Source Drive Laura** : https://drive.google.com/drive/folders/1Jo45JZRUk4jA8MOemGhcx_tQTuuSwXPT

Ce fichier est la source de vérité pour l'intégration des médias dans le site V2.
Quand Laura fournit le contenu hébergé (URL ou fichier .mp4), on met à jour la colonne `URL` et le `Statut` → la page V2 affichera la vidéo / image à la place du placeholder.

**Statuts possibles** :
- `🟡 placeholder` — fichier annoncé par Laura, à hauteur du Drive, pas encore hébergé / intégré
- `🟢 intégré` — fichier hébergé, embeddé dans la page V2
- `🔴 manquant` — fichier identifié comme nécessaire mais pas encore fourni par Laura
- `⚪ à vérifier` — usage ou cible incertaine

---

## Section 2 — Installer la caméra

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:firmware-update` | Mettre à jour sa caméra | .mov | 02 (X + A1) | 🟡 placeholder | — |
| `media:check-paired-cameras` | Voir les caméras associées | .png | 02 ou 05 | ⚪ à vérifier | — |

## Section 4 — Compte RICOH360

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:login-mobile` | Se connecter sur mobile | .mov | 04 | 🟡 placeholder | — |
| `media:login-desktop` | Se connecter sur ordinateur | .mov | 04 | 🟡 placeholder | — |

## Section 5 — Connecter la caméra

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:pair-theta-x` | Connecter une RICOH THETA X | .mov | 05A | 🟡 placeholder | — |
| `media:pair-theta-a1` | Connecter une RICOH THETA A1 | .mov | 05B | 🟡 placeholder | — |

## Section 6 — Première capture 360°

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:launch-capture-mobile` | Lancer la capture depuis l'application mobile | .mov | 06 | 🟡 placeholder | — |
| `media:verify-panorama-in-app` | Vérifier le panorama dans l'app | .png | 06 | 🟡 placeholder | — |

## Section 7 — Comprendre le Cloud

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:cloud-link-explained` | Comprendre le lien avec RICOH360 Cloud | .mov | 07 | 🟡 placeholder | — |

## Section 8 — Retrouver et partager

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:find-panorama-platform` | Retrouver son panorama sur la plateforme | .png | 08 | 🟡 placeholder | — |
| `media:share-link` | Partager un panorama avec un lien | .mov | 08 | 🟡 placeholder | — |
| `media:manage-share-links` | Gérer les liens et les accès | .png | 08 | 🟡 placeholder | — |

## Section 9 — Organiser

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:albums` | Mes albums | .mov | 09A | 🟡 placeholder | — |
| `media:projects` | Mes projets | .mov | 09B | 🟡 placeholder | — |
| `media:plans` | Mes plans | .mov | 09C | 🟡 placeholder | — |

## Section 10 — Exploiter les panoramas

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:annotations` | Ajouter des annotations | .mov | 10A | 🟡 placeholder | — |
| `media:compare-panoramas` | Comparer deux panoramas | .mov | 10B | 🟡 placeholder | — |
| `media:super-resolution` | Utiliser la super résolution | .mov | 10C | 🟡 placeholder | — |
| `media:blur-people` | Flouter des personnes | .mov | 10D | 🟡 placeholder | — |

## Section 12 — Aide et dépannage

| ID | Titre Drive | Type | Section cible | Statut | URL / chemin |
|----|------|------|---------------|--------|--------------|
| `media:check-storage` | Vérifier l'espace de stockage | .png | 12 | 🟡 placeholder | — |
| `media:camera-issues-1` | Problèmes caméra possibles 1 | .png | 12 | 🟡 placeholder | — |
| `media:camera-issues-2` | Problèmes caméra possibles 2 | .png | 12 | 🟡 placeholder | — |
| `media:camera-issues-3` | Problèmes caméra possibles 3 | .png | 12 | 🟡 placeholder | — |
| `media:verify-team-org` | Vérifier son équipe et son organisation | .png | 12 (FAQ) | 🟡 placeholder | — |
| `media:invite-team-admin` | Inviter son équipe à l'administration | .mov | 12 (FAQ) | 🟡 placeholder | — |

---

## Comment utiliser ce mapping dans le code

Chaque page V2 référence un média par son `ID` via le composant `<VideoPlaceholder>` ou `<ImagePlaceholder>` :

```md
<VideoPlaceholder id="media:annotations" />
```

Tant que la colonne `URL / chemin` est vide → placeholder visuel avec le titre et le statut.
Dès que l'URL est renseignée → la vidéo / image s'affiche.

L'idée est de **découpler l'écriture du contenu de la livraison des médias** : on peut rédiger toutes les pages V2 sans bloquer sur les vidéos.

---

## Médias manquants à demander à Laura

À ajouter dans la conversation suivante avec Laura selon ses besoins :
- Vidéo "Installation app mobile" — pas vu dans le Drive (section 3)
- Captures d'unboxing — pas vu (section 2)
- Diagramme flux Cloud (si pas inclus dans la vidéo `cloud-link-explained`) — section 7
