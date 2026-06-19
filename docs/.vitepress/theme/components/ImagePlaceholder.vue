<script setup lang="ts">
import { computed } from 'vue'
import { media } from '../../data/media'

const props = defineProps<{
  id: string
  caption?: string
  alt?: string
  variant?: string
}>()

const entry = computed(() => media[props.id])
const isIntegrated = computed(() => entry.value?.status === 'integrated' && entry.value?.url)

const figureClass = computed(() => [
  'media',
  'media--image',
  props.variant ? `media--${props.variant}` : null,
])
</script>

<template>
  <figure v-if="entry" :class="figureClass">
    <img
      v-if="isIntegrated"
      :src="entry.url"
      :alt="alt || entry.title"
      loading="lazy"
    />
    <div v-else class="media__placeholder" :data-status="entry.status">
      <div class="media__placeholder-icon" aria-hidden="true">🖼</div>
      <div class="media__placeholder-body">
        <span class="media__placeholder-label">Visuel à intégrer</span>
        <p class="media__placeholder-title">{{ entry.title }}</p>
        <span class="media__placeholder-id">{{ entry.id }}</span>
      </div>
    </div>
    <figcaption v-if="caption || entry.title" class="media__caption">
      {{ caption || entry.title }}
    </figcaption>
  </figure>
  <div v-else class="media media--missing">
    Visuel introuvable&nbsp;: <code>{{ id }}</code>
  </div>
</template>
