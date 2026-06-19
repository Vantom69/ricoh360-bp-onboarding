<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { media } from '../../data/media'
import { t } from '../../data/i18n'

const { lang } = useData()

const props = defineProps<{
  id: string
  caption?: string
}>()

const entry = computed(() => media[props.id])
const isIntegrated = computed(() => entry.value?.status === 'integrated' && entry.value?.url)

// Détection YouTube + extraction de l'ID vidéo
// Formats supportés : youtu.be/ID, youtube.com/shorts/ID, youtube.com/watch?v=ID, youtube.com/embed/ID
const youtubeId = computed(() => {
  const url = entry.value?.url
  if (!url) return null
  const patterns = [
    /youtube\.com\/shorts\/([\w-]+)/,
    /youtu\.be\/([\w-]+)/,
    /youtube\.com\/watch\?v=([\w-]+)/,
    /youtube\.com\/embed\/([\w-]+)/,
  ]
  for (const re of patterns) {
    const match = url.match(re)
    if (match) return match[1]
  }
  return null
})

const isYouTube = computed(() => youtubeId.value !== null)
const youtubeEmbedUrl = computed(() =>
  youtubeId.value ? `https://www.youtube.com/embed/${youtubeId.value}?rel=0` : null
)
</script>

<template>
  <figure v-if="entry" class="media media--video">
    <div v-if="isIntegrated && isYouTube" class="media__youtube">
      <iframe
        :src="youtubeEmbedUrl ?? undefined"
        :title="entry.title"
        loading="lazy"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div v-else-if="isIntegrated" class="media__player">
      <video
        controls
        playsinline
        preload="metadata"
        :src="entry.url"
      >
        {{ t('video.unsupported', lang) }}
      </video>
    </div>
    <div v-else class="media__placeholder" :data-status="entry.status">
      <div class="media__placeholder-icon" aria-hidden="true">▶</div>
      <div class="media__placeholder-body">
        <span class="media__placeholder-label">{{ t('video.placeholder_label', lang) }}</span>
        <p class="media__placeholder-title">{{ entry.title }}</p>
        <span class="media__placeholder-id">{{ entry.id }}</span>
      </div>
    </div>
    <figcaption v-if="caption || entry.title" class="media__caption">
      {{ caption || entry.title }}
    </figcaption>
  </figure>
  <div v-else class="media media--missing">
    {{ t('video.not_found', lang) }}&nbsp;: <code>{{ id }}</code>
  </div>
</template>
