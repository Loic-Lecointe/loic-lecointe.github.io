import type { SkillGroup } from "@/types/skill-group";

export const skillGroups = [
  {
    id: "interfaces-web",
    title: "Interfaces web",
    summary:
      "Conception d’interfaces responsive, accessibles et structurées autour de composants réutilisables.",
    applications: [
      "Transformer une maquette ou un besoin fonctionnel en interface maintenable.",
      "Organiser les composants et les données afin de limiter les duplications.",
      "Adapter l’expérience aux usages clavier, mobile et desktop.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    id: "backend-echanges",
    title: "Back-end et échanges",
    summary:
      "Développement de logique applicative et de mécanismes de communication entre les différents composants d’un système.",
    applications: [
      "Concevoir des API adaptées aux besoins d’une application.",
      "Structurer la logique métier indépendamment de l’interface.",
      "Mettre en place des échanges en temps réel lorsque le contexte le nécessite.",
    ],
    technologies: ["Node.js", "API REST", "WebSockets", "TypeScript"],
  },
  {
    id: "donnees-persistance",
    title: "Données et persistance",
    summary:
      "Modélisation, stockage et interrogation de données en conservant leur cohérence et leur exploitabilité.",
    applications: [
      "Traduire les objets métier en modèles de données cohérents.",
      "Écrire et optimiser des requêtes adaptées aux usages de l’application.",
      "Faire évoluer les schémas sans compromettre les données existantes.",
    ],
    technologies: ["SQL", "PostgreSQL", "Prisma", "Modélisation relationnelle"],
  },
  {
    id: "logiciels-metier",
    title: "Logiciels métier",
    summary:
      "Conception et évolution d’applications répondant à des processus professionnels et industriels concrets.",
    applications: [
      "Analyser un besoin métier et identifier les contraintes fonctionnelles.",
      "Faire évoluer une application existante sans dégrader sa stabilité.",
      "Construire des interfaces desktop adaptées à des usages opérationnels.",
    ],
    technologies: [
      "C#",
      "WPF",
      "SQL",
      "Applications desktop",
      "Analyse fonctionnelle",
    ],
  },
  {
    id: "qualite-livraison",
    title: "Qualité et livraison",
    summary:
      "Mise en place de contrôles automatisés et de pratiques permettant de livrer des évolutions vérifiables.",
    applications: [
      "Automatiser le formatage, le lint, le typage, les audits et les builds.",
      "Écrire des tests adaptés aux composants, aux parcours et à la logique métier.",
      "Utiliser des branches, des revues et des déploiements de prévisualisation.",
    ],
    technologies: [
      "Vitest",
      "Playwright",
      "Git",
      "GitHub Actions",
      "GitLab CI/CD",
      "Docker",
    ],
  },
  {
    id: "intelligence-artificielle",
    title: "IA et optimisation",
    summary:
      "Expérimentation autour de problèmes d’optimisation nécessitant la conception d’environnements, de récompenses et de métriques.",
    applications: [
      "Formaliser un problème afin qu’il puisse être traité par un agent.",
      "Concevoir une fonction de récompense cohérente avec l’objectif recherché.",
      "Comparer les résultats à partir de métriques reproductibles.",
    ],
    technologies: ["Python", "Gymnasium", "Stable-Baselines3", "PPO"],
  },
] satisfies readonly SkillGroup[];
