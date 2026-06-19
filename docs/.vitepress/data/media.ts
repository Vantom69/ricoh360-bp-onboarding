/**
 * Source de vérité pour les médias V2.
 * Doit rester synchronisé avec docs-projet/media-mapping.md.
 *
 * Tant qu'un média n'a pas d'URL → placeholder visuel sur la page.
 * Dès qu'une URL est renseignée → le composant <VideoPlaceholder> ou <ImagePlaceholder> affiche le média.
 * Les URLs YouTube sont automatiquement détectées et embeddées en iframe par VideoPlaceholder.
 */

export type MediaType = 'video' | 'image'
export type MediaStatus = 'placeholder' | 'integrated' | 'missing' | 'to-verify'

export interface MediaEntry {
  id: string
  title: string
  type: MediaType
  section: string
  status: MediaStatus
  url?: string
}

export const media: Record<string, MediaEntry> = {
  // Section 2 — Préparer la caméra
  'media:firmware-update': {
    id: 'media:firmware-update',
    title: 'Mettre à jour sa caméra',
    type: 'video',
    section: '02',
    status: 'integrated',
    url: 'https://youtube.com/shorts/muLk-hmgn2Q',
  },
  'media:check-paired-cameras': {
    id: 'media:check-paired-cameras',
    title: 'Voir les caméras associées',
    type: 'image',
    section: '02',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/Voir%20les%20cam%C3%A9ras%20associ%C3%A9es.png',
  },

  // Section 4 — Compte RICOH360
  'media:login-mobile': {
    id: 'media:login-mobile',
    title: 'Se connecter sur mobile',
    type: 'video',
    section: '04',
    status: 'integrated',
    url: 'https://youtube.com/shorts/3iIENhnpo3s',
  },
  'media:login-desktop': {
    id: 'media:login-desktop',
    title: 'Se connecter sur ordinateur',
    type: 'video',
    section: '04',
    status: 'integrated',
    url: 'https://youtu.be/GKQcfCLbNPA',
  },

  // Section 5 — Connecter la caméra
  'media:pair-theta-x': {
    id: 'media:pair-theta-x',
    title: 'Connecter une RICOH THETA X',
    type: 'video',
    section: '05A',
    status: 'integrated',
    url: 'https://youtube.com/shorts/aJqSfY8mFHs',
  },
  'media:pair-theta-a1': {
    id: 'media:pair-theta-a1',
    title: 'Connecter une RICOH THETA A1',
    type: 'video',
    section: '05B',
    status: 'integrated',
    url: 'https://youtube.com/shorts/mE5kt4UbMBM',
  },

  // Section 6 — Première capture
  'media:launch-capture-mobile': {
    id: 'media:launch-capture-mobile',
    title: 'Lancer la capture depuis l\'application mobile',
    type: 'video',
    section: '06',
    status: 'integrated',
    url: 'https://youtube.com/shorts/ITndlhXAwTw',
  },
  'media:verify-panorama-in-app': {
    id: 'media:verify-panorama-in-app',
    title: 'Vérifier le panorama dans l\'application mobile',
    type: 'video',
    section: '06',
    status: 'integrated',
    url: 'https://youtube.com/shorts/scyOWvpIwHQ',
  },

  // Section 7 — Cloud
  'media:cloud-link-explained': {
    id: 'media:cloud-link-explained',
    title: 'Comprendre le lien avec RICOH360 Cloud',
    type: 'video',
    section: '07',
    status: 'integrated',
    url: 'https://youtube.com/shorts/B4fjNWZbsEA',
  },

  // Section 8 — Retrouver et partager
  'media:find-panorama-platform': {
    id: 'media:find-panorama-platform',
    title: 'Retrouver ses panoramas sur la plateforme',
    type: 'image',
    section: '08',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/Retrouver%20ses%20panoramas%20sur%20la%20plateforme.png',
  },
  'media:share-link': {
    id: 'media:share-link',
    title: 'Partager un panorama avec un lien',
    type: 'video',
    section: '08',
    status: 'integrated',
    url: 'https://youtu.be/oAQAxfw8_3g',
  },
  'media:manage-share-links': {
    id: 'media:manage-share-links',
    title: 'Gérer les liens et les accès',
    type: 'image',
    section: '08',
    status: 'missing',
  },

  // Section 9 — Organiser
  'media:albums': {
    id: 'media:albums',
    title: 'Mes albums',
    type: 'video',
    section: '09A',
    status: 'integrated',
    url: 'https://youtu.be/jGvy0pjp6Yo',
  },
  'media:projects': {
    id: 'media:projects',
    title: 'Mes projets',
    type: 'video',
    section: '09B',
    status: 'integrated',
    url: 'https://youtu.be/TTVo_RugZOQ',
  },
  'media:plans': {
    id: 'media:plans',
    title: 'Mes plans',
    type: 'video',
    section: '09C',
    status: 'integrated',
    url: 'https://youtu.be/yXokbfsVAiQ',
  },

  // Section 10 — Exploiter
  'media:annotations': {
    id: 'media:annotations',
    title: 'Ajouter des annotations',
    type: 'video',
    section: '10A',
    status: 'integrated',
    url: 'https://youtu.be/YW8vP9FQABM',
  },
  'media:compare-panoramas': {
    id: 'media:compare-panoramas',
    title: 'Comparer deux panoramas',
    type: 'video',
    section: '10B',
    status: 'integrated',
    url: 'https://youtu.be/i-na9TEg78E',
  },
  'media:super-resolution': {
    id: 'media:super-resolution',
    title: 'Utiliser la super-résolution',
    type: 'video',
    section: '10C',
    status: 'integrated',
    url: 'https://youtu.be/PN9pLx30EMI',
  },
  'media:blur-people': {
    id: 'media:blur-people',
    title: 'Flouter des personnes',
    type: 'video',
    section: '10D',
    status: 'integrated',
    url: 'https://youtu.be/AJtwYbegLJM',
  },

  // Section 12 — Aide et dépannage
  'media:check-storage': {
    id: 'media:check-storage',
    title: 'Vérifier l\'espace de stockage',
    type: 'image',
    section: '12',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/hs/v%C3%A9rifier%20l%E2%80%99espace%20de%20stockage.png',
  },
  'media:camera-issues-1': {
    id: 'media:camera-issues-1',
    title: 'Problèmes caméra possibles 1',
    type: 'image',
    section: '12',
    status: 'missing',
  },
  'media:camera-issues-2': {
    id: 'media:camera-issues-2',
    title: 'Problèmes caméra possibles 2',
    type: 'image',
    section: '12',
    status: 'missing',
  },
  'media:camera-issues-3': {
    id: 'media:camera-issues-3',
    title: 'Problèmes caméra possibles 3',
    type: 'image',
    section: '12',
    status: 'missing',
  },
  'media:verify-team-org': {
    id: 'media:verify-team-org',
    title: 'Vérifier son équipe et son organisation',
    type: 'image',
    section: '12',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/V%C3%A9rifier%20son%20%C3%A9quipe%20et%20son%20organisation.png',
  },
  'media:invite-team-admin': {
    id: 'media:invite-team-admin',
    title: 'Inviter son équipe à l\'administration',
    type: 'video',
    section: '12',
    status: 'integrated',
    url: 'https://youtu.be/rImxMvUpQwQ',
  },

  // Nouveaux médias fournis par Laura (2026-06-XX)
  'media:manage-roles-access': {
    id: 'media:manage-roles-access',
    title: 'Gérer les rôles et les accès',
    type: 'image',
    section: '12',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/G%C3%A9rer%20les%20r%C3%B4les%20et%20les%20acc%C3%A8s.png',
  },
  'media:invite-user': {
    id: 'media:invite-user',
    title: 'Inviter un utilisateur',
    type: 'image',
    section: '12',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/Inviter%20un%20utilisateur.png',
  },

  // Visuels produit et UI livrés par Laura V3 (2026-06-18)
  'media:theta-x-product': {
    id: 'media:theta-x-product',
    title: 'Caméra RICOH THETA X',
    type: 'image',
    section: '02',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/THETAXPNJ.png',
  },
  'media:theta-a1-product': {
    id: 'media:theta-a1-product',
    title: 'Caméra RICOH THETA A1',
    type: 'image',
    section: '02',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/THETAA1PNJ.png',
  },
  'media:verify-connection': {
    id: 'media:verify-connection',
    title: 'Écran de vérification de connexion de la caméra',
    type: 'image',
    section: '05',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/Capture%20d%E2%80%99%C3%A9cran%202026-06-18%20%C3%A0%2015.39.09.png',
  },
  'media:annotation-interface': {
    id: 'media:annotation-interface',
    title: 'Interface d\'annotation dans RICOH360',
    type: 'image',
    section: '10A',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/Capture%20d%E2%80%99%C3%A9cran%202026-06-18%20%C3%A0%2011.25.27.png',
  },
  'media:blur-interface': {
    id: 'media:blur-interface',
    title: 'Fonction de floutage des personnes dans RICOH360',
    type: 'image',
    section: '10D',
    status: 'integrated',
    url: 'https://8435734.fs1.hubspotusercontent-na1.net/hubfs/8435734/Capture%20d%E2%80%99%C3%A9cran%202026-06-18%20%C3%A0%2015.46.06.png',
  },
}

export function getMedia(id: string): MediaEntry | undefined {
  return media[id]
}
