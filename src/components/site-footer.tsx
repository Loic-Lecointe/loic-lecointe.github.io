export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {currentYear} Lecointe Loïc. Tous droits réservés.</p>

        <p className="font-mono text-xs">Next.js · TypeScript · Vercel</p>
      </div>
    </footer>
  );
}
