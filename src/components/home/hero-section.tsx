import { ArrowDownIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr";

import { profileConfig } from "@/config/profile";

export function HeroSection() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative scroll-mt-20 overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_42%)]"
      />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-end gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium tracking-[0.12em] text-primary uppercase">
              {profileConfig.role}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {profileConfig.currentPosition}
            </p>

            <h1
              id="hero-title"
              className="mt-7 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              {profileConfig.headline}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {profileConfig.introduction}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projets"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                Découvrir mes projets
                <ArrowDownIcon aria-hidden="true" className="size-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Me contacter
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profileConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Consulter mon profil GitHub dans un nouvel onglet"
                className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <GithubLogoIcon aria-hidden="true" className="size-5" />
                GitHub
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="profile-summary-title"
            className="border border-border bg-card"
          >
            <h2
              id="profile-summary-title"
              className="border-b border-border px-5 py-4 font-mono text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase"
            >
              Profil technique
            </h2>

            <dl>
              {profileConfig.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="border-b border-border px-5 py-5 last:border-b-0"
                >
                  <dt className="text-sm font-medium text-foreground">
                    {highlight.label}
                  </dt>

                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                    {highlight.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
