import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  position: number;
};

export function ProjectCard({ project, position }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs font-medium text-primary">
          {String(position).padStart(2, "0")}
        </p>

        <p className="text-right text-xs leading-5 text-muted-foreground">
          {project.category}
        </p>
      </div>

      <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-tight text-balance">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-6 border-l-2 border-primary/40 pl-4">
        <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground uppercase">
          Problématique
        </p>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {project.challenge}
        </p>
      </div>

      <ul
        aria-label={`Technologies utilisées pour ${project.title}`}
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
        <p className="text-xs text-muted-foreground">Étude de cas à venir</p>

        <a
          href="#contact"
          aria-label={`Échanger au sujet du projet ${project.title}`}
          className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          Échanger
          <ArrowUpRightIcon aria-hidden="true" className="size-4" />
        </a>
      </div>
    </article>
  );
}
