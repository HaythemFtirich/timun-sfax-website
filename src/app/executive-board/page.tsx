import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { T } from "@/components/i18n";
import { Section, SectionHeading } from "@/components/ui";
import { SocialLink } from "@/components/ui/social-icons";
import { executiveBoard } from "@/content/executive-board";
import { bilingual } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Executive Board",
  description: "The TIMUN Sfax executive board for the 2026–2027 mandate.",
  openGraph: {
    title: "Executive Board | TIMUN Sfax",
    description: "The TIMUN Sfax executive board for the 2026–2027 mandate.",
  },
};

const heading = {
  eyebrow: bilingual(
    "Executive Board · Mandate 2026–2027",
    "Bureau exécutif · Mandat 2026–2027",
  ),
  title: bilingual(
    "The team leading TIMUN Sfax.",
    "L'équipe qui dirige TIMUN Sfax.",
  ),
  description: bilingual(
    "Members of the TIMUN Sfax executive board for the 2026–2027 mandate.",
    "Les membres du bureau exécutif de TIMUN Sfax pour le mandat 2026–2027.",
  ),
};
const photoComingSoon = bilingual(
  "Photo coming soon",
  "Photo bientôt disponible",
);

export default function ExecutiveBoardPage() {
  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <SectionHeading as="h1" {...heading} />
      </Section>

      <Section className="border-b border-line">
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="font-display text-card font-bold leading-tight tracking-[var(--tracking-display)] text-foreground text-balance">
                    {member.name}
                  </h2>
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
      </Section>
    </main>
  );
}
