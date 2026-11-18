import type { Education } from "@/types/education";

export const educationEntries = [
  {
    id: "bambu-lab-academy",
    period: "2026",
    degree: "Bambu Lab Academy — Bambu Lab H2D",
    institution: "Bambu Lab Academy",
    status: "Formation",
    summary:
      "Formation constructeur sur l’imprimante 3D Bambu Lab H2D, en prolongement de mon intérêt pour le prototypage et les outils de fabrication.",
    highlights: [
      "Prendre en main l’imprimante et son logiciel Bambu Studio.",
      "Préparer et lancer des impressions pour prototyper des pièces.",
    ],
  },
  {
    id: "but-informatique",
    period: "2021 — 2024",
    degree: "Bachelor universitaire de technologie en informatique",
    institution: "Université de Lille",
    location: "Villeneuve-d’Ascq",
    specialization:
      "Parcours A — Réalisation d’applications : conception, développement, validation",
    status: "Diplôme obtenu",
    summary:
      "Une formation professionnalisante centrée sur la conception, le développement et la validation d’applications, complétée par des projets collectifs et une alternance en développement R&D.",
    highlights: [
      "Concevoir des applications à partir de besoins fonctionnels.",
      "Développer des interfaces, des services et des traitements de données.",
      "Modéliser et interroger des bases de données relationnelles.",
      "Valider les réalisations par les tests, la documentation et le travail en équipe.",
    ],
  },
  {
    id: "baccalaureat-sti2d",
    period: "2018 — 2021",
    degree:
      "Baccalauréat sciences et technologies de l’industrie et du développement durable",
    specialization: "Option informatique",
    status: "Diplôme obtenu",
    summary:
      "Une formation technologique qui m’a permis de consolider mon intérêt pour l’informatique et d’aborder les systèmes numériques par la pratique et les projets.",
    highlights: [
      "Découvrir les bases de l’algorithmique et de la programmation.",
      "Comprendre le fonctionnement de systèmes techniques et numériques.",
      "Développer une démarche de projet, de prototypage et de présentation.",
    ],
  },
] satisfies readonly Education[];
