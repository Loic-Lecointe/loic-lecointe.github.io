import { ExperienceItem } from "@/components/home/experience-item";
import { SectionHeading } from "@/components/home/section-heading";
import { TimelineRail } from "@/components/home/timeline-rail";
import { professionalExperiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-16 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          id="experience-title"
          title="Trois ans en R&D industrielle"
        >
          Du stage au CDI chez BFlex Techno (Baron Groupe) : des applications
          web, des logiciels de production et des interfaces opérateur, livrés à
          des équipes qui s’en servent tous les jours.
        </SectionHeading>

        <div className="mt-14">
          <TimelineRail>
            <ol>
              {professionalExperiences.map((experience) => (
                <li key={experience.id} className="last:[&>article]:pb-0">
                  <ExperienceItem experience={experience} />
                </li>
              ))}
            </ol>
          </TimelineRail>
        </div>
      </div>
    </section>
  );
}
