# ADR 0002 — Traitement des alertes de sécurité des dépendances de développement

- Date : 30 juillet 2026
- Statut : accepté temporairement

## Contexte

L’installation initiale de Next.js 16.2.12 signalait des vulnérabilités de
gravité élevée dans les dépendances de production et de développement.

Les dépendances de production concernées étaient :

- PostCSS, utilisé transitivement par Next.js ;
- Sharp, utilisé transitivement par Next.js.

L’audit complet signale également une chaîne vulnérable dans les outils ESLint :

```text
eslint-config-next
└── plugins ESLint
    └── minimatch 3
        └── brace-expansion 1
```
