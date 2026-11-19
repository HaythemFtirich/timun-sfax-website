import { mission, values, vision } from "@/content/about";
import { Section, SectionHeading } from "@/components/ui";

/**
 * Mission, vision and values as a vertical editorial record — deliberately
 * not three equal cards (a forbidden tell in the approved design system).
 * All copy comes from src/content/about.ts; nothing is invented here.
 */
export function Principles() {
  const statements = [mission, vision];

  return (
    <Section id="principles" className="border-t border-line">
      <SectionHeading
        eyebrow="What we stand for"
        title="Purpose, in plain words."
        headingId="principles-heading"
      />

      <div className="mt-16 space-y-16">
        {statements.map((statement) => (
          <article
            key={statement.label}
            className="grid gap-6 border-t border-line pt-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:gap-12"
          >
            <h3 className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              {statement.label}
            </h3>
            <div>
              <p className="font-display text-card font-bold leading-snug tracking-[var(--tracking-display)] text-foreground text-balance">
                {statement.lead}
              </p>
              <div className="mt-5 max-w-[68ch] space-y-4 text-muted">
                {statement.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}

        <article className="grid gap-6 border-t border-line pt-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:gap-12">
          <h3 className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
            {values.label}
          </h3>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {values.items.map((value) => (
              <div key={value.title} className="border-t border-line pt-4">
                <dt className="font-display text-lg font-bold tracking-[var(--tracking-display)] text-foreground">
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
