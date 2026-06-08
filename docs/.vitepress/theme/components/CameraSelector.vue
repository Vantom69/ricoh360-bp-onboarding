<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'

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
      Quelle caméra avez-vous reçue avec votre Business Pack ?
    </p>

    <div class="camera-selector__cards">
      <a
        :href="withBase('/fr/02-installer-camera/theta-x')"
        class="camera-card"
        :class="{ 'camera-card--selected': selected === 'theta-x' }"
        @click="selectModel('theta-x')"
      >
        <div class="camera-card__visual" aria-hidden="true">
          <span class="camera-card__icon">📷</span>
        </div>
        <h3 class="camera-card__title">RICOH THETA X</h3>
        <p class="camera-card__desc">
          Caméra 360° avec écran tactile et acquisition rapide.
        </p>
        <span class="camera-card__cta">Démarrer avec la THETA X →</span>
      </a>

      <a
        :href="withBase('/fr/02-installer-camera/theta-a1')"
        class="camera-card"
        :class="{ 'camera-card--selected': selected === 'theta-a1' }"
        @click="selectModel('theta-a1')"
      >
        <div class="camera-card__visual" aria-hidden="true">
          <span class="camera-card__icon">📸</span>
        </div>
        <h3 class="camera-card__title">RICOH THETA A1</h3>
        <p class="camera-card__desc">
          Caméra 360° compacte, pensée pour la mobilité terrain.
        </p>
        <span class="camera-card__cta">Démarrer avec la THETA A1 →</span>
      </a>
    </div>

    <p v-if="selected" class="camera-selector__hint">
      Vous avez choisi <strong>{{ selected === 'theta-x' ? 'RICOH THETA X' : 'RICOH THETA A1' }}</strong>. Votre parcours est désormais adapté à votre modèle.
    </p>
  </div>
</template>
