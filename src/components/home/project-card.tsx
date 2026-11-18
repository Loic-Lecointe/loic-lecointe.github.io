import { TechList } from "@/components/home/tech-list";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isProfessional = project.context === "Professionnel";

  return (
    <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12">
      <div>
        <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span
            className={
              isProfessional
                ? "rounded-sm bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary"
                : "rounded-sm border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
            }
          >
            {project.context}
          </span>
          {project.category}
        </p>
        <h3 className="mt-4 text-2xl leading-tight font-semibold text-balance sm:text-[1.75rem]">
          {project.title}
        </h3>
      </div>

      <div>
        <p className="text-base leading-7 text-foreground/85">
          {project.summary}
        </p>

        <dl className="mt-5 space-y-3 text-[0.9375rem] leading-6">
          <div>
            <dt className="font-medium text-foreground">Le défi</dt>
            <dd className="text-muted-foreground">{project.challenge}</dd>
          </div>
          {project.outcome ? (
            <div>
              <dt className="font-medium text-foreground">Mon rôle</dt>
              <dd className="text-muted-foreground">{project.outcome}</dd>
            </div>
          ) : null}
        </dl>

        <TechList
          items={project.technologies}
          label={`Technologies du projet ${project.title}`}
          className="mt-6"
        />
      </div>
    </article>
  );
}
