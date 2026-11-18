import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { profileConfig } from "@/config/profile";
import { siteConfig } from "@/config/site";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f1722" },
    { media: "(prefers-color-scheme: light)", color: "#f3f5f8" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "développeur full stack",
    "Next.js",
    "React",
    "TypeScript",
    "C#",
    ".NET",
    "WPF",
    "Hauts-de-France",
    "Saint-Omer",
    "Lille",
    "CDI",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  referrer: "origin-when-cross-origin",
  formatDetection: { address: false, email: false, telephone: false },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: profileConfig.role,
  url: siteConfig.url,
  image: `${siteConfig.url}/loic-lecointe.jpg`,
  email: `mailto:${profileConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint-Omer",
    postalCode: "62500",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Université de Lille" },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "GSAP",
    "C#",
    ".NET",
    "WPF",
    "PostgreSQL",
  ],
  sameAs: [profileConfig.githubUrl, profileConfig.linkedinUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${plexSans.variable} ${plexMono.variable} ${archivo.variable} flex min-h-svh flex-col bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Aller au contenu principal
          </a>

          <SiteHeader />

          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>

          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
