import { HeroSection } from "@/components/home/hero-section";

const portfolioSections = [
  {
    id: "projets",
    eyebrow: "Projets",
    title: "Des réalisations expliquées comme de véritables études de cas.",
    description:
      "Cette section présentera le contexte, les choix techniques, les difficultés, les résultats et les enseignements de chaque projet.",
  },
  {
    id: "experience",
    eyebrow: "Expérience",
    title: "Un parcours centré sur le développement et les logiciels métier.",
    description:
      "Cette section détaillera mon évolution chez BFlex Techno et Baron Groupe, de mes premières expériences jusqu’à mon poste actuel en R&D.",
  },
  {
    id: "competences",
    eyebrow: "Compétences",
    title: "Des compétences reliées à des réalisations concrètes.",
    description:
      "Les technologies ne seront pas présentées comme une simple liste de logos : chacune sera associée à des projets et à des usages réels.",
  },
  {
    id: "formation",
    eyebrow: "Formation",
    title: "Une formation en conception et développement d’applications.",
    description:
      "Cette section présentera mon BUT Informatique et les éléments de formation réellement pertinents pour mon profil actuel.",
  },
  {
    id: "a-propos",
    eyebrow: "À propos",
    title: "Un développeur polyvalent, autonome et curieux.",
    description:
      "Cette section apportera quelques éléments personnels sans détourner l’attention de mon parcours professionnel.",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Échangeons au sujet de votre prochain projet.",
    description:
      "Cette section proposera mes liens professionnels ainsi qu’un formulaire de contact sécurisé.",
  },
] as const;

export default function Home() {
  return (
    <>
      <HeroSection />

      {portfolioSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="scroll-mt-20 border-b border-border"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
            <div>
              <p className="font-mono text-sm font-medium text-primary">
                {String(index + 1).padStart(2, "0")} · {section.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2
                id={`${section.id}-title`}
                className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
              >
                {section.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                {section.description}
              </p>

              <div className="mt-10 border border-dashed border-border bg-muted/30 px-5 py-6 font-mono text-sm text-muted-foreground">
                Contenu détaillé prévu dans un prochain lot.
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
