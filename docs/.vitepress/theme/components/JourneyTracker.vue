<script setup lang="ts">
import { onMounted } from 'vue'
import { STORAGE_KEY, COMPLETION_EVENT } from '../../data/journey-steps'

const props = defineProps<{
  section: string
}>()

function markCompleted(section: string) {
  if (typeof window === 'undefined') return
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const current: string[] = raw ? JSON.parse(raw) : []
    if (Array.isArray(current) && !current.includes(section)) {
      current.push(section)
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
      window.dispatchEvent(new CustomEvent(COMPLETION_EVENT, { detail: { section } }))
    } else if (!Array.isArray(current)) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([section]))
      window.dispatchEvent(new CustomEvent(COMPLETION_EVENT, { detail: { section } }))
    }
  } catch {
    // ignore
  }
}

onMounted(() => {
  if (props.section) {
    markCompleted(props.section)
  }
})
</script>

<template>
  <!-- composant invisible, marqueur d'étape -->
</template>
