import Image from "next/image";
import { T } from "@/components/i18n";
import { AnimatedFigure, Section } from "@/components/ui";
import { nationalTimun, sfaxHistory } from "@/content/about";
import { site } from "@/content/site";
import { bilingual } from "@/lib/i18n";

const clubHeading = bilingual("Our club in Sfax.", "Notre club à Sfax.");
const groupAlt = bilingual(
  "TIMUN Sfax group photograph",
  "Photographie de groupe de TIMUN Sfax",
);
const nationalLogoAlt = bilingual(
  "TIMUN national logo",
  "Logo national de TIMUN",
);

/**
 * Home page "About" content: national TIMUN context and the TIMUN Sfax chapter,
 * merged from the former About page.
 */
export function AboutPreview() {
  return (
    <Section id="about" className="border-t border-line">
      <div
        className="grid gap-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-20"
        data-reveal
      >
        <div>
          <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
            <T value={sfaxHistory.eyebrow} />
          </p>
          <h2 className="mt-5 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
            <T value={clubHeading} />
          </h2>
          <p className="mt-8 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance">
            <T value={sfaxHistory.lead} />
          </p>
          <div className="mt-6 max-w-[62ch] space-y-5 text-muted">
            {sfaxHistory.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>
                <T value={paragraph} />
              </p>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-gold pl-5 font-display text-xl font-bold tracking-[var(--tracking-display)] text-cream">
            <T value={site.tagline} />
          </p>
        </div>

        <AnimatedFigure
          src="/images/about/groupphoto9.jpg"
          alt={groupAlt}
          sizes="(max-width: 1024px) 100vw, 34vw"
          caption={site.name}
          aspect="aspect-[3/4]"
        />
      </div>

      <div
        className="mt-24 grid gap-12 border-t border-line pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-20"
        data-reveal
      >
        <div>
          <Image
            src="/images/branding/timun-national-logo.png"
            alt={nationalLogoAlt.en}
            data-i18n-attr="alt"
            data-i18n-alt-en={nationalLogoAlt.en}
            data-i18n-alt-fr={nationalLogoAlt.fr}
            width={240}
            height={240}
            className="h-auto w-24 object-contain transition-transform duration-500 ease-[var(--ease)] hover:scale-110 sm:w-28"
          />
          <p className="mt-8 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
            <T value={nationalTimun.eyebrow} />
          </p>
        </div>
        <div>
          <h2 className="font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
            <T value={nationalTimun.fullName} />
          </h2>
          <div className="mt-8 max-w-[68ch] space-y-5 text-muted">
            {nationalTimun.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>
                <T value={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
