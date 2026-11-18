import { SectionHeading } from "@/components/home/section-heading";
import { aboutProfile } from "@/data/about";
import { educationEntries } from "@/data/education";

export function EducationSection() {
  return (
    <section
      id="parcours"
      aria-labelledby="education-title"
      className="scroll-mt-16 border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
        <div>
          <SectionHeading id="education-title" title="Parcours" />

          <ol className="mt-10 space-y-8">
            {educationEntries.map((entry) => (
              <li
                key={entry.id}
                className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
              >
                <p className="pt-0.5 text-sm text-muted-foreground">
                  {entry.period}
                </p>
                <div>
                  <h3 className="font-sans text-lg leading-snug font-semibold tracking-normal [font-stretch:100%]">
                    {entry.degree}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {entry.institution}
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-6 text-muted-foreground">
                    {entry.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <section aria-labelledby="about-title">
          <h2
            id="about-title"
            className="text-3xl leading-[1.05] font-bold sm:text-5xl"
          >
            En dehors du code
          </h2>

          <div className="mt-8 space-y-5">
            {aboutProfile.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold">Langues</dt>
              {aboutProfile.languages.map((language) => (
                <dd
                  key={language.name}
                  className="mt-1.5 text-[0.9375rem] text-muted-foreground"
                >
                  {language.name}, {language.level}
                </dd>
              ))}
            </div>
            <div>
              <dt className="text-sm font-semibold">Centres d’intérêt</dt>
              {aboutProfile.interests.map((interest) => (
                <dd
                  key={interest}
                  className="mt-1.5 text-[0.9375rem] text-muted-foreground"
                >
                  {interest}
                </dd>
              ))}
            </div>
          </dl>
        </section>
      </div>
    </section>
  );
}
