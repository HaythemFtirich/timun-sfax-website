import type { CSSProperties } from "react";
import { T } from "@/components/i18n";
import { Section, SectionHeading } from "@/components/ui";
import { numbers } from "@/content/numbers";
import { bilingual } from "@/lib/i18n";
import { cn } from "@/lib/cn";

/** Rising per-character figure. The accessible text stays a plain string. */
function Figure({ value, className }: { value: string; className?: string }) {
  return (
    <span className={cn("figure-roll", className)}>
      <span aria-hidden="true" className="figure-roll-inner">
        {Array.from(value).map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="figure-digit"
            style={{ "--digit-index": i } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

/**
 * Cinematic spotlight on three owner-provided TIMUN Sfax figures.
 */
export function NumbersDashboard() {
  return (
    <Section id="numbers" className="border-t border-line scroll-mt-24">
      <div data-reveal>
        <SectionHeading
          eyebrow={bilingual("TIMUN Sfax in numbers", "TIMUN Sfax en chiffres")}
          title={bilingual("The record, at a glance.", "Le bilan, en un coup d'œil.")}
          description={bilingual(
            "Three milestones that define our chapter today.",
            "Trois repères qui définissent notre club aujourd'hui.",
          )}
          headingId="numbers-heading"
        />
      </div>

      <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-3">
        {numbers.map((item, index) => (
          <article
            key={item.label.en}
            className={cn(
              "group relative isolate overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface/35 p-7 sm:p-9 lg:p-10",
              "transition-all duration-500 ease-[var(--ease)]",
              "hover:-translate-y-1.5 hover:border-gold-line hover:bg-surface/70",
            )}
            data-reveal
            style={
              {
                "--reveal-delay": `${Math.min(index, 4) * 90}ms`,
              } as CSSProperties
            }
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_85%_at_100%_0%,rgba(240,201,135,0.18),transparent_55%),linear-gradient(180deg,rgba(245,243,238,0.03),transparent_45%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-bright via-gold to-transparent transition-transform duration-500 ease-[var(--ease)] group-hover:scale-x-100"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-transform duration-700 ease-[var(--ease)] group-hover:scale-125 group-hover:bg-gold/15"
            />

            <div className="relative flex h-full min-h-[280px] flex-col sm:min-h-[320px]">
              <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                <T value={item.label} />
              </p>

              <Figure
                value={item.figure}
                className={cn(
                  "mt-6 font-display font-extrabold leading-[0.9] tracking-[-0.06em] text-gold-bright",
                  "text-[clamp(4.5rem,11vw,7.5rem)]",
                  "transition-transform duration-500 ease-[var(--ease)] group-hover:scale-[1.03]",
                )}
              />

              <p className="mt-6 max-w-[28ch] text-base leading-relaxed text-cream/90 sm:text-body-lg">
                <T value={item.note} />
              </p>

              <div aria-hidden="true" className="mt-auto pt-8">
                <span className="block h-px w-12 bg-gold-line transition-all duration-500 ease-[var(--ease)] group-hover:w-24 group-hover:bg-gold-bright" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
