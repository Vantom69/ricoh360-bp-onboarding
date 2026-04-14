# RICOH360 Business Pack - Onboarding & Knowledge Base

## Project
- VitePress documentation site for Business Pack Series onboarding, support, and knowledge base
- Bilingual: English (primary) + French
- Deployed on GitHub Pages

## Stack
- VitePress 1.x (static site generator, markdown-first)
- Vue 3 components for custom features (TierBadge, RoleSelector)
- GitHub Actions for CI/CD to GitHub Pages

## Content source
- Source of truth: `/Users/thomasservan/Documents/IA Agent/_Shared_Knowledge/07_Client_Knowledge_Base/`
- Content is copied into `docs/en/` and translated into `docs/fr/`
- Images in `docs/public/images/`

## Brand rules
- RICOH360 always uppercase
- Colors: #3532CA (blue), #2A303C (black), #544EFF (accent)
- B2B professional tone, no hype, no buzzwords
- EMEA positioning: co-construction / early adopter, NOT official launch
- Never invent customers, features, pricing, or partnerships

## Naming
- RICOH360 App, RICOH360 Cloud, RICOH360 THETA (never "THETA" alone in external content)
- Features never prefixed with "RICOH360" (e.g., "AI Staging" not "RICOH360 AI Staging")
- THETA A1, THETA X, THETA Z1 (exact case)

## Code conventions
- No AI references in commits, code, or visible output
- Conventional commits: feat:, fix:, chore:, refactor:, content:, docs:
- No console.log in production
- TypeScript strict where applicable

## Commands
- `npm run docs:dev` - Dev server
- `npm run docs:build` - Build static site
- `npm run docs:preview` - Preview built site
