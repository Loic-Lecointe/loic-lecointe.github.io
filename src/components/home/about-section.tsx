import { AboutPrincipleCard } from "@/components/home/about-principle-card";
import { aboutProfile } from "@/data/about";

export function AboutSection() {
  return (
    <section
      id="a-propos"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[12rem_1fr] lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-sm font-medium text-primary">
            05 · À propos
          </p>
        </div>

        <div>
          <div className="max-w-3xl">
            <h2
              id="about-title"
              className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Au-delà des technologies, la manière de construire compte.
            </h2>

            <div className="mt-7 space-y-5">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-7 text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground uppercase">
              Ma façon de travailler
            </p>

            <ul className="mt-5 grid gap-5 sm:grid-cols-2">
              {aboutProfile.principles.map((principle, index) => (
                <li key={principle.id} className="h-full">
                  <AboutPrincipleCard
                    principle={principle}
                    position={index + 1}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-6 border-t border-border pt-8 lg:grid-cols-[12rem_1fr]">
            <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground uppercase">
              Sujets d’intérêt
            </p>

            <ul
              aria-label="Domaines techniques qui m’intéressent"
              className="flex flex-wrap gap-2"
            >
              {aboutProfile.interests.map((interest) => (
                <li
                  key={interest}
                  className="border border-border bg-muted/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
