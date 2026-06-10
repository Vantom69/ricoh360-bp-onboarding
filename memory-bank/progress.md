# Progress

## Completed

### V1 (2026-04-14)
- [x] Project planning and architecture design
- [x] Technology choice: VitePress over Next.js
- [x] npm init + VitePress 1.6.4 installed
- [x] .gitignore, CLAUDE.md, memory-bank created
- [x] VitePress config (config.mts): nav, sidebar EN/FR, search, noindex
- [x] Content import: 27 EN articles from _Shared_Knowledge KB
- [x] Image import: 19 screenshots (5 mobile + 14 webapp)
- [x] Dead link fixes: 4 broken links corrected (camera-comparison, use-cases index)
- [x] Brand theme: colors #3532CA/#2A303C, Inter font, dark mode
- [x] Landing pages: EN + FR + root language selector
- [x] FR translations: 27 articles translated (AI-generated, pending review)
- [x] GitHub repo created: Vantom69/ricoh360-bp-onboarding
- [x] GitHub Pages enabled with Actions deployment
- [x] First deploy successful (build 23s + deploy 11s)
- [x] robots.txt blocking indexation
- [x] One-pager projet created for team kickoff
- [x] Task V1 sheet created with live URLs

## V2 — Refonte selon brief Laura (2026-06-08)
- [x] Tag v1.0 immuable sur main
- [x] Branche v2-refonte créée
- [x] Architecture journey-based 12 sections FR
- [x] 11 composants Vue (JourneyStep, CameraSelector, VideoPlaceholder, etc.)
- [x] Theme charte étendu (palette + tokens)
- [x] 21 pages V2 FR rédigées selon brief Laura
- [x] 4 docs-projet pour Laura (notes, mapping, procédure, audit) + message Slack
- [x] Repo preview créé + workflow deploy multi-repo + push v2-refonte
- [x] Preview live : https://vantom69.github.io/ricoh360-bp-onboarding-v2-preview/
- [x] Audit alignement implémentation vs brief : 2 écarts corrigés, 6 zones à valider

## V2.1 — Corrections suite retour Laura sur V1 preview (2026-06-09)
- [x] 25 médias Laura intégrés (6 captures HubSpot + 19 vidéos YouTube embed automatique)
- [x] VideoPlaceholder.vue refactoré pour détecter et embedder YouTube
- [x] 7 URLs support réelles substituées (voyants X/A1, firmware X/A1, retardateur, connexion caméra, centre d'aide)
- [x] 3 nouveaux blocs FAQ dépannage : allumage, LED A1 (table 5×2), écran X (table 5×3 incluant Simple Capture)
- [x] Grille de naturalisation FR rédigée + 3 pages témoins réécrites
- [x] Message Slack v2.1 transmis à Laura

## V2.2 — Validation ton + bug fixes (2026-06-10)
- [x] Mode nuit complet : --vp-c-text-* en .dark + tables markdown + 14 surcharges sous-éléments composants
- [x] Lien GitHub retiré de la nav (site client-facing)
- [x] Naturalisation ton FR appliquée aux 18 pages restantes selon grille validée Laura
- [x] Branche v2-refonte poussée sur origin (sauvegarde repo principal)
- [x] Preview live HTTP 200, 3 commits + 1 commit slack-message-v2.2

## In progress
- [ ] Thomas transmet le message Slack v2.2 à Laura (docs-projet/slack-message-laura-v2.2.md)
- [ ] Récupérer le retour final Laura sur V2.2

## Backlog post-validation finale Laura
- [ ] Corrections éventuelles suite retour final Laura
- [ ] Ouverture des 6 questions structurantes en suspens (audit V2.1)
- [ ] Récupération URL support « améliorer la qualité de capture »
- [ ] Génération QR codes finaux (App Store + Play Store)
- [ ] Test responsive mobile sur les composants custom
- [ ] Phase E : merge v2-refonte → main, tag v2.0, redéploiement URL principale
- [ ] Suppression du repo preview après merge
- [ ] Phase 7 : traduction EN (seconde itération)

## Backlog (V2) - See GitHub Issues
- [ ] Password-gate (access code like Dynamic Presentation)
- [ ] Role-based navigation selector on landing page
- [ ] Prev/next navigation between articles
- [ ] Last updated dates in frontmatter
- [ ] RICOH360 logo in navigation (replace placeholder)
- [ ] Image optimization (some PNGs are large)

## Backlog (V3) - See GitHub Issues
- [ ] Analytics (Plausible or similar)
- [ ] Internal section (/internal/) for material reception, pilot setup
- [ ] Feedback widget ("Was this helpful?")
- [ ] New use case guides from pilot feedback
- [ ] Auth upgrade if needed (Clerk/Supabase)
- [ ] Content sync script from _Shared_Knowledge

## Session log
| Date | Focus | Key outcome |
|------|-------|-------------|
| 2026-04-14 | V1 full build | Site live at vantom69.github.io/ricoh360-bp-onboarding |
| 2026-05-12 | Kickoff Laura | Retour Slack envoyé sur kickoff doc Laura, alignement prévu 2026-05-13. Scope élargi BP Type S + chantier interne acté. Rôles light validés. |
| 2026-06-08 | Refonte V2 livrée | Brief Laura analysé, V2 squelette + contenu + composants + preview en ligne livrés. Tag v1.0 posé, branche v2-refonte + repo preview. 4 docs + message Slack pour Laura prêts à transmettre. |
| 2026-06-09 | V2.1 | Retour Laura V1 traité : 25 médias intégrés (YouTube embed + HubSpot), 3 blocs FAQ dépannage ajoutés (allumage, LED A1, écran X), 7 URLs support réelles, grille de naturalisation FR + 3 pages témoins réécrites pour validation Laura. |
| 2026-06-10 | V2.2 | Retour Thomas traité : mode nuit complet (custom.css + v2.css), retrait socialLinks GitHub (config.mts), naturalisation ton FR sur les 18 pages restantes. Laura validation ton OK. Branche v2-refonte poussée sur origin. Preview live HTTP 200. |
