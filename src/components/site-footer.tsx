import { profileConfig } from "@/config/profile";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © {currentYear} {profileConfig.name}
        </p>
        <p>Conçu et développé avec Next.js, Tailwind CSS et GSAP.</p>
      </div>
    </footer>
  );
}
