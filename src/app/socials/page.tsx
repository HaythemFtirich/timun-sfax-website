import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { T } from "@/components/i18n";
import { Section, SectionHeading } from "@/components/ui";
import { bilingual } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Socials",
  description: "Official TIMUN Sfax social media channels and contact email.",
  openGraph: {
    title: "Socials | TIMUN Sfax",
    description: "Official TIMUN Sfax social media channels and contact email.",
  },
};

type ChannelKey =
  | "LinkedIn"
  | "Facebook"
  | "Instagram"
  | "TikTok"
  | "Email"
  | "Phone";

const channels: {
  icon: ChannelKey;
  label: ReturnType<typeof bilingual>;
  href: string;
  handle: string;
  external: boolean;
}[] = [
  {
    icon: "LinkedIn",
    label: bilingual("LinkedIn", "LinkedIn"),
    href: "https://www.linkedin.com/company/timun-sfax/",
    handle: "TIMUN Sfax",
    external: true,
  },
  {
    icon: "Facebook",
    label: bilingual("Facebook", "Facebook"),
    href: "https://www.facebook.com/TIMUNSFAX/?locale=fr_FR",
    handle: "TIMUNSFAX",
    external: true,
  },
  {
    icon: "Instagram",
    label: bilingual("Instagram", "Instagram"),
    href: "https://www.instagram.com/timunsfax/",
    handle: "@timunsfax",
    external: true,
  },
  {
    icon: "TikTok",
    label: bilingual("TikTok", "TikTok"),
    href: "https://www.tiktok.com/@timun.sfax",
    handle: "@timun.sfax",
    external: true,
  },
  {
    icon: "Email",
    label: bilingual("Email", "E-mail"),
    href: "mailto:timunsfax@gmail.com",
    handle: "timunsfax@gmail.com",
    external: false,
  },
  {
    icon: "Phone",
    label: bilingual("Phone", "Téléphone"),
    href: "tel:+21626828069",
    handle: "+216 26 828 069",
    external: false,
  },
];

const heading = {
  eyebrow: bilingual("Socials", "Réseaux sociaux"),
  title: bilingual("Follow TIMUN Sfax.", "Suivez TIMUN Sfax."),
  description: bilingual(
    "Find us on our official channels.",
    "Retrouvez-nous sur nos canaux officiels.",
  ),
};

export default function SocialsPage() {
  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <SectionHeading as="h1" {...heading} />
      </Section>

      <Section className="border-b border-line">
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <li key={channel.icon} className="min-w-0">
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                aria-label={channel.label.en}
                data-i18n-attr="aria-label"
                data-i18n-aria-label-en={channel.label.en}
                data-i18n-aria-label-fr={channel.label.fr}
                className="group flex h-full flex-col items-center justify-center bg-background p-10 text-center transition-colors duration-[var(--duration-fast)] hover:bg-surface/60 focus-visible:outline-offset-[-2px] sm:p-12"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-[var(--radius-md)] border border-line text-gold-bright transition-all duration-[var(--duration-fast)] group-hover:scale-[1.04] group-hover:border-gold group-hover:bg-surface/60 group-hover:text-gold">
                  <ChannelIcon icon={channel.icon} />
                </span>
                <span className="mt-6 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
                  <T value={channel.label} />
                </span>
                <span className="mt-2 text-sm text-muted">{channel.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

function ChannelIcon({ icon }: { icon: ChannelKey }) {
  return <ChannelIconOnly icon={icon} />;
}

function ChannelIconOnly({ icon }: { icon: ChannelKey }) {
  return (
    <span className="pointer-events-none">
      {icon === "LinkedIn" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
      ) : icon === "Facebook" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
      ) : icon === "Instagram" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current" focusable="false"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
      ) : icon === "TikTok" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current" focusable="false"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
      ) : icon === "Phone" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current" focusable="false"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" /></svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9 fill-current" focusable="false"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
      )}
    </span>
  );
}
