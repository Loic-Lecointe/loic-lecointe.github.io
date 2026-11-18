import Image from "next/image";
import {
  ArrowDownIcon,
  DownloadSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";

import { profileConfig } from "@/config/profile";

const reveal =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-700";

const linkClass =
  "inline-flex min-h-10 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none";

export function HeroSection() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <div>
          <p
            className={`${reveal} w-fit rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground`}
          >
            {profileConfig.role}
          </p>

          <h1
            id="hero-title"
            style={{ animationDelay: "120ms" }}
            className={`${reveal} mt-7 text-5xl leading-[1.02] font-bold text-balance sm:text-6xl lg:text-7xl`}
          >
            {profileConfig.headline}
          </h1>

          <p
            style={{ animationDelay: "240ms" }}
            className={`${reveal} mt-7 max-w-xl text-lg leading-8 text-muted-foreground`}
          >
            {profileConfig.introduction}
          </p>

          <div
            style={{ animationDelay: "360ms" }}
            className={`${reveal} mt-9 flex flex-col gap-3 sm:flex-row`}
          >
            <a
              href="#projets"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              Voir mes projets
              <ArrowDownIcon aria-hidden="true" className="size-4" />
            </a>

            <a
              href={profileConfig.cvUrl}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Télécharger mon CV
              <DownloadSimpleIcon aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div
            style={{ animationDelay: "480ms" }}
            className={`${reveal} mt-6 flex flex-wrap items-center gap-x-6`}
          >
            <a
              href={profileConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Mon profil GitHub (nouvel onglet)"
              className={linkClass}
            >
              <GithubLogoIcon aria-hidden="true" className="size-5" />
              GitHub
            </a>

            {profileConfig.linkedinUrl ? (
              <a
                href={profileConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Mon profil LinkedIn (nouvel onglet)"
                className={linkClass}
              >
                <LinkedinLogoIcon aria-hidden="true" className="size-5" />
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>

        <aside
          aria-label="Portrait et profil technique"
          style={{ animationDelay: "200ms" }}
          className={`${reveal} mx-auto w-full max-w-md lg:max-w-none`}
        >
          <Image
            src="/loic-lecointe.jpg"
            alt="Portrait de Loïc Lecointe, souriant, dans un atelier"
            width={1077}
            height={808}
            priority
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[28%_20%]"
          />

          <dl className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
            {profileConfig.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-sm font-semibold">{highlight.label}</dt>
                <dd className="text-sm text-muted-foreground">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
