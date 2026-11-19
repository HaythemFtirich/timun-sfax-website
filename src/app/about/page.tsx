import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractiveTimeline } from "@/components/sections/interactive-timeline";
import { NumbersDashboard } from "@/components/sections/numbers-dashboard";
import { Principles } from "@/components/sections/principles";
import { AnimatedFigure, Section } from "@/components/ui";
import { nationalTimun, sfaxHistory } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The history, mission and values of TIMUN Sfax, and its place within the Tunisian International Model United Nations.",
};

const anchors = [
  { href: "#national", label: "National TIMUN" },
  { href: "#sfax", label: "TIMUN Sfax" },
  { href: "#numbers", label: "In numbers" },
  { href: "#principles", label: "Mission & values" },
  { href: "#timeline", label: "Timeline" },
];

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          About
        </p>
        <h1 className="mt-5 max-w-[18ch] font-display text-hero font-extrabold leading-[0.9] tracking-[-0.055em] text-foreground text-balance">
          TIMUN Sfax
        </h1>
        <p className="mt-8 max-w-[62ch] text-body-lg text-muted">
          {site.fullName} — {site.location}. Part of a national network, with
          its own history in Sfax.
        </p>

        <nav
          aria-label="On this page"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6"
        >
          {anchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="border-b border-transparent pb-1 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted transition-colors duration-[var(--duration-fast)] hover:border-gold hover:text-gold-bright"
            >
              {anchor.label}
            </a>
          ))}
        </nav>
      </Section>

      <Section id="national" className="border-b border-line scroll-mt-24">
        <div
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-20"
          data-reveal
        >
          <div>
            <Image
              src="/images/branding/timun-national-logo.png"
              alt="TIMUN national logo"
              width={240}
              height={240}
              className="h-auto w-24 object-contain sm:w-28"
            />
            <p className="mt-8 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              {nationalTimun.eyebrow}
            </p>
          </div>
          <div>
            <h2 className="font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
              {nationalTimun.fullName}
            </h2>
            <p className="mt-8 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance">
              {nationalTimun.lead}
            </p>
            <div className="mt-6 max-w-[68ch] space-y-5 text-muted">
              {nationalTimun.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="sfax" className="border-b border-line scroll-mt-24">
        <div
          className="grid gap-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-20"
          data-reveal
        >
          <div>
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              {sfaxHistory.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
              Our chapter in Sfax.
            </h2>
            <p className="mt-8 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance">
              {sfaxHistory.lead}
            </p>
            <div className="mt-6 max-w-[62ch] space-y-5 text-muted">
              {sfaxHistory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <AnimatedFigure
            src="/images/about/groupphoto9.jpg"
            alt="TIMUN Sfax group photograph"
            sizes="(max-width: 1024px) 100vw, 34vw"
            caption={site.name}
            aspect="aspect-[3/4]"
          />
        </div>
      </Section>

      <NumbersDashboard />
      <Principles />
      <InteractiveTimeline />

      <Section className="border-t border-line">
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          {site.tagline}
        </p>
        <Link
          href="/"
          className="mt-6 inline-block border-b border-gold-line pb-1 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground transition-colors duration-[var(--duration-fast)] hover:border-gold-bright hover:text-gold-bright"
        >
          Return home
        </Link>
      </Section>
    </main>
  );
}
