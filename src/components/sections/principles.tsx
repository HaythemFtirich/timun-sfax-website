import type { CSSProperties } from "react";
import { T } from "@/components/i18n";
import { AnimatedFigure, Section, SectionHeading } from "@/components/ui";
import { mission, values, vision } from "@/content/about";
import { site } from "@/content/site";
import { bilingual } from "@/lib/i18n";

const panel =
  "relative bg-background p-7 transition-colors duration-[var(--duration-fast)] hover:bg-surface/60 sm:p-10";
const groupAlt = bilingual(
  "TIMUN Sfax group photograph",
  "Photographie de groupe de TIMUN Sfax",
);

/** Top hairline that draws across on hover — decoration, not a progress value. */
function PanelRule() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-bright transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] group-hover:scale-x-100"
    />
  );
}

/**
 * Mission, Vision and Values stacked one under the other — never side by side.
 * Mission and Vision each carry one authentic group photo. All copy comes from
 * src/content/about.ts.
 */
export function Principles() {
  const statements = [
    { ...mission, image: "/images/about/groupphoto5.jpg" },
    { ...vision, image: "/images/about/groupphoto7.jpg" },
  ];

  return (
    <Section
      id="principles"
      className="scroll-mt-24 border-t border-line !pb-6 sm:!pb-8 lg:!pb-10"
    >
      <SectionHeading
        eyebrow={bilingual("What we stand for", "Ce que nous défendons")}
        title={bilingual("Purpose, in plain words.", "Notre raison d'être, simplement.")}
        headingId="principles-heading"
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line">
        {statements.map((statement, i) => (
          <article
            key={statement.label.en}
            className={`group ${panel}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
          >
            <PanelRule />
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={statement.label} />
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-center">
              <div>
                <p className="font-display text-card font-bold leading-snug tracking-[var(--tracking-display)] text-foreground text-balance">
                  <T value={statement.lead} />
                </p>
                {"bullets" in statement ? (
                  <ul className="mt-5 max-w-[62ch] space-y-3 text-muted">
                    {statement.bullets.map((item) => (
                      <li key={item.en} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        />
                        <span>
                          <T value={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-5 max-w-[62ch] space-y-4 text-muted">
                    {statement.paragraphs.map((paragraph) => (
                      <p key={paragraph.en}>
                        <T value={paragraph} />
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <AnimatedFigure
                src={statement.image}
                alt={groupAlt}
                sizes="(max-width: 1024px) 100vw, 38vw"
                caption={site.name}
                aspect="aspect-[4/3]"
              />
            </div>
          </article>
        ))}

        <article
          className={`group ${panel}`}
          data-reveal
          style={{ "--reveal-delay": "140ms" } as CSSProperties}
        >
          <PanelRule />
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={values.label} />
            </p>
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted">
              <T en="Six commitments" fr="Six engagements" />
            </p>
          </div>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.items.map((value, i) => (
              <div
                key={value.title.en}
                className="group/value border-t border-line pt-4 transition-colors duration-[var(--duration-fast)] hover:border-gold-line"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${Math.min(210 + i * 70, 420)}ms`,
                  } as CSSProperties
                }
              >
                <dt className="flex items-center gap-3 font-display text-lg font-bold tracking-[var(--tracking-display)] text-foreground">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 bg-gold transition-transform duration-[var(--duration-fast)] group-hover/value:scale-150"
                  />
                  <T value={value.title} />
                </dt>
                <dd className="mt-2 text-sm text-muted">
                  <T value={value.description} />
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </Section>
  );
}
