import type { HTMLAttributes } from "react";
import { T } from "@/components/i18n";
import type { LocalizedTextInput } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type SectionHeadingProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  /** Mono micro-label. Text only — never a number (no numbered eyebrows). */
  eyebrow?: LocalizedTextInput;
  title: LocalizedTextInput;
  description?: LocalizedTextInput;
  /** Wire this to the section's aria-labelledby. */
  headingId?: string;
  /** Heading element for the title. Use h1 for page-level headings. */
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-[70ch]", className)} {...props}>
      {eyebrow ? (
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          <T value={eyebrow} />
        </p>
      ) : null}
      <Heading
        id={headingId}
        className="mt-4 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance"
      >
        <T value={title} />
      </Heading>
      {description ? (
        <p className="mt-5 max-w-[62ch] text-body-lg text-muted">
          <T value={description} />
        </p>
      ) : null}
    </header>
  );
}
