"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One observer for every [data-reveal] element on the route. Elements reveal
 * once, then are unobserved. Reduced-motion and data-motion="static" land
 * everything in its finished state immediately. No animation dependency.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (targets.length === 0) return;

    const root = document.documentElement;
    const isStatic =
      root.dataset.motion === "static" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isStatic) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
