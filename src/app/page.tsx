// DEVELOPMENT PLACEHOLDER — public content remains content-gated (Phase 0).
// The hero uses only the approved brand name and factual metadata copy.
import { Hero } from "@/components/sections/hero";
import { Button, Card, Section, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />

      <Section id="about" className="border-b border-line">
        <SectionHeading
          eyebrow="About"
          title="TIMUN Sfax"
          description="The Tunisian International Model United Nations club in Sfax, Tunisia."
        />
      </Section>

      <Section className="border-b border-line">
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          Development preview
        </p>
        <h2 className="mt-5 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
          The approved system is in code.
        </h2>
        <p className="mt-6 max-w-[62ch] text-body-lg text-muted">
          Deep navy, warm gold, Plus Jakarta Sans and Inter, and a 1280px
          container. Public pages stay content-gated until approved copy and
          assets arrive.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Tokens and primitives"
          title="A quiet foundation for a cinematic site."
          description="Container, Section, SectionHeading, Button and Card are in place. Motion values are recorded but not applied — the approved choreography is implemented in Phase 8."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              Palette
            </h3>
            <p className="mt-3 text-muted">
              Warm gold on deep navy measures 9.21:1 contrast. The old blue
              accent reached only 3.36:1 and is retired.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              Type and motion
            </h3>
            <p className="mt-3 text-muted">
              Display and body fonts are self-hosted. The 900ms hero reveal,
              720ms staggered reveals and 180ms hover language are specified,
              not yet running.
            </p>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Section>
    </main>
  );
}
