import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { T } from "@/components/i18n";
import { Section, SectionHeading } from "@/components/ui";
import { SocialLink } from "@/components/ui/social-icons";
import { PartnerForm } from "@/components/sections/partner-form";
import { bilingual } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Partner with TIMUN Sfax and support youth-led Model United Nations simulations, workshops, and diplomatic skills development in Sfax.",
  openGraph: {
    title: "Become a Partner | TIMUN Sfax",
    description:
      "Partner with TIMUN Sfax and support youth-led Model United Nations simulations, workshops, and diplomatic skills development in Sfax.",
  },
};

const supportWays = [
  {
    title: bilingual("Finance a simulation", "Financer une simulation"),
    description: bilingual(
      "Help support the organization of Model United Nations simulations and related academic activities.",
      "Aidez à soutenir l'organisation de simulations des Nations unies et des activités académiques associées.",
    ),
  },
  {
    title: bilingual("Provide workshops", "Animer des ateliers"),
    description: bilingual(
      "Share expertise through workshops that strengthen diplomatic language, negotiation, and public speaking skills.",
      "Partagez votre expertise lors d'ateliers qui renforcent le langage diplomatique, la négociation et la prise de parole en public.",
    ),
  },
  {
    title: bilingual("Collaborate", "Collaborer"),
    description: bilingual(
      "Work with the team on initiatives that encourage cooperation, cultural exchange, and student engagement.",
      "Travaillez avec l'équipe sur des initiatives qui favorisent la coopération, l'échange culturel et l'engagement des étudiants.",
    ),
  },
  {
    title: bilingual("Sponsor opportunities", "Soutenir des opportunités"),
    description: bilingual(
      "Support opportunities that help students take part in simulations, learning experiences, and club activities.",
      "Soutenez des opportunités qui permettent aux étudiants de participer à des simulations, à des expériences d'apprentissage et aux activités du club.",
    ),
  },
];

const socials = [
  {
    label: "LinkedIn" as const,
    href: "https://www.linkedin.com/company/timun-sfax/",
  },
  {
    label: "Facebook" as const,
    href: "https://www.facebook.com/TIMUNSFAX/?locale=fr_FR",
  },
  {
    label: "Instagram" as const,
    href: "https://www.instagram.com/timunsfax/",
  },
  {
    label: "TikTok" as const,
    href: "https://www.tiktok.com/@timun.sfax",
  },
];

const heading = {
  eyebrow: bilingual("Partnership", "Partenariat"),
  title: bilingual(
    "The benefits of partnering with TIMUN Sfax.",
    "Les avantages d'un partenariat avec TIMUN Sfax.",
  ),
  description: bilingual(
    "Partnering with TIMUN Sfax means supporting youth-led Model United Nations experiences in Sfax—where students practice diplomatic dialogue, develop practical skills, and engage with ideas that matter to their community and beyond.",
    "Devenir partenaire de TIMUN Sfax, c'est soutenir des expériences de modèle des Nations unies menées par des jeunes à Sfax — où les étudiants pratiquent le dialogue diplomatique, développent des compétences concrètes et s'intéressent à des enjeux qui comptent pour leur communauté et au-delà.",
  ),
};

const whyEyebrow = bilingual(
  "Why partner with us",
  "Pourquoi devenir notre partenaire",
);
const whyTitle = bilingual(
  "Support learning, dialogue, and youth initiative.",
  "Soutenez l'apprentissage, le dialogue et l'initiative des jeunes.",
);
const whyBody = bilingual(
  "TIMUN Sfax brings students together through academic simulations of UN conferences and bodies, cooperation and cultural exchange, and opportunities to build analytical, negotiation, and rhetorical skills through diplomatic language.",
  "TIMUN Sfax rassemble les étudiants autour de simulations académiques de conférences et d'organes des Nations unies, de la coopération et de l'échange culturel, ainsi que d'occasions de développer des compétences d'analyse, de négociation et de rhétorique grâce au langage diplomatique.",
);

const startEyebrow = bilingual(
  "Start the conversation",
  "Engagez la conversation",
);
const startTitle = bilingual(
  "Let’s build a partnership together.",
  "Construisons ensemble un partenariat.",
);
const startBody = bilingual(
  "Tell us how you would like to support or collaborate with TIMUN Sfax. Share your idea and the team will get back to you.",
  "Dites-nous comment vous souhaitez soutenir TIMUN Sfax ou collaborer avec elle. Partagez votre idée et l'équipe vous répondra.",
);
const contactsEyebrow = bilingual("Contacts", "Contacts");
const location = bilingual("Sfax, Tunisia", "Sfax, Tunisie");
const socialsEyebrow = bilingual("Socials", "Réseaux sociaux");
const formEyebrow = bilingual(
  "Partnership form",
  "Formulaire de partenariat",
);
const formTitle = bilingual(
  "Send your partnership request",
  "Envoyez votre demande de partenariat",
);
const formBody = bilingual(
  "Fill in the form and the TIMUN Sfax team will receive your request.",
  "Remplissez le formulaire et l'équipe de TIMUN Sfax recevra votre demande.",
);

export default function PartnerPage() {
  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <SectionHeading as="h1" {...heading} />
      </Section>

      <Section className="border-b border-line">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div data-reveal>
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={whyEyebrow} />
            </p>
            <h2 className="mt-4 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
              <T value={whyTitle} />
            </h2>
            <p className="mt-6 max-w-[62ch] text-body-lg text-muted">
              <T value={whyBody} />
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
            {supportWays.map((item, index) => (
              <li
                key={item.title.en}
                className="bg-background p-7 sm:p-8"
                data-reveal
                style={
                  { "--reveal-delay": `${index * 70}ms` } as CSSProperties
                }
              >
                <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance">
                  <T value={item.title} />
                </h3>
                <p className="mt-3 text-muted">
                  <T value={item.description} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-b border-line">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.25fr] lg:gap-16">
          <div className="space-y-10" data-reveal>
            <div>
              <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                <T value={startEyebrow} />
              </p>
              <h2 className="mt-4 font-display text-display font-extrabold leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-foreground text-balance">
                <T value={startTitle} />
              </h2>
              <p className="mt-5 max-w-[48ch] text-muted">
                <T value={startBody} />
              </p>
            </div>

            <div className="space-y-4 rounded-[var(--radius-lg)] border border-line bg-surface/30 p-7 sm:p-8">
              <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                <T value={contactsEyebrow} />
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:timunsfax@gmail.com"
                  className="block text-sm font-medium text-foreground transition-colors duration-[var(--duration-fast)] hover:text-gold-bright"
                >
                  timunsfax@gmail.com
                </a>
                <a
                  href="tel:+21626828069"
                  className="block text-sm font-medium text-foreground transition-colors duration-[var(--duration-fast)] hover:text-gold-bright"
                >
                  +216 26 828 069
                </a>
                <p className="text-sm text-muted">
                  <T value={location} />
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-[var(--radius-lg)] border border-line bg-surface/30 p-7 sm:p-8">
              <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
                <T value={socialsEyebrow} />
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-line bg-background p-7 sm:p-8 lg:p-10">
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={formEyebrow} />
            </p>
            <h2 className="mt-4 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance">
              <T value={formTitle} />
            </h2>
            <p className="mt-3 mb-8 max-w-[60ch] text-muted">
              <T value={formBody} />
            </p>
            <PartnerForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
