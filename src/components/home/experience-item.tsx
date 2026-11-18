import type { Experience } from "@/types/experience";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[9rem_1fr]">
      <div>
        <p className="mt-2 text-sm text-muted-foreground">
          {experience.period}
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-2xl leading-tight font-semibold tracking-tight">
              {experience.role}
            </h3>

            <p className="mt-2 text-sm font-medium text-primary">
              {experience.company}
            </p>
          </div>

          {experience.confidential ? (
            <p className="w-fit rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground">
              Contexte confidentiel
            </p>
          ) : null}
        </div>

        <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
          {experience.summary}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Missions principales
            </h4>

            <ul className="mt-4 space-y-3">
              {experience.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="relative pl-5 text-sm leading-6 text-muted-foreground before:absolute before:top-[0.65rem] before:left-0 before:size-1.5 before:rounded-full before:bg-primary"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Environnement
            </h4>

            <ul
              aria-label={`Environnement professionnel pour ${experience.role}`}
              className="mt-4 flex flex-wrap gap-2"
            >
              {experience.environment.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
