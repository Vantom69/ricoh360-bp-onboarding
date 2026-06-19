<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { JOURNEY_STEPS, STORAGE_KEY, COMPLETION_EVENT } from '../../data/journey-steps'

const route = useRoute()

function readCompleted(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? new Set(arr) : new Set()
  } catch {
    return new Set()
  }
}

function sectionForPath(path: string): string | null {
  // includes (et pas startsWith) pour matcher aussi les hrefs DOM qui contiennent la base URL
  // ex : /ricoh360-bp-onboarding-v2-preview/fr/01-bienvenue/ doit matcher pathPrefix /fr/01-bienvenue
  for (const step of JOURNEY_STEPS) {
    if (path.includes(step.pathPrefix)) return step.number
  }
  return null
}

function refreshSidebarChecks() {
  if (typeof document === 'undefined') return

  const completed = readCompleted()
  const currentSection = sectionForPath(route.path)

  // VitePress 1.x rend les items de sidebar dans .VPSidebar via .VPSidebarItem
  // Les liens sont des <a class="link"> (level 1) ou des éléments .VPLink.
  const links = document.querySelectorAll('.VPSidebar a[href]') as NodeListOf<HTMLAnchorElement>

  links.forEach((link) => {
    const href = link.getAttribute('href') || ''
    const section = sectionForPath(href.replace(/^https?:\/\/[^/]+/, ''))
    if (!section) return

    link.classList.remove('journey-completed', 'journey-current', 'journey-todo')

    if (section === currentSection) {
      link.classList.add('journey-current')
    } else if (completed.has(section)) {
      link.classList.add('journey-completed')
    } else {
      link.classList.add('journey-todo')
    }
  })
}

function scheduleRefresh() {
  // Refresh immédiat + délais successifs pour rattraper le rendu progressif de VitePress
  refreshSidebarChecks()
  nextTick(refreshSidebarChecks)
  setTimeout(refreshSidebarChecks, 100)
  setTimeout(refreshSidebarChecks, 500)
}

function handleStepCompleted() {
  refreshSidebarChecks()
}

let observer: MutationObserver | null = null

onMounted(() => {
  scheduleRefresh()
  window.addEventListener(COMPLETION_EVENT, handleStepCompleted)

  // Observe les mutations de la sidebar (drawer mobile, lazy render)
  const target = document.querySelector('.VPSidebar')
  if (target) {
    observer = new MutationObserver(() => refreshSidebarChecks())
    observer.observe(target, { childList: true, subtree: true })
  }
})

watch(() => route.path, () => {
  scheduleRefresh()
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener(COMPLETION_EVENT, handleStepCompleted)
  }
  observer?.disconnect()
})
</script>

<template>
  <!-- composant invisible, side effects seulement -->
</template>
