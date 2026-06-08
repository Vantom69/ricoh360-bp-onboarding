<script setup lang="ts">
withDefaults(
  defineProps<{
    appstoreUrl?: string
    playstoreUrl?: string
  }>(),
  {
    appstoreUrl: 'https://apps.apple.com/app/ricoh360/id1502996099',
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.ricoh.theta360',
  }
)
</script>

<template>
  <div class="qr-pair">
    <a class="qr-pair__item" :href="appstoreUrl" target="_blank" rel="noopener">
      <div class="qr-pair__placeholder">
        <span aria-hidden="true">📱</span>
        <span class="qr-pair__placeholder-label">QR App Store</span>
        <small>à générer</small>
      </div>
      <span class="qr-pair__caption">iOS — App Store</span>
    </a>
    <a class="qr-pair__item" :href="playstoreUrl" target="_blank" rel="noopener">
      <div class="qr-pair__placeholder">
        <span aria-hidden="true">🤖</span>
        <span class="qr-pair__placeholder-label">QR Google Play</span>
        <small>à générer</small>
      </div>
      <span class="qr-pair__caption">Android — Google Play</span>
    </a>
  </div>
</template>
