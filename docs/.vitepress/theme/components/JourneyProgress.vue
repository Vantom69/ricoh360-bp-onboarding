<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import { TOTAL_STEPS, STORAGE_KEY, COMPLETION_EVENT } from '../../data/journey-steps'
import { t } from '../../data/i18n'

const { lang } = useData()
const completedSteps = ref<Set<string>>(new Set())

function loadProgress() {
  if (typeof window === 'undefined') return
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const arr = JSON.parse(raw)
      if (Array.isArray(arr)) {
        completedSteps.value = new Set(arr)
      }
    }
  } catch {
    // ignore
  }
}

function handleStepCompleted() {
  loadProgress()
}

onMounted(() => {
  loadProgress()
  window.addEventListener(COMPLETION_EVENT, handleStepCompleted)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener(COMPLETION_EVENT, handleStepCompleted)
  }
})

const completedCount = computed(() => completedSteps.value.size)
const percent = computed(() => Math.round((completedCount.value / TOTAL_STEPS) * 100))

function resetProgress() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
    completedSteps.value = new Set()
    window.dispatchEvent(new CustomEvent(COMPLETION_EVENT, { detail: { reset: true } }))
  } catch {
    // ignore
  }
}
</script>

<template>
  <aside class="journey-progress" :aria-label="t('journey_progress.aria_label', lang)">
    <p class="journey-progress__label">{{ t('journey_progress.label', lang) }}</p>
    <p class="journey-progress__count">
      <strong>{{ completedCount }}</strong> {{ t('journey_progress.count_separator', lang) }} {{ TOTAL_STEPS }} {{ t('journey_progress.steps_suffix', lang) }}
    </p>
    <div class="journey-progress__bar" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100">
      <div class="journey-progress__bar-fill" :style="{ width: percent + '%' }"></div>
    </div>
    <p class="journey-progress__percent">{{ percent }}&nbsp;% {{ t('journey_progress.percent_completed', lang) }}</p>
    <button
      v-if="completedCount > 0"
      type="button"
      class="journey-progress__reset"
      @click="resetProgress"
      :title="t('journey_progress.reset_title', lang)"
    >
      {{ t('journey_progress.reset', lang) }}
    </button>
  </aside>
</template>
