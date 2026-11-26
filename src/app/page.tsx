import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { T } from "@/components/i18n";
import { AboutPreview } from "@/components/sections/about-preview";
import { Hero } from "@/components/sections/hero";
import { InteractiveTimeline } from "@/components/sections/interactive-timeline";
import { MessageTeam } from "@/components/sections/message-team";
import { NeonLogoShowcase } from "@/components/sections/neon-logo-showcase";
import { NumbersDashboard } from "@/components/sections/numbers-dashboard";
import { Principles } from "@/components/sections/principles";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { SocialLink } from "@/components/ui/social-icons";
import { events } from "@/content/events";
import { executiveBoard } from "@/content/executive-board";
import { bilingual } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: "TIMUN Sfax" },
  description:
    "Official informational website of TIMUN Sfax, the Tunisian International Model United Nations club in Sfax, Tunisia.",
  openGraph: {
    title: "TIMUN Sfax",
    description:
      "Official informational website of TIMUN Sfax, the Tunisian International Model United Nations club in Sfax, Tunisia.",
  },
};

const eventsHeading = {
  eyebrow: bilingual("Events", "Événements"),
  title: bilingual("Workshops and simulations.", "Ateliers et simulations."),
  description: bilingual("Events hosted in Sfax.", "Événements organisés à Sfax."),
};
const boardHeading = {
  eyebrow: bilingual(
    "Executive Board · Mandate 2026–2027",
    "Bureau exécutif · Mandat 2026–2027",
  ),
  title: bilingual("Meet the executive board.", "Découvrez le bureau exécutif."),
  description: bilingual(
    "The TIMUN Sfax executive board for the 2026–2027 mandate.",
    "Le bureau exécutif de TIMUN Sfax pour le mandat 2026–2027.",
  ),
};
const viewEvent = bilingual("View event", "Voir l'événement");
const viewAllEvents = bilingual("View all events", "Voir tous les événements");
const photoComingSoon = bilingual(
  "Photo coming soon",
  "Photo bientôt disponible",
);
const viewBoard = bilingual("View executive board", "Voir le bureau exécutif");

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <AboutPreview />
      <NumbersDashboard />
      <Principles />
      <NeonLogoShowcase />
      <InteractiveTimeline />

      <Section id="events" className="border-t border-line">
        <div data-reveal>
          <SectionHeading {...eventsHeading} />
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-3">
          {events.map((event, index) => (
            <li key={event.slug} className="min-w-0">
              <Link
                href={`/events/${event.slug}`}
                className="group relative flex h-full flex-col bg-background p-7 transition-colors duration-[var(--duration-fast)] hover:bg-surface/60 sm:p-10"
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
                <h3 className="mt-4 font-display text-card font-bold leading-tight tracking-[var(--tracking-display)] text-foreground text-balance">
                  {event.title}
                </h3>
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
        <div className="mt-10" data-reveal>
          <ButtonLink href="/events" variant="secondary">
            <T value={viewAllEvents} />
          </ButtonLink>
        </div>
      </Section>

      <Section id="executive-board" className="border-t border-line">
        <div data-reveal>
          <SectionHeading {...boardHeading} />
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {executiveBoard.map((member, index) => (
            <li key={member.name} className="min-w-0">
              <article
                className="flex h-full flex-col bg-background p-6 sm:p-8"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 5) * 70}ms`,
                  } as CSSProperties
                }
              >
                <div className="group/photo relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface transition-colors duration-[var(--duration-fast)] hover:border-gold-line">
                  {member.image ? (
                    <>
                      <Image
                        src={member.image}
                        alt={member.name}
                        data-i18n-attr="alt"
                        data-i18n-alt-en={member.name}
                        data-i18n-alt-fr={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-[var(--ease)] group-hover/photo:scale-[1.07] group-hover/photo:saturate-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent opacity-70 transition-opacity duration-500 group-hover/photo:opacity-40"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(240,201,135,0.22),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover/photo:opacity-100"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-bright transition-transform duration-500 ease-[var(--ease)] group-hover/photo:scale-x-100"
                      />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-6 text-center transition-colors duration-[var(--duration-fast)] group-hover/photo:bg-surface-2/40">
                      <span className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted transition-colors duration-[var(--duration-fast)] group-hover/photo:text-gold">
                        <T value={photoComingSoon} />
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-display text-card font-bold leading-tight tracking-[var(--tracking-display)] text-foreground text-balance">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-muted">
                    <T value={member.position} />
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    {member.linkedin ? (
                      <SocialLink href={member.linkedin} label="LinkedIn" />
                    ) : null}
                    {member.facebook ? (
                      <SocialLink href={member.facebook} label="Facebook" />
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-10" data-reveal>
          <ButtonLink href="/executive-board" variant="secondary">
            <T value={viewBoard} />
          </ButtonLink>
        </div>
      </Section>

      <MessageTeam />
    </main>
  );
}
