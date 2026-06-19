/**
 * Source de vérité des 12 sections principales du parcours V2.
 * Utilisée par JourneyProgress (jauge globale), JourneyTracker (marqueur d'étape terminée au mount)
 * et SidebarTracker (marquage ✓/●/○ dans le menu).
 *
 * Une « étape » correspond à une section de premier niveau du parcours (01 à 12).
 * Les sous-pages (theta-x/a1, 9A/B/C, 10A-D, 11A-C) marquent toutes la même section parente comme complétée.
 *
 * `pathPrefix` est **lang-agnostic** depuis la V2.7 : il ne contient pas la locale (`/01-bienvenue`
 * au lieu de `/fr/01-bienvenue`). Cela permet à la même définition de matcher les URLs FR et EN
 * (et ES/JP futurs) sans duplication, puisque les slugs des sections sont communs aux locales.
 *
 * Le `label` lisible est obtenu via `t('journey.NN', lang)` dans `data/i18n.ts`.
 */

export interface JourneyStep {
  number: string
  pathPrefix: string
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { number: '01', pathPrefix: '/01-bienvenue' },
  { number: '02', pathPrefix: '/02-installer-camera' },
  { number: '03', pathPrefix: '/03-installer-app' },
  { number: '04', pathPrefix: '/04-compte-ricoh360' },
  { number: '05', pathPrefix: '/05-connecter-camera' },
  { number: '06', pathPrefix: '/06-premiere-capture' },
  { number: '07', pathPrefix: '/07-comprendre-cloud' },
  { number: '08', pathPrefix: '/08-retrouver-partager' },
  { number: '09', pathPrefix: '/09-organiser' },
  { number: '10', pathPrefix: '/10-exploiter' },
  { number: '11', pathPrefix: '/11-bonnes-pratiques' },
  { number: '12', pathPrefix: '/12-aide-depannage' },
]

export const TOTAL_STEPS = JOURNEY_STEPS.length

export const STORAGE_KEY = 'ricoh360-journey-progress'
export const COMPLETION_EVENT = 'journey-step-completed'
