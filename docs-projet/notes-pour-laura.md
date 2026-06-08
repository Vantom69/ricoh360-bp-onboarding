# V2 Onboarding — Notes pour Laura

Salut Laura,

Voici un récap clair de ce qu'on a compris de ton brief et de ce qu'on a déjà mis en place. L'idée est que tu puisses ouvrir le site preview et nous dire vite ce qui va, ce qui cloche, et ce qui manque.

---

## 1. Comment on a compris ton brief

**Ce que tu veux changer par rapport à la V1**

La V1 était organisée comme une **documentation produit** (par thème : démarrage, utilisation, fonctionnalités…). Toi tu veux un **parcours client guidé**, qui prend le client par la main de la réception de son pack jusqu'à l'utilisation avancée. C'est un changement de modèle, pas un lifting.

**Ce qui doit ressortir partout**

- Un ton **rassurant et orienté Customer Success**, pas technique
- Une logique « **étape par étape** » plutôt que « toutes les fonctionnalités d'un coup »
- **Beaucoup de visuel** : vidéos courtes, captures, schémas, cartes, accordéons
- **Pas de page dense** : on coupe en blocs digestibles
- **Le choix du modèle de caméra** (THETA X ou A1) au tout début, qui adapte ensuite le parcours

**Architecture des 12 sections**

On a respecté ta structure :

1. Bienvenue + sélection modèle
2. Installer la caméra (split THETA X / A1)
3. Installer l'application mobile
4. Se connecter à son compte
5. Connecter la caméra à l'app (split THETA X / A1)
6. Première capture 360°
7. Comprendre le lien avec le Cloud
8. Retrouver et partager un panorama
9. Organiser le contenu (albums / projets / plans)
10. Exploiter les panoramas (annoter / comparer / super-résolution / flouter)
11. Bonnes pratiques par activité (construction / inspection / facility)
12. Aide et dépannage

---

## 2. Ce qu'on a déjà fait

**Côté structure**

Le squelette des 12 sections est en place, avec les 22 pages prévues. La navigation à gauche te montre les 12 sections, la nav haute simplifie en 4 grandes catégories (Démarrer / Utiliser / Bonnes pratiques / Aide), et la nav droite (sur desktop) sert d'ancre dans la page courante.

**Côté visuel et marque**

On a appliqué ta charte graphique (les bleus `#3532CA` / `#544EFF`, le noir `#2A303C`, la palette de gris, la police Inter). Tout le design system est en place : titres, boutons, cartes, accordéons, callouts.

**Côté composants visuels réutilisables**

On a construit des blocs prêts à l'emploi pour que chaque page soit homogène et facile à animer :

- Un **sélecteur de caméra** (THETA X / A1) sur la page d'accueil
- Un **encart d'étape** avec objectif en tête et résultat attendu en bas (utilisé sur chaque étape du parcours)
- Des **placeholders vidéos et images** qui affichent un cadre clair tant que le média n'est pas intégré (on en reparle plus bas)
- Des **accordéons** pour cacher les détails secondaires
- Des **cartes** pour structurer en blocs (objectifs, étiquettes, bonnes pratiques)
- Un **schéma de flux Cloud** (Caméra → App → Cloud → Web)
- Une **FAQ pliable** avec liens vers le support
- Des **liens support** stylisés

**Côté contenu — 5 pages témoins**

Pour que tu puisses voir le rendu, on a rédigé 5 pages représentatives qui couvrent tous les patterns :

- **Page d'accueil** (section 1) — avec le sélecteur de caméra
- **Installer la THETA X** (section 2A) — avec étape + accordéon + vidéo
- **Comprendre le Cloud** (section 7) — avec le schéma de flux
- **Ajouter des annotations** (section 10A) — avec vidéo + cas d'usage + étiquettes
- **Aide et dépannage** (section 12) — avec FAQ + liens support + visuels problèmes

Les 16 autres pages sont en état placeholder (encart « section en construction »). On les rédigera dès que tu valides l'approche des 5 témoins.

---

## 3. Comment on travaille ensemble sur les médias

Tu as fourni un Drive avec ~25 médias (vidéos `.mov` et captures `.png`). On a fait un **fichier de mapping** qui liste tous tes médias avec un identifiant stable (`media:annotations`, `media:firmware-update`, etc.).

Dans les pages V2, on a placé des **placeholders visuels** à l'endroit de chaque vidéo/capture. Tant qu'un média n'est pas intégré, le lecteur voit un cadre clair avec le titre du média et la mention « à intégrer ». Dès que le média est en ligne, le placeholder est automatiquement remplacé par la vidéo ou l'image.

**Ce que ça veut dire pour toi** : tu peux relire le contenu de chaque page sans attendre que les vidéos soient prêtes. Et tu peux livrer les médias un par un, sans bloquer le reste.

**Ce qu'on attend de toi** sur le sujet médias :

1. **Choisir le mode d'hébergement vidéo** parmi 4 options (cf. doc `media-procedure-laura.md` qu'on te transmet en parallèle). On recommande de convertir tes `.mov` en `.mp4` optimisés et de les stocker dans le repo du site (gratuit, performant, contrôle total).
2. **Nous fournir les médias finalisés** au fur et à mesure, avec leur identifiant. Exemple : « voilà la vidéo `media:annotations`, voici le lien d'hébergement ».
3. **Compléter le mapping** si on a oublié un média que tu prévoyais d'intégrer.

---

## 4. Tes inputs attendus / questions ouvertes

Quelques décisions ou retours qu'on attend de toi pour avancer :

### Sur la validation des 5 pages témoins

Une fois que tu as ouvert le preview :

- **Le ton et la structure des 5 pages** te conviennent-ils ? Tu trouves ça assez « Customer Success » ?
- Les **composants visuels** (étape, cartes, accordéons, FAQ, vidéo) répondent bien à ton intention ?
- Y a-t-il un pattern qui manque ?
- Un endroit où tu trouves que c'est trop dense / trop léger ?

Si oui à toutes ces questions, on déroule la rédaction des 16 pages restantes sur le même modèle.

### Sur l'hébergement des vidéos

Cf. doc `media-procedure-laura.md`. On recommande l'**Option A** (conversion .mov → .mp4 + hébergement repo). Si tu vois un blocage côté volume, qualité ou délai, dis-le.

### Sur l'hébergement long terme du help center

Aujourd'hui le site V2 vit sur **GitHub Pages** (gratuit, simple, on contrôle tout). À terme, on devra décider si on reste là ou si on migre vers un help center pro (Intercom, Zendesk, HelpScout). Critères à considérer : analytics fines, search avancé, intégration CRM, équipe non-tech qui édite, multi-langues. On peut en discuter ensemble quand la V2 sera fonctionnelle — pas urgent pour le démarrage.

### Sur le bilinguisme

On démarre V2 **en français uniquement** pour avancer vite et te permettre de valider rapidement. La version anglaise sera produite dans une seconde vague, une fois que tu auras validé la version française. Tu confirmes que ce séquençage te va ?

### Sur le mobile

Le sélecteur d'ancres à droite de la page (qui te permet de sauter dans une page longue) ne tient pas naturellement sur smartphone. On propose une barre d'ancres pliable en haut du contenu sur mobile. À valider.

### Sur la durée des vidéos

Tu as écrit dans le brief que les vidéos doivent être **accélérées sur les manipulations répétitives**. On propose comme cible : **moins de 45 secondes** pour les flux UI répétitifs, **moins de 90 secondes** pour les démos riches. Tu valides ces seuils ?

### Sur le suivi d'avancement du client

Voulais-tu un système type « 3 étapes sur 12 complétées » pour le client qui parcourt l'onboarding ? Par défaut on ne l'a pas mis en place (parcours non prescriptif). À confirmer.

---

## 5. Points d'attention

- **URLs de support** : tu mentionnes des liens vers `support.ricoh360.com` dans plusieurs pages (voyants, firmware, capture, FAQ). On a mis des URLs placeholder du type `support.ricoh360.com/fr/theta-x/voyants`. **Il nous faut les vraies URLs** quand tu les auras.
- **Contenu de la section 3** (installer l'app mobile) : tu mentionnes des QR codes vers l'App Store et le Play Store. On a préparé un bloc QR mais il faut **générer les vrais QR codes** avec les vraies URLs des stores. Si tu nous donnes les URLs exactes des apps, on s'en occupe.
- **Section 6 (première capture)** : tu mentionnes des « réglages simples » (photo 360°, retardateur, support, luminosité). On a besoin que tu nous précises **quels réglages exactement** entrer dans le détail, en cohérence avec ta volonté de garder cette section légère.

---

## 6. Prochaines étapes côté équipe

| Quand | Quoi | Qui |
|-------|------|-----|
| **Cette semaine** | Tu ouvres le preview et tu nous fais tes premiers retours sur les 5 pages témoins | Toi |
| **Cette semaine** | Tu nous donnes ton choix d'hébergement vidéo (Option A / B / autre) | Toi |
| **Semaine prochaine** | On rédige les 16 pages restantes sur le même modèle | Nous |
| **Semaine prochaine** | Tu commences à nous livrer les médias finalisés | Toi |
| **Avant le go-live** | Décision sur l'hébergement long terme du help center | Ensemble |
| **Avant le go-live** | Décision sur la version anglaise (timing, volume) | Ensemble |

---

Si quelque chose n'est pas clair dans ce document ou dans le preview, écris-nous, on se cale 30 min pour démêler.
