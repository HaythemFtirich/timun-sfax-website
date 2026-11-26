import { asLocalizedText, type LocalizedTextInput } from "@/lib/i18n";

type TProps = {
  className?: string;
} & (
  | { value: LocalizedTextInput; en?: never; fr?: never }
  | { en: string; fr: string; value?: never }
);

/**
 * Server-rendered bilingual text. Both languages are present in the HTML and
 * CSS reveals only the active one, so hydration stays stable and the site is
 * readable without JavaScript (English default).
 */
export function T({ className, ...copy }: TProps) {
  const pair =
    "value" in copy
      ? asLocalizedText(copy.value ?? "")
      : { en: copy.en, fr: copy.fr };

  return (
    <span className={className ? `i18n-text ${className}` : "i18n-text"}>
      <span data-i18n="en">{pair.en}</span>
      <span data-i18n="fr" lang="fr">
        {pair.fr}
      </span>
    </span>
  );
}
