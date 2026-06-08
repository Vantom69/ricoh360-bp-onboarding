# Procédure d'intégration des médias V2 — pour Laura

Objectif : permettre d'intégrer rapidement les vidéos et captures dans le site V2 sans que ça devienne un goulot d'étranglement.

---

## 1. Le fichier de mapping

Dans le repo, le fichier `docs-projet/media-mapping.md` liste tous les médias référencés dans le brief V2, organisés par section. Chaque ligne contient :
- un `ID` stable (ex : `media:annotations`)
- le titre du fichier Drive
- la section cible
- un statut (placeholder / intégré / manquant)
- l'URL d'hébergement (vide tant que le média n'est pas intégré)

Ce fichier est la source de vérité unique : on l'amende au fur et à mesure des livraisons.

---

## 2. Workflow concret

**Côté Laura** :
1. Pour chaque média prêt, choisir une option d'hébergement (cf. point 3 ci-dessous)
2. M'envoyer l'URL d'hébergement avec l'`ID` du mapping correspondant
   Exemple : `media:annotations → https://...`
3. Si un média manque dans le mapping, on l'ajoute ensemble

**Côté nous (Thomas / Claude)** :
1. Mise à jour du `media-mapping.md` (URL + statut → 🟢 intégré)
2. Le composant `VideoPlaceholder` sur la page concernée affiche automatiquement la vidéo
3. Push, preview rafraîchi

Pas de PR par média, pas de friction. On peut livrer média par média.

---

## 3. Options d'hébergement vidéo — à arbitrer

Les `.mov` du Drive ne peuvent pas être servis directement par GitHub Pages (limite 100 MB / fichier, format peu compatible web). Quatre options :

### Option A — Conversion .mov → .mp4 optimisé + hébergement sur le repo (recommandée pour démarrer)
- Laura ou nous convertissons les `.mov` en `.mp4` H.264 (720p ou 1080p, bitrate raisonnable → ~5 à 20 MB par vidéo de 30-60s)
- Stockage dans `docs/public/videos/` du repo
- Embed dans les pages via balise `<video>` standard
- **Avantage** : zéro dépendance externe, performant, contrôle total
- **Inconvénient** : alourdit le repo (mais GitHub Pages tolère jusqu'à 1 GB total — largement assez pour ~25 vidéos optimisées)
- **Action attendue** : on traite la conversion ensemble en batch, Laura nous fournit les .mov via Drive

### Option B — YouTube unlisted (compromis si volume trop important)
- Upload des vidéos sur une chaîne YouTube Ricoh en mode `unlisted` (non listées publiquement, accessible par lien direct)
- Embed via iframe YouTube
- **Avantage** : pas de coût stockage, bonne UX vidéo (qualité adaptative)
- **Inconvénient** : associe RICOH à YouTube côté marque, traque utilisateurs (Google), nécessite acceptation cookies

### Option C — Hébergeur vidéo pro (Vimeo, Wistia, Bunny Stream)
- À considérer si on prévoit d'ajouter analytics / contrôle d'accès / multi-langues plus tard
- **Coût** : 12 à 50 €/mois selon prestataire
- **À reposer plus tard** quand on aura tranché l'hébergement long terme du help center

### Option D — Drive direct (NON recommandé)
- Embeds Google Drive en iframe possible mais peu fiable, dépendant des permissions, UI Google visible. À éviter pour un site client.

**Recommandation Thomas/Claude** : démarrer en **Option A** (conversion + hébergement repo). Reposer Option C plus tard si on ouvre le sujet hébergement help center pro.

---

## 4. Format attendu — vidéos

- **Format** : .mp4 H.264 (codec audio AAC si son utile, sinon piste audio supprimée pour gagner du poids)
- **Résolution** : 720p suffit pour les démos UI, 1080p si la précision visuelle compte
- **Bitrate** : 1.5 à 3 Mbps pour 720p, 3 à 6 Mbps pour 1080p
- **Durée cible** :
  - Flux UI répétitifs (paramétrage, clics) → **< 45 s**, accélérés si nécessaire
  - Démos riches (capture, comparaison, super-résolution) → **< 90 s**
- **Taille fichier cible** : < 20 MB par vidéo idéalement
- **Naming** : kebab-case (ex : `media-annotations.mp4`), correspondant à l'`ID` du mapping

Outils de conversion gratuits : HandBrake (GUI) ou `ffmpeg` (CLI) — on peut t'aider.

---

## 5. Format attendu — captures

- **Format** : .png ou .webp (préféré pour les UI, plus léger)
- **Largeur** : 1200 à 1600 px
- **Annotation** : si besoin (flèches, encadrés) → faite en amont par Laura, on évite Photoshop côté dev
- **Naming** : kebab-case correspondant à l'ID

---

## 6. Question à trancher plus tard — hébergement long terme du help center

Le sujet "où vit le help center à terme" n'est pas tranché et doit l'être au plus tard avant le go-live V2. Trois pistes :

| Solution | Pour | Contre |
|----------|------|--------|
| **GitHub Pages** (actuel) | Gratuit, simple, on contrôle tout, déjà en place | Pas de help center pro features (search avancé, analytics, intercom, chat support) |
| **Notion publié** | Édition collaborative facile pour CS, simple | Pas de design custom, branding limité, URL pas pro |
| **Help center pro** (Intercom Help Center, HelpScout Docs, Zendesk Guide) | Search, analytics, intégration CRM, chat support attaché | Coût 40-200 €/mois, plus long à mettre en place |

À discuter avec Laura quand on aura la V2 fonctionnelle — quels critères importent vraiment ? Recommandation initiale : rester sur **GitHub Pages** tant qu'on n'a pas de besoin client fort qui le bloque (ex : volume de tickets support intégré, analytics fines, multi-langues lourd).

---

## 7. Prochaine action concrète

Laura :
1. Lire ce doc + le mapping
2. Donner son arbitrage sur l'Option A vs B pour l'hébergement
3. (Si Option A) nous transmettre les .mov via Drive — on convertit et intègre en batch
4. Ajouter au mapping tout média qu'on aurait oublié
