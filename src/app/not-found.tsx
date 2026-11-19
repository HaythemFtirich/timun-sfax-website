import { ButtonLink, Container, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70svh] items-center pt-40">
      <Container>
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          404
        </p>
        <h1 className="mt-5 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
          Page not found
        </h1>
        <p className="mt-6 max-w-[52ch] text-body-lg text-muted">
          The page you requested does not exist.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" variant="secondary">
            Back to TIMUN Sfax
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
