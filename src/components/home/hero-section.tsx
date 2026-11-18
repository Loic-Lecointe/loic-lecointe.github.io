import Image from "next/image";
import {
  DownloadSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";

import { HeroPrintScene } from "@/components/home/hero-print-scene";
import { profileConfig } from "@/config/profile";

const reveal =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-700";

const iconLinkClass =
  "inline-flex size-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none";

export function HeroSection() {
  const { availability } = profileConfig;

  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative scroll-mt-20 overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-16">
        <div>
          <p
            className={`${reveal} inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md border border-border bg-card/70 px-3 py-2 text-sm`}
          >
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <span
                aria-hidden="true"
                className="size-2 animate-signal rounded-full bg-signal"
              />
              {availability.status}
            </span>
            <span className="text-muted-foreground">
              Recherche un {availability.target}, {availability.area}
            </span>
          </p>

          <h1
            id="hero-title"
            style={{ animationDelay: "100ms" }}
            className={`${reveal} mt-8 font-display text-[clamp(3rem,9vw,6.25rem)] leading-[0.92] font-bold tracking-[-0.03em] [font-stretch:125%]`}
          >
            <span className="block">Loïc</span>
            <span className="block">Lecointe</span>
            <span className="mt-4 block font-sans text-lg font-medium tracking-normal text-primary [font-stretch:100%] sm:text-xl">
              {profileConfig.role}
            </span>
          </h1>

          <p
            style={{ animationDelay: "220ms" }}
            className={`${reveal} mt-8 max-w-xl font-display text-2xl leading-snug font-medium text-balance [font-stretch:110%] sm:text-3xl`}
          >
            {profileConfig.headline}
          </p>

          <p
            style={{ animationDelay: "320ms" }}
            className={`${reveal} mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8`}
          >
            {profileConfig.introduction}
          </p>

          <div
            style={{ animationDelay: "420ms" }}
            className={`${reveal} mt-9 flex flex-wrap items-center gap-3`}
          >
            <a
              href={`mailto:${profileConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              Proposer un entretien
            </a>

            <a
              href={profileConfig.cvUrl}
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none"
            >
              <DownloadSimpleIcon aria-hidden="true" className="size-4" />
              Télécharger le CV
            </a>

            <a
              href={profileConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (nouvel onglet)"
              className={iconLinkClass}
            >
              <GithubLogoIcon aria-hidden="true" className="size-5" />
            </a>

            <a
              href={profileConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (nouvel onglet)"
              className={iconLinkClass}
            >
              <LinkedinLogoIcon aria-hidden="true" className="size-5" />
            </a>
          </div>
        </div>

        <aside
          aria-label="Portrait et fiche technique"
          style={{ animationDelay: "200ms" }}
          className={`${reveal} mx-auto w-full max-w-md lg:max-w-none`}
        >
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/20">
            <div className="relative">
              <Image
                src="/loic-lecointe.jpg"
                alt="Portrait de Loïc Lecointe, souriant, dans un atelier"
                width={1077}
                height={808}
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="aspect-[4/4.4] w-full object-cover object-[28%_20%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card via-card/40 to-transparent"
              />
              <HeroPrintScene className="pointer-events-none absolute right-3 bottom-3 h-56 w-40 sm:h-64 sm:w-48" />
            </div>

            <dl className="grid grid-cols-3 divide-x divide-border border-t border-border">
              {profileConfig.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col px-4 py-4">
                  <dt className="text-xs leading-5 text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="order-first font-display text-lg leading-tight font-semibold [font-stretch:115%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </figure>
        </aside>
      </div>
    </section>
  );
}
