import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  /** Mono micro-label. Text only — never a number (no numbered eyebrows). */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Wire this to the section's aria-labelledby. */
  headingId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-[70ch]", className)} {...props}>
      {eyebrow ? (
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="mt-4 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[62ch] text-body-lg text-muted">{description}</p>
      ) : null}
    </header>
  );
}
