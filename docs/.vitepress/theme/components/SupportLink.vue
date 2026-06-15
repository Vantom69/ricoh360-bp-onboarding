<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a class="support-link" :href="href" target="_blank" rel="noopener">
    <span class="support-link__text"><slot /></span>
    <span class="support-link__external" aria-hidden="true">↗</span>
  </a>
</template>
