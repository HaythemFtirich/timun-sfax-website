import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

/**
 * Global header. Sits transparently over the full-viewport hero on Home and
 * over the navy field on inner pages. Scroll-reactive solid state is staged
 * for Phase 8 with the motion gate.
 */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-24 items-center justify-between gap-6 sm:h-28">
        <Link
          href="/"
          aria-label="TIMUN Sfax — home"
          className="inline-flex shrink-0 rounded-sm focus-visible:outline-offset-6"
        >
          <Image
            src="/images/branding/timun-sfax-logo-white.png"
            alt=""
            width={1257}
            height={1257}
            preload
            className="h-auto w-[clamp(7rem,13vw,10rem)] object-contain"
          />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-6 sm:gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-1 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-cream transition-colors duration-[var(--duration-fast)] hover:border-gold hover:text-gold-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
