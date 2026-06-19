<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const { site } = useData()

onMounted(() => {
  if (typeof window === 'undefined') return
  const raw = (navigator.language || (navigator as any).userLanguage || 'fr').toLowerCase()
  const lang = raw.startsWith('en') ? 'en' : 'fr'
  // site.value.base contient la base URL avec trailing slash (ex : /ricoh360-bp-onboarding-v2-preview/)
  const target = `${site.value.base}${lang}/01-bienvenue/`
  // Évite une boucle infinie si on est déjà sur la cible
  if (window.location.pathname !== target) {
    window.location.replace(target)
  }
})
</script>

<template>
  <!-- composant invisible : side effect uniquement (redirection au mount) -->
</template>
