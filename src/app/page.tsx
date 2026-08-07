import { AboutSection } from "@/components/home/about-section";
import { EducationSection } from "@/components/home/education-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";

const portfolioSections = [
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Échangeons au sujet de votre prochain projet.",
    description:
      "Cette section proposera mes liens professionnels ainsi qu’un formulaire de contact sécurisé.",
  },
] as const;

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <AboutSection />
      {portfolioSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="scroll-mt-20 border-b border-border"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
            <div>
              <p className="font-mono text-sm font-medium text-primary">
                {String(index + 6).padStart(2, "0")} · {section.eyebrow}
              </p>
            </div>

            <div className="max-w-3xl">
              <h2
                id={`${section.id}-title`}
                className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
              >
                {section.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                {section.description}
              </p>

              <div className="mt-10 border border-dashed border-border bg-muted/30 px-5 py-6 font-mono text-sm text-muted-foreground">
                Contenu détaillé prévu dans un prochain lot.
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
