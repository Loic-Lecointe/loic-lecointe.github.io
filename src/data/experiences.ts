import type { Experience } from "@/types/experience";

export const professionalExperiences = [
  {
    id: "bflex-rd-developer",
    period: "Depuis 2024",
    role: "Développeur R&D",
    company: "BFlex Techno · Baron Groupe",
    summary:
      "Conception et évolution de solutions logicielles répondant à des besoins métier et industriels, de l’analyse fonctionnelle jusqu’à la validation.",
    responsibilities: [
      "Analyser les besoins exprimés par les interlocuteurs métier et les traduire en solutions techniques.",
      "Concevoir et faire évoluer des interfaces ainsi que des composants applicatifs maintenables.",
      "Intervenir sur des logiciels existants tout en préservant leur stabilité et leur cohérence.",
      "Participer aux tests, aux revues et à l’amélioration continue des pratiques de développement.",
    ],
    environment: [
      "Développement applicatif",
      "Logiciels métier",
      "C# et WPF",
      "SQL",
      "GitLab",
      "CI/CD",
    ],
    confidential: true,
  },
] satisfies readonly Experience[];
