<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { t } from '../../data/i18n'

const { lang } = useData()

const nodes = computed(() => [
  { id: 'camera', label: t('cloud_flow.camera', lang.value), icon: '📷' },
  { id: 'app', label: t('cloud_flow.mobile_app', lang.value), icon: '📱' },
  { id: 'cloud', label: t('cloud_flow.cloud', lang.value), icon: '☁️' },
  { id: 'web', label: t('cloud_flow.web_platform', lang.value), icon: '💻' },
])
</script>

<template>
  <div class="cloud-flow" role="img" :aria-label="t('cloud_flow.aria_label', lang)">
    <ol class="cloud-flow__chain">
      <li v-for="(node, index) in nodes" :key="node.id" class="cloud-flow__step">
        <div class="cloud-flow__bubble">
          <span class="cloud-flow__icon" aria-hidden="true">{{ node.icon }}</span>
          <span class="cloud-flow__label">{{ node.label }}</span>
        </div>
        <span v-if="index < nodes.length - 1" class="cloud-flow__arrow" aria-hidden="true">→</span>
      </li>
    </ol>
    <p class="cloud-flow__caption">
      {{ t('cloud_flow.caption', lang) }}
    </p>
  </div>
</template>
