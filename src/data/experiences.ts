import type { Experience } from "@/types/experience";

export const professionalExperiences = [
  {
    id: "bflex-cdi",
    period: "Août 2024 — aujourd’hui",
    role: "Développeur R&D (CDI)",
    company: "BFlex Techno · Baron Groupe",
    summary:
      "Conception d’applications web et d’outils industriels, du site vitrine animé à l’interface opérateur, en passant par la maintenance de logiciels existants.",
    responsibilities: [
      "Réaliser une application web en Next.js.",
      "Créer un site vitrine en Next.js, React et Tailwind CSS, avec des animations Three.js et GSAP.",
      "Faire évoluer et maintenir une application WPF en architecture MVVM.",
      "Gérer plusieurs dépôts GitHub et organiser le projet en méthode Agile avec Jira.",
      "Réaliser des objets WinCC Unified pour des IHM.",
    ],
    environment: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "C# / WPF",
      "WinCC Unified",
      "GitHub",
      "Jira",
    ],
    confidential: true,
  },
  {
    id: "bflex-alternance",
    period: "Sept. 2023 — août 2024",
    role: "Développeur R&D (alternance)",
    company: "BFlex Techno · Baron Groupe",
    summary:
      "Une année en alternance pendant laquelle j’ai conçu de bout en bout une application de suivi qualité utilisée en environnement industriel.",
    responsibilities: [
      "Réaliser une application WPF en architecture MVVM, connectée à une base de données, pour suivre la qualité des rivets en temps réel.",
      "Mettre en place la gestion des licences et des comptes utilisateurs.",
      "Devenir référent GitHub : règles, structure des dépôts et support aux développeurs.",
      "Assurer la veille technologique sur WinCC Unified et étudier la migration.",
    ],
    environment: ["C# / .NET", "WPF", "MVVM", "SQL", "GitHub", "WinCC Unified"],
    confidential: true,
  },
  {
    id: "baron-stage",
    period: "Avril — juin 2023",
    role: "Stagiaire développeur R&D",
    company: "Baron Groupe",
    summary:
      "Premier contact avec le développement en entreprise : analyse, conception et réalisation de solutions informatiques au sein de l’équipe R&D.",
    responsibilities: [
      "Analyser, concevoir et réaliser des solutions informatiques.",
      "Tester, valider et maintenir les applications.",
      "Apporter un support technique aux développeurs.",
    ],
    environment: ["C#", ".NET", "WPF", "XAML", "MVVM", "Python", "Java"],
  },
] satisfies readonly Experience[];
