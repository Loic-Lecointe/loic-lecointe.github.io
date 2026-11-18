import type { Education } from "@/types/education";

export const educationEntries = [
  {
    id: "bambu-lab-academy",
    period: "2026",
    degree: "Bambu Lab Academy — imprimante H2D",
    institution: "Formation constructeur",
    summary:
      "Prise en main de l’imprimante 3D H2D et de Bambu Studio pour prototyper des pièces.",
  },
  {
    id: "but-informatique",
    period: "2021 — 2024",
    degree: "BUT Informatique",
    institution: "Université de Lille",
    summary:
      "Parcours réalisation d’applications : conception, développement, validation. Dernière année en alternance.",
  },
  {
    id: "baccalaureat-sti2d",
    period: "2018 — 2021",
    degree: "Bac STI2D, spécialité informatique",
    institution: "Lycée Blaise Pascal, Longuenesse",
    summary: "Premiers projets de programmation et de systèmes numériques.",
  },
] satisfies readonly Education[];
