import type { Project } from "@/types/project";

export const featuredProjects = [
  {
    slug: "suivi-qualite-rivets",
    title: "Suivi qualité des rivets en temps réel",
    context: "Professionnel",
    category: "Logiciel industriel",
    summary:
      "Une application desktop qui enregistre et contrôle la qualité de chaque rivet posé en production, avec gestion des comptes utilisateurs et des licences.",
    challenge:
      "Afficher des mesures en temps réel sans bloquer l’interface, et garder un historique exploitable par le service qualité.",
    outcome:
      "Réalisée pendant mon alternance, de l’analyse du besoin à la mise en service.",
    technologies: ["C# / .NET", "WPF", "MVVM", "SQL"],
  },
  {
    slug: "site-vitrine-3d",
    title: "Site vitrine animé en 3D",
    context: "Professionnel",
    category: "Web et animation",
    summary:
      "Un site de présentation en Next.js dont les animations 3D et les transitions suivent le scroll.",
    challenge:
      "Rendre des scènes WebGL fluides sur mobile tout en gardant un bon référencement.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Three.js", "GSAP"],
  },
  {
    slug: "rimcolony-manager",
    title: "RimColony Manager",
    context: "Personnel",
    category: "Application full stack",
    summary:
      "Une application pour gérer les colons d’une partie de RimWorld : compétences, priorités de travail et affectations.",
    challenge:
      "Modéliser des données très liées entre elles et garder une interface rapide à utiliser.",
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
    title: "Palettisation par apprentissage par renforcement",
    context: "Personnel",
    category: "Intelligence artificielle",
    summary:
      "Un agent entraîné à placer des colis sur une palette de façon compacte et stable.",
    challenge:
      "Concevoir l’environnement, la fonction de récompense et les métriques de qualité du placement.",
    technologies: ["Python", "Gymnasium", "Stable-Baselines3", "PPO"],
  },
] satisfies readonly Project[];
