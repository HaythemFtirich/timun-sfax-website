import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

/**
 * Global header. Sits transparently over the full-viewport hero.
 * Scroll-reactive solid state is staged for Phase 8 with the motion gate.
 */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-24 items-center justify-between gap-6 sm:h-28">
        <Link
          href="/"
          aria-label="TIMUN Sfax — home"
          className="inline-flex rounded-sm focus-visible:outline-offset-6"
        >
          <Image
            src="/images/branding/timun-sfax-logo-white.png"
            alt=""
            width={1257}
            height={1257}
            priority
            className="h-auto w-[clamp(7.5rem,14vw,11rem)] object-contain"
          />
        </Link>
        <p className="hidden font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-cream sm:block">
          Model United Nations
        </p>
      </Container>
    </header>
  );
}
