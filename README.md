# RICOH360 Business Pack — Onboarding & Knowledge Base

Plateforme d'onboarding et base de connaissances pour les clients RICOH360 Business Pack Series.

## Versions

### V1 — En production

**URL** : https://vantom69.github.io/ricoh360-bp-onboarding/

Base de connaissances bilingue (EN/FR), 54 articles répartis en 6 sections topic-based :
Getting Started, Daily Use, Premium Features, Use Cases, Troubleshooting, Reference.

Tag immuable : `v1.0`.

### V2 — En cours de validation (preview)

**URL preview** : https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/

Refonte complète en **parcours d'onboarding Customer Success guidé**.
Architecture journey-based 12 sections (vs topic-based V1), 21 pages FR rédigées, 11 composants Vue personnalisés (CameraSelector, JourneyStep, VideoPlaceholder, FAQ pliable…), theme charte étendu.

FR uniquement en première itération — EN dans une seconde vague après validation.

Travail sur la branche `v2-refonte`. Le repo preview `Vantom69/ricoh360-bp-onboarding-v2-preview` est temporaire et sera supprimé après le merge V2 → main.

## Stack

- [VitePress 1.x](https://vitepress.dev/) — site statique, markdown-first
- Vue 3 — composants custom (V2)
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

## Structure

```
docs/
  fr/              # Contenu français
  en/              # Contenu anglais (V1, retiré sur v2-refonte)
  public/          # Images, vidéos et assets statiques
  .vitepress/
    config.mts     # Config VitePress (nav, sidebar, theme)
    data/          # Sources de données (mapping médias V2)
    theme/         # Theme custom + composants Vue
.github/workflows/
  deploy.yml       # Build + deploy GitHub Pages (env VITEPRESS_BASE)
docs-projet/       # Notes de projet, briefs, audits internes
memory-bank/       # Contexte projet pour sessions de travail
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
