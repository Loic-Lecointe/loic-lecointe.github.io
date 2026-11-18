import type { AboutPrinciple } from "@/types/about-profile";

type AboutPrincipleCardProps = {
  principle: AboutPrinciple;
};

export function AboutPrincipleCard({ principle }: AboutPrincipleCardProps) {
  const titleId = `principle-${principle.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="h-full rounded-2xl border border-border bg-card p-6"
    >
      <h3
        id={titleId}
        className="mt-5 text-xl leading-tight font-semibold tracking-tight"
      >
        {principle.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {principle.description}
      </p>
    </article>
  );
}
