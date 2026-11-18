import { ProjectCard } from "@/components/home/project-card";
import { SectionHeading } from "@/components/home/section-heading";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projets"
      aria-labelledby="projects-title"
      className="scroll-mt-16 border-b border-border bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading id="projects-title" title="Projets choisis">
          Deux réalisations professionnelles, présentées sans données
          confidentielles, et deux projets personnels qui montrent ce que
          j’explore en dehors du travail.
        </SectionHeading>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
