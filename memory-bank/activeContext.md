# Active Context

## Last session: 2026-06-19 (V2.6 — retour Laura autorisations + V2.7 — multi-langue Phase 1)

### V2.6 — Retour Laura cohérence MAJ firmware + autorisations app
- Section 02 « Préparer votre caméra » : reformulation de la MAJ firmware pour ne plus présupposer l'app mobile installée. Mention de la possibilité de MAJ via app PC/Mac.
- Section 03 « Installer l'app » : encart info qui annonce les autorisations à prévoir et renvoie vers section 5.
- Section 05 « Connecter votre caméra » : composant Vue **PermissionsBlock** créé (DRY pour theta-x et theta-a1). Couvre Register, coche blanche, 2 accordions iOS (5 items) / Android (6 items), bouton Done.
- URL réelle du centre de téléchargement RICOH360 (`support.ricoh360.com/fr/app-download`) en SupportLink, fournie par Thomas.
- Commits : `3d41054`, `3a6d4da`, `b0515a2`, `8aebefc`, `b2d3ec3`.

### V2.7 — Multi-langue Phase 1 (ajout EN, foundation pour ES + JP)
- **Config locales VitePress** : `locales: { fr, en }` avec sidebar/nav/footer/search/outline/docFooter/lastUpdated dupliqués par langue. VitePress affiche nativement un dropdown sélecteur de langue dans la nav top.
- **Système i18n centralisé** : nouveau `docs/.vitepress/data/i18n.ts` (68 clés × 2 langues + helper `t(key, lang)` + `detectLocale`). Refactor de **9 composants Vue** pour utiliser `useData().lang` au lieu de strings hardcodées : JourneyProgress, JourneyStep, CameraSelector, Card, CloudFlowDiagram, VideoPlaceholder, ImagePlaceholder, QRCodePair, PermissionsBlock.
- **journey-steps.ts lang-agnostic** : pathPrefix passé de `/fr/01-bienvenue` à `/01-bienvenue` (SidebarTracker matche en includes, fonctionne pour les 2 langues sans modification).
- **Landing racine** : nouveau composant **LanguageRedirect.vue** qui redirige au mount via `useData().site.base + window.location.replace` selon `navigator.language` (bug détecté en review : le `<script>` inline markdown était strippé par VitePress, fix via composant Vue).
- **Grille de naturalisation EN** dans `docs-projet/grille-naturalisation-ton-en.md` (miroir de la grille FR).
- **22 pages EN** dans `docs/en/` miroir des 22 pages FR. Vocabulaire métier strict (RICOH360, RICOH THETA X/A1, Cloud, Business Pack, RICOH Care). Slugs URL conservés FR (`/en/02-installer-camera/theta-x`) pour cohérence et simplicité.
- Commits : `f0a0679` (infra), `10ba208` (composants), `9594bcd` (traduction), `b42e242` (slack), `8a8c4bb` (fix redirect).
- **Review V2.7 EN passée** : 1 bug fixé (redirect), aucun calque FR, aucun lien interne `/fr/` cassé, i18n 100% couvert, frontmatters propres, HTTP 200 partout.

### Décisions cadrées
- **URL pattern multi-langue** : préfixe pour toutes les langues (`/fr/`, `/en/`, futurs `/es/`, `/ja/`). Racine `/` redirige selon navigateur.
- **Stratégie de traduction** : Claude batch + spot-check Thomas (1 boucle max).
- **Slugs URL** : pas traduits (cohérence avec FR, plus simple à maintenir).
- **Vidéos et visuels** : gardés FR pour V1 EN. À demander à Ricoh Japon des versions EN à terme.
- **Stratégie de preview** : Thomas garde V2.7 en ligne sur preview malgré la review FR Laura — il dira à Laura de se focaliser sur FR pour sa première review.
- **Composants i18n** : système centralisé `data/i18n.ts` (Type Locale extensible : fr | en | es | ja).

### Current state (fin session 2026-06-19)
- Working tree clean, sur branche `v2-refonte`
- HEAD `8a8c4bb` = origin/v2-refonte = preview/main
- main `a08e93e` (V1 + README V2.4) — pas touché
- Tag `v1.0` intact
- Preview V2.7 LIVE multi-langue HTTP 200
- 15 composants Vue (les 14 d'avant + LanguageRedirect)
- 4 nouveaux artefacts docs-projet : grille-naturalisation-ton-en.md, slack-message-laura-v2.6.md, slack-message-laura-v2.7.md

### What to do next session
1. **Laura review V2.6 FR** (corrections autorisations + MAJ firmware + URL PC/Mac) — message Slack v2.6 prêt à envoyer.
2. Recommandation Thomas : dire à Laura de se focaliser sur la version FR malgré le sélecteur de langue visible (V2.7 multi-langue est en cours, pas la priorité pour son spot-check).
3. **Validation SupportLinks EN** : les `support.ricoh360.com/fr/...` côté pages EN — à demander à Laura si les pages existent en `/en/...` côté Ricoh support.
4. **Spot-check EN éventuel** (par Thomas ou EN-native) avant ouverture du chantier ES/JP.
5. Si validation finale Laura → **Phase E** : merge `v2-refonte` → `main`, tag `v2.0`, suppression du repo preview, MAJ README final, planification ES + JP.

### Sticky reminders (questions ouvertes longue durée)
- 6 questions structurantes audit V2.1 toujours ouvertes
- URL support « améliorer la qualité de capture » jamais fournie par Laura
- Sémantique checks sidebar (page cliquée vs linéaire strict) — Laura à arbitrer
- Vidéos/visuels EN — à demander Ricoh Japon

## Previous session: 2026-06-19 (V2.5 — Brief Laura V3 + retours Thomas in-line)

### What was accomplished (V2.5)
- **Fix bug SidebarTracker** (`ede4600`) : `sectionForPath` utilisait `startsWith` qui ne matchait pas les hrefs DOM contenant la base URL `/ricoh360-bp-onboarding-v2-preview/...`. Passage à `includes` → les checks ✓/●/○ s'affichent enfin sur la preview. Sémantique « page cliquée = ✓ » conservée (validée Thomas vs spec linéaire stricte Laura).
- **Nav X↔A1 corrigée** (`633f0b0`) : override `prev`/`next` VitePress via frontmatter sur les 4 pages X/A1. Plus jamais d'enchaînement X → A1 ni A1 → X.
- **5 visuels Laura intégrés** (`633f0b0`) : `media.ts` étendu avec 5 entrées HubSpot (caméras X/A1, vérification connexion, annotation, floutage). Intégration via `<ImagePlaceholder>` sur 6 pages (02-x, 02-a1, 05-x, 05-a1, 10A annotations, 10D flouter).
- **Bouton « ↺ Réinitialiser »** (`7afe97a`) : ajouté dans le bloc JourneyProgress en bas de la jauge. Vide localStorage des étapes cliquées + dispatch event pour rafraîchir checks et jauge. N'apparaît que si au moins 1 étape terminée.
- **Variant 'product' sur ImagePlaceholder** (`4585f6c` puis `d4fcbb6`) : prop `variant` optionnelle qui ajoute classe `media--${variant}`. Photos caméras passées en `variant="product"` à **max-width 140px** centrées (réduction de 280px → 140px après retour Thomas « trop grosses »).
- **QR codes réels** (`20b229d` puis `3f558c2`) : génération PNG via Python qrcode, stockés dans `docs/public/images/v2/` (`qr-appstore.png`, `qr-playstore.png`). URLs : `apps.apple.com/fr/app/ricoh360-theta-app/id6446307957` et `play.google.com/store/apps/details?id=com.ricoh360.mobile`. Composant QRCodePair refactoré. Mise en page corrigée (padding parasite retiré, dark mode fond blanc préservé pour scannabilité).
- **« Installer » → « Préparer »** (`57a9964`) : titre section 2 changé partout (sidebar + journey-steps label + H1 + frontmatter title des 2 pages X/A1 + commentaire media.ts). Slug URL `/fr/02-installer-camera/` conservé pour ne pas casser les liens.
- **Sizing fluide images standards** (`d4fcbb6`) : `.media--image img` plafonnée à `max-height: 60vh` avec centrage horizontal (les screenshots interface ne forcent plus le scroll).

### Décisions cadrées dans la session
- Sémantique checks sidebar : « page cliquée = ✓ » (validée Thomas), pas linéaire stricte comme Laura. À reposer à Laura dans le Slack v2.5 pour confirmation.
- Bouton Reset : sans confirmation native (action peu destructrice, réversible par navigation).
- Slug URL section 2 : conservé `/02-installer-camera/` malgré le rename « Préparer » (pas de redirection à mettre en place).
- Sizing images : 60vh pour les screenshots, 140px max pour les photos produit caméra.

### Current state (fin session 2026-06-19)
- Working tree clean, sur `v2-refonte`
- HEAD `d4fcbb6` = origin/v2-refonte = preview/main
- main = `a08e93e` (V1 + README V2.4 — pas touché cette session)
- Preview V2.5 LIVE HTTP 200 confirmé
- V1 prod inchangée
- Tag `v1.0` immuable préservé
- Message Slack v2.5 prêt à transmettre dans `docs-projet/slack-message-laura-v2.5.md`

### What to do next session
1. Récupérer le **retour Laura sur V2.5** (les checks ✓/●/○ s'affichent enfin, nav X/A1 corrigée, 5 visuels intégrés)
2. **Question subsidiaire à Laura** : préfère-t-elle la sémantique « page cliquée » qu'on a gardée, ou la sémantique linéaire stricte de son brief V3 ? (cf. Slack v2.5)
3. Suivi Thomas : confirmer que le sizing images est OK après hard refresh navigateur (l'image lui paraissait encore trop grosse — probable cache)
4. Si Laura valide V2.5 → **Phase E** : merge v2-refonte → main, tag v2.0, suppression du repo preview, MAJ finale README
5. En suspens : 6 questions structurantes audit V2.1 + URL support « améliorer qualité capture »

## Previous session: 2026-06-15 (V2.4 — gamification Phase J + enrichissement bienvenue)

### What was accomplished (V2.4)
- **Phase J.1 — Jauge de progression** : `data/journey-steps.ts` (source de vérité 12 sections), `JourneyProgress.vue` (jauge sidebar via slot `sidebar-nav-before`), `JourneyTracker.vue` (marqueur invisible inséré dans 21 pages, marque la section terminée au mount via localStorage), Layout custom dans `theme/index.ts`
- **Phase J.2 — Messages de réussite** : composant `SuccessMessage.vue` + 6 messages Laura intégrés sur pages 03, 04, 05-x, 05-a1, 06, 08 (avant « Prochaine étape ») avec fade-in subtil
- **Phase J.3 — Harmonisation CTAs** : retrait emoji bouée de `SupportLink.vue`, `border-radius` lg → xl, padding élargi, espacement entre liens adjacents
- **Phase J.4 — Enrichissement page bienvenue** : 6 nouveaux blocs (présentation BP, ce que comprend, RICOH Care dédié, tableau comparatif 9 lignes, fonctionnalités premium 6 cartes cliquables, conservation du CardGrid « Ce que vous allez apprendre »)
- 3 commits propres push origin + preview, workflow Actions vert, HTTP 200 confirmé
- Message Slack v2.4 prêt dans `docs-projet/slack-message-laura-v2.4.md`

### Phase K — finalement livrée dans la foulée
- Composant `SidebarTracker.vue` : invisible, monté dans le slot `layout-top`. Scanne `.VPSidebar a[href]` au mount, à chaque changement de route, sur `COMPLETION_EVENT`, et sur mutations DOM (drawer mobile). Applique 3 classes : `journey-completed`, `journey-current`, `journey-todo`.
- CSS `::before` dans `v2.css` : badges ✓ (bleu, fade-in 350ms), ● (accent, pulse 1800ms discret), ○ (gris). Dark mode complet. Font-weight 600 sur l'étape courante.
- Commit `b7ac34a`, push origin + preview, deploy vert HTTP 200 en 1m16s.

### Clôture V2.4 — MAJ READMEs
- README sur `v2-refonte` (commit `b80b720`) — version détaillée : 15 composants listés, gamification, structure complète, médias intégrés
- README sur `main` (commit `a08e93e`) — version concise pour visiteurs GitHub
- Tous les remotes synchronisés : main + v2-refonte sur origin, v2-refonte miroir sur preview/main

### Current state (fin session 2026-06-15)
- Working tree clean, sur branche `v2-refonte`
- HEAD local = origin/v2-refonte = preview/main
- main local = origin/main (V1 + README V2.4 à jour)
- Preview V2.4 LIVE HTTP 200
- V1 prod inchangée HTTP 200
- Message Slack v2.4 prêt à transmettre dans docs-projet/

### What to do next session
1. Récupérer le **retour final Laura** sur V2.4 complète (gamification + bienvenue + checks sidebar)
2. Si corrections demandées → itérer sur v2-refonte → push preview
3. Si **validation finale** → **Phase E** : merge `v2-refonte` → `main`, tag `v2.0`, suppression du repo preview, MAJ finale README (passage de « V2 en cours » à « V2 en production »)
4. Ouvrir les **6 questions structurantes en suspens** (cf. docs-projet/audit-implementation-vs-brief.md §6) avec Laura à la prochaine occasion
5. Récupérer l'**URL support « améliorer la qualité de capture »** qu'elle n'a pas fournie
6. Si Phase E faite : démarrer **Phase 7** — traduction EN seconde itération

## Previous session: 2026-06-10 (V2.3 — retours Laura ponctuels)

### What was accomplished (V2.3)
- **Page 01-bienvenue** (`ea65fa0`) : ajout d'un bloc « Le RICOH360 Business Pack en bref » après l'intro (avant les objectifs), qui présente l'offre — abonnement professionnel, location caméra RICOH THETA, licences App + WebApp, support Ricoh Care
- **Page 12-aide-depannage, FAQ Ricoh Care** (`ea65fa0`) : réponse changée de « peut être inclus selon votre offre » à « Oui, inclus dans votre Business Pack » avec le détail de la couverture (support dédié, MAJ firmware, remplacement caméra)
- 1 commit + push origin + preview (deploy vert HTTP 200 sur les 2 pages modifiées)
- Aucun WIP non-commité

## Previous session: 2026-06-10 (V2.2)

### What was accomplished (V2.2)
- **Mode nuit complet** (`fe29c6c`) : ajout des `--vp-c-text-1/2/3` en `.dark` dans `custom.css` (fixe titres h1-h4 et corps), surcharges `.dark` sur les tables markdown VitePress, 14 surcharges sous-éléments dans `v2.css` (chevrons, CTA, labels, captions)
- **Lien GitHub retiré** (`bd2b4aa`) : suppression du bloc `socialLinks` dans `config.mts` — site client-facing, plus de logo GitHub en haut à droite
- **Ton FR naturalisé sur les 18 pages restantes** (`c0f8d39`) : application de la grille `docs-projet/grille-naturalisation-ton-fr.md` validée par Laura sur sections 02-A1, 03, 04, 05A/B, 06, 07, 08, 09A/B/C, 10A/B/C/D, 11A/B/C. Vocabulaire métier préservé strictement, contenu factuel inchangé
- **Message Slack v2.2** (`e3258a7`) : `docs-projet/slack-message-laura-v2.2.md` prêt à transmettre
- **Branche `v2-refonte` poussée sur origin** : sauvegarde sur le repo principal (en plus du repo preview)

### Previous session: 2026-06-09 (V2.1)
- V2.1 : phases A (médias + URLs support), B (3 nouveaux blocs FAQ), C (grille + 3 pages témoins), C.3 (push preview + Slack Laura)
- 25 médias Laura intégrés (6 captures HubSpot + 19 vidéos YouTube via embed iframe automatique)
- 7 URLs support `support.ricoh360.com` réelles substituées
- Composant `VideoPlaceholder.vue` adapté pour détecter et embedder YouTube

### Previous session: 2026-06-08 (V2 initiale)
- V2 squelette + contenu : 21 pages FR + 11 composants Vue + theme charte + audit alignement vs brief

### Current state (fin V2.2)
- V2.2 preview LIVE : **https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/** (HTTP 200)
- V1 main inchangée, toujours live à URL d'origine
- Branche `v2-refonte` synchronisée : local + origin + preview
- 5 commits propres pour V2.2 sur v2-refonte
- Aucun WIP non-commité
- 5 documents projet pour Laura prêts dans `docs-projet/` (notes-pour-laura, audit-implementation-vs-brief, media-procedure-laura, media-mapping, grille-naturalisation-ton-fr) + 2 messages Slack (slack-message-laura-v2.1, slack-message-laura-v2.2)

### What to do next session
1. Thomas a transmis le message Slack v2.2 à Laura (ou va le faire)
2. Récupérer le **retour final Laura** sur la V2.2 complète
3. Traiter les corrections éventuelles
4. **Ouvrir les 6 questions structurantes** restées en suspens (audit V2.1) :
   - Fusion section 1 (objectifs + outcomes) ou 2 blocs distincts ?
   - Persistance du choix caméra et adaptation auto du parcours ?
   - Pages 2A/5A : encart visuel rappelant le modèle sélectionné ?
   - Mention "premium Business Pack" sur 10C/10D ?
   - Convention de nommage des albums (officielle Ricoh Futures ?)
   - Composant `NextStep` stylisé vs simple lien markdown ?
5. Récupérer l'**URL support « améliorer la qualité de capture »** que Laura n'a pas fournie
6. Si Laura valide : **Phase E** — merge `v2-refonte` → `main`, tag `v2.0`, suppression du repo preview, MAJ README post-merge

### Architecture V2 (12 sections journey-based) — inchangée
```
docs/fr/
  01-bienvenue/index.md           # Welcome + CameraSelector
  02-installer-camera/{theta-x, theta-a1}.md
  03-installer-app/index.md       # QR codes (placeholders)
  04-compte-ricoh360/index.md     # Identifiants partagés mobile + web
  05-connecter-camera/{theta-x, theta-a1}.md
  06-premiere-capture/index.md
  07-comprendre-cloud/index.md    # CloudFlowDiagram
  08-retrouver-partager/index.md
  09-organiser/{albums, projets, plans}.md
  10-exploiter/{annotations, comparer, super-resolution, flouter}.md
  11-bonnes-pratiques/{construction, inspection, facility-management}.md
  12-aide-depannage/index.md      # FAQ + SupportLinks + 3 blocs Laura (allumage, LED A1, écran X)
```

### Composants Vue (theme/components/) — inchangés
JourneyStep, CameraSelector, VideoPlaceholder (YouTube + mp4 + placeholder), ImagePlaceholder, Accordion, Card, CardGrid, QRCodePair, CloudFlowDiagram, FAQItem, SupportLink — tous enregistrés globalement dans `theme/index.ts`. Voir [[feedback_v2_design_system]] pour les patterns à respecter.

### Documents projet (docs-projet/)
- `notes-pour-laura.md` — explicatif principal (V2)
- `audit-implementation-vs-brief.md` — audit alignement V2 + 6 questions structurantes (suspens)
- `media-procedure-laura.md` — procédure d'intégration médias (anciens guidelines, médias désormais intégrés)
- `media-mapping.md` — table des 25 médias (statuts à jour en V2.1)
- `grille-naturalisation-ton-fr.md` — référence rédactionnelle V2.2 validée par Laura
- `slack-message-laura.md` — message V2 initial (historique)
- `slack-message-laura-v2.1.md` — message V2.1 (transmis)
- `slack-message-laura-v2.2.md` — message V2.2 (à transmettre par Thomas)

### URLs / ressources clés
- V1 prod : https://vantom69.github.io/ricoh360-bp-onboarding/ (inchangée)
- V2.2 preview : https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/
- Brief Laura initial : `/Users/thomasservan/Downloads/Brief nouvelle espace d'onboarding.docx`
- Retour Laura V1 preview : `/Users/thomasservan/Downloads/Revue V1 onboarding BP.docx`
- Drive Laura médias (intégrés) : https://drive.google.com/drive/folders/1Jo45JZRUk4jA8MOemGhcx_tQTuuSwXPT
- Charte graphique : `/Users/thomasservan/Downloads/Charte graphique/`
- Repos GitHub :
  - Vantom69/ricoh360-bp-onboarding (prod V1, branche v2-refonte poussée en sauvegarde)
  - Vantom69/ricoh360-bp-onboarding-v2-preview (preview V2.2, temporaire — à supprimer après merge final)
