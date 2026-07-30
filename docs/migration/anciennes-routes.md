# Inventaire des anciennes routes

Ce document répertorie les URLs publiques de l’ancien portfolio qui devront être prises en compte pendant la migration.

## Page d’accueil et ancres

| Ancienne route | Destination envisagée | Statut |
|---|---|---|
| `/` | `/` | À conserver |
| `/#home` | `/#accueil` | À confirmer |
| `/#about` | `/#a-propos` | À confirmer |
| `/#training` | `/#formation` | À confirmer |
| `/#skills` | `/#competences` | À confirmer |
| `/#Experiences` | `/#experience` | À confirmer |
| `/#Projects` | `/projets` | À confirmer |
| `/#contact` | `/#contact` | À conserver |

## Anciennes pages de projet

| Ancienne route | Destination envisagée | Statut |
|---|---|---|
| `/pages/CV_Numérique.html` | Projet ou archive du portfolio initial | À décider |
| `/pages/MakerChallenge.html` | Projet ou archive Maker Challenge | À décider |
| `/pages/CookingPapa.html` | `/projets/cooking-papa` | Prévu |
| `/pages/Covoiturage.html` | `/projets/archives/site-covoiturage` | Prévu |
| `/pages/Rockn_Code.html` | `/projets/archives/rockn-code` | Prévu |

## Liens externes historiques

Les projets Pizzaland et Mando.io utilisaient directement des liens vers des dépôts externes et ne possédaient pas de page HTML locale dédiée.

Leur intégration dans la nouvelle structure sera décidée pendant le lot consacré aux contenus des projets.

## Stratégie provisoire

L’ancien portfolio reste disponible sur la branche `gh-pages`.

Lorsque la nouvelle version sera mise en production sur Vercel, les anciennes pages devront être remplacées par des redirections ou des pages de compatibilité pointant vers leurs nouvelles destinations.