import Link from "next/link";

import { MobileNavigation } from "@/components/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationItems } from "@/config/navigation";
import { profileConfig } from "@/config/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#accueil"
          className="flex items-center gap-2.5 rounded-sm font-display text-base font-semibold tracking-tight [font-stretch:115%] focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none"
        >
          {profileConfig.name}
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profileConfig.email}`}
            className="hidden min-h-9 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:inline-flex"
          >
            Me contacter
          </a>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
