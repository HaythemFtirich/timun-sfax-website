import Image from "next/image";
import Link from "next/link";
import { nationalTimun, sfaxHistory } from "@/content/about";
import { site } from "@/content/site";
import {
  AnimatedFigure,
  ButtonLink,
  Section,
  SectionHeading,
} from "@/components/ui";

/** Home page introduction: who we are, and how we sit within national TIMUN. */
export function AboutPreview() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div data-reveal>
          <SectionHeading
            eyebrow={sfaxHistory.eyebrow}
            title="A chapter built on dialogue."
            description={sfaxHistory.lead}
            headingId="about-heading"
          />

          <div className="mt-8 max-w-[62ch] space-y-5 text-muted">
            {sfaxHistory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-10 border-l-2 border-gold pl-5 font-display text-xl font-bold tracking-[var(--tracking-display)] text-cream">
            {site.tagline}
          </p>

          <div className="mt-10">
            <ButtonLink href="/about" variant="secondary">
              Learn more about us
            </ButtonLink>
          </div>
        </div>

        <AnimatedFigure
          src="/images/about/groupphoto.jpg"
          alt="TIMUN Sfax group photograph"
          sizes="(max-width: 1024px) 100vw, 40vw"
          caption={site.location}
          aspect="aspect-[4/5]"
        />
      </div>

      <div
        className="mt-24 grid gap-10 border-t border-line pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20"
        data-reveal
      >
        <div>
          <Image
            src="/images/branding/timun-national-logo.png"
            alt="TIMUN national logo"
            width={240}
            height={240}
            className="h-auto w-20 object-contain transition-transform duration-[var(--duration-fast)] ease-[var(--ease)] hover:scale-[1.06] sm:w-24"
          />
          <p className="mt-6 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
            {nationalTimun.eyebrow}
          </p>
        </div>
        <div>
          <h2 className="font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
            Part of a national network.
          </h2>
          <p className="mt-4 max-w-[62ch] text-muted">{nationalTimun.lead}</p>
          <p className="mt-4 max-w-[62ch] text-muted">
            {nationalTimun.paragraphs[1]}
          </p>
          <Link
            href="/about#national"
            className="mt-6 inline-block border-b border-gold-line pb-1 text-sm font-semibold text-gold-bright transition-colors duration-[var(--duration-fast)] hover:border-gold-bright"
          >
            Read the national context
          </Link>
        </div>
      </div>
    </Section>
  );
}
