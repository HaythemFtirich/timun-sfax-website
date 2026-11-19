import { timeline } from "@/content/about";
import { Section, SectionHeading } from "@/components/ui";

/** Approved milestones from documentation §2.1–2.2, in chronological order. */
export function Timeline() {
  return (
    <Section id="timeline" className="border-t border-line">
      <SectionHeading
        eyebrow="Timeline"
        title="A record of how we got here."
        headingId="timeline-heading"
      />

      <ol className="mt-16 border-t border-line">
        {timeline.map((event) => (
          <li
            key={event.year + event.title}
            className="grid gap-3 border-b border-line py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:gap-12"
          >
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              {event.year}
            </p>
            <div>
              <h3 className="font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
                {event.title}
              </h3>
              <p className="mt-3 max-w-[62ch] text-muted">{event.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
