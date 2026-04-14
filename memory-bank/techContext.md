# Tech Context

## Stack
- **Framework**: VitePress 1.6.4 (static site generator, markdown-first)
- **Theme**: Custom theme extending VitePress default (Vue 3 components)
- **Styling**: VitePress CSS variables + custom.css (no Tailwind)
- **i18n**: VitePress native multi-locale (`/en/` + `/fr/` prefixes)
- **Search**: VitePress built-in local search (MiniSearch)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Package manager**: npm

## Key config
- `base: '/ricoh360-bp-onboarding/'` (required for GitHub Pages subdomain)
- `robots: noindex, nofollow` (pilot phase, not for public indexation)
- Build: `npm run docs:build` -> `docs/.vitepress/dist/`
- Dev: `npm run docs:dev`

## Brand theme (custom.css)
- `--vp-c-brand-1: #3532CA` (RICOH360 Blue)
- `--vp-c-brand-2: #544EFF` (Accent)
- `--vp-c-text-1: #2A303C` (RICOH360 Black)
- Font: Inter
- Dark mode supported

## Content structure
- Source of truth: `_Shared_Knowledge/07_Client_Knowledge_Base/`
- Site content: `docs/en/` (primary) + `docs/fr/` (translations)
- Images: `docs/public/images/mobile/` + `docs/public/images/webapp/`
- Frontmatter: `title`, `description`, `outline: [2, 3]`

## Slug mapping EN -> FR
| EN section | FR section | EN slug example | FR slug example |
|-----------|-----------|----------------|----------------|
| getting-started | demarrage | quick-start-guide | guide-demarrage-rapide |
| daily-use | utilisation-quotidienne | capturing-photos-360 | capturer-photos-360 |
| premium-features | fonctionnalites-premium | projects-and-floor-plans | projets-et-plans |
| use-cases | cas-usage | site-documentation | documentation-de-site |
| troubleshooting | depannage | camera-issues | problemes-camera |
| reference | reference | feature-matrix | matrice-fonctionnalites |

## Dependencies
```json
{
  "devDependencies": {
    "vitepress": "^1.6.4"
  }
}
```

## Deployment
- Push to `main` triggers GitHub Actions workflow
- Workflow: checkout -> node 20 -> npm ci -> vitepress build -> upload artifact -> deploy pages
- URL: https://vantom69.github.io/ricoh360-bp-onboarding/
