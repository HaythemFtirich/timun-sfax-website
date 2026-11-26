"use client";

import { useEffect } from "react";
import type { Language } from "@/lib/i18n";
import { useLanguage } from "./language-store";

const ATTRIBUTES = [
  "aria-label",
  "alt",
  "title",
  "placeholder",
  "aria-valuetext",
] as const;

const DATA_ATTRIBUTES = ATTRIBUTES.flatMap((attribute) => [
  `data-i18n-${attribute}-en`,
  `data-i18n-${attribute}-fr`,
]);

function applyAttributes(language: Language) {
  const elements = document.querySelectorAll<HTMLElement>("[data-i18n-attr]");
  for (const element of elements) {
    const names = element
      .getAttribute("data-i18n-attr")
      ?.split(/\s+/)
      .filter(Boolean);
    if (!names) continue;

    for (const name of names) {
      const en = element.getAttribute(`data-i18n-${name}-en`);
      const fr = element.getAttribute(`data-i18n-${name}-fr`);
      if (en === null || fr === null) continue;

      const value = language === "fr" ? fr : en;
      if (element.getAttribute(name) !== value) {
        element.setAttribute(name, value);
      }
    }
  }
}

/**
 * Keeps text in non-text-node attributes in sync with the active language.
 * Static markup is handled once on mount; the observer catches portal/menu
 * content and dynamic values such as the timeline slider's `aria-valuetext`.
 */
export function I18nAttributeRuntime() {
  const language = useLanguage();

  useEffect(() => {
    let frame = 0;
    let timer = 0;

    const clear = () => {
      if (frame) cancelAnimationFrame(frame);
      if (timer) window.clearTimeout(timer);
      frame = 0;
      timer = 0;
    };

    // Wait for the current React commit (including a client-side App Router
    // navigation) to finish before touching DOM attributes. Updating them in
    // the same commit makes React report a hydration mismatch. The timer is a
    // fallback for tabs where rAF is paused (background or occluded windows).
    const apply = () => {
      clear();
      applyAttributes(language);
    };

    const schedule = () => {
      if (frame || timer) return;
      frame = requestAnimationFrame(apply);
      timer = window.setTimeout(apply, 500);
    };

    schedule();

    const observer = new MutationObserver(schedule);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: DATA_ATTRIBUTES,
    });

    return () => {
      observer.disconnect();
      clear();
    };
  }, [language]);

  return null;
}
