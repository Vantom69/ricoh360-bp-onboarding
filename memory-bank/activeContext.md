# Active Context

## Last session: 2026-06-09 (reprise courte)

### What was accomplished (2026-06-09)
- README mis à jour sur `main` (commit `8ab60b1`) : URLs V1 + V2 preview, stratégie de branches
- README mis à jour sur `v2-refonte` (commit `d775168`) pour cohérence post-merge
- Push preview repo synchronisé avec README à jour

## Previous session: 2026-06-08

### What was accomplished
- **V2 squelette + contenu complets** sur branche `v2-refonte`, preview en ligne
- Tag `v1.0` posé sur main (V1 immuable préservée)
- Repo preview créé : `Vantom69/ricoh360-bp-onboarding-v2-preview`
- Preview live : **https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/**
- 21 pages V2 FR rédigées selon brief Laura (architecture journey-based 12 sections)
- 11 composants Vue personnalisés
- Theme charte étendu (palette + tokens)
- Audit alignement implémentation vs brief Laura → 2 écarts corrigés + 6 zones à valider Laura
- 4 docs-projet pour Laura + message Slack prêt à envoyer

### Key decisions made
- **Approche V2** : refonte en profondeur, pas évolution V1. Architecture journey-based remplace topic-based.
- **Scope langue** : FR-only en première itération, EN après validation Laura (Phase 7)
- **Hébergement preview** : repo séparé `ricoh360-bp-onboarding-v2-preview` (pure GitHub, gratuit, supprimable après merge)
- **Base URL configurable** : env `VITEPRESS_BASE` détecte le repo, permet le multi-repo (production + preview) sans branchement
- **Médias** : workflow placeholder dans le code, Laura livre selon procédure documentée (recommandation Option A : conversion .mov → .mp4 hébergé repo)
- **Pages structure** : conserver les 12 sections du brief en numérotation, sous-sections nommées (9A/9B/9C, 10A-D, 11A-C, 2A/2B, 5A/5B)

### Current state
- V2 live sur preview, prête pour validation Laura
- Aucun push sur main repo (origin) — V1 reste live à l'URL d'origine inchangée
- Branche `v2-refonte` commitée (`98df5d2`), local + sur preview/main
- 4 docs-projet livrés + message Slack prêt

### What to do next session
1. **Vérifier le retour Laura** sur la preview (questions, désaccords, validations)
2. **Réunion de validation** (30-45 min prévue) avec les 6 questions structurantes
3. **Appliquer les corrections** issues du retour Laura sur `v2-refonte`
4. **Phase 5 fin** : itérer preview jusqu'à validation finale Laura
5. **Phase 6** : merger v2-refonte → main, tag v2.0, suppression du repo preview
6. **Phase 7** : démarrer la traduction EN

### Architecture V2 (12 sections journey-based)
```
docs/fr/
  01-bienvenue/index.md           # Welcome + CameraSelector
  02-installer-camera/
    theta-x.md                    # Setup THETA X
    theta-a1.md                   # Setup THETA A1
  03-installer-app/index.md       # Install app mobile + QR codes
  04-compte-ricoh360/index.md     # Identifiants partagés mobile + web
  05-connecter-camera/
    theta-x.md                    # Pairing THETA X
    theta-a1.md                   # Pairing THETA A1
  06-premiere-capture/index.md    # Première capture 360°
  07-comprendre-cloud/index.md    # CloudFlowDiagram
  08-retrouver-partager/index.md  # Trouver + partager
  09-organiser/
    albums.md projets.md plans.md
  10-exploiter/
    annotations.md comparer.md super-resolution.md flouter.md
  11-bonnes-pratiques/
    construction.md inspection.md facility-management.md
  12-aide-depannage/index.md      # FAQ + SupportLinks
```

### Composants Vue (théme/components/)
JourneyStep, CameraSelector, VideoPlaceholder, ImagePlaceholder, Accordion, Card, CardGrid, QRCodePair, CloudFlowDiagram, FAQItem, SupportLink — tous enregistrés globalement dans `theme/index.ts`.

### Documents projet (docs-projet/)
- `notes-pour-laura.md` — explicatif principal
- `audit-implementation-vs-brief.md` — audit alignement, 6 questions à poser Laura
- `media-procedure-laura.md` — procédure d'intégration médias (4 options hébergement)
- `media-mapping.md` — table des 25 médias avec IDs stables
- `slack-message-laura.md` — message prêt à envoyer

### URLs / ressources clés
- V1 prod : https://vantom69.github.io/ricoh360-bp-onboarding/ (inchangée)
- V2 preview : https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/
- Brief Laura : `/Users/thomasservan/Downloads/Brief nouvelle espace d'onboarding.docx`
- Drive Laura médias : https://drive.google.com/drive/folders/1Jo45JZRUk4jA8MOemGhcx_tQTuuSwXPT
- Charte graphique : `/Users/thomasservan/Downloads/Charte graphique/`
- Repos GitHub :
  - Vantom69/ricoh360-bp-onboarding (prod V1)
  - Vantom69/ricoh360-bp-onboarding-v2-preview (preview, temporaire)
