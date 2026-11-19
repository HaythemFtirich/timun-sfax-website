import type { CSSProperties } from "react";
import { mission, values, vision } from "@/content/about";
import { site } from "@/content/site";
import { AnimatedFigure, Section, SectionHeading } from "@/components/ui";

const panel =
  "relative bg-background p-7 transition-colors duration-[var(--duration-fast)] hover:bg-surface/60 sm:p-10";

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
 * Mission, vision and values as an asymmetric dashboard — deliberately not
 * three equal cards. Mission and Vision each carry one authentic group photo.
 * All copy comes from src/content/about.ts.
 */
export function Principles() {
  const statements = [
    { ...mission, image: "/images/about/groupphoto5.jpg", wide: true },
    { ...vision, image: "/images/about/groupphoto7.jpg", wide: false },
  ];

  return (
    <Section id="principles" className="border-t border-line scroll-mt-24">
      <SectionHeading
        eyebrow="What we stand for"
        title="Purpose, in plain words."
        headingId="principles-heading"
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:grid-cols-12">
        {statements.map((statement, i) => (
          <article
            key={statement.label}
            className={`group ${panel} ${statement.wide ? "lg:col-span-7" : "lg:col-span-5"}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
          >
            <PanelRule />
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              {statement.label}
            </p>

            <div
              className={
                statement.wide
                  ? "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end"
                  : "mt-10"
              }
            >
              <div>
                <p className="font-display text-card font-bold leading-snug tracking-[var(--tracking-display)] text-foreground text-balance">
                  {statement.lead}
                </p>
                <div className="mt-5 max-w-[62ch] space-y-4 text-muted">
                  {statement.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <AnimatedFigure
                src={statement.image}
                alt="TIMUN Sfax group photograph"
                sizes={
                  statement.wide
                    ? "(max-width: 1024px) 100vw, 26vw"
                    : "(max-width: 1024px) 100vw, 36vw"
                }
                caption={site.name}
                aspect={statement.wide ? "aspect-[4/5]" : "aspect-[16/9]"}
                className={statement.wide ? "" : "mt-10"}
              />
            </div>
          </article>
        ))}

        <article
          className={`group ${panel} lg:col-span-12`}
          data-reveal
          style={{ "--reveal-delay": "140ms" } as CSSProperties}
        >
          <PanelRule />
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              {values.label}
            </p>
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted">
              Six commitments
            </p>
          </div>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.items.map((value, i) => (
              <div
                key={value.title}
                className="group/value border-t border-line pt-4 transition-colors duration-[var(--duration-fast)] hover:border-gold-line"
                data-reveal
                style={{ "--reveal-delay": `${Math.min(210 + i * 70, 420)}ms` } as CSSProperties}
              >
                <dt className="flex items-center gap-3 font-display text-lg font-bold tracking-[var(--tracking-display)] text-foreground">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 bg-gold transition-transform duration-[var(--duration-fast)] group-hover/value:scale-150"
                  />
                  {value.title}
                </dt>
                <dd className="mt-2 text-sm text-muted">{value.description}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </Section>
  );
}
