<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<template>
  <details class="faq-item">
    <summary class="faq-item__question">
      <span class="faq-item__mark" aria-hidden="true">?</span>
      <span class="faq-item__text">{{ question }}</span>
      <span class="faq-item__chevron" aria-hidden="true">▾</span>
    </summary>
    <div class="faq-item__answer">
      <slot />
    </div>
  </details>
</template>
