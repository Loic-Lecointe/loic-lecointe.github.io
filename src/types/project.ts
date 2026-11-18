export type Project = {
  slug: string;
  title: string;
  context: "Professionnel" | "Personnel" | "Universitaire";
  category: string;
  summary: string;
  challenge: string;
  outcome?: string;
  technologies: readonly string[];
  href?: string;
};
