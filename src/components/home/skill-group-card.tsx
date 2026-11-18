import type { SkillGroup } from "@/types/skill-group";

type SkillGroupCardProps = {
  skillGroup: SkillGroup;
};

export function SkillGroupCard({ skillGroup }: SkillGroupCardProps) {
  const titleId = `skill-${skillGroup.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
    >
      <h3
        id={titleId}
        className="mt-5 text-2xl leading-tight font-semibold tracking-tight"
      >
        {skillGroup.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {skillGroup.summary}
      </p>

      <div className="mt-7">
        <h4 className="text-sm font-semibold text-foreground">
          Usages concrets
        </h4>

        <ul className="mt-4 space-y-3">
          {skillGroup.applications.map((application) => (
            <li
              key={application}
              className="relative pl-5 text-sm leading-6 text-muted-foreground before:absolute before:top-[0.65rem] before:left-0 before:size-1.5 before:rounded-full before:bg-primary"
            >
              {application}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <ul
          aria-label={`Technologies associées à ${skillGroup.title}`}
          className="flex flex-wrap gap-2 border-t border-border pt-5"
        >
          {skillGroup.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
