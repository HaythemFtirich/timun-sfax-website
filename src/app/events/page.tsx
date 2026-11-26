import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/i18n";
import { Section, SectionHeading } from "@/components/ui";
import { events } from "@/content/events";
import { bilingual } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops and simulations organized by TIMUN Sfax, with dates and locations as announced.",
  openGraph: {
    title: "Events | TIMUN Sfax",
    description:
      "Workshops and simulations organized by TIMUN Sfax, with dates and locations as announced.",
  },
};

const heading = {
  eyebrow: bilingual("Events", "Événements"),
  title: bilingual("Workshops and simulations.", "Ateliers et simulations."),
  description: bilingual(
    "A record of TIMUN Sfax events, with dates and locations as announced.",
    "Les événements de TIMUN Sfax, avec les dates et lieux annoncés.",
  ),
};
const viewEvent = bilingual("View event", "Voir l'événement");

export default function EventsPage() {
  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <SectionHeading as="h1" {...heading} />
      </Section>

      <Section className="border-b border-line">
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-3">
          {events.map((event, index) => (
            <li key={event.slug} className="min-w-0">
              <Link
                href={`/events/${event.slug}`}
                className="group relative flex h-full flex-col bg-background p-7 transition-colors duration-[var(--duration-fast)] hover:bg-surface/60 focus-visible:outline-offset-[-2px] sm:p-10"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-bright transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] group-hover:scale-x-100"
                />
                <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                  {event.date}
                </p>
                <h2 className="mt-4 font-display text-card font-bold leading-tight tracking-[var(--tracking-display)] text-foreground text-balance">
                  {event.title}
                </h2>
                <p className="mt-4 max-w-[40ch] text-muted">
                  <T value={event.description} />
                </p>
                <p className="mt-8 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-cream">
                  {event.location}
                </p>
                <span className="mt-auto inline-block pt-10 text-sm font-semibold text-gold-bright transition-colors duration-[var(--duration-fast)] group-hover:text-gold">
                  <T value={viewEvent} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
