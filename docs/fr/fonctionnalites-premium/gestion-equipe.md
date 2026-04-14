---
title: Gestion d'equipe
description: La console d'administration RICOH360 vous permet d'inviter des membres, d'attribuer des roles, de surveiller l'utilisation du stockage et de gerer les licences.
outline: [2, 3]
---

# Gestion d'equipe

> La console d'administration RICOH360 vous permet d'inviter des membres, d'attribuer des roles, de surveiller l'utilisation du stockage et de gerer les licences. Ce guide couvre tout ce dont un administrateur a besoin pour configurer et maintenir son equipe.

---

## 1. Comment fonctionnent les equipes dans RICOH360

Chaque Business Pack RICOH360 est fourni avec un espace de travail d'equipe. Une equipe est un environnement partage ou tous les membres peuvent acceder a la meme galerie de photos 360, albums, projets et cameras. Tout ce qui est capture par n'importe quel membre de l'equipe ou toute camera enregistree est integre dans cet espace de travail partage.

Chaque licence Business Pack inclut jusqu'a 10 comptes utilisateurs. Si votre organisation a besoin de plus de places, des licences supplementaires fournissent plus d'utilisateurs (ainsi que plus de stockage et de cameras).

---

## 2. Roles : Admin vs. Membre

RICOH360 utilise deux roles. Il n'y a pas de roles personnalises ni de niveaux de permissions intermediaires.

| Capacite | Admin | Membre |
|----------|:-----:|:------:|
| Voir toutes les photos, albums et projets | Oui | Oui |
| Capturer et telecharger des panoramas | Oui | Oui |
| Creer et modifier des albums | Oui | Oui |
| Creer et modifier des projets | Oui | Oui |
| Utiliser les annotations et les outils de dessin | Oui | Oui |
| Partager des panoramas individuels via un lien | Oui | Oui |
| Inviter de nouveaux membres | Oui | Non |
| Retirer des membres | Oui | Non |
| Gerer les enregistrements de cameras (Twins) | Oui | Non |
| Assigner des albums aux cameras | Oui | Non |
| Voir l'utilisation des licences et du stockage | Oui | Non |
| Acceder a la console d'administration | Oui | Non |

**En resume :** Les membres peuvent faire tout ce qui concerne le contenu (capturer, organiser, visualiser, annoter, partager). Les admins peuvent faire tout cela, plus gerer les personnes, les cameras et les parametres du compte.

![Liste des membres affichant les roles Admin, Membre et En attente](/images/webapp/admin_members.png)

---

## 3. Inviter des membres

### Etape par etape

1. Connectez-vous a l'application web RICOH360 avec un compte Admin.
2. Ouvrez la **Console d'administration** depuis le menu de gauche.
3. Allez dans la section **Gestion d'equipe**.
4. Cliquez sur **Inviter un membre**.
5. Saisissez l'adresse email de la personne que vous souhaitez inviter.
6. Selectionnez le role : **Admin** ou **Membre**.
7. Cliquez sur **Envoyer l'invitation**.

La personne invitee recoit un email avec un lien pour rejoindre votre equipe. Elle devra creer un compte RICOH360 (ou se connecter avec un compte existant) et accepter l'invitation.

### Ce qui se passe apres l'invitation

- Le nouveau membre obtient immediatement acces a l'ensemble de l'espace de travail de l'equipe : toutes les photos, albums, projets et cameras partagees.
- Il n'est pas possible de restreindre l'acces d'un membre a des albums ou projets specifiques. L'appartenance a l'equipe est tout ou rien au sein de l'espace de travail.
- L'invitation est decompte de vos places de licence disponibles.

### Conseil pratique

- Envoyez les invitations aux adresses email professionnelles que les membres de l'equipe consultent regulierement.
- Communiquez en interne avant d'envoyer l'invitation pour que la personne sache qu'elle doit s'y attendre et l'accepter.
- Si une invitation n'est pas acceptee, elle peut etre renvoyee depuis la console d'administration.

---

## 4. Surveiller le stockage

Chaque licence Business Pack inclut 100 Go de stockage cloud. Le stockage est mutualise au niveau de l'equipe, ce qui signifie que tous les membres partagent le meme quota de stockage.

![Tableau de bord d'administration avec compteurs d'utilisation et statistiques de telechargement](/images/webapp/admin_dashboard.png)

### Verifier l'utilisation du stockage

1. Ouvrez la **Console d'administration**.
2. L'apercu du stockage affiche la capacite totale et l'utilisation actuelle.

### Quand le stockage devient insuffisant

Si votre equipe approche de la limite de 100 Go, vous avez deux options :

1. **Ajouter une licence supplementaire** : Chaque licence Business Pack supplementaire ajoute 100 Go a votre pool d'equipe, ainsi que plus de places utilisateurs et une camera supplementaire.
2. **Nettoyer les donnees existantes** : Passez en revue votre galerie et vos albums pour reperer les captures obsoletes ou en double. Supprimer les medias dont vous n'avez plus besoin libere de l'espace immediatement.

### Conseil de planification du stockage

Un seul panorama 360 capture en resolution 11K fait environ 20 a 30 Mo. Avec 100 Go par licence, cela vous donne environ 3 000 a 5 000 panoramas par licence avant de devoir gerer le stockage. Pour la plupart des equipes effectuant des visites de site hebdomadaires, une licence offre plusieurs mois de captures avant qu'un nettoyage ne devienne necessaire.

---

## 5. Retirer des membres

### Etape par etape

1. Ouvrez la **Console d'administration**.
2. Allez dans **Gestion d'equipe**.
3. Trouvez le membre que vous souhaitez retirer.
4. Cliquez sur **Retirer** (ou l'action equivalente).
5. Confirmez le retrait.

### Ce qui se passe quand vous retirez un membre

- La personne perd immediatement l'acces a l'espace de travail de l'equipe.
- Le contenu qu'elle a telecharge reste dans la galerie de l'equipe. Retirer un membre ne supprime pas ses contributions.
- La place de licence qu'elle occupait redevient disponible pour une nouvelle invitation.

---

## 6. Gerer les licences

La console d'administration affiche l'etat actuel de vos licences :

| Information | Ce qu'elle affiche |
|------------|-------------------|
| **Places utilisees / disponibles** | Combien de vos emplacements utilisateurs sont occupes |
| **Formule d'abonnement** | Votre type de Business Pack actuel (Core ou Type S) |
| **Capacite de stockage** | Stockage total sur l'ensemble de vos licences |

Si vous devez ajuster le nombre de licences (ajouter ou reduire), contactez votre responsable de compte RICOH360. Les modifications de licence sont gerees via votre contrat Business Pack.

---

## 7. Limitations

| Limitation | Ce que cela signifie en pratique |
|-----------|----------------------------------|
| **Deux roles uniquement** | Admin et Membre. Il n'y a pas de roles personnalises, pas de role "consultation seule" et pas de permissions specifiques par projet. Tous les membres de l'equipe voient tout. |
| **Pas de journal d'activite** | Il n'y a pas de piste d'audit montrant qui a telecharge, supprime ou partage un contenu specifique. Si la tracabilite est une exigence pour votre organisation, sachez que cela n'est pas disponible aujourd'hui. |
| **Pas de permissions granulaires** | Vous ne pouvez pas restreindre l'acces d'un membre a des albums, projets ou cameras specifiques. L'appartenance a l'equipe donne un acces complet a l'espace de travail. |
| **Pas de SSO (Single Sign-On)** | L'authentification utilise des comptes RICOH360. Il n'y a pas d'integration avec les fournisseurs d'identite d'entreprise (Azure AD, Okta, Google Workspace, etc.). |
| **Pas de sous-equipes ni de groupes** | Vous ne pouvez pas creer de departements ou de groupes au sein d'une equipe. Tous les membres appartiennent a la meme structure d'equipe plate. |

---

## 8. Conseils pour les administrateurs d'equipe

**Commencez avec un petit groupe d'admins.** Attribuez le role Admin uniquement aux personnes qui ont besoin de gerer les cameras et les membres de l'equipe. Pour tous les autres, le role Membre fournit un acces complet a toutes les fonctionnalites de contenu.

**Suivez vos places.** Avec 10 places par licence, planifiez vos invitations. Si vous deployer aupres d'une grande equipe, vous aurez peut-etre besoin de plusieurs licences. Chaque licence supplementaire ajoute a la fois des places et du stockage.

**Etablissez des conventions de nommage tot.** Puisque tous les membres partagent le meme espace de travail, convenez de conventions de nommage pour les albums et les projets avant que l'equipe ne grandisse. Des noms coherents evitent la confusion a mesure que votre bibliotheque de panoramas augmente.

**Briefez les nouveaux membres.** Lorsque vous invitez quelqu'un, envoyez-lui un message rapide avec les bases : comment accepter l'invitation, ou trouver l'application mobile et les conventions de nommage de votre equipe. Un briefing de cinq minutes fait gagner des heures de confusion par la suite.

---

## 9. Et ensuite

- **Gestion de la flotte de cameras** : Si vous gerez plusieurs cameras THETA au sein de votre equipe, decouvrez comment les surveiller et les configurer a distance depuis la console d'administration. Voir [Gestion de la flotte de cameras](/fr/fonctionnalites-premium/gestion-flotte-camera).

- **Projets et plans d'etage** : Une fois votre equipe configuree, organisez vos captures de maniere spatiale avec les projets et plans d'etage. Voir [Projets et plans d'etage](/fr/fonctionnalites-premium/projets-et-plans).

- **Guide de demarrage rapide** : Partagez-le avec les nouveaux membres de l'equipe pour les rendre operationnels rapidement. Voir [Guide de demarrage rapide](/fr/demarrage/guide-demarrage-rapide).

> **Pour aller plus loin**
> - [Console d'administration (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-admin-console)
> - [BP Type S - Gestion des utilisateurs (Helpcenter)](https://support.ricoh360.com/fr/tags/bp-type-s-user-management)
> - [FAQ Business Pack (Helpcenter)](https://support.ricoh360.com/fr/faqs/business-package)
