"use client";

import { bilingual } from "@/lib/i18n";
import { toggleLanguage, useLanguage } from "./language-store";
import { T } from "./t";

/**
 * Compact header control. It always shows the *other* language: "FR" while
 * English is active, "EN" while French is active. The choice is persisted and
 * applied without changing the current path.
 */
export function LanguageToggle() {
  const language = useLanguage();

  const label =
    language === "fr"
      ? bilingual("Switch to English", "Passer en anglais")
      : bilingual("Switch to French", "Passer en français");

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={label.en}
      data-i18n-attr="aria-label title"
      data-i18n-aria-label-en={label.en}
      data-i18n-aria-label-fr={label.fr}
      data-i18n-title-en={label.en}
      data-i18n-title-fr={label.fr}
      title={label.en}
      className="site-header-icon language-toggle"
    >
      <span aria-hidden="true" className="language-toggle-code">
        <T en="FR" fr="EN" />
      </span>
    </button>
  );
}
