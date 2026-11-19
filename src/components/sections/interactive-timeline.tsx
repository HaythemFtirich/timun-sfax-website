"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { timeline } from "@/content/about";
import { Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Interactive, numbers-forward timeline. A single rAF scroll pass drives a
 * traveller circle along the rail and the active year, so scrolling down or up
 * moves both. The active year can also be scrubbed by dragging it sideways or
 * with the left/right arrow keys. Shared by Home and /about.
 */
export function InteractiveTimeline() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const railRef = useRef<HTMLOListElement>(null);
  const dragRef = useRef<{ x: number; index: number } | null>(null);
  const manualRef = useRef(false);
  const current = timeline[active];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const isStatic =
      document.documentElement.dataset.motion === "static" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = rail.getBoundingClientRect();
      const marker = window.innerHeight * 0.45;
      const progress = clamp(
        (marker - rect.top) / Math.max(rect.height, 1),
        0,
        1,
      );
      rail.style.setProperty("--timeline-progress", progress.toFixed(4));

      const index = clamp(
        Math.floor(progress * timeline.length),
        0,
        timeline.length - 1,
      );
      setActive((previous) => (previous === index ? previous : index));
    };

    const onScroll = () => {
      // Any real scroll hands control back to the scroll-driven traveller.
      manualRef.current = false;
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    if (!isStatic) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /**
   * Manual scrub from drag or arrow keys. Update the active year and the rail
   * progress directly — without scrolling the page — so the traveller and fill
   * follow the finger/key. The next real scroll hands control back to scroll.
   */
  const select = (index: number) => {
    const next = clamp(index, 0, timeline.length - 1);
    manualRef.current = true;
    setActive(next);
    railRef.current?.style.setProperty(
      "--timeline-progress",
      ((next + 0.5) / timeline.length).toFixed(4),
    );
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = { x: event.clientX, index: active };
    setDragging(true);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Synthetic or cancelled pointers cannot be captured; drag still works.
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const steps = Math.round((event.clientX - drag.x) / 90);
    const next = clamp(drag.index + steps, 0, timeline.length - 1);
    if (next !== active) select(next);
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(timeline.length - 1);
    }
  };

  return (
    <Section id="timeline" className="border-t border-line scroll-mt-24">
      <SectionHeading
        eyebrow="Timeline"
        title="Five moments. One movement."
        headingId="timeline-heading"
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div
          className={cn(
            "year-scrub self-start rounded-[var(--radius-md)] border border-line bg-surface/30 p-6 lg:sticky lg:top-32 lg:p-8",
            dragging && "is-dragging",
          )}
          data-reveal
          role="slider"
          tabIndex={0}
          aria-label="Timeline milestones — scroll, drag sideways or use arrow keys"
          aria-valuemin={1}
          aria-valuemax={timeline.length}
          aria-valuenow={active + 1}
          aria-valuetext={`${current.year} — ${current.title}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
        >
          <div key={current.year} className="year-swap">
            <p className="font-display text-[clamp(4rem,9vw,7rem)] font-extrabold leading-none tracking-[-0.07em] text-gold-bright">
              {current.year}
            </p>
            <h3 className="mt-6 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              {current.title}
            </h3>
          </div>
          <p className="mt-5 max-w-[42ch] text-muted">{current.description}</p>

          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3" aria-hidden="true">
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
            <span className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted">
              Scroll · drag · ← →
            </span>
          </div>
        </div>

        <ol
          ref={railRef}
          className="timeline-rail relative border-l border-line pl-8 sm:pl-10"
        >
          <span aria-hidden="true" className="timeline-rail-fill" />
          <span aria-hidden="true" className="timeline-traveller" />
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
                      : "border-line bg-background",
                  )}
                />
                <button
                  type="button"
                  onClick={() => select(i)}
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
