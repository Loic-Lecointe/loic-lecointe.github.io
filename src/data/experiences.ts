import type { Experience } from "@/types/experience";

export const professionalExperiences = [
  {
    id: "bflex-cdi",
    period: "Août 2024 — sept. 2026",
    duration: "2 ans",
    role: "Développeur R&D",
    contract: "CDI",
    company: "BFlex Techno",
    summary:
      "Développement des projets web de l’entreprise en Next.js, en parallèle de l’évolution de ses logiciels industriels et de ses interfaces opérateur.",
    responsibilities: [
      "Développement d’une application web en Next.js.",
      "Site vitrine en Next.js, React et Tailwind CSS, animé avec Three.js et GSAP.",
      "Évolution et maintenance d’une application WPF en architecture MVVM.",
      "Gestion de plusieurs dépôts GitHub et organisation Agile avec Jira.",
      "Création d’objets WinCC Unified pour des interfaces opérateur (IHM).",
    ],
    environment: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "C# / WPF",
      "WinCC Unified",
      "Jira",
    ],
  },
  {
    id: "bflex-alternance",
    period: "Sept. 2023 — août 2024",
    duration: "1 an",
    role: "Développeur R&D",
    contract: "Alternance",
    company: "BFlex Techno",
    summary:
      "Conception de bout en bout d’une application de suivi qualité utilisée en production.",
    responsibilities: [
      "Application WPF (MVVM) connectée à une base de données pour suivre la qualité des rivets en temps réel.",
      "Gestion des licences et des comptes utilisateurs.",
      "Référent GitHub : règles, structure des dépôts et support à l’équipe.",
      "Veille technologique WinCC Unified et étude de migration.",
    ],
    environment: ["C# / .NET", "WPF", "MVVM", "SQL", "GitHub", "WinCC Unified"],
  },
  {
    id: "baron-stage",
    period: "Avr. — juin 2023",
    duration: "3 mois",
    role: "Développeur R&D",
    contract: "Stage",
    company: "Baron Groupe",
    summary:
      "Premier poste en équipe R&D : analyse, conception et réalisation de solutions logicielles.",
    responsibilities: [
      "Analyse, conception et réalisation de solutions informatiques.",
      "Tests, validation et maintenance des applications.",
      "Support technique aux développeurs.",
    ],
    environment: ["C#", ".NET", "WPF", "XAML", "Python", "Java"],
  },
] satisfies readonly Experience[];
