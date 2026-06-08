import { defineConfig } from 'vitepress'

// Base URL configurable via env (VITEPRESS_BASE) ou détectée automatiquement par le repo Pages.
// Par défaut : /ricoh360-bp-onboarding/ (production V1 / V2 mergée).
// Sur le repo preview, le workflow injecte VITEPRESS_BASE=/ricoh360-bp-onboarding-v2-preview/.
const BASE = process.env.VITEPRESS_BASE || '/ricoh360-bp-onboarding/'

export default defineConfig({
  title: 'RICOH360 Business Pack',
  description: 'Onboarding officiel RICOH360 Business Pack — Démarrage, prise en main et bonnes pratiques.',
  base: BASE,
  lang: 'fr-FR',
  cleanUrls: true,

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE}images/brand/favicon.svg` }],
  ],

  themeConfig: {
    siteTitle: 'RICOH360 Business Pack',

    nav: [
      { text: 'Démarrer', link: '/fr/01-bienvenue/' },
      { text: 'Utiliser', link: '/fr/09-organiser/albums' },
      { text: 'Bonnes pratiques', link: '/fr/11-bonnes-pratiques/construction' },
      { text: 'Aide', link: '/fr/12-aide-depannage/' },
    ],

    sidebar: {
      '/fr/': [
        {
          text: '1. Bienvenue',
          collapsed: false,
          items: [
            { text: 'Bienvenue dans votre onboarding', link: '/fr/01-bienvenue/' },
          ],
        },
        {
          text: '2. Installer votre caméra',
          collapsed: false,
          items: [
            { text: 'RICOH THETA X', link: '/fr/02-installer-camera/theta-x' },
            { text: 'RICOH THETA A1', link: '/fr/02-installer-camera/theta-a1' },
          ],
        },
        {
          text: '3. Installer l\'application mobile',
          collapsed: false,
          items: [
            { text: 'Télécharger et installer', link: '/fr/03-installer-app/' },
          ],
        },
        {
          text: '4. Se connecter à votre compte',
          collapsed: false,
          items: [
            { text: 'Connexion mobile et web', link: '/fr/04-compte-ricoh360/' },
          ],
        },
        {
          text: '5. Connecter votre caméra',
          collapsed: false,
          items: [
            { text: 'RICOH THETA X', link: '/fr/05-connecter-camera/theta-x' },
            { text: 'RICOH THETA A1', link: '/fr/05-connecter-camera/theta-a1' },
          ],
        },
        {
          text: '6. Première capture 360°',
          collapsed: false,
          items: [
            { text: 'Réaliser votre première capture', link: '/fr/06-premiere-capture/' },
          ],
        },
        {
          text: '7. Comprendre le lien Cloud',
          collapsed: false,
          items: [
            { text: 'Caméra → App → Cloud → Web', link: '/fr/07-comprendre-cloud/' },
          ],
        },
        {
          text: '8. Retrouver et partager',
          collapsed: false,
          items: [
            { text: 'Trouver et partager un panorama', link: '/fr/08-retrouver-partager/' },
          ],
        },
        {
          text: '9. Organiser vos contenus',
          collapsed: false,
          items: [
            { text: 'Mes albums', link: '/fr/09-organiser/albums' },
            { text: 'Mes projets', link: '/fr/09-organiser/projets' },
            { text: 'Mes plans', link: '/fr/09-organiser/plans' },
          ],
        },
        {
          text: '10. Exploiter vos panoramas',
          collapsed: false,
          items: [
            { text: 'Ajouter des annotations', link: '/fr/10-exploiter/annotations' },
            { text: 'Comparer deux panoramas', link: '/fr/10-exploiter/comparer' },
            { text: 'Utiliser la super-résolution', link: '/fr/10-exploiter/super-resolution' },
            { text: 'Flouter des personnes', link: '/fr/10-exploiter/flouter' },
          ],
        },
        {
          text: '11. Bonnes pratiques par activité',
          collapsed: false,
          items: [
            { text: 'Construction et suivi de chantier', link: '/fr/11-bonnes-pratiques/construction' },
            { text: 'Inspection et conformité', link: '/fr/11-bonnes-pratiques/inspection' },
            { text: 'Facility management', link: '/fr/11-bonnes-pratiques/facility-management' },
          ],
        },
        {
          text: '12. Aide et dépannage',
          collapsed: false,
          items: [
            { text: 'Aide, FAQ et support', link: '/fr/12-aide-depannage/' },
          ],
        },
      ],
    },

    outline: { label: 'Sur cette page', level: [2, 3] },
    docFooter: { prev: 'Précédent', next: 'Suivant' },
    lastUpdated: { text: 'Dernière mise à jour' },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
          modal: {
            displayDetails: 'Afficher les détails',
            resetButtonTitle: 'Réinitialiser',
            backButtonAriaLabel: 'Retour',
            noResultsText: 'Aucun résultat pour',
            footer: { selectText: 'Sélectionner', navigateText: 'Naviguer', closeText: 'Fermer' },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vantom69/ricoh360-bp-onboarding' },
    ],

    footer: {
      message: 'RICOH360 Business Pack — Onboarding officiel',
      copyright: 'Ricoh Futures EMEA',
    },
  },
})
