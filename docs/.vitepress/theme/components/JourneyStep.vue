<script setup lang="ts">
defineProps<{
  number?: string | number
  objective?: string
  outcome?: string
}>()
</script>

<template>
  <div class="journey-step">
    <header v-if="number || objective" class="journey-step__header">
      <span v-if="number" class="journey-step__badge">Étape {{ number }}</span>
      <p v-if="objective" class="journey-step__objective">{{ objective }}</p>
    </header>

    <div class="journey-step__body">
      <slot />
    </div>

    <aside v-if="outcome" class="journey-step__outcome">
      <span class="journey-step__outcome-label">À la fin de cette étape vous saurez</span>
      <p class="journey-step__outcome-text">{{ outcome }}</p>
    </aside>
  </div>
</template>
