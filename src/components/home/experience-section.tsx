import { ExperienceItem } from "@/components/home/experience-item";
import { professionalExperiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-sm font-medium text-primary">
            02 · Expérience
          </p>
        </div>

        <div>
          <div className="max-w-3xl">
            <h2
              id="experience-title"
              className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Concevoir des solutions adaptées à des besoins métier concrets.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Mon expérience professionnelle associe analyse fonctionnelle,
              développement applicatif, maintenance et amélioration continue de
              logiciels utilisés dans des contextes exigeants.
            </p>
          </div>

          <ol className="mt-12">
            {professionalExperiences.map((experience, index) => (
              <li key={experience.id}>
                <ExperienceItem experience={experience} position={index + 1} />
              </li>
            ))}
          </ol>

          <p
            role="note"
            className="mt-10 border-l-2 border-primary/50 pl-4 text-sm leading-6 text-muted-foreground"
          >
            Certains projets professionnels sont soumis à des obligations de
            confidentialité. Les informations présentées ici décrivent les
            responsabilités et les pratiques sans exposer de données, de clients
            ou de systèmes internes.
          </p>
        </div>
      </div>
    </section>
  );
}
