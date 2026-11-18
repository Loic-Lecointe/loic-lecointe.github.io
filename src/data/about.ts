import type { AboutProfile } from "@/types/about-profile";

export const aboutProfile = {
  paragraphs: [
    "J’aime comprendre le problème avant d’écrire la première ligne : parler avec la personne qui utilisera l’outil, puis construire quelque chose de simple qui restera lisible quand il faudra le faire évoluer.",
    "Trois ans en R&D industrielle m’ont appris à livrer pour des opérateurs et des ateliers, pas seulement pour un navigateur. J’y ai gagné de la rigueur, de l’autonomie et le goût des projets concrets.",
  ],

  interests: [
    "Natation, musculation, basket",
    "Batterie en autodidacte",
    "Jeux vidéo : MMORPG, MOBA, FPS",
    "Impression 3D",
  ],

  languages: [
    { name: "Français", level: "langue maternelle" },
    { name: "Anglais", level: "B1" },
  ],
} satisfies AboutProfile;
