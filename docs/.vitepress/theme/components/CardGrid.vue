<script setup lang="ts">
withDefaults(
  defineProps<{
    cols?: number
  }>(),
  { cols: 3 }
)
</script>

<template>
  <div class="card-grid" :data-cols="cols">
    <slot />
  </div>
</template>
