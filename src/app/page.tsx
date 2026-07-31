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
      <section
        id="accueil"
        aria-labelledby="hero-title"
        className="relative scroll-mt-20 overflow-hidden border-b border-border"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_42%)]"
        />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-sm font-medium tracking-[0.12em] text-primary uppercase">
              Développeur full-stack · R&D
            </p>

            <h1
              id="hero-title"
              className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Je conçois des applications web et des logiciels métier robustes.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              De l’analyse fonctionnelle au déploiement, je transforme des
              besoins concrets en solutions maintenables, testées et adaptées à
              leur environnement.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projets"
                className="inline-flex min-h-11 items-center justify-center bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                Découvrir mes projets
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

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
