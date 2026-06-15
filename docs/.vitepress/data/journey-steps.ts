/**
 * Source de vérité des 12 sections principales du parcours V2.
 * Utilisée par JourneyProgress (jauge globale) et par JourneyTracker (marqueur d'étape terminée au mount).
 *
 * Une « étape » correspond à une section de premier niveau du parcours (01 à 12).
 * Les sous-pages (theta-x/a1, 9A/B/C, 10A-D, 11A-C) marquent toutes la même section parente comme complétée.
 */

export interface JourneyStep {
  number: string
  label: string
  pathPrefix: string
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { number: '01', label: 'Bienvenue', pathPrefix: '/fr/01-bienvenue' },
  { number: '02', label: 'Installer la caméra', pathPrefix: '/fr/02-installer-camera' },
  { number: '03', label: 'Installer l\'application', pathPrefix: '/fr/03-installer-app' },
  { number: '04', label: 'Compte RICOH360', pathPrefix: '/fr/04-compte-ricoh360' },
  { number: '05', label: 'Connecter la caméra', pathPrefix: '/fr/05-connecter-camera' },
  { number: '06', label: 'Première capture', pathPrefix: '/fr/06-premiere-capture' },
  { number: '07', label: 'Comprendre le Cloud', pathPrefix: '/fr/07-comprendre-cloud' },
  { number: '08', label: 'Retrouver et partager', pathPrefix: '/fr/08-retrouver-partager' },
  { number: '09', label: 'Organiser vos contenus', pathPrefix: '/fr/09-organiser' },
  { number: '10', label: 'Exploiter vos panoramas', pathPrefix: '/fr/10-exploiter' },
  { number: '11', label: 'Bonnes pratiques', pathPrefix: '/fr/11-bonnes-pratiques' },
  { number: '12', label: 'Aide et dépannage', pathPrefix: '/fr/12-aide-depannage' },
]

export const TOTAL_STEPS = JOURNEY_STEPS.length

export const STORAGE_KEY = 'ricoh360-journey-progress'
export const COMPLETION_EVENT = 'journey-step-completed'
