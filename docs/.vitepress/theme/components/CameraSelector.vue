<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { withBase, useData } from 'vitepress'
import { t, detectLocale } from '../../data/i18n'

const { lang } = useData()
const locale = computed(() => detectLocale(lang.value))
const langPrefix = computed(() => `/${locale.value}`)

const selected = ref<string | null>(null)

onMounted(() => {
  if (typeof window !== 'undefined') {
    selected.value = window.localStorage.getItem('ricoh360-camera-model')
  }
})

function selectModel(model: 'theta-x' | 'theta-a1') {
  selected.value = model
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('ricoh360-camera-model', model)
  }
}
</script>

<template>
  <div class="camera-selector">
    <p class="camera-selector__intro">
      {{ t('camera_selector.intro', lang) }}
    </p>

    <div class="camera-selector__cards">
      <a
        :href="withBase(`${langPrefix}/02-installer-camera/theta-x`)"
        class="camera-card"
        :class="{ 'camera-card--selected': selected === 'theta-x' }"
        @click="selectModel('theta-x')"
      >
        <div class="camera-card__visual" aria-hidden="true">
          <span class="camera-card__icon">📷</span>
        </div>
        <h3 class="camera-card__title">RICOH THETA X</h3>
        <p class="camera-card__desc">
          {{ t('camera_selector.theta_x_desc', lang) }}
        </p>
        <span class="camera-card__cta">{{ t('camera_selector.theta_x_cta', lang) }}</span>
      </a>

      <a
        :href="withBase(`${langPrefix}/02-installer-camera/theta-a1`)"
        class="camera-card"
        :class="{ 'camera-card--selected': selected === 'theta-a1' }"
        @click="selectModel('theta-a1')"
      >
        <div class="camera-card__visual" aria-hidden="true">
          <span class="camera-card__icon">📸</span>
        </div>
        <h3 class="camera-card__title">RICOH THETA A1</h3>
        <p class="camera-card__desc">
          {{ t('camera_selector.theta_a1_desc', lang) }}
        </p>
        <span class="camera-card__cta">{{ t('camera_selector.theta_a1_cta', lang) }}</span>
      </a>
    </div>

    <p v-if="selected" class="camera-selector__hint">
      {{ t('camera_selector.you_selected', lang) }} <strong>{{ selected === 'theta-x' ? 'RICOH THETA X' : 'RICOH THETA A1' }}</strong>. {{ t('camera_selector.journey_adapted', lang) }}
    </p>
  </div>
</template>
