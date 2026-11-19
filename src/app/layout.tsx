import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import "./globals.css";

// Approved pairing (Phase 2): Plus Jakarta Sans for display, Inter for body.
// Both are open-source and self-hosted by next/font — no external font requests.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

// Browser tab shows exactly "TIMUN Sfax" (owner instruction).
const siteTitle = "TIMUN Sfax";
const siteDescription =
  "Official informational website of TIMUN Sfax, the Tunisian International Model United Nations club in Sfax, Tunisia.";

export const metadata: Metadata = {
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
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SiteHeader />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
