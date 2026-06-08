<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    open?: boolean
  }>(),
  { open: false }
)

const isOpen = ref(props.open)
</script>

<template>
  <details class="accordion" :open="isOpen" @toggle="isOpen = ($event.target as HTMLDetailsElement).open">
    <summary class="accordion__summary">
      <span class="accordion__title">{{ title }}</span>
      <span class="accordion__chevron" aria-hidden="true">▾</span>
    </summary>
    <div class="accordion__body">
      <slot />
    </div>
  </details>
</template>
