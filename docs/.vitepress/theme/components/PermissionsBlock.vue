<script setup lang="ts">
import Accordion from './Accordion.vue'
</script>

<template>
  <section class="permissions-block">
    <h2>Autoriser l'application à se connecter à votre caméra</h2>

    <p>
      S'il s'agit de votre <strong>première connexion</strong> entre une caméra RICOH THETA et l'application RICOH360,
      appuyez sur <strong>Register</strong> dans l'application.
    </p>

    <p>
      Si certaines autorisations système manquent, un message s'affiche dans les paramètres de connexion Wi-Fi avec
      une <strong>coche blanche</strong> à côté des permissions insuffisantes. Appuyez sur cette coche pour ouvrir les
      réglages de votre téléphone et accorder les autorisations nécessaires. Si toutes les permissions sont déjà
      accordées, ce message ne s'affiche pas.
    </p>

    <p>Voici les autorisations à vérifier selon votre système :</p>

    <Accordion title="Autorisations nécessaires sur iOS">
      <ul class="permissions-block__list">
        <li><strong>Bluetooth</strong> activé</li>
        <li><strong>Accès Bluetooth</strong> autorisé pour RICOH360 App</li>
        <li><strong>Services de localisation</strong> activés</li>
        <li><strong>Accès à la localisation</strong> autorisé pour RICOH360 App</li>
        <li><strong>Accès au réseau local</strong> autorisé pour RICOH360 App</li>
      </ul>
    </Accordion>

    <Accordion title="Autorisations nécessaires sur Android">
      <ul class="permissions-block__list">
        <li><strong>Wi-Fi</strong> activé</li>
        <li><strong>Bluetooth</strong> activé</li>
        <li><strong>Services de localisation</strong> activés</li>
        <li><strong>Accès à la localisation</strong> autorisé dans les réglages de RICOH360 App</li>
        <li><strong>Localisation précise</strong> activée</li>
        <li><strong>Accès aux appareils à proximité</strong> autorisé</li>
      </ul>
    </Accordion>

    <p>
      Une fois les autorisations configurées, appuyez sur <strong>Done</strong> pour finaliser et revenir à la
      procédure de connexion.
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
