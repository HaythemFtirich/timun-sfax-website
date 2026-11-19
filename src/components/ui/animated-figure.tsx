import Image from "next/image";
import { cn } from "@/lib/cn";

type AnimatedFigureProps = {
  src: string;
  alt: string;
  sizes: string;
  caption: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[4/5]". */
  aspect?: string;
  preload?: boolean;
  className?: string;
};

/**
 * Authentic photograph with the approved navy cast, a slow hover push-in and
 * a hairline that draws across on hover. Motion is CSS-only and disappears
 * under reduced motion / static mode.
 */
export function AnimatedFigure({
  src,
  alt,
  sizes,
  caption,
  aspect = "aspect-[4/5]",
  preload = false,
  className,
}: AnimatedFigureProps) {
  return (
    <figure className={cn("group", className)} data-reveal>
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface",
          aspect,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-center transition-transform duration-700 ease-[var(--ease)] group-hover:scale-[1.08]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-surface-2/35 mix-blend-color transition-opacity duration-[var(--duration-fast)] group-hover:opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-bright transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] group-hover:scale-x-100"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted">
        <span>{caption}</span>
        <span
          aria-hidden="true"
          className="text-gold transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
        >
          ↗
        </span>
      </figcaption>
    </figure>
  );
}
