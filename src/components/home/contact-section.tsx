import {
  DownloadSimpleIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
} from "@phosphor-icons/react/ssr";

import { profileConfig } from "@/config/profile";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-background/25 px-5 text-sm font-semibold transition-colors hover:bg-background/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="rounded-[2rem] bg-foreground px-6 py-12 text-background sm:px-12 sm:py-16">
          <h2
            id="contact-title"
            className="max-w-3xl text-3xl leading-tight font-bold text-balance sm:text-5xl"
          >
            Un projet, une question, une opportunité ?
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-background/75 sm:text-lg">
            Écrivez-moi : je réponds volontiers aux propositions de poste, de
            mission ou de collaboration.
          </p>

          <a
            href={`mailto:${profileConfig.email}`}
            className="mt-10 inline-flex items-center gap-3 text-xl font-semibold underline decoration-primary decoration-2 underline-offset-8 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-3xl"
          >
            <EnvelopeSimpleIcon
              aria-hidden="true"
              className="size-7 shrink-0"
            />
            {profileConfig.email}
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profileConfig.cvUrl} download className={linkClass}>
              <DownloadSimpleIcon aria-hidden="true" className="size-4" />
              Télécharger mon CV
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

            {profileConfig.linkedinUrl ? (
              <a
                href={profileConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                <LinkedinLogoIcon aria-hidden="true" className="size-4" />
                LinkedIn
              </a>
            ) : null}
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm text-background/70">
            <MapPinIcon aria-hidden="true" className="size-4" />
            {profileConfig.location} · véhiculé, permis A2 et B
          </p>
        </div>
      </div>
    </section>
  );
}
