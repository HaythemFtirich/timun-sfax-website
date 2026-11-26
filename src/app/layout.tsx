import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { InteractiveBackground } from "@/components/motion/interactive-background";
import { I18nAttributeRuntime, T } from "@/components/i18n";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import "./globals.css";

// Approved pairing (Phase 2): Plus Jakarta Sans for display, Inter for body.
// Both are open-source (OFL) and self-hosted locally — no external font requests,
// so local dev and builds work without reaching Google Fonts.
const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const plusJakartaSans = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: "200 800",
});

// Browser tab shows exactly "TIMUN Sfax" (owner instruction).
const siteTitle = "TIMUN Sfax";
const siteDescription =
  "Official informational website of TIMUN Sfax, the Tunisian International Model United Nations club in Sfax, Tunisia.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: siteTitle,
    template: "%s | TIMUN Sfax",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "TIMUN Sfax",
    locale: "en",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("timun-language");if(l!=="en"&&l!=="fr")l="en";document.documentElement.dataset.lang=l;document.documentElement.lang=l;}catch(e){document.documentElement.dataset.lang="en";document.documentElement.lang="en";}try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t;}else{document.documentElement.dataset.theme="light";}}catch(e){document.documentElement.dataset.theme="light";}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <I18nAttributeRuntime />
        <ScrollProgress />
        <CustomCursor />
        <InteractiveBackground />
        <a
          href="#main"
          className="sr-only rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          <T en="Skip to content" fr="Aller au contenu" />
        </a>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="relative z-10 flex min-h-full flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
