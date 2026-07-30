# ADR 0001 — Hébergement du portfolio sur Vercel

- Date : 30 juillet 2026
- Statut : accepté

## Contexte

L’ancienne version du portfolio est un site statique publié avec GitHub Pages.

La nouvelle version utilisera Next.js et devra notamment permettre :

- des déploiements de prévisualisation ;
- une publication automatisée ;
- l’utilisation éventuelle de fonctionnalités serveur ;
- l’implémentation d’un formulaire de contact sécurisé ;
- une intégration simple avec le dépôt GitHub existant.

## Décision

La nouvelle version du portfolio sera déployée sur Vercel.

Le dépôt GitHub `loic-lecointe.github.io` et son historique seront conservés.

## Conséquences positives

- utilisation complète des fonctionnalités de Next.js ;
- déploiement automatique de la branche principale ;
- création d’environnements de prévisualisation pour les pull requests ;
- possibilité d’ajouter une route serveur pour le formulaire de contact ;
- configuration de déploiement limitée.

## Contraintes

- l’URL de production initiale sera différente de `loic-lecointe.github.io` ;
- l’ancienne adresse devra rediriger vers la nouvelle ;
- les variables d’environnement devront être configurées dans Vercel ;
- le formulaire de contact nécessitera une protection contre le spam.

## Conservation de l’ancien portfolio

Jusqu’à la mise en production de la nouvelle version :

- la branche `gh-pages` continue de publier l’ancien portfolio ;
- la branche `archive/portfolio-v1` conserve son code source ;
- le tag `portfolio-v1-final` identifie sa dernière version officielle.