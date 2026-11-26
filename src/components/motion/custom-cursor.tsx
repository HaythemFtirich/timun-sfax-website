"use client";

import { useEffect, useRef } from "react";

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      'a, button, [role="button"], [role="link"], label, summary, select, .event-gallery-item, .neon-logo-wrap, input[type="button"], input[type="submit"], input[type="reset"], input[type="checkbox"], input[type="radio"], input[type="range"]',
    ),
  );
}

function isTextTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, [contenteditable="true"], [contenteditable=""]',
    ),
  );
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const html = document.documentElement;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let active = false;
    let down = false;
    let textMode = false;
    let raf = 0;
    let enabled = false;

    const setEnabled = (on: boolean) => {
      if (enabled === on) return;
      enabled = on;
      html.classList.toggle("custom-cursor-active", on);
      if (!on) {
        dot.classList.remove(
          "is-visible",
          "is-active",
          "is-down",
          "is-text",
        );
        ring.classList.remove(
          "is-visible",
          "is-active",
          "is-down",
          "is-text",
        );
      }
    };

    const shouldEnable = () =>
      fine.matches && !reduce.matches && html.dataset.motion !== "static";

    const syncEnabled = () => {
      const on = shouldEnable();
      setEnabled(on);
      return on;
    };

    const applyState = () => {
      dot.classList.toggle("is-visible", visible && enabled);
      ring.classList.toggle("is-visible", visible && enabled);
      dot.classList.toggle("is-active", active && !textMode);
      ring.classList.toggle("is-active", active && !textMode);
      dot.classList.toggle("is-down", down && !textMode);
      ring.classList.toggle("is-down", down && !textMode);
      dot.classList.toggle("is-text", textMode);
      ring.classList.toggle("is-text", textMode);
    };

    const onMove = (e: PointerEvent) => {
      if (!syncEnabled()) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
      visible = true;
      active = isInteractiveTarget(e.target);
      textMode = isTextTarget(e.target);
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      applyState();
    };

    const onDown = (e: PointerEvent) => {
      if (!syncEnabled()) return;
      down = true;
      active = isInteractiveTarget(e.target);
      textMode = isTextTarget(e.target);
      applyState();
    };

    const onUp = () => {
      down = false;
      applyState();
    };

    const onLeave = () => {
      visible = false;
      down = false;
      applyState();
    };

    const onEnter = () => {
      if (!syncEnabled()) return;
      visible = true;
      applyState();
    };

    const animate = () => {
      if (enabled) {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = window.requestAnimationFrame(animate);
    };

    const onPreferenceChange = () => {
      if (!syncEnabled()) {
        visible = false;
        down = false;
        applyState();
      }
    };

    const motionObserver = new MutationObserver(onPreferenceChange);
    motionObserver.observe(html, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    fine.addEventListener("change", onPreferenceChange);
    reduce.addEventListener("change", onPreferenceChange);

    syncEnabled();
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(raf);
      motionObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      fine.removeEventListener("change", onPreferenceChange);
      reduce.removeEventListener("change", onPreferenceChange);
      html.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
