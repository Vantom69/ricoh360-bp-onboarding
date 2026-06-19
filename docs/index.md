---
layout: home
title: RICOH360 Business Pack — Onboarding
titleTemplate: false

hero:
  name: RICOH360 Business Pack
  text: Onboarding
  tagline: Loading your preferred language… / Chargement de votre langue…
  actions:
    - theme: brand
      text: Français
      link: /fr/01-bienvenue/
    - theme: alt
      text: English
      link: /en/01-bienvenue/
---

<script>
// Redirection automatique selon la langue du navigateur.
// Fallback FR pour ES, JP, autres langues non encore disponibles.
(function () {
  if (typeof window === 'undefined') return
  // Construit l'URL absolue : <origin><base><lang>/01-bienvenue/
  // window.location.pathname pointe sur <base>/ (ex /ricoh360-bp-onboarding/) après build
  var path = window.location.pathname
  var base = path.endsWith('/') ? path : path.substring(0, path.lastIndexOf('/') + 1)
  var raw = (navigator.language || navigator.userLanguage || 'fr').toLowerCase()
  var lang = raw.startsWith('en') ? 'en' : 'fr'
  var target = base + lang + '/01-bienvenue/'
  // Si on est déjà sur la cible (peu probable mais safety), on ne fait rien
  if (window.location.pathname !== target) {
    window.location.replace(target)
  }
})()
</script>
