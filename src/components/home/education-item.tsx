import type { Education } from "@/types/education";

type EducationItemProps = {
  education: Education;
  position: number;
};

export function EducationItem({ education, position }: EducationItemProps) {
  return (
    <article className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[9rem_1fr]">
      <div>
        <p className="font-mono text-xs font-medium text-primary">
          {String(position).padStart(2, "0")}
        </p>

        <p className="mt-2 text-sm text-muted-foreground">{education.period}</p>

        <p className="mt-4 w-fit border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground">
          {education.status}
        </p>
      </div>

      <div>
        <h3 className="text-2xl leading-tight font-semibold tracking-tight text-balance">
          {education.degree}
        </h3>

        {education.institution || education.location ? (
          <p className="mt-3 text-sm font-medium text-primary">
            {education.institution}

            {education.institution && education.location ? (
              <span aria-hidden="true"> · </span>
            ) : null}

            {education.location}
          </p>
        ) : null}

        {education.specialization ? (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground">
            {education.specialization}
          </p>
        ) : null}

        <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
          {education.summary}
        </p>

        <div className="mt-8">
          <h4 className="font-mono text-xs font-medium tracking-[0.08em] text-foreground uppercase">
            Apports principaux
          </h4>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {education.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative pl-5 text-sm leading-6 text-muted-foreground before:absolute before:top-[0.65rem] before:left-0 before:size-1.5 before:bg-primary"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
