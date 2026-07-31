import type { Project } from "@/types/project";

export const featuredProjects = [
  {
    slug: "rimcolony-manager",
    title: "RimColony Manager",
    category: "Application web full-stack",
    summary:
      "Une application de gestion de colonies RimWorld permettant de centraliser les colons, leurs compétences et leurs priorités de travail.",
    challenge:
      "Structurer des données métier liées entre elles tout en conservant une interface utilisable et une base technique testable.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Vitest",
      "Playwright",
    ],
  },
  {
    slug: "palletisation-apprentissage-renforcement",
    title: "Optimisation de palettisation par apprentissage par renforcement",
    category: "Intelligence artificielle",
    summary:
      "Un environnement en deux dimensions entraînant un agent à placer des colis sur une palette de manière compacte et régulière.",
    challenge:
      "Concevoir l’environnement, la fonction de récompense et les métriques permettant d’évaluer la qualité des placements.",
    technologies: ["Python", "Gymnasium", "Stable-Baselines3", "PPO"],
  },
  {
    slug: "portfolio-professionnel",
    title: "Portfolio professionnel",
    category: "Architecture et qualité web",
    summary:
      "La refonte complète d’un ancien portfolio statique vers une application Next.js accessible, testable et déployée en continu.",
    challenge:
      "Faire évoluer le projet par lots vérifiables, avec des décisions documentées, des contrôles automatisés et des déploiements de prévisualisation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "Vercel",
    ],
  },
] satisfies readonly Project[];
