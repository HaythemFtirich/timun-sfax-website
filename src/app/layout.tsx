import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
