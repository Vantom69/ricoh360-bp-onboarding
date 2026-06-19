<script setup lang="ts">
import { withBase } from 'vitepress'

withDefaults(
  defineProps<{
    appstoreUrl?: string
    playstoreUrl?: string
  }>(),
  {
    appstoreUrl: 'https://apps.apple.com/fr/app/ricoh360-theta-app/id6446307957',
    playstoreUrl: 'https://play.google.com/store/apps/details?id=com.ricoh360.mobile',
  }
)
</script>

<template>
  <div class="qr-pair">
    <a class="qr-pair__item" :href="appstoreUrl" target="_blank" rel="noopener">
      <img
        class="qr-pair__code"
        :src="withBase('/images/v2/qr-appstore.png')"
        alt="QR code App Store RICOH360 THETA App pour iOS"
        loading="lazy"
        width="160"
        height="160"
      />
      <span class="qr-pair__caption">iOS — App Store</span>
    </a>
    <a class="qr-pair__item" :href="playstoreUrl" target="_blank" rel="noopener">
      <img
        class="qr-pair__code"
        :src="withBase('/images/v2/qr-playstore.png')"
        alt="QR code Google Play RICOH360 THETA App pour Android"
        loading="lazy"
        width="160"
        height="160"
      />
      <span class="qr-pair__caption">Android — Google Play</span>
    </a>
  </div>
</template>
