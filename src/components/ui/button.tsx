import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type VariantProps = {
  /** Defaults to primary. */
  variant?: Variant;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] border px-6 py-3 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-[var(--duration-fast)] ease-[var(--ease)] disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "border-gold bg-gold text-navy hover:border-gold-bright hover:bg-gold-bright",
  secondary:
    "border-line bg-transparent text-foreground hover:border-gold hover:text-gold-bright",
  ghost:
    "border-transparent bg-transparent text-muted hover:text-gold-bright",
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

/** Same visual language for navigation links; no fake destinations supplied. */
export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props} />
  );
}
