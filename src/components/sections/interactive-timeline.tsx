"use client";

import { useState, type CSSProperties } from "react";
import { timeline } from "@/content/about";
import { Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";

/**
 * Interactive, numbers-forward timeline. One large active milestone pairs
 * with a compact selectable rail — the pattern observed in Dorot's timeline.
 * Shared by Home and /about; all five milestones are owner-approved.
 */
export function InteractiveTimeline() {
  const [active, setActive] = useState(0);
  const current = timeline[active];

  return (
    <Section id="timeline" className="border-t border-line scroll-mt-24">
      <SectionHeading
        eyebrow="Timeline"
        title="Five moments. One movement."
        headingId="timeline-heading"
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="self-start lg:sticky lg:top-32" data-reveal>
          <div key={current.year} className="year-swap">
            <p className="font-display text-[clamp(4rem,9vw,7rem)] font-extrabold leading-none tracking-[-0.07em] text-gold-bright">
              {current.year}
            </p>
            <h3 className="mt-6 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              {current.title}
            </h3>
          </div>
          <p className="mt-5 max-w-[42ch] text-muted">{current.description}</p>

          <div className="mt-10 flex items-center gap-3" aria-hidden="true">
            {timeline.map((event, i) => (
              <span
                key={event.year}
                className={cn(
                  "h-px transition-all duration-[var(--duration-fast)]",
                  i === active ? "w-12 bg-gold-bright" : "w-6 bg-line",
                )}
              />
            ))}
          </div>
        </div>

        <ol className="relative border-l border-line pl-8 sm:pl-10">
          {timeline.map((event, i) => {
            const isActive = i === active;
            return (
              <li
                key={event.year + event.title}
                className="relative pb-10 last:pb-0"
                data-reveal
                style={{ "--reveal-delay": `${Math.min(i * 70, 420)}ms` } as CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[calc(2rem+5px)] top-3 h-2.5 w-2.5 rounded-full border transition-all duration-[var(--duration-fast)] sm:-left-[calc(2.5rem+5px)]",
                    isActive
                      ? "scale-125 border-gold-bright bg-gold-bright"
                      : "border-line bg-background group-hover:border-gold",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="group block w-full text-left"
                >
                  <span className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                    {event.year}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block font-display text-card font-bold tracking-[var(--tracking-display)] transition-colors duration-[var(--duration-fast)]",
                      isActive
                        ? "text-foreground"
                        : "text-cream/70 group-hover:text-gold-bright",
                    )}
                  >
                    {event.title}
                  </span>
                  <span className="mt-2 block max-w-[52ch] text-sm text-muted">
                    {event.description}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
