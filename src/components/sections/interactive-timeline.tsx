"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { T } from "@/components/i18n";
import { Section, SectionHeading } from "@/components/ui";
import { timeline } from "@/content/about";
import { bilingual, localize } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const sliderLabel = bilingual(
  "Timeline milestones — scroll, drag sideways or use arrow keys",
  "Étapes de la chronologie — défilez, glissez horizontalement ou utilisez les flèches",
);
const headingEyebrow = bilingual("Timeline", "Chronologie");
const headingTitle = bilingual(
  "Five moments. One movement.",
  "Cinq moments. Un même élan.",
);
const interactionHint = bilingual(
  "Click · drag · ← →",
  "Clic · glisser · ← →",
);

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
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);
  const holdUntilRef = useRef(0);
  const current = timeline[active];
  const valueTextEn = `${current.year} — ${localize(current.title, "en")}`;
  const valueTextFr = `${current.year} — ${localize(current.title, "fr")}`;

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const isStatic =
      document.documentElement.dataset.motion === "static" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;

    const update = () => {
      frame = 0;
      // Let a tap's in-place year change settle before scroll takes over again.
      if (performance.now() < holdUntilRef.current) return;
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

  const maxScroll = () =>
    Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  /**
   * Scroll the page so the chosen milestone sits at the progress marker. The
   * scroll listener then updates the active year, traveller and rail — the page
   * and the timeline move together.
   */
  const scrollToIndex = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const next = clamp(index, 0, timeline.length - 1);
    const rect = rail.getBoundingClientRect();
    const railTop = rect.top + window.scrollY;
    const progress = (next + 0.5) / timeline.length;
    const marker = window.innerHeight * 0.45;
    const target = clamp(
      railTop + progress * rect.height - marker,
      0,
      maxScroll(),
    );
    window.scrollTo({ top: target, behavior: "instant" });
    rail.style.setProperty("--timeline-progress", progress.toFixed(4));
    setActive(next);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = { x: event.clientX, y: window.scrollY };
    movedRef.current = false;
    setDragging(true);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Synthetic or cancelled pointers cannot be captured; drag still works.
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const rail = railRef.current;
    if (!drag || !rail) return;
    // Horizontal drag scrubs the page scroll; the timeline follows the finger.
    const rect = rail.getBoundingClientRect();
    const railTop = rect.top + window.scrollY;
    const segment = rect.height / timeline.length;
    const steps = (event.clientX - drag.x) / 90;
    if (steps !== 0) movedRef.current = true;
    const target = clamp(drag.y + steps * segment, 0, maxScroll());
    window.scrollTo({ top: target, behavior: "instant" });
    const progress = clamp(
      (window.innerHeight * 0.45 - (railTop - target)) / Math.max(rect.height, 1),
      0,
      1,
    );
    rail.style.setProperty("--timeline-progress", progress.toFixed(4));
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  /**
   * A tap advances the box to the next milestone without scrolling the page —
   * scrolling would slide this sticky box out of view, which looked like it
   * disappeared. The short hold stops the scroll listener snapping it back.
   */
  const advanceInPlace = (index: number) => {
    const next = clamp(index, 0, timeline.length - 1);
    holdUntilRef.current = performance.now() + 900;
    railRef.current?.style.setProperty(
      "--timeline-progress",
      ((next + 0.5) / timeline.length).toFixed(4),
    );
    setActive(next);
  };

  /** A tap (not a drag) advances the box in place. */
  const onClickAdvance = () => {
    if (movedRef.current) return;
    advanceInPlace((active + 1) % timeline.length);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      scrollToIndex(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      scrollToIndex(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(timeline.length - 1);
    }
  };

  return (
    <Section
      id="timeline"
      className="scroll-mt-24 border-t border-line !pt-6 sm:!pt-8 lg:!pt-10"
    >
      <SectionHeading
        eyebrow={headingEyebrow}
        title={headingTitle}
        headingId="timeline-heading"
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div
          className={cn(
            "year-scrub self-start rounded-[var(--radius-md)] border border-line bg-surface/30 p-6 lg:sticky lg:top-32 lg:p-8",
            dragging && "is-dragging",
          )}
          role="slider"
          tabIndex={0}
          aria-label={sliderLabel.en}
          data-i18n-attr="aria-label aria-valuetext"
          data-i18n-aria-label-en={sliderLabel.en}
          data-i18n-aria-label-fr={sliderLabel.fr}
          aria-valuemin={1}
          aria-valuemax={timeline.length}
          aria-valuenow={active + 1}
          aria-valuetext={valueTextEn}
          data-i18n-aria-valuetext-en={valueTextEn}
          data-i18n-aria-valuetext-fr={valueTextFr}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClick={onClickAdvance}
          onKeyDown={onKeyDown}
        >
          <div key={current.year} className="year-swap">
            <p className="font-display text-[clamp(4rem,9vw,7rem)] font-extrabold leading-none tracking-[-0.07em] text-gold-bright">
              {current.year}
            </p>
            <h3 className="mt-6 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              <T value={current.title} />
            </h3>
          </div>
          <p className="mt-5 max-w-[42ch] text-muted">
            <T value={current.description} />
          </p>

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
              <T value={interactionHint} />
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
                key={`${event.year}-${event.title.en}`}
                className="relative pb-10 last:pb-0"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${Math.min(i * 70, 420)}ms`,
                  } as CSSProperties
                }
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
                  onClick={() => scrollToIndex(i)}
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
                    <T value={event.title} />
                  </span>
                  <span className="mt-2 block max-w-[52ch] text-sm text-muted">
                    <T value={event.description} />
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
