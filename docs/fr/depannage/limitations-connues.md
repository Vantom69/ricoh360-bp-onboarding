---
title: Limitations connues
description: Limitations actuelles de la plateforme RICOH360 avec des solutions de contournement pratiques pour chaque contrainte, couvrant le partage, les projets, les annotations, Simple Capture, l'administration et plus encore.
outline: [2, 3]
---

# Limitations connues - Reference plateforme

> Ce document liste les limitations actuelles de la plateforme RICOH360. Ce n'est pas un guide de depannage. C'est une reference transparente pour que vous sachiez ce que la plateforme peut et ne peut pas faire aujourd'hui. Pour chaque limitation, nous decrivons ce que vous pouvez faire a la place. La plateforme evolue activement et des fonctionnalites sont regulierement ajoutees.

---

## Partage

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| Le partage fonctionne par media individuel uniquement. Vous ne pouvez pas partager un album ou un projet entier via un seul lien | Partagez les panoramas individuels par lien. Pour un acces elargi, invitez les collaborateurs comme membres de l'equipe (chaque licence inclut 10 places) |
| Les annotations ne sont pas visibles sur les liens partages. Les destinataires externes voient le panorama 360 sans marqueurs ni notes | Exportez ou faites des captures d'ecran des vues annotees avant de partager. Utilisez les annotations pour la documentation interne et envoyez les liens 360 simples en externe |
| Les liens partages n'ont pas de protection par mot de passe | Les liens partages sont publics mais non indexes (non references par les moteurs de recherche). Pour du contenu sensible, utilisez le systeme d'invitation comme membre d'equipe plutot que les liens publics |
| Les liens partages n'ont pas de date d'expiration. Une fois cree, un lien reste actif | Si vous devez revoquer l'acces, vous pouvez remettre le media en prive, ce qui desactive le lien |
| Les vues projet (plans avec marqueurs) ne peuvent pas etre partagees en externe | Partagez les panoramas individuels du projet. Pour la navigation spatiale complete, invitez le destinataire comme membre de l'equipe |

---

## Projets et plans

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| Les Projets necessitent une image de plan pour etre utiles. Sans plan, la vue projet est vide | Si vous n'avez pas de plan, utilisez les albums pour organiser vos captures. Les albums fonctionnent bien pour la plupart des flux de travail sans positionnement spatial |
| Les marqueurs sur les plans doivent etre positionnes manuellement. Il n'y a pas de placement automatique base sur le GPS | Positionnez les marqueurs a la main sur le plan apres avoir transfere vos captures. Cela prend quelques secondes par marqueur |
| Il n'y a pas de chronologie ni de navigation par date integree dans les projets | Utilisez la fonctionnalite de comparaison cote a cote pour comparer les captures de dates differentes. Selectionnez les panoramas manuellement depuis la bande de miniatures |
| Les albums et les projets sont des concepts separes. Les albums assignes a un projet ne sont pas visibles dans la vue plan du projet | Utilisez les albums pour le regroupement organisationnel et les projets pour la cartographie spatiale. Naviguez entre les deux selon vos besoins dans l'application web |

---

## Annotations

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| Les annotations fonctionnent sur les panoramas uniquement, pas sur les videos 360 | Capturez un panorama fixe aux moments cles si vous devez annoter une scene specifique |
| Les annotations sont des marqueurs avec un titre et une description. Il n'y a pas de fil de commentaires ni de fonctionnalite de discussion | Utilisez les annotations pour documenter les observations. Pour les discussions, referencez l'annotation dans votre canal de communication habituel |
| Les annotations ne sont pas visibles par les destinataires externes lors du partage via un lien | Les annotations sont concues pour la documentation interne d'equipe. Partagez le lien du panorama accompagne d'un resume ecrit si un contexte externe est necessaire |
| Pas de categorisation ni de tagage des annotations (ex. : defaut, information, alerte) | Utilisez une convention de nommage dans les titres d'annotation pour indiquer le type, comme "[DEFAUT]" ou "[INFO]" |

---

## Simple Capture

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| Simple Capture est disponible uniquement sur la THETA X. L'ecran tactile est requis pour le flux de capture guidee | Sur THETA A1, utilisez l'application mobile ou le bouton physique de declenchement pour la capture. Le transfert automatique vers le cloud fonctionne sur tous les modeles |
| Concu pour environ 10 a 15 albums. L'interface de l'ecran de la camera n'est pas faite pour defiler dans de longues listes | Si vous avez de nombreux sites ou types d'intervention, regroupez-les dans moins d'albums de haut niveau plutot qu'un album par emplacement. Votre responsable de compte peut aider a planifier la structure des albums pendant l'onboarding |
| Chaque camera a 1 preset de capture (mode photo, resolution, HDR). Il est configure lors de l'installation initiale et ne peut pas etre modifie par l'utilisateur | Si vous avez besoin de reglages de capture differents, contactez votre responsable de compte pour organiser une mise a jour du kitting |
| Simple Capture fonctionne en mode photo ou video, pas les deux simultanement | Choisissez le mode qui correspond le mieux a votre flux de travail principal. Si vous avez besoin des deux, capturez les photos en mode Simple Capture et basculez vers l'application mobile pour la video quand necessaire |
| L'installation initiale necessite une connexion USB (kitting). Elle ne peut pas se faire a distance | Le kitting est gere par Ricoh pendant l'onboarding. Le remplacement ou la reconfiguration necessite de renvoyer la camera ou de planifier une session avec votre responsable de compte |

---

## Administration

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| Deux roles utilisateur : administrateur et membre. Pas de roles personnalises, pas d'acces en lecture seule | Les administrateurs peuvent gerer les cameras, les utilisateurs et les parametres. Les membres peuvent capturer, visualiser et organiser. N'attribuez le role administrateur qu'aux responsables d'equipe qui ont besoin d'un acces de gestion |
| Pas d'integration Single Sign-On (SSO) | Les utilisateurs se connectent avec des identifiants RICOH360 individuels. Votre equipe IT n'a pas besoin de gerer d'integration |
| Pas de journal d'activite ni de piste d'audit | Il n'y a pas de suivi integre de qui a transfere, partage ou supprime du contenu. Si la tracabilite est critique pour votre flux de travail, utilisez des conventions de nommage d'album pour associer les captures aux operateurs |
| Pas de sous-equipes ou de groupes au sein d'une equipe | Tous les membres de l'equipe partagent le meme espace de travail. Utilisez des conventions de nommage d'album ou des licences separees pour segmenter par departement ou emplacement |

---

## Camera et connectivite

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| L'application web necessite une connexion internet. Il n'y a pas de mode hors ligne pour la visualisation ou la gestion du contenu | Toutes les captures sont stockees localement sur la camera jusqu'a ce que le WiFi soit disponible. Vous pouvez revoir les captures sur l'ecran tactile de la THETA X ou via l'application mobile sur site |
| Le THETA Twin (profil cloud de la camera) necessite une connectivite internet pour mettre a jour son statut | Les donnees du Twin se rafraichissent chaque fois que la camera se connecte au WiFi. Si la camera a ete hors ligne, la console d'administration affiche le dernier etat connu |
| Les cameras ne peuvent pas se connecter aux reseaux WiFi utilisant des portails captifs (pages de connexion) | Utilisez un partage de connexion mobile ou demandez a votre equipe IT de configurer un reseau WPA2 simple pour la camera |

---

## Video

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| La duree d'enregistrement video varie selon le modele. La THETA X enregistre environ 25 minutes en continu. La THETA A1 supporte jusqu'a 120 minutes | Pour les sessions d'enregistrement longues, la THETA A1 est l'option recommandee. Pour la THETA X, planifiez la capture en segments plus courts |
| Pas d'annotations, d'outils de dessin, de floutage des visages ou de traitement IA sur la video 360. La lecture video dans le visionneur est en consultation seule | Capturez un panorama fixe aux moments cles pendant une session video si vous devez annoter ou traiter des images specifiques |
| La comparaison cote a cote n'est pas disponible pour la video | Comparez plutot des panoramas fixes pris au meme emplacement a des dates differentes |

---

## Mesures et 3D

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| La plateforme RICOH360 n'inclut pas d'outils de mesure. Vous ne pouvez pas mesurer des distances ou des surfaces dans un panorama 360 | Pour les besoins de mesure, RICOH360 s'integre avec des partenaires specialises via la marketplace App Connection. Demandez a votre responsable de compte les options disponibles |
| Pas de reconstruction 3D ni de generation de nuage de points a partir des captures 360 | RICOH360 fournit l'infrastructure de capture et de stockage. Les flux 3D sont geres par des plateformes partenaires (comme les outils BIM ou de jumeaux numeriques) qui se connectent a RICOH360 via API |

---

## Autres limitations de la plateforme

| Limitation | Ce que vous pouvez faire a la place |
|------------|-------------------------------------|
| Pas de recherche globale dans les photos, albums ou projets | Naviguez par structure d'album ou de projet. Des conventions de nommage coherentes facilitent la recherche rapide de contenu |
| Les tags IA generes sur les photos ne sont pas modifiables | La plateforme tague automatiquement les scenes (interieur, exterieur, type de piece). Ils servent de reference et ne peuvent pas etre personnalises |
| La taille maximale de transfert via l'application web est de 50 Mo par fichier | La plupart des panoramas 360 sont bien en dessous de cette limite (generalement 20 a 30 Mo). Pour les fichiers plus volumineux, le transfert camera-cloud gere directement l'envoi |
| La marketplace App Connection est encore en developpement | De nouvelles integrations partenaires sont ajoutees progressivement. Contactez votre responsable de compte pour discuter de vos besoins specifiques d'integration |

---

## Pour aller plus loin

- [FAQ](/fr/depannage/faq)
- [Matrice des fonctionnalites](/fr/reference/matrice-fonctionnalites)
- [Comparaison des cameras](/fr/reference/comparaison-cameras)
- [Centre d'aide RICOH360](https://support.ricoh360.com/fr)
