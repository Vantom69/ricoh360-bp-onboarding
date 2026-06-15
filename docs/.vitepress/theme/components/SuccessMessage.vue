<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
}>()
</script>

<template>
  <div class="success-message" role="status">
    <div class="success-message__icon" aria-hidden="true">
      <span>{{ icon || '✅' }}</span>
    </div>
    <div class="success-message__body">
      <p class="success-message__title">{{ title }}</p>
      <p class="success-message__text">
        <slot />
      </p>
    </div>
  </div>
</template>
