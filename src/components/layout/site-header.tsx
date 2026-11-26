import Image from "next/image";
import Link from "next/link";
import { LanguageToggle, T } from "@/components/i18n";
import { SiteMenu } from "@/components/layout/site-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
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

const homeLabel = bilingual("TIMUN Sfax — home", "TIMUN Sfax — accueil");
const primaryLabel = bilingual("Primary", "Principale");
const partnerLabel = bilingual("Become a Partner", "Devenir partenaire");

/**
 * Global header. One compressed optical row at every width: the five text
 * links are present from 768px upward, while narrower screens keep the logo,
 * partner CTA, language switcher, theme toggle and menu button in one row.
 */
export function SiteHeader() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-30">
      <div className="site-header-row">
        <Link
          href="/"
          aria-label={homeLabel.en}
          data-i18n-attr="aria-label"
          data-i18n-aria-label-en={homeLabel.en}
          data-i18n-aria-label-fr={homeLabel.fr}
          className="site-header-logo-link"
        >
          <Image
            src="/images/branding/timun-sfax-logo-white.png"
            alt=""
            width={1257}
            height={1257}
            preload
            className="site-header-logo"
          />
        </Link>

        <nav
          aria-label={primaryLabel.en}
          data-i18n-attr="aria-label"
          data-i18n-aria-label-en={primaryLabel.en}
          data-i18n-aria-label-fr={primaryLabel.fr}
          className="site-header-nav"
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="site-header-nav-link">
              <T value={item.label} />
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <Link href="/partner" className="site-header-cta">
            <T value={partnerLabel} />
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <SiteMenu />
        </div>
      </div>
    </header>
  );
}
