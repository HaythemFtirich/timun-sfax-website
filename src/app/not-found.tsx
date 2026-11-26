import { T } from "@/components/i18n";
import { ButtonLink, Container, Section } from "@/components/ui";
import { bilingual } from "@/lib/i18n";

const title = bilingual("Page not found", "Page introuvable");
const body = bilingual(
  "The page you requested does not exist.",
  "La page que vous avez demandée n'existe pas.",
);
const back = bilingual("Back to TIMUN Sfax", "Retour à TIMUN Sfax");

export default function NotFound() {
  return (
    <Section className="flex min-h-[70svh] items-center pt-40">
      <Container>
        <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          404
        </p>
        <h1 className="mt-5 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
          <T value={title} />
        </h1>
        <p className="mt-6 max-w-[52ch] text-body-lg text-muted">
          <T value={body} />
        </p>
        <div className="mt-8">
          <ButtonLink href="/" variant="secondary">
            <T value={back} />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
