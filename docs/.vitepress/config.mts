import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RICOH360 Business Pack',
  description: 'Knowledge Base & Onboarding for RICOH360 Business Pack Series',
  base: '/ricoh360-bp-onboarding/',

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ricoh360-bp-onboarding/images/brand/favicon.svg' }],
  ],

  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Getting Started', link: '/en/getting-started/what-is-business-pack' },
          { text: 'Daily Use', link: '/en/daily-use/capturing-photos-360' },
          { text: 'Premium', link: '/en/premium-features/projects-and-floor-plans' },
          { text: 'Use Cases', link: '/en/use-cases/site-documentation' },
          { text: 'Troubleshooting', link: '/en/troubleshooting/faq' },
          { text: 'Reference', link: '/en/reference/feature-matrix' },
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'What Is the Business Pack?', link: '/en/getting-started/what-is-business-pack' },
                { text: 'Quick Start Guide', link: '/en/getting-started/quick-start-guide' },
                { text: 'Hardware Setup', link: '/en/getting-started/hardware-setup' },
                { text: 'Mobile App Setup', link: '/en/getting-started/mobile-app-setup' },
                { text: 'Web App First Steps', link: '/en/getting-started/web-app-first-steps' },
                { text: 'Simple Capture Setup', link: '/en/getting-started/simple-capture-setup' },
              ],
            },
            {
              text: 'Daily Use',
              collapsed: false,
              items: [
                { text: 'Capturing 360 Photos', link: '/en/daily-use/capturing-photos-360' },
                { text: 'Organizing with Albums', link: '/en/daily-use/organizing-with-albums' },
                { text: 'Viewing and Navigating', link: '/en/daily-use/viewing-and-navigating' },
                { text: 'AI Processing', link: '/en/daily-use/ai-processing' },
                { text: 'Side-by-Side Comparison', link: '/en/daily-use/side-by-side-comparison' },
                { text: 'Sharing with External', link: '/en/daily-use/sharing-with-external' },
                { text: 'Annotations and Markup', link: '/en/daily-use/annotations-and-markup' },
              ],
            },
            {
              text: 'Premium Features',
              collapsed: false,
              items: [
                { text: 'Projects and Floor Plans', link: '/en/premium-features/projects-and-floor-plans' },
                { text: 'Team Management', link: '/en/premium-features/team-management' },
                { text: 'Camera Fleet Management', link: '/en/premium-features/camera-fleet-management' },
              ],
            },
            {
              text: 'Use Cases',
              collapsed: true,
              items: [
                { text: 'Site Documentation', link: '/en/use-cases/site-documentation' },
                { text: 'Construction Tracking', link: '/en/use-cases/construction-tracking' },
                { text: 'Inspection Reporting', link: '/en/use-cases/inspection-reporting' },
              ],
            },
            {
              text: 'Troubleshooting',
              collapsed: true,
              items: [
                { text: 'FAQ', link: '/en/troubleshooting/faq' },
                { text: 'Camera Issues', link: '/en/troubleshooting/camera-issues' },
                { text: 'Connectivity Issues', link: '/en/troubleshooting/connectivity-issues' },
                { text: 'Known Limitations', link: '/en/troubleshooting/known-limitations' },
              ],
            },
            {
              text: 'Reference',
              collapsed: true,
              items: [
                { text: 'Feature Matrix', link: '/en/reference/feature-matrix' },
                { text: 'Camera Comparison', link: '/en/reference/camera-comparison' },
                { text: 'Glossary', link: '/en/reference/glossary' },
                { text: 'Video Resources', link: '/en/reference/video-resources' },
              ],
            },
          ],
        },
      },
    },
    fr: {
      label: 'Francais',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Demarrage', link: '/fr/demarrage/presentation-business-pack' },
          { text: 'Utilisation', link: '/fr/utilisation-quotidienne/capturer-photos-360' },
          { text: 'Premium', link: '/fr/fonctionnalites-premium/projets-et-plans' },
          { text: 'Cas d\'usage', link: '/fr/cas-usage/documentation-de-site' },
          { text: 'Depannage', link: '/fr/depannage/faq' },
          { text: 'Reference', link: '/fr/reference/matrice-fonctionnalites' },
        ],
        sidebar: {
          '/fr/': [
            {
              text: 'Demarrage',
              collapsed: false,
              items: [
                { text: 'Le Business Pack, c\'est quoi ?', link: '/fr/demarrage/presentation-business-pack' },
                { text: 'Guide de demarrage rapide', link: '/fr/demarrage/guide-demarrage-rapide' },
                { text: 'Installation du materiel', link: '/fr/demarrage/installation-materiel' },
                { text: 'Configuration app mobile', link: '/fr/demarrage/configuration-app-mobile' },
                { text: 'Premiers pas web', link: '/fr/demarrage/premiers-pas-web' },
                { text: 'Configuration Simple Capture', link: '/fr/demarrage/configuration-simple-capture' },
              ],
            },
            {
              text: 'Utilisation quotidienne',
              collapsed: false,
              items: [
                { text: 'Capturer des photos 360', link: '/fr/utilisation-quotidienne/capturer-photos-360' },
                { text: 'Organiser avec les albums', link: '/fr/utilisation-quotidienne/organiser-avec-albums' },
                { text: 'Visualiser et naviguer', link: '/fr/utilisation-quotidienne/visualiser-et-naviguer' },
                { text: 'Traitement IA', link: '/fr/utilisation-quotidienne/traitement-ia' },
                { text: 'Comparaison cote a cote', link: '/fr/utilisation-quotidienne/comparaison-cote-a-cote' },
                { text: 'Partage externe', link: '/fr/utilisation-quotidienne/partage-externe' },
                { text: 'Annotations et marquages', link: '/fr/utilisation-quotidienne/annotations-et-marquages' },
              ],
            },
            {
              text: 'Fonctionnalites Premium',
              collapsed: false,
              items: [
                { text: 'Projets et plans', link: '/fr/fonctionnalites-premium/projets-et-plans' },
                { text: 'Gestion d\'equipe', link: '/fr/fonctionnalites-premium/gestion-equipe' },
                { text: 'Gestion de flotte camera', link: '/fr/fonctionnalites-premium/gestion-flotte-camera' },
              ],
            },
            {
              text: 'Cas d\'usage',
              collapsed: true,
              items: [
                { text: 'Documentation de site', link: '/fr/cas-usage/documentation-de-site' },
                { text: 'Suivi de chantier', link: '/fr/cas-usage/suivi-de-chantier' },
                { text: 'Rapports d\'inspection', link: '/fr/cas-usage/rapports-inspection' },
              ],
            },
            {
              text: 'Depannage',
              collapsed: true,
              items: [
                { text: 'FAQ', link: '/fr/depannage/faq' },
                { text: 'Problemes camera', link: '/fr/depannage/problemes-camera' },
                { text: 'Problemes de connectivite', link: '/fr/depannage/problemes-connectivite' },
                { text: 'Limitations connues', link: '/fr/depannage/limitations-connues' },
              ],
            },
            {
              text: 'Reference',
              collapsed: true,
              items: [
                { text: 'Matrice des fonctionnalites', link: '/fr/reference/matrice-fonctionnalites' },
                { text: 'Comparaison cameras', link: '/fr/reference/comparaison-cameras' },
                { text: 'Glossaire', link: '/fr/reference/glossaire' },
                { text: 'Ressources video', link: '/fr/reference/ressources-video' },
              ],
            },
          ],
        },
        outline: { label: 'Sur cette page' },
        docFooter: { prev: 'Precedent', next: 'Suivant' },
        lastUpdated: { text: 'Derniere mise a jour' },
        search: { options: { locales: { fr: { translations: { button: { buttonText: 'Rechercher' }, modal: { displayDetails: 'Afficher les details', resetButtonTitle: 'Reinitialiser', backButtonAriaLabel: 'Retour', noResultsText: 'Aucun resultat pour', footer: { selectText: 'Selectionner', navigateText: 'Naviguer', closeText: 'Fermer' } } } } } } },
      },
    },
  },

  themeConfig: {
    siteTitle: 'RICOH360 Business Pack',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vantom69/ricoh360-bp-onboarding' },
    ],
    footer: {
      message: 'RICOH360 Business Pack Series - Knowledge Base',
      copyright: 'Ricoh Futures EMEA',
    },
  },
})
