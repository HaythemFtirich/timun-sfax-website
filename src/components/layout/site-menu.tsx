"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { T } from "@/components/i18n";
import { bilingual } from "@/lib/i18n";

const menuItems = [
  { href: "/", label: bilingual("Home", "Accueil") },
  { href: "/events", label: bilingual("Events", "Événements") },
  {
    href: "/executive-board",
    label: bilingual("Executive Board", "Bureau exécutif"),
  },
  { href: "/study-guides", label: bilingual("Study Guides", "Guides d'étude") },
  { href: "/socials", label: bilingual("Socials", "Réseaux sociaux") },
];

const menuLabel = bilingual("Site menu", "Menu du site");
const navigateLabel = bilingual("Navigate", "Naviguer");
const partnerLabel = bilingual("Become a Partner", "Devenir partenaire");

function subscribeNoop() {
  return () => {};
}

export function SiteMenu() {
  const [open, setOpen] = useState(false);
  const [renderPanel, setRenderPanel] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) {
      setOpen(false);
    }
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (open) {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      return;
    }
    if (!renderPanel) return;
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setRenderPanel(false);
      closeTimeoutRef.current = null;
    }, 260);
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, [open, renderPanel]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    const id = window.requestAnimationFrame(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(id);
    };
  }, [open]);

  function openMenu() {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setRenderPanel(true);
    setOpen(true);
  }

  function closeMenu(focusButton = false) {
    setOpen(false);
    if (focusButton) {
      buttonRef.current?.focus();
    }
  }

  const label = open
    ? bilingual("Close menu", "Fermer le menu")
    : bilingual("Open menu", "Ouvrir le menu");

  const panel =
    mounted && renderPanel
      ? createPortal(
          <div
            className={`site-menu-overlay ${open ? "is-open" : ""}`}
            aria-hidden={!open}
            style={{ position: "fixed", inset: 0, zIndex: 50 }}
          >
            <div
              className="site-menu-backdrop"
              onClick={() => closeMenu(true)}
              aria-hidden="true"
            />
            <nav
              id="site-menu-panel"
              ref={panelRef}
              className={`site-menu-panel ${open ? "is-open" : ""}`}
              aria-label={menuLabel.en}
              data-i18n-attr="aria-label"
              data-i18n-aria-label-en={menuLabel.en}
              data-i18n-aria-label-fr={menuLabel.fr}
              style={{ position: "absolute", inset: 0 }}
            >
              <div className="site-menu-inner">
                <p className="site-menu-eyebrow">
                  <T value={navigateLabel} />
                </p>
                <ul className="site-menu-list">
                  {menuItems.map((item, index) => (
                    <li
                      key={item.href}
                      className="site-menu-item"
                      style={{ ["--menu-delay" as string]: `${index * 35}ms` }}
                    >
                      <Link
                        href={item.href}
                        className="site-menu-link"
                        onClick={() => closeMenu(false)}
                        tabIndex={open ? 0 : -1}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        <T value={item.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className="site-menu-cta-wrap"
                  style={{
                    ["--menu-delay" as string]: `${menuItems.length * 35}ms`,
                  }}
                >
                  <Link
                    href="/partner"
                    className="site-menu-cta"
                    onClick={() => closeMenu(false)}
                    tabIndex={open ? 0 : -1}
                    aria-current={pathname === "/partner" ? "page" : undefined}
                  >
                    <T value={partnerLabel} />
                  </Link>
                </div>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={`site-menu-button ${open ? "is-open" : ""}`}
        aria-label={label.en}
        data-i18n-attr="aria-label"
        data-i18n-aria-label-en={label.en}
        data-i18n-aria-label-fr={label.fr}
        aria-expanded={open}
        aria-controls="site-menu-panel"
        onClick={() => (open ? closeMenu(true) : openMenu())}
      >
        <span className="site-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      {panel}
    </>
  );
}
