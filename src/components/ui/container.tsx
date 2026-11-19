import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Centred 1280px page container with responsive gutters. */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-page)] px-[var(--gutter)]",
        className,
      )}
      {...props}
    />
  );
}
