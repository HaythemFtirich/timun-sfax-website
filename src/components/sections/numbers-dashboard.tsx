"use client";

import { useState, type CSSProperties } from "react";
import { numbers } from "@/content/numbers";
import { Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Rising per-digit figure. The accessible text stays a plain string. */
function Figure({ value, className }: { value: string; className?: string }) {
  return (
    <span className={cn("figure-roll", className)}>
      <span aria-hidden="true" className="figure-roll-inner">
        {Array.from(value).map((digit, i) => (
          <span
            key={`${digit}-${i}`}
            className="figure-digit"
            style={{ "--digit-index": i } as CSSProperties}
          >
            {digit}
          </span>
        ))}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

/**
 * A numbers-first record. Only the six owner-approved figures are displayed.
 * Selecting a figure reveals its short, source-derived context.
 */
export function NumbersDashboard() {
  const [active, setActive] = useState<number | null>(null);
  const [feature, ...rest] = numbers;

  const tileClass =
    "group relative flex min-h-[180px] flex-col justify-between bg-background p-6 text-left transition-colors duration-[var(--duration-fast)] hover:bg-surface/70 sm:p-8";

  return (
    <Section id="numbers" className="border-t border-line scroll-mt-24">
      <SectionHeading
        eyebrow="TIMUN in numbers"
        title="The record, at a glance."
        description="Six approved figures. Select one for its context."
        headingId="numbers-heading"
      />

      <div
        className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        data-reveal
      >
        <button
          type="button"
          onClick={() => setActive(active === 0 ? null : 0)}
          aria-pressed={active === 0}
          className={cn(
            tileClass,
            "min-h-[300px] lg:min-h-[420px]",
            active === 0 && "bg-surface/70",
          )}
        >
          <span className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
            {feature.label}
          </span>
          <Figure
            value={feature.figure}
            className="my-6 font-display text-[clamp(5rem,12vw,9rem)] font-extrabold leading-none tracking-[-0.07em] text-gold-bright"
          />
          <NumbersNote text={feature.note} visible={active === 0} />
        </button>

        <div className="grid gap-px bg-line sm:grid-cols-2">
          {rest.map((item, i) => (
            <button
              key={item.figure}
              type="button"
              onClick={() => setActive(active === i + 1 ? null : i + 1)}
              aria-pressed={active === i + 1}
              data-reveal
              style={{ "--reveal-delay": `${Math.min(i * 70, 420)}ms` } as CSSProperties}
              className={cn(
                tileClass,
                active === i + 1 && "bg-surface/70",
              )}
            >
              <span className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                {item.label}
              </span>
              <Figure
                value={item.figure}
                className="my-5 font-display text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.06em] text-foreground"
              />
              <NumbersNote text={item.note} visible={active === i + 1} />
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted">
        Source: approved TIMUN history · 2009 — 2018
      </p>
    </Section>
  );
}

function NumbersNote({ text, visible }: { text: string; visible: boolean }) {
  return (
    <span
      className={cn(
        "block max-w-[34ch] border-t border-gold-line pt-4 text-sm leading-relaxed text-muted transition-opacity duration-[var(--duration-fast)]",
        visible ? "opacity-100" : "opacity-70 group-hover:opacity-100 group-focus-visible:opacity-100",
      )}
    >
      {text}
    </span>
  );
}
