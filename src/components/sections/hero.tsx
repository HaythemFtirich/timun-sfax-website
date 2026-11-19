import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";

/**
 * Full-viewport opening chapter: authentic group photograph with a navy colour
 * cast and scrim, official brand name as the only headline, and one CTA.
 * No organizational claims are made here.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy">
      <Image
        src="/images/hero/groupphoto2-upscaled.webp"
        alt="TIMUN Sfax group photograph"
        fill
        preload
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Navy colour cast — makes the authentic photograph match the palette. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-surface-2/45 mix-blend-color"
      />
      {/* Directional scrim for type legibility. */}
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />
      {/* Soft hand-off into the next section. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent"
      />

      <Container className="relative z-10 pb-16 pt-32 sm:pb-24">
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          Tunisian International Model United Nations
        </p>
        <h1 className="mt-5 font-display text-hero font-extrabold leading-[0.9] tracking-[-0.055em] text-foreground text-balance">
          <span className="block">TIMUN</span>
          <span className="block">Sfax</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href="#about">Discover TIMUN Sfax</ButtonLink>
          <p className="hidden font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-cream sm:block">
            Sfax, Tunisia
          </p>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 right-[var(--gutter)] z-10 hidden text-center md:block">
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-cream">
          Scroll
        </p>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}
