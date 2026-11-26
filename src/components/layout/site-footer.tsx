import Image from "next/image";
import Link from "next/link";
import { T } from "@/components/i18n";
import { Container } from "@/components/ui";
import { SocialLink } from "@/components/ui/social-icons";
import { bilingual } from "@/lib/i18n";

const nav = [
  { href: "/", label: bilingual("Home", "Accueil") },
  { href: "/events", label: bilingual("Events", "Événements") },
  {
    href: "/executive-board",
    label: bilingual("Executive Board", "Bureau exécutif"),
  },
  { href: "/study-guides", label: bilingual("Study Guides", "Guides d'étude") },
  { href: "/socials", label: bilingual("Socials", "Réseaux sociaux") },
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

const homeLabel = bilingual("TIMUN Sfax — home", "TIMUN Sfax — accueil");
const nationalLogoAlt = bilingual(
  "TIMUN national logo",
  "Logo national de TIMUN",
);
const footerNavLabel = bilingual(
  "Footer navigation",
  "Navigation de pied de page",
);
const navHeading = bilingual("Navigation", "Navigation");
const followHeading = bilingual("Follow TIMUN Sfax", "Suivez TIMUN Sfax");
const madeBy = bilingual(
  "Website made by Haythem Ftirich",
  "Site réalisé par Haythem Ftirich",
);
const rights = bilingual(
  "All legal rights belong to TIMUN Sfax.",
  "Tous les droits légaux appartiennent à TIMUN Sfax.",
);

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-line bg-surface">
      <Container className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <div className="site-footer-brand-logos">
              <Link
                href="/"
                aria-label={homeLabel.en}
                data-i18n-attr="aria-label"
                data-i18n-aria-label-en={homeLabel.en}
                data-i18n-aria-label-fr={homeLabel.fr}
                className="inline-flex shrink-0 rounded-sm focus-visible:outline-offset-4"
              >
                <Image
                  src="/images/branding/timun-sfax-logo.png"
                  alt=""
                  width={1257}
                  height={1257}
                  className="site-footer-logo"
                />
              </Link>
              <span aria-hidden="true" className="site-footer-separator" />
              <Image
                src="/images/branding/timun-national-logo.png"
                alt={nationalLogoAlt.en}
                data-i18n-attr="alt"
                data-i18n-alt-en={nationalLogoAlt.en}
                data-i18n-alt-fr={nationalLogoAlt.fr}
                width={240}
                height={240}
                className="site-footer-national-logo"
              />
            </div>
          </div>

          <nav
            aria-label={footerNavLabel.en}
            data-i18n-attr="aria-label"
            data-i18n-aria-label-en={footerNavLabel.en}
            data-i18n-aria-label-fr={footerNavLabel.fr}
            className="site-footer-nav"
          >
            <p className="site-footer-heading font-mono uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={navHeading} />
            </p>
            <ul className="site-footer-list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer-link">
                    <T value={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-contact">
            <p className="site-footer-heading font-mono uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={followHeading} />
            </p>
            <div className="site-footer-socials">
              {socials.map((social) => (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
            <a
              href="mailto:timunsfax@gmail.com"
              className="site-footer-contact-link"
            >
              timunsfax@gmail.com
            </a>
            <a href="tel:+21626828069" className="site-footer-contact-link">
              +216 26 828 069
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>
            <T value={madeBy} />
          </p>
          <p>
            <T value={rights} />
          </p>
        </div>
      </Container>
    </footer>
  );
}
