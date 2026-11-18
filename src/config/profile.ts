export const profileConfig = {
  name: "Loïc Lecointe",
  role: "Développeur full stack",

  availability: {
    status: "Disponible immédiatement",
    target: "CDI de développeur full stack",
    area: "Hauts-de-France ou télétravail",
  },

  headline: "Du site web animé au logiciel d’atelier.",

  introduction:
    "Développeur full stack, j’ai passé trois ans en R&D industrielle à construire des applications Next.js, des logiciels WPF et des interfaces opérateur. Je cherche aujourd’hui un CDI où concevoir des produits utiles, de l’interface jusqu’à la base de données.",

  githubUrl: "https://github.com/Loic-Lecointe",
  linkedinUrl: "https://www.linkedin.com/in/lo%C3%AFc-lecointe-0bba70250/",
  email: "loic.lecointe9@gmail.com",
  location: "Saint-Omer (62)",
  mobility: "Véhiculé, permis A2 et B",
  cvUrl: "/cv-loic-lecointe.pdf",

  facts: [
    { value: "3 ans", label: "en R&D industrielle" },
    { value: "Bac+3", label: "BUT Informatique, Lille" },
    { value: "Web + .NET", label: "Next.js, React, C# / WPF" },
  ],
} as const;
