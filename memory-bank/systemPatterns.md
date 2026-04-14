# System Patterns

## Architecture
- VitePress static site generator
- Markdown content in docs/en/ and docs/fr/
- Vue 3 custom components in docs/.vitepress/theme/components/
- Static images in docs/public/images/

## Content structure
```
docs/
  en/                    # English (source of truth)
    index.md             # Landing page
    getting-started/     # 6 guides
    daily-use/           # 7 guides
    premium-features/    # 3 guides
    use-cases/           # 3 guides
    troubleshooting/     # 4 guides
    reference/           # 4 guides
  fr/                    # French (translations)
    (mirror structure)
  public/images/         # Screenshots and assets
```

## i18n pattern
- VitePress native multi-locale: /en/ and /fr/ prefixes
- Each locale has its own sidebar, nav, and search index
- Static generation per locale at build time

## Deployment
- GitHub Pages via GitHub Actions
- Build: `npm run docs:build`
- Output: `docs/.vitepress/dist/`

## Content sync
- Source of truth: _Shared_Knowledge/07_Client_Knowledge_Base/
- Content is copied and transformed (frontmatter, paths, links)
- Script: scripts/import-kb.sh for re-syncing
