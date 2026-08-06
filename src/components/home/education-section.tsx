import { EducationItem } from "@/components/home/education-item";
import { educationEntries } from "@/data/education";

export function EducationSection() {
  return (
    <section
      id="formation"
      aria-labelledby="education-title"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-sm font-medium text-primary">
            04 · Formation
          </p>
        </div>

        <div>
          <div className="max-w-3xl">
            <h2
              id="education-title"
              className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Une formation orientée vers la conception et la réalisation
              d’applications.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Mon parcours m’a permis de construire des bases techniques
              solides, puis de les appliquer à des projets collectifs et à une
              première expérience professionnelle en développement R&D.
            </p>
          </div>

          <ol className="mt-12">
            {educationEntries.map((education, index) => (
              <li key={education.id}>
                <EducationItem education={education} position={index + 1} />
              </li>
            ))}
          </ol>

          <p
            role="note"
            className="mt-10 border-l-2 border-primary/50 pl-4 text-sm leading-6 text-muted-foreground"
          >
            Cette formation initiale se prolonge aujourd’hui par une veille
            technique, des projets personnels et l’expérimentation de nouveaux
            outils.
          </p>
        </div>
      </div>
    </section>
  );
}
