import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_38%)]"
      />

      <section className="w-full max-w-4xl border border-border bg-card p-8 shadow-sm sm:p-12">
        <div className="mb-12 flex items-center justify-between gap-4">
          <p className="font-mono text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Portfolio · Fondation technique
          </p>

          <ThemeToggle />
        </div>

        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm font-medium text-primary">
            Développeur full-stack · R&D
          </p>

          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
            Une nouvelle version du portfolio est en construction.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Cette page provisoire valide la fondation Next.js, le design system,
            le thème clair et sombre ainsi que les premiers critères
            d’accessibilité.
          </p>
        </div>
      </section>
    </main>
  );
}
