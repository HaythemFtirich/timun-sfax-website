"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { T } from "@/components/i18n";
import { studyGuides } from "@/content/study-guides";
import { bilingual } from "@/lib/i18n";

const searchLabel = bilingual(
  "Search study guides",
  "Rechercher des guides d'étude",
);
const searchPlaceholder = bilingual(
  "Search by title or keyword",
  "Rechercher par titre ou mot-clé",
);
const emptyMessage = bilingual(
  "No study guides match your search.",
  "Aucun guide d'étude ne correspond à votre recherche.",
);

/** Client-side title/keyword filter for the study guides library. */
export function StudyGuidesLibrary() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return studyGuides;
    return studyGuides.filter((guide) => {
      // Both display languages stay searchable regardless of the active UI
      // language; PDF filenames are never rewritten.
      const haystack =
        `${guide.title.en} ${guide.title.fr} ${guide.file}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <div>
      <div className="max-w-xl" data-reveal>
        <label
          htmlFor="study-guide-search"
          className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold"
        >
          <T value={searchLabel} />
        </label>
        <input
          id="study-guide-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder.en}
          data-i18n-attr="placeholder"
          data-i18n-placeholder-en={searchPlaceholder.en}
          data-i18n-placeholder-fr={searchPlaceholder.fr}
          className="mt-4 w-full rounded-[var(--radius-md)] border border-line bg-surface/40 px-4 py-3 text-foreground placeholder:text-muted transition-colors duration-[var(--duration-fast)] focus:border-gold-bright focus:outline-none"
          autoComplete="off"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 border-t border-line pt-10 text-muted" data-reveal>
          <T value={emptyMessage} />
        </p>
      ) : (
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line">
          {filtered.map((guide, index) => (
            <li key={guide.file} className="min-w-0">
              <a
                href={`/documents/study-guides/${encodeURIComponent(guide.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full items-start justify-between gap-6 bg-background p-7 transition-colors duration-[var(--duration-fast)] hover:bg-surface/60 focus-visible:outline-offset-[-2px] sm:p-8"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 6) * 70}ms`,
                  } as CSSProperties
                }
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-bright transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] group-hover:scale-x-100"
                />
                <span className="min-w-0">
                  <span className="block font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                    PDF
                  </span>
                  <span className="mt-3 block font-display text-card font-bold leading-tight tracking-[var(--tracking-display)] text-foreground text-balance">
                    <T value={guide.title} />
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-sm font-semibold text-gold-bright transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
