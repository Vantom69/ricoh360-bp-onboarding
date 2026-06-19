<script setup lang="ts">
import { useData } from 'vitepress'
import { t } from '../../data/i18n'

const { lang } = useData()

defineProps<{
  title?: string
  icon?: string
  link?: string
  cta?: string
}>()
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    class="card"
    :class="{ 'card--linked': link }"
  >
    <div v-if="icon" class="card__icon" aria-hidden="true">{{ icon }}</div>
    <h3 v-if="title" class="card__title">{{ title }}</h3>
    <div class="card__body">
      <slot />
    </div>
    <span v-if="link" class="card__cta">{{ cta || t('card.default_cta', lang) }}</span>
  </component>
</template>
