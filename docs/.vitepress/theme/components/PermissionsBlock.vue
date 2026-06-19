<script setup lang="ts">
import { useData } from 'vitepress'
import { t } from '../../data/i18n'
import Accordion from './Accordion.vue'

const { lang } = useData()
</script>

<template>
  <section class="permissions-block">
    <h2>{{ t('permissions.title', lang) }}</h2>

    <p>
      {{ t('permissions.first_connection_p1_part1', lang) }}
      <strong>{{ t('permissions.first_connection_part2', lang) }}</strong>
      {{ t('permissions.first_connection_p1_part3', lang) }}
      <strong>{{ t('permissions.register_button', lang) }}</strong>
      {{ t('permissions.in_the_app', lang) }}
    </p>

    <p>
      {{ t('permissions.missing_permissions_p1', lang) }}
      <strong>{{ t('permissions.white_checkmark', lang) }}</strong>
      {{ t('permissions.missing_permissions_p2', lang) }}
    </p>

    <p>{{ t('permissions.list_intro', lang) }}</p>

    <Accordion :title="t('permissions.ios_accordion_title', lang)">
      <ul class="permissions-block__list">
        <li v-html="t('permissions.ios_bluetooth', lang)"></li>
        <li v-html="t('permissions.ios_bluetooth_access', lang)"></li>
        <li v-html="t('permissions.ios_location_services', lang)"></li>
        <li v-html="t('permissions.ios_location_access', lang)"></li>
        <li v-html="t('permissions.ios_local_network', lang)"></li>
      </ul>
    </Accordion>

    <Accordion :title="t('permissions.android_accordion_title', lang)">
      <ul class="permissions-block__list">
        <li v-html="t('permissions.android_wifi', lang)"></li>
        <li v-html="t('permissions.android_bluetooth', lang)"></li>
        <li v-html="t('permissions.android_location_services', lang)"></li>
        <li v-html="t('permissions.android_location_access', lang)"></li>
        <li v-html="t('permissions.android_precise_location', lang)"></li>
        <li v-html="t('permissions.android_nearby_devices', lang)"></li>
      </ul>
    </Accordion>

    <p>
      {{ t('permissions.done_p1', lang) }}
      <strong>{{ t('permissions.done_button', lang) }}</strong>
      {{ t('permissions.done_p2', lang) }}
    </p>
  </section>
</template>

<style scoped>
.permissions-block {
  margin: var(--space-8) 0;
}
.permissions-block h2 {
  margin-top: 0;
}
.permissions-block p {
  color: var(--vp-c-text-1);
  line-height: 1.6;
}
.permissions-block__list {
  margin: 0;
  padding-left: var(--space-6);
  line-height: 1.7;
}
.permissions-block__list li {
  margin-bottom: var(--space-1);
}
</style>
