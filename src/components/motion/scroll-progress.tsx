"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

function getScrollProgress() {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop || 0;
  const max = Math.max(doc.scrollHeight - window.innerHeight, 0);
  return max > 0 ? Math.min(Math.max(scrollTop / max, 0), 1) : 0;
}

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const update = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.transform = `scaleX(${getScrollProgress()})`;
  }, []);

  useEffect(() => {
    let raf = 0;

    const requestUpdate = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("load", requestUpdate);

    const root = document.documentElement;
    const body = document.body;
    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(root);
    if (body) resizeObserver.observe(body);

    const mutationObserver = new MutationObserver(requestUpdate);
    if (body) {
      mutationObserver.observe(body, {
        childList: true,
        subtree: true,
        attributes: false,
      });
    }

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("load", requestUpdate);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [update]);

  useEffect(() => {
    const id = window.requestAnimationFrame(update);
    const timeout = window.setTimeout(update, 120);
    return () => {
      window.cancelAnimationFrame(id);
      window.clearTimeout(timeout);
    };
  }, [pathname, update]);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        zIndex: 120,
        pointerEvents: "none",
        transformOrigin: "left center",
        transform: "scaleX(0)",
        background:
          "linear-gradient(90deg, var(--gold) 0%, var(--gold-bright) 100%)",
        boxShadow:
          "0 0 12px rgba(240, 201, 135, 0.35), 0 0 2px rgba(240, 201, 135, 0.4)",
        willChange: "transform",
      }}
    />
  );
}
