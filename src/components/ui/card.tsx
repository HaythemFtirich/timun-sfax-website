import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  /** Adds the 180ms hover lift. Off by default for non-interactive content. */
  interactive?: boolean;
};

/** Neutral surface shell for later event/guide/board cards. */
export function Card({
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-md)] border border-line bg-surface p-6",
        interactive &&
          "transition-[transform,border-color,background-color] duration-[var(--duration-fast)] ease-[var(--ease)] hover:-translate-y-1 hover:border-gold-line hover:bg-surface-2",
        className,
      )}
      {...props}
    />
  );
}
