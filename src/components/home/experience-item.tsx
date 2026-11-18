import { TechList } from "@/components/home/tech-list";
import type { Experience } from "@/types/experience";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="relative pb-14 pl-9">
      <span
        aria-hidden="true"
        data-timeline-node
        className="absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-border bg-background transition-colors duration-300 [&.is-active]:border-primary [&.is-active]:bg-primary"
      />

      <p className="text-sm text-muted-foreground">
        <time>{experience.period}</time>
        <span className="ml-3 text-foreground/70">{experience.duration}</span>
      </p>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <h3 className="text-2xl leading-tight font-semibold sm:text-3xl">
          {experience.role}
        </h3>
        <span className="rounded-sm border border-primary/40 px-2 py-0.5 text-xs font-medium text-primary">
          {experience.contract}
        </span>
      </div>
      <p className="mt-1 text-base font-medium text-foreground/80">
        {experience.company}
      </p>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        {experience.summary}
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <ul className="space-y-2.5">
          {experience.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="relative pl-5 text-[0.9375rem] leading-6 text-foreground/85 before:absolute before:top-[0.7rem] before:left-0 before:h-px before:w-2.5 before:bg-primary"
            >
              {responsibility}
            </li>
          ))}
        </ul>

        <TechList
          items={experience.environment}
          label={`Technologies utilisées : ${experience.role}, ${experience.company}`}
          className="content-start"
        />
      </div>
    </article>
  );
}
