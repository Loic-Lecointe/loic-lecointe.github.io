import {
  DownloadSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";

import { profileConfig } from "@/config/profile";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-background/60 px-4 text-sm font-semibold transition-colors hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none";

export function ContactSection() {
  const { availability } = profileConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card bg-blueprint px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-primary"
          />

          <p className="inline-flex items-center gap-2 text-sm font-medium">
            <span
              aria-hidden="true"
              className="size-2 animate-signal rounded-full bg-signal"
            />
            {availability.status}
          </p>

          <h2
            id="contact-title"
            className="mt-5 max-w-3xl text-4xl leading-[1.02] font-bold text-balance sm:text-6xl"
          >
            Vous recrutez un développeur full stack&nbsp;?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Je recherche un {availability.target}, dans les Hauts-de-France ou
            en télétravail. Écrivez-moi pour échanger sur votre équipe et vos
            projets.
          </p>

          <a
            href={`mailto:${profileConfig.email}`}
            className="mt-10 inline-block font-display text-2xl font-semibold break-all [font-stretch:110%] underline decoration-primary decoration-2 underline-offset-[10px] transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-4xl"
          >
            {profileConfig.email}
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profileConfig.cvUrl} download className={linkClass}>
              <DownloadSimpleIcon aria-hidden="true" className="size-4" />
              Télécharger le CV
            </a>
            <a
              href={profileConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <LinkedinLogoIcon aria-hidden="true" className="size-4" />
              LinkedIn
            </a>
            <a
              href={profileConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <GithubLogoIcon aria-hidden="true" className="size-4" />
              GitHub
            </a>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Basé à {profileConfig.location}. {profileConfig.mobility}.
          </p>
        </div>
      </div>
    </section>
  );
}
