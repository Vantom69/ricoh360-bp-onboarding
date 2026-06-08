/**
 * Source de vérité pour les médias V2.
 * Doit rester synchronisé avec docs-projet/media-mapping.md.
 *
 * Tant qu'un média n'a pas d'URL → placeholder visuel sur la page.
 * Dès qu'une URL est renseignée → le composant <VideoPlaceholder> ou <ImagePlaceholder> affiche le média.
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
  // Section 2 — Installer la caméra
  'media:firmware-update': {
    id: 'media:firmware-update',
    title: 'Mettre à jour sa caméra',
    type: 'video',
    section: '02',
    status: 'placeholder',
  },
  'media:check-paired-cameras': {
    id: 'media:check-paired-cameras',
    title: 'Voir les caméras associées',
    type: 'image',
    section: '02',
    status: 'to-verify',
  },

  // Section 4 — Compte RICOH360
  'media:login-mobile': {
    id: 'media:login-mobile',
    title: 'Se connecter sur mobile',
    type: 'video',
    section: '04',
    status: 'placeholder',
  },
  'media:login-desktop': {
    id: 'media:login-desktop',
    title: 'Se connecter sur ordinateur',
    type: 'video',
    section: '04',
    status: 'placeholder',
  },

  // Section 5 — Connecter la caméra
  'media:pair-theta-x': {
    id: 'media:pair-theta-x',
    title: 'Connecter une RICOH THETA X',
    type: 'video',
    section: '05A',
    status: 'placeholder',
  },
  'media:pair-theta-a1': {
    id: 'media:pair-theta-a1',
    title: 'Connecter une RICOH THETA A1',
    type: 'video',
    section: '05B',
    status: 'placeholder',
  },

  // Section 6 — Première capture
  'media:launch-capture-mobile': {
    id: 'media:launch-capture-mobile',
    title: 'Lancer la capture depuis l\'application mobile',
    type: 'video',
    section: '06',
    status: 'placeholder',
  },
  'media:verify-panorama-in-app': {
    id: 'media:verify-panorama-in-app',
    title: 'Vérifier le panorama dans l\'app',
    type: 'image',
    section: '06',
    status: 'placeholder',
  },

  // Section 7 — Cloud
  'media:cloud-link-explained': {
    id: 'media:cloud-link-explained',
    title: 'Comprendre le lien avec RICOH360 Cloud',
    type: 'video',
    section: '07',
    status: 'placeholder',
  },

  // Section 8 — Retrouver et partager
  'media:find-panorama-platform': {
    id: 'media:find-panorama-platform',
    title: 'Retrouver son panorama sur la plateforme',
    type: 'image',
    section: '08',
    status: 'placeholder',
  },
  'media:share-link': {
    id: 'media:share-link',
    title: 'Partager un panorama avec un lien',
    type: 'video',
    section: '08',
    status: 'placeholder',
  },
  'media:manage-share-links': {
    id: 'media:manage-share-links',
    title: 'Gérer les liens et les accès',
    type: 'image',
    section: '08',
    status: 'placeholder',
  },

  // Section 9 — Organiser
  'media:albums': {
    id: 'media:albums',
    title: 'Mes albums',
    type: 'video',
    section: '09A',
    status: 'placeholder',
  },
  'media:projects': {
    id: 'media:projects',
    title: 'Mes projets',
    type: 'video',
    section: '09B',
    status: 'placeholder',
  },
  'media:plans': {
    id: 'media:plans',
    title: 'Mes plans',
    type: 'video',
    section: '09C',
    status: 'placeholder',
  },

  // Section 10 — Exploiter
  'media:annotations': {
    id: 'media:annotations',
    title: 'Ajouter des annotations',
    type: 'video',
    section: '10A',
    status: 'placeholder',
  },
  'media:compare-panoramas': {
    id: 'media:compare-panoramas',
    title: 'Comparer deux panoramas',
    type: 'video',
    section: '10B',
    status: 'placeholder',
  },
  'media:super-resolution': {
    id: 'media:super-resolution',
    title: 'Utiliser la super-résolution',
    type: 'video',
    section: '10C',
    status: 'placeholder',
  },
  'media:blur-people': {
    id: 'media:blur-people',
    title: 'Flouter des personnes',
    type: 'video',
    section: '10D',
    status: 'placeholder',
  },

  // Section 12 — Aide et dépannage
  'media:check-storage': {
    id: 'media:check-storage',
    title: 'Vérifier l\'espace de stockage',
    type: 'image',
    section: '12',
    status: 'placeholder',
  },
  'media:camera-issues-1': {
    id: 'media:camera-issues-1',
    title: 'Problèmes caméra possibles 1',
    type: 'image',
    section: '12',
    status: 'placeholder',
  },
  'media:camera-issues-2': {
    id: 'media:camera-issues-2',
    title: 'Problèmes caméra possibles 2',
    type: 'image',
    section: '12',
    status: 'placeholder',
  },
  'media:camera-issues-3': {
    id: 'media:camera-issues-3',
    title: 'Problèmes caméra possibles 3',
    type: 'image',
    section: '12',
    status: 'placeholder',
  },
  'media:verify-team-org': {
    id: 'media:verify-team-org',
    title: 'Vérifier son équipe et son organisation',
    type: 'image',
    section: '12',
    status: 'placeholder',
  },
  'media:invite-team-admin': {
    id: 'media:invite-team-admin',
    title: 'Inviter son équipe à l\'administration',
    type: 'video',
    section: '12',
    status: 'placeholder',
  },
}

export function getMedia(id: string): MediaEntry | undefined {
  return media[id]
}
