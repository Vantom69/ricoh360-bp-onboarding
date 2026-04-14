# Task : V1 Knowledge Base Business Pack Series

## Statut : DONE

## Lien

**Site en ligne** : https://vantom69.github.io/ricoh360-bp-onboarding/
**Repo GitHub** : https://github.com/Vantom69/ricoh360-bp-onboarding

## Description

Premiere version de la knowledge base en ligne pour les Business Pack Series. Le site regroupe l'ensemble de la documentation client, structuree par parcours utilisateur, en anglais et en francais.

## Ce qui a ete fait

**54 articles** (27 EN + 27 FR) organises en 6 sections :

| Section | Contenu | Articles |
|---------|---------|----------|
| **Demarrage** | Du deballage au premier panorama partage | 6 |
| **Utilisation quotidienne** | Capture, albums, visionneuse, IA, partage | 7 |
| **Fonctionnalites Premium** | Projets, gestion d'equipe, flotte camera | 3 |
| **Cas d'usage** | Documentation de site, suivi chantier, inspection | 3 |
| **Depannage** | FAQ, problemes camera, connectivite, limitations | 4 |
| **Reference** | Matrice fonctionnalites, comparaison cameras, glossaire, videos | 4 |

**Fonctionnalites du site :**
- Bilingue anglais / francais avec switch dans la navigation
- Recherche integree sur tout le contenu
- Screenshots app mobile et web integres (19 images)
- Liens vers le Help Center RICOH360 et les videos MasterClass
- Navigation par section avec sidebar et table des matieres par page
- Theme aux couleurs RICOH360 (#3532CA)
- Non indexe par les moteurs de recherche (robots.txt + meta noindex)
- Deploiement automatique a chaque push sur main

**Stack technique :** VitePress (site statique) / GitHub Pages / GitHub Actions CI/CD

## Ce qui reste a faire (V2+)

- Relecture des traductions FR par l'equipe
- Code d'acces pour les comptes pilotes (password-gate)
- Navigation guidee par role (prospect / pilote / client / manager)
- Analytics pour comprendre quels contenus sont consultes
- Section interne (reception materiel, setup pilote)
- Logo RICOH360 dans la navigation (placeholder actuel)

## Comment l'utiliser

Partager le lien directement a un client ou prospect :
- EN : https://vantom69.github.io/ricoh360-bp-onboarding/en/
- FR : https://vantom69.github.io/ricoh360-bp-onboarding/fr/

Pour modifier le contenu : editer les fichiers markdown dans `docs/en/` ou `docs/fr/`, push sur main, le site se met a jour automatiquement.
