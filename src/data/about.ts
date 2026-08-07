import type { AboutProfile } from "@/types/about-profile";

export const aboutProfile = {
  paragraphs: [
    "Ce qui m’intéresse dans le développement n’est pas seulement de faire fonctionner une fonctionnalité, mais de comprendre le problème qu’elle doit résoudre et de construire une solution qui restera compréhensible lorsqu’elle évoluera.",
    "Mon parcours entre applications web, logiciels métier et expérimentation m’a appris à m’adapter à des contextes différents tout en conservant les mêmes exigences de lisibilité, de validation et de maintenabilité.",
    "J’apprécie particulièrement les sujets où le logiciel répond à une problématique concrète, tout en gardant du temps pour explorer de nouvelles approches autour de l’automatisation, de l’intelligence artificielle et de projets personnels.",
  ],

  principles: [
    {
      id: "comprendre",
      title: "Comprendre avant de construire",
      description:
        "Clarifier le besoin, les contraintes et le contexte permet d’éviter de résoudre correctement le mauvais problème.",
    },
    {
      id: "maintenir",
      title: "Construire pour durer",
      description:
        "Je privilégie un code lisible, des responsabilités clairement séparées et des choix techniques qui restent compréhensibles dans le temps.",
    },
    {
      id: "verifier",
      title: "Vérifier plutôt que supposer",
      description:
        "Tests, typage, automatisation et revues permettent de transformer des hypothèses en éléments vérifiables.",
    },
    {
      id: "explorer",
      title: "Continuer à explorer",
      description:
        "Les projets personnels et la veille technique me permettent d’expérimenter de nouveaux outils sans les adopter uniquement parce qu’ils sont nouveaux.",
    },
  ],

  interests: [
    "Applications web",
    "Logiciels métier",
    "Automatisation",
    "Intelligence artificielle",
    "Projets interactifs",
  ],
} satisfies AboutProfile;
