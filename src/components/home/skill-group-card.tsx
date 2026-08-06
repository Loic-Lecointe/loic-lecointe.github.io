import type { SkillGroup } from "@/types/skill-group";

type SkillGroupCardProps = {
  skillGroup: SkillGroup;
  position: number;
};

export function SkillGroupCard({ skillGroup, position }: SkillGroupCardProps) {
  const titleId = `skill-${skillGroup.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col border border-border bg-card p-6"
    >
      <p className="font-mono text-xs font-medium text-primary">
        {String(position).padStart(2, "0")}
      </p>

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
        <h4 className="font-mono text-xs font-medium tracking-[0.08em] text-foreground uppercase">
          Usages concrets
        </h4>

        <ul className="mt-4 space-y-3">
          {skillGroup.applications.map((application) => (
            <li
              key={application}
              className="relative pl-5 text-sm leading-6 text-muted-foreground before:absolute before:top-[0.65rem] before:left-0 before:size-1.5 before:bg-primary"
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
              className="border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
