// DEVELOPMENT PLACEHOLDER — replaced in Phase 4 with owner-approved content.
// No organizational facts are claimed here.
import { Button, Card, Section, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <main className="flex-1">
      <Section className="border-b border-line">
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          Development preview
        </p>
        <h1 className="mt-5 font-display text-hero font-extrabold leading-[0.95] tracking-[-0.055em] text-foreground text-balance">
          TIMUN Sfax
        </h1>
        <p className="mt-8 max-w-[62ch] text-body-lg text-muted">
          The approved dark editorial system is now in code: deep navy, warm
          gold, Plus Jakarta Sans and Inter, and a 1280px container. Public
          pages remain content-gated until approved copy and assets arrive.
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
