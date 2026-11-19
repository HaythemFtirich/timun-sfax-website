import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Wrap children in the standard page container. Defaults to true. */
  contained?: boolean;
  children?: ReactNode;
};

/** Consistent vertical section rhythm: 64px mobile → 110px desktop. */
export function Section({
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-[var(--section-y)]", className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
