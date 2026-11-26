"use client";

import { useSyncExternalStore } from "react";
import { LANGUAGE_EVENT, LANGUAGE_STORAGE_KEY, type Language } from "@/lib/i18n";

const listeners = new Set<() => void>();

function readDomLanguage(): Language {
  if (typeof document === "undefined") return "en";
  return document.documentElement.dataset.lang === "fr" ? "fr" : "en";
}

function subscribe(listener: () => void) {
  if (typeof window === "undefined") return () => {};
  listeners.add(listener);
  window.addEventListener(LANGUAGE_EVENT, listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener(LANGUAGE_EVENT, listener);
  };
}

/** React-safe language snapshot: "en" during SSR/hydration, DOM value after. */
export function useLanguage(): Language {
  return useSyncExternalStore(subscribe, readDomLanguage, () => "en");
}

export function setLanguage(next: Language) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.dataset.lang = next;
  root.lang = next;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  } catch {
    // Storage may be unavailable (private mode, embedded preview); the choice
    // still applies for this page view.
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }
  for (const listener of listeners) listener();
}

export function toggleLanguage() {
  setLanguage(readDomLanguage() === "fr" ? "en" : "fr");
}
