# RICOH360 Business Pack — Onboarding & Knowledge Base

Plateforme d'onboarding et base de connaissances pour les clients RICOH360 Business Pack Series.

> Cette branche `v2-refonte` héberge la **V2 — refonte en parcours Customer Success guidé**, en cours de validation avec l'équipe métier. Voir section "Versions" ci-dessous.

## Versions

### V1 — En production

**URL** : https://vantom69.github.io/ricoh360-bp-onboarding/

Base de connaissances bilingue (EN/FR), 54 articles répartis en 6 sections topic-based.
Tag immuable : `v1.0`. Vit sur la branche `main`.

### V2 — En cours de validation (cette branche)

**URL preview** : https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/

Refonte complète en **parcours d'onboarding Customer Success guidé**.
Architecture journey-based 12 sections (vs topic-based V1), 21 pages FR rédigées, 11 composants Vue personnalisés, theme charte étendu, mapping médias avec placeholders.

FR uniquement en première itération — EN dans une seconde vague après validation.

Le repo preview `Vantom69/ricoh360-bp-onboarding-v2-preview` est temporaire et sera supprimé après le merge V2 → main.

## Stack

- [VitePress 1.x](https://vitepress.dev/) — site statique, markdown-first
- Vue 3 — composants custom (JourneyStep, CameraSelector, VideoPlaceholder, FAQ, Accordion, Card…)
- GitHub Pages + GitHub Actions — CI/CD avec base URL configurable via env `VITEPRESS_BASE`

## Stratégie de branches

| Branche | Rôle | URL |
|---------|------|-----|
| `main` | V1 production | https://vantom69.github.io/ricoh360-bp-onboarding/ |
| `v2-refonte` | V2 en cours, miroir vers repo preview | https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/ |
| Tag `v1.0` | Snapshot immuable V1 livrée 2026-04-14 | — |

À l'issue de la validation Laura, la branche `v2-refonte` sera mergée sur `main`, taggée `v2.0`, et le repo preview sera supprimé.

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run docs:dev

# Build production (URL par défaut /ricoh360-bp-onboarding/)
npm run docs:build

# Build avec une autre base URL (preview multi-repo)
VITEPRESS_BASE=/ricoh360-bp-onboarding-v2-preview/ npm run docs:build

# Preview du build local
npm run docs:preview
```

## Structure (V2)

```
docs/
  fr/                              # Contenu français V2 (12 sections journey-based)
    01-bienvenue/
    02-installer-camera/
    03-installer-app/
    04-compte-ricoh360/
    05-connecter-camera/
    06-premiere-capture/
    07-comprendre-cloud/
    08-retrouver-partager/
    09-organiser/
    10-exploiter/
    11-bonnes-pratiques/
    12-aide-depannage/
  public/                          # Images, vidéos et assets statiques
  .vitepress/
    config.mts                     # Config VitePress (nav, sidebar, theme)
    data/media.ts                  # Source de vérité du mapping médias V2
    theme/
      custom.css                   # Tokens et palette charte
      components/                  # 11 composants Vue V2
.github/workflows/
  deploy.yml                       # Build + deploy GitHub Pages (env VITEPRESS_BASE)
docs-projet/                       # Notes de projet, briefs, audits internes
memory-bank/                       # Contexte projet pour sessions de travail
```

## Déploiement

Push sur `main` déclenche un build + deploy GitHub Pages automatique pour la V1.

Push sur `v2-refonte` (mirror via `git push preview v2-refonte:main`) déclenche un build + deploy GitHub Pages sur le repo preview pour la V2.

## Documentation projet

Voir le dossier `docs-projet/` pour les briefs, notes et audits internes :

- One-pager du projet et fiche V1 (livrés au kickoff)
- Notes V2 pour Laura — explicatif principal de la refonte
- Audit V2 — alignement implémentation vs brief Laura
- Procédure médias V2 — workflow d'intégration vidéos/captures
- Mapping médias V2 — table des 25 médias référencés

## Marque

RICOH360 — toujours en majuscules.
Couleurs : `#3532CA` (blue) / `#544EFF` (accent) / `#2A303C` (black).
Police : Inter.
