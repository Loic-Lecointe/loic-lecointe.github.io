import { SectionHeading } from "@/components/home/section-heading";
import { TechList } from "@/components/home/tech-list";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="competences"
      aria-labelledby="skills-title"
      className="scroll-mt-16 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading id="skills-title" title="Ma boîte à outils">
          Un socle web moderne, un solide bagage .NET et une vraie culture du
          logiciel industriel.
        </SectionHeading>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li
              key={group.id}
              className="flex flex-col bg-background p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {group.summary}
              </p>
              <TechList
                items={group.technologies}
                label={`Technologies : ${group.title}`}
                className="mt-5"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
