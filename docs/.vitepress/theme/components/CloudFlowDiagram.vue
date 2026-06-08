<script setup lang="ts">
const nodes = [
  { id: 'camera', label: 'Caméra', icon: '📷' },
  { id: 'app', label: 'Application mobile', icon: '📱' },
  { id: 'cloud', label: 'RICOH360 Cloud', icon: '☁️' },
  { id: 'web', label: 'Plateforme web', icon: '💻' },
]
</script>

<template>
  <div class="cloud-flow" role="img" aria-label="Caméra envoie vers l'app mobile, qui pousse vers le Cloud, accessible depuis la plateforme web">
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
      Vos panoramas voyagent automatiquement de la caméra vers la plateforme web via votre application mobile et le Cloud RICOH360.
    </p>
  </div>
</template>
