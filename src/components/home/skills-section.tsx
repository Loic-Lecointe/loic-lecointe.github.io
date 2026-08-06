import { SkillGroupCard } from "@/components/home/skill-group-card";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="competences"
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-sm font-medium text-primary">
            03 · Compétences
          </p>
        </div>

        <div>
          <div className="max-w-3xl">
            <h2
              id="skills-title"
              className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Des compétences appliquées à des problèmes concrets.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Mon profil associe développement web, logiciels métier, données,
              qualité logicielle et expérimentation. Les outils présentés
              ci-dessous sont reliés à des usages plutôt qu’à des niveaux
              déclaratifs.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {skillGroups.map((skillGroup, index) => (
              <li key={skillGroup.id} className="h-full">
                <SkillGroupCard skillGroup={skillGroup} position={index + 1} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
