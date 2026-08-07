import type { AboutPrinciple } from "@/types/about-profile";

type AboutPrincipleCardProps = {
  principle: AboutPrinciple;
  position: number;
};

export function AboutPrincipleCard({
  principle,
  position,
}: AboutPrincipleCardProps) {
  const titleId = `principle-${principle.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="h-full border border-border bg-card p-6"
    >
      <p className="font-mono text-xs font-medium text-primary">
        {String(position).padStart(2, "0")}
      </p>

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
