# RICOH360 Business Pack - Knowledge Base

Plateforme d'onboarding et base de connaissances pour les RICOH360 Business Pack Series.

**Site en ligne** : https://vantom69.github.io/ricoh360-bp-onboarding/

## Contenu

54 articles bilingues (EN/FR) organises en 6 sections :

| Section | Description | Articles |
|---------|-------------|----------|
| Getting Started | Du deballage au premier panorama partage | 6 |
| Daily Use | Capture, albums, visionneuse, IA, partage | 7 |
| Premium Features | Projets, gestion d'equipe, flotte camera | 3 |
| Use Cases | Documentation de site, suivi chantier, inspection | 3 |
| Troubleshooting | FAQ, problemes camera, connectivite, limitations | 4 |
| Reference | Matrice fonctionnalites, comparaison cameras, glossaire, videos | 4 |

## Stack

- [VitePress](https://vitepress.dev/) (site statique, markdown-first)
- GitHub Pages + GitHub Actions (CI/CD)
- Bilingue EN/FR natif

## Developpement

```bash
# Installer les dependances
npm install

# Lancer le serveur de dev
npm run docs:dev

# Build production
npm run docs:build

# Preview du build
npm run docs:preview
```

## Structure

```
docs/
  en/              # Contenu anglais (source)
  fr/              # Contenu francais (traductions)
  public/images/   # Screenshots et assets
  .vitepress/      # Config VitePress + theme custom
docs-projet/       # One-pager et fiches tasks (usage interne)
memory-bank/       # Contexte projet pour sessions de travail
```

## Deploiement

Push sur `main` declenche automatiquement le build et le deploy sur GitHub Pages.

## Documentation projet

- [One-pager projet](docs-projet/one-pager-projet.md)
- [Fiche V1](docs-projet/task-v1-knowledge-base.md)
