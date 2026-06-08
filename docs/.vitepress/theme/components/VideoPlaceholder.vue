<script setup lang="ts">
import { computed } from 'vue'
import { media } from '../../data/media'

const props = defineProps<{
  id: string
  caption?: string
}>()

const entry = computed(() => media[props.id])
const isIntegrated = computed(() => entry.value?.status === 'integrated' && entry.value?.url)
</script>

<template>
  <figure v-if="entry" class="media media--video">
    <div v-if="isIntegrated" class="media__player">
      <video
        controls
        playsinline
        preload="metadata"
        :src="entry.url"
      >
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
    </div>
    <div v-else class="media__placeholder" :data-status="entry.status">
      <div class="media__placeholder-icon" aria-hidden="true">▶</div>
      <div class="media__placeholder-body">
        <span class="media__placeholder-label">Vidéo à intégrer</span>
        <p class="media__placeholder-title">{{ entry.title }}</p>
        <span class="media__placeholder-id">{{ entry.id }}</span>
      </div>
    </div>
    <figcaption v-if="caption || entry.title" class="media__caption">
      {{ caption || entry.title }}
    </figcaption>
  </figure>
  <div v-else class="media media--missing">
    Média introuvable&nbsp;: <code>{{ id }}</code>
  </div>
</template>
