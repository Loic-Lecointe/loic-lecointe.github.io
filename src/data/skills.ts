import type { SkillGroup } from "@/types/skill-group";

export const skillGroups = [
  {
    id: "web",
    title: "Web et front-end",
    summary: "Interfaces responsive, accessibles, construites en composants.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
    ],
  },
  {
    id: "motion",
    title: "Animation et 3D web",
    summary:
      "Scènes WebGL et animations au scroll, sans sacrifier la performance.",
    technologies: ["Three.js", "GSAP"],
  },
  {
    id: "backend",
    title: "Back-end et validation",
    summary: "Logique métier, API et validation des données.",
    technologies: ["C# / .NET", "Spring", "JEE", "Node.js", "Zod"],
  },
  {
    id: "desktop",
    title: "Logiciel métier",
    summary:
      "Applications desktop et interfaces opérateur en contexte industriel.",
    technologies: [
      "C#",
      "WPF",
      "XAML",
      "MVVM",
      "WinCC Unified",
      "Python",
      "Java",
    ],
  },
  {
    id: "data",
    title: "Bases de données",
    summary: "Modélisation relationnelle et documentaire.",
    technologies: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    id: "tooling",
    title: "Outils et méthode",
    summary: "Versionnement, conteneurs et travail en équipe Agile.",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Agile / Scrum",
      "Jira",
      "Notion",
    ],
  },
] satisfies readonly SkillGroup[];
