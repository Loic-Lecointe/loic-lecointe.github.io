# Portfolio de Loïc Lecointe

Refonte du portfolio professionnel de Loïc Lecointe, développeur full-stack et développeur R&D.

## Objectifs

- présenter mon expérience professionnelle et mes projets ;
- démontrer mes compétences en développement full-stack ;
- publier des études de cas techniques détaillées ;
- proposer une expérience rapide, accessible et responsive ;
- appliquer un niveau de qualité comparable à celui d’un projet professionnel.

## Stack technique actuelle

- Next.js avec App Router ;
- React ;
- TypeScript en mode strict ;
- Tailwind CSS ;
- shadcn/ui avec Base UI ;
- next-themes ;
- GitHub Actions ;
- Vercel.

Les tests unitaires, les tests d’accessibilité et les tests E2E seront ajoutés dans les prochains lots avec Vitest, Testing Library et Playwright.

## Déploiement

La nouvelle version est déployée sur Vercel :

```text
https://loic-lecointe-portfolio.vercel.app
```

La branche `main` correspond à l’environnement de production.

Les branches de travail et les pull requests génèrent automatiquement des déploiements de prévisualisation.

L’ancienne version reste temporairement publiée depuis la branche `gh-pages`.

## Prérequis

- Node.js 24 LTS recommandé ;
- Node.js 22.18 ou plus récent temporairement compatible ;
- npm 11.

La version de Node.js utilisée par la CI est indiquée dans le fichier `.nvmrc`.

## Installation

Installer les dépendances à partir du fichier de verrouillage :

```bash
npm ci
```

## Développement

Démarrer le serveur de développement :

```bash
npm run dev
```

L’application est ensuite accessible à l’adresse suivante :

```text
http://localhost:3000
```

## Contrôles de qualité

Exécuter les contrôles individuellement :

```bash
npm run format:check
npm run lint
npm run typecheck
npm run audit:prod
npm run build
```

Exécuter l’ensemble des contrôles bloquants :

```bash
npm run verify
```

L’audit incluant les outils de développement peut être exécuté séparément :

```bash
npm run audit:all
```

Les alertes temporaires concernant les outils ESLint sont documentées dans :

```text
docs/decisions/0002-audit-dependances-developpement.md
```

## Scripts disponibles

| Commande               | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Démarre le serveur de développement             |
| `npm run build`        | Génère le build de production                   |
| `npm run start`        | Démarre le build de production                  |
| `npm run format`       | Formate les fichiers avec Prettier              |
| `npm run format:check` | Vérifie le formatage sans modifier les fichiers |
| `npm run lint`         | Analyse le code avec ESLint                     |
| `npm run typegen`      | Génère les types de routes Next.js              |
| `npm run typecheck`    | Vérifie les types TypeScript                    |
| `npm run audit:prod`   | Audite les dépendances de production            |
| `npm run audit:all`    | Audite toutes les dépendances                   |
| `npm run verify`       | Exécute les contrôles bloquants du projet       |

## Intégration continue

La CI GitHub exécute les contrôles suivants sur les pull requests et sur la branche `main` :

- formatage ;
- lint ;
- vérification TypeScript ;
- audit des dépendances de production ;
- build de production.

Une pull request ne peut pas être fusionnée si un contrôle obligatoire échoue.

## Historique de l’ancienne version

L’ancien portfolio reste conservé dans Git :

- branche d’archive : `archive/portfolio-v1` ;
- tag de référence : `portfolio-v1-final` ;
- branche de publication historique : `gh-pages`.

## Documentation technique

Les principales décisions d’architecture sont documentées dans :

```text
docs/decisions/
```

L’inventaire des anciennes routes à préserver pendant la migration se trouve dans :

```text
docs/migration/anciennes-routes.md
```

## État du projet

La fondation Next.js, le design system, les thèmes clair et sombre, la CI et le premier déploiement Vercel sont opérationnels.

L’interface actuellement visible est encore une page provisoire. Les contenus définitifs, les pages de projets et les tests automatisés seront ajoutés progressivement.
