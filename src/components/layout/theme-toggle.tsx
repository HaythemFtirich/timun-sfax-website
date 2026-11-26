"use client";

import { useEffect, useState } from "react";
import { bilingual } from "@/lib/i18n";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sync with the theme set by the pre-paint script/localStorage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(getCurrentTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage errors
    }
  }

  const isDark = theme === "dark";
  const label = mounted
    ? isDark
      ? bilingual("Switch to light mode", "Passer en mode clair")
      : bilingual("Switch to dark mode", "Passer en mode sombre")
    : bilingual("Toggle color theme", "Changer le thème de couleur");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label.en}
      data-i18n-attr="aria-label title"
      data-i18n-aria-label-en={label.en}
      data-i18n-aria-label-fr={label.fr}
      data-i18n-title-en={label.en}
      data-i18n-title-fr={label.fr}
      title={label.en}
      className="site-header-icon"
    >
      <span aria-hidden="true" className="relative h-4 w-4">
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 h-4 w-4 transition-all duration-[var(--duration-fast)] ${mounted && isDark ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3c.2 0 .4 0 .6.02A7 7 0 0 0 21 12.2c0 .2 0 .39-.01.59Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 h-4 w-4 transition-all duration-[var(--duration-fast)] ${!mounted || !isDark ? "scale-100 rotate-0 opacity-100" : "scale-75 rotate-90 opacity-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4.25" />
          <path d="M12 2.5v2.5M12 19v2.5M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2.5 12H5M19 12h2.5M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
        </svg>
      </span>
    </button>
  );
}
