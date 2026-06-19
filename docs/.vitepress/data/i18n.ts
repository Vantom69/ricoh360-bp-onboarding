/**
 * Système i18n centralisé pour les strings UI des composants Vue V2.
 *
 * Usage dans un composant :
 *   import { useData } from 'vitepress'
 *   import { t } from '../../data/i18n'
 *   const { lang } = useData()
 *   ...
 *   <p>{{ t('journey_progress.label', lang) }}</p>
 *
 * Pour ajouter une langue (ES, JP, etc.) : ajouter la clé dans le type Locale puis
 * la traduction dans chaque entrée de `translations`.
 */

export type Locale = 'fr' | 'en' | 'es' | 'ja'

type TranslationEntry = Partial<Record<Locale, string>>

export const translations: Record<string, TranslationEntry> = {
  // JourneyProgress
  'journey_progress.aria_label': {
    fr: 'Votre progression dans l\'onboarding',
    en: 'Your progress through the onboarding',
  },
  'journey_progress.label': {
    fr: 'Votre progression',
    en: 'Your progress',
  },
  'journey_progress.count_separator': {
    fr: 'sur',
    en: 'of',
  },
  'journey_progress.steps_suffix': {
    fr: 'étapes',
    en: 'steps',
  },
  'journey_progress.percent_completed': {
    fr: 'complété',
    en: 'completed',
  },
  'journey_progress.reset': {
    fr: '↺ Réinitialiser',
    en: '↺ Reset',
  },
  'journey_progress.reset_title': {
    fr: 'Réinitialiser votre progression',
    en: 'Reset your progress',
  },

  // JourneyStep
  'journey_step.label': {
    fr: 'Étape',
    en: 'Step',
  },
  'journey_step.outcome_intro': {
    fr: 'À la fin de cette étape vous saurez',
    en: 'By the end of this step, you\'ll know how to',
  },

  // CameraSelector
  'camera_selector.intro': {
    fr: 'Quelle caméra avez-vous reçue avec votre Business Pack ?',
    en: 'Which camera did you receive with your Business Pack?',
  },
  'camera_selector.theta_x_desc': {
    fr: 'Caméra 360° avec écran tactile et acquisition rapide.',
    en: '360° camera with a touchscreen and fast capture.',
  },
  'camera_selector.theta_a1_desc': {
    fr: 'Caméra 360° compacte, pensée pour la mobilité terrain.',
    en: 'Compact 360° camera, designed for field mobility.',
  },
  'camera_selector.theta_x_cta': {
    fr: 'Démarrer avec la THETA X →',
    en: 'Get started with THETA X →',
  },
  'camera_selector.theta_a1_cta': {
    fr: 'Démarrer avec la THETA A1 →',
    en: 'Get started with THETA A1 →',
  },
  'camera_selector.you_selected': {
    fr: 'Vous avez choisi',
    en: 'You selected',
  },
  'camera_selector.journey_adapted': {
    fr: 'Votre parcours est désormais adapté à votre modèle.',
    en: 'Your journey is now tailored to your model.',
  },

  // PermissionsBlock
  'permissions.title': {
    fr: 'Autoriser l\'application à se connecter à votre caméra',
    en: 'Allow the app to connect to your camera',
  },
  'permissions.first_connection_p1_part1': {
    fr: 'S\'il s\'agit de votre',
    en: 'If this is your',
  },
  'permissions.first_connection_part2': {
    fr: 'première connexion',
    en: 'first connection',
  },
  'permissions.first_connection_p1_part3': {
    fr: 'entre une caméra RICOH THETA et l\'application RICOH360, appuyez sur',
    en: 'between a RICOH THETA camera and the RICOH360 app, tap',
  },
  'permissions.register_button': {
    fr: 'Register',
    en: 'Register',
  },
  'permissions.in_the_app': {
    fr: 'dans l\'application.',
    en: 'in the app.',
  },
  'permissions.missing_permissions_p1': {
    fr: 'Si certaines autorisations système manquent, un message s\'affiche dans les paramètres de connexion Wi-Fi avec une',
    en: 'If some system permissions are missing, a message appears in the Wi-Fi connection settings with a',
  },
  'permissions.white_checkmark': {
    fr: 'coche blanche',
    en: 'white checkmark',
  },
  'permissions.missing_permissions_p2': {
    fr: 'à côté des permissions insuffisantes. Appuyez sur cette coche pour ouvrir les réglages de votre téléphone et accorder les autorisations nécessaires. Si toutes les permissions sont déjà accordées, ce message ne s\'affiche pas.',
    en: 'next to the insufficient permissions. Tap this checkmark to open your phone settings and grant the necessary permissions. If all permissions are already granted, this message does not appear.',
  },
  'permissions.list_intro': {
    fr: 'Voici les autorisations à vérifier selon votre système :',
    en: 'Here are the permissions to check based on your operating system:',
  },
  'permissions.ios_accordion_title': {
    fr: 'Autorisations nécessaires sur iOS',
    en: 'Required permissions on iOS',
  },
  'permissions.android_accordion_title': {
    fr: 'Autorisations nécessaires sur Android',
    en: 'Required permissions on Android',
  },
  'permissions.ios_bluetooth': {
    fr: '<strong>Bluetooth</strong> activé',
    en: '<strong>Bluetooth</strong> enabled',
  },
  'permissions.ios_bluetooth_access': {
    fr: '<strong>Accès Bluetooth</strong> autorisé pour RICOH360 App',
    en: '<strong>Bluetooth access</strong> granted to RICOH360 App',
  },
  'permissions.ios_location_services': {
    fr: '<strong>Services de localisation</strong> activés',
    en: '<strong>Location services</strong> enabled',
  },
  'permissions.ios_location_access': {
    fr: '<strong>Accès à la localisation</strong> autorisé pour RICOH360 App',
    en: '<strong>Location access</strong> granted to RICOH360 App',
  },
  'permissions.ios_local_network': {
    fr: '<strong>Accès au réseau local</strong> autorisé pour RICOH360 App',
    en: '<strong>Local network access</strong> granted to RICOH360 App',
  },
  'permissions.android_wifi': {
    fr: '<strong>Wi-Fi</strong> activé',
    en: '<strong>Wi-Fi</strong> enabled',
  },
  'permissions.android_bluetooth': {
    fr: '<strong>Bluetooth</strong> activé',
    en: '<strong>Bluetooth</strong> enabled',
  },
  'permissions.android_location_services': {
    fr: '<strong>Services de localisation</strong> activés',
    en: '<strong>Location services</strong> enabled',
  },
  'permissions.android_location_access': {
    fr: '<strong>Accès à la localisation</strong> autorisé dans les réglages de RICOH360 App',
    en: '<strong>Location access</strong> granted in the RICOH360 App settings',
  },
  'permissions.android_precise_location': {
    fr: '<strong>Localisation précise</strong> activée',
    en: '<strong>Precise location</strong> enabled',
  },
  'permissions.android_nearby_devices': {
    fr: '<strong>Accès aux appareils à proximité</strong> autorisé',
    en: '<strong>Nearby devices access</strong> granted',
  },
  'permissions.done_p1': {
    fr: 'Une fois les autorisations configurées, appuyez sur',
    en: 'Once the permissions are configured, tap',
  },
  'permissions.done_button': {
    fr: 'Done',
    en: 'Done',
  },
  'permissions.done_p2': {
    fr: 'pour finaliser et revenir à la procédure de connexion.',
    en: 'to finalize and return to the connection procedure.',
  },

  // Card
  'card.default_cta': {
    fr: 'En savoir plus →',
    en: 'Learn more →',
  },

  // CloudFlowDiagram
  'cloud_flow.camera': {
    fr: 'Caméra',
    en: 'Camera',
  },
  'cloud_flow.mobile_app': {
    fr: 'Application mobile',
    en: 'Mobile app',
  },
  'cloud_flow.cloud': {
    fr: 'RICOH360 Cloud',
    en: 'RICOH360 Cloud',
  },
  'cloud_flow.web_platform': {
    fr: 'Plateforme web',
    en: 'Web platform',
  },
  'cloud_flow.aria_label': {
    fr: 'Caméra envoie vers l\'app mobile, qui pousse vers le Cloud, accessible depuis la plateforme web',
    en: 'The camera sends to the mobile app, which pushes to the Cloud, accessible from the web platform',
  },
  'cloud_flow.caption': {
    fr: 'Vos panoramas voyagent automatiquement de la caméra vers la plateforme web via votre application mobile et le Cloud RICOH360.',
    en: 'Your panoramas travel automatically from the camera to the web platform via your mobile app and the RICOH360 Cloud.',
  },

  // VideoPlaceholder
  'video.unsupported': {
    fr: 'Votre navigateur ne prend pas en charge la lecture vidéo.',
    en: 'Your browser does not support video playback.',
  },
  'video.placeholder_label': {
    fr: 'Vidéo à intégrer',
    en: 'Video pending',
  },
  'video.not_found': {
    fr: 'Média introuvable',
    en: 'Media not found',
  },

  // ImagePlaceholder
  'image.placeholder_label': {
    fr: 'Visuel à intégrer',
    en: 'Visual pending',
  },
  'image.not_found': {
    fr: 'Visuel introuvable',
    en: 'Visual not found',
  },

  // QRCodePair
  'qr.appstore_alt': {
    fr: 'QR code App Store RICOH360 THETA App pour iOS',
    en: 'App Store QR code — RICOH360 THETA App for iOS',
  },
  'qr.playstore_alt': {
    fr: 'QR code Google Play RICOH360 THETA App pour Android',
    en: 'Google Play QR code — RICOH360 THETA App for Android',
  },

  // Journey steps (labels des 12 sections — utilisés par JourneyProgress et SidebarTracker si besoin)
  'journey.01': { fr: 'Bienvenue', en: 'Welcome' },
  'journey.02': { fr: 'Préparer la caméra', en: 'Set up the camera' },
  'journey.03': { fr: 'Installer l\'application', en: 'Install the app' },
  'journey.04': { fr: 'Compte RICOH360', en: 'RICOH360 account' },
  'journey.05': { fr: 'Connecter la caméra', en: 'Connect the camera' },
  'journey.06': { fr: 'Première capture', en: 'First capture' },
  'journey.07': { fr: 'Comprendre le Cloud', en: 'Understand the Cloud' },
  'journey.08': { fr: 'Retrouver et partager', en: 'Find and share' },
  'journey.09': { fr: 'Organiser vos contenus', en: 'Organize your content' },
  'journey.10': { fr: 'Exploiter vos panoramas', en: 'Get the most out of your panoramas' },
  'journey.11': { fr: 'Bonnes pratiques', en: 'Best practices' },
  'journey.12': { fr: 'Aide et dépannage', en: 'Help and troubleshooting' },
}

/**
 * Résout la traduction pour une clé et une locale donnée.
 * Fallback FR si la traduction n'existe pas pour la locale demandée.
 * Retourne la clé brute si la clé n'existe pas du tout (aide au debug).
 */
export function t(key: string, lang: string | undefined | null): string {
  const locale = detectLocale(lang)
  const entry = translations[key]
  if (!entry) return key
  return entry[locale] ?? entry.fr ?? key
}

/**
 * Détecte la locale à partir d'un BCP47 (ex 'fr-FR', 'en-US').
 * Fallback FR pour tout ce qui n'est pas explicitement supporté.
 */
export function detectLocale(lang: string | undefined | null): Locale {
  if (!lang) return 'fr'
  if (lang.startsWith('en')) return 'en'
  if (lang.startsWith('es')) return 'es'
  if (lang.startsWith('ja')) return 'ja'
  return 'fr'
}
