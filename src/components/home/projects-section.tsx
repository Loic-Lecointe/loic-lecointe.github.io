import { ProjectCard } from "@/components/home/project-card";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projets"
      aria-labelledby="projects-title"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-sm font-medium text-primary">
            01 · Projets
          </p>
        </div>

        <div>
          <div className="max-w-3xl">
            <h2
              id="projects-title"
              className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Des réalisations expliquées comme de véritables études de cas.
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Cette sélection illustre différentes facettes de mon
              parcours&nbsp;: développement full-stack, expérimentation en
              intelligence artificielle et mise en place d’une architecture web
              professionnelle.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <li key={project.slug} className="h-full">
                <ProjectCard project={project} position={index + 1} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
