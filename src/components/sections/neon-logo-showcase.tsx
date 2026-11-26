"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Decorative, interactive neon-accented TIMUN Sfax logo floating on the site
 * background. Mouse/touch tilts and shifts a soft glow; hover/touch zooms in
 * and increases shine, click gives a subtle pulse.
 */
export function NeonLogoShowcase() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ rx: 0, ry: 0, mx: 50, my: 50, glow: 0, burst: 0, scale: 1 });
  const current = useRef({ rx: 0, ry: 0, mx: 50, my: 50, glow: 0, burst: 0, scale: 1 });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "static";

    let hovering = false;

    const setVars = () => {
      const c = current.current;
      wrap.style.setProperty("--rx", `${c.rx.toFixed(3)}deg`);
      wrap.style.setProperty("--ry", `${c.ry.toFixed(3)}deg`);
      wrap.style.setProperty("--mx", `${c.mx.toFixed(2)}%`);
      wrap.style.setProperty("--my", `${c.my.toFixed(2)}%`);
      wrap.style.setProperty("--glow", c.glow.toFixed(3));
      wrap.style.setProperty("--burst", c.burst.toFixed(3));
      wrap.style.setProperty("--scale", c.scale.toFixed(4));
      wrap.style.setProperty("--tx", `${(-c.ry * 0.8).toFixed(2)}px`);
      wrap.style.setProperty("--ty", `${(c.rx * 0.8).toFixed(2)}px`);
    };

    if (reduceMotion) {
      setVars();
      return;
    }

    let raf = 0;
    const animate = () => {
      const t = target.current;
      const c = current.current;
      const ease = 0.08;
      c.rx += (t.rx - c.rx) * ease;
      c.ry += (t.ry - c.ry) * ease;
      c.mx += (t.mx - c.mx) * ease;
      c.my += (t.my - c.my) * ease;
      c.glow += (t.glow - c.glow) * 0.07;
      c.burst += (t.burst - c.burst) * 0.1;
      c.scale += (t.scale - c.scale) * 0.08;
      // relax targets
      t.rx += (0 - t.rx) * 0.04;
      t.ry += (0 - t.ry) * 0.04;
      t.burst += (0 - t.burst) * 0.1;
      if (!hovering) {
        t.glow += (0.06 - t.glow) * 0.05;
        t.scale += (1 - t.scale) * 0.06;
      }
      setVars();
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: PointerEvent) => {
      hovering = true;
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / Math.max(r.width, 1);
      const py = (e.clientY - r.top) / Math.max(r.height, 1);
      const dx = px - 0.5;
      const dy = py - 0.5;
      target.current.ry = dx * 10;
      target.current.rx = -dy * 8;
      target.current.mx = px * 100;
      target.current.my = py * 100;
      target.current.glow = 0.75;
      target.current.scale = 1.08;
    };

    const onLeave = () => {
      hovering = false;
      target.current.ry = 0;
      target.current.rx = 0;
      target.current.mx = 50;
      target.current.my = 50;
      target.current.glow = 0.06;
      target.current.scale = 1;
    };

    const onDown = (e: PointerEvent) => {
      hovering = true;
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / Math.max(r.width, 1);
      const py = (e.clientY - r.top) / Math.max(r.height, 1);
      target.current.mx = px * 100;
      target.current.my = py * 100;
      target.current.burst = 0.6;
      target.current.glow = 0.85;
      target.current.scale = 1.1;
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("pointerdown", onDown);
    wrap.addEventListener("pointercancel", onLeave);
    target.current.glow = 0.06;
    setVars();
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointerdown", onDown);
      wrap.removeEventListener("pointercancel", onLeave);
    };
  }, []);

  const logoLayer =
    "pointer-events-none absolute inset-0 m-auto h-auto w-[min(60vw,340px)] max-w-[340px] select-none object-contain sm:w-[min(50vw,380px)] sm:max-w-[380px]";

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden py-0 sm:py-2"
    >
      <div className="relative mx-auto w-full max-w-[1280px] px-[var(--gutter)]">
        <div
          ref={wrapRef}
          className="neon-logo-wrap relative mx-auto flex h-[260px] cursor-pointer items-center justify-center sm:h-[320px]"
          style={
            {
              perspective: "1200px",
              "--rx": "0deg",
              "--ry": "0deg",
              "--mx": "50%",
              "--my": "50%",
              "--glow": "0.06",
              "--burst": "0",
              "--scale": "1",
              "--tx": "0px",
              "--ty": "0px",
            } as React.CSSProperties
          }
        >
          {/* soft cursor spotlight */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: "calc(var(--glow) * 0.9)",
              background:
                "radial-gradient(360px circle at var(--mx) var(--my), rgba(240,201,135,0.14), rgba(0,255,242,0.08) 35%, transparent 70%)",
            }}
          />

          <div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(var(--rx)) rotateY(var(--ry)) translate3d(var(--tx), var(--ty), 0) scale(var(--scale))",
            }}
          >
            {/* soft bloom */}
            <div
              className="pointer-events-none absolute inset-0 m-auto h-[min(60vw,340px)] w-[min(60vw,340px)] rounded-full blur-3xl sm:h-[380px] sm:w-[380px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(240,201,135,0.18), rgba(0,255,242,0.1) 45%, transparent 72%)",
                opacity: "calc(0.08 + var(--glow) * 0.45 + var(--burst) * 0.2)",
                transform: "translateZ(-40px) scale(1.05)",
              }}
            />

            {/* subtle cyan edge */}
            <div
              className="neon-flicker-alt pointer-events-none absolute inset-0 flex items-center justify-center"
              style={{
                transform: "translate3d(-2px, 1px, -8px)",
                filter:
                  "drop-shadow(0 0 6px rgba(0,255,242,0.22)) drop-shadow(0 0 14px rgba(0,255,242,0.1))",
                opacity: "calc(0.06 + var(--glow) * 0.4)",
                mixBlendMode: "screen",
              }}
            >
              <Image
                src="/images/branding/timun-sfax-logo-white.png"
                alt=""
                width={1257}
                height={1257}
                className={logoLayer}
                style={{ filter: "url(#neon-cyan-soft)" }}
                priority={false}
              />
            </div>

            {/* subtle magenta edge */}
            <div
              className="neon-flicker pointer-events-none absolute inset-0 flex items-center justify-center"
              style={{
                transform: "translate3d(2px, -1px, -6px)",
                filter:
                  "drop-shadow(0 0 6px rgba(255,0,200,0.18)) drop-shadow(0 0 14px rgba(255,0,200,0.08))",
                opacity: "calc(0.04 + var(--glow) * 0.34)",
                mixBlendMode: "screen",
              }}
            >
              <Image
                src="/images/branding/timun-sfax-logo-white.png"
                alt=""
                width={1257}
                height={1257}
                className={logoLayer}
                style={{ filter: "url(#neon-magenta-soft)" }}
                priority={false}
              />
            </div>

            {/* warm core glow */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              style={{
                transform: "translateZ(6px)",
                filter:
                  "drop-shadow(0 0 6px rgba(240,201,135,0.18)) drop-shadow(0 0 14px rgba(216,178,106,0.1))",
                opacity: "calc(0.35 + var(--glow) * 0.55 + var(--burst) * 0.1)",
              }}
            >
              <Image
                src="/images/branding/timun-sfax-logo-white.png"
                alt=""
                width={1257}
                height={1257}
                className={logoLayer}
                style={{ filter: "url(#neon-gold-soft)" }}
                priority={false}
              />
            </div>

            {/* crisp PNG core */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              style={{
                transform: "translateZ(14px)",
                filter: "drop-shadow(0 0 4px rgba(255,255,255,0.1))",
                opacity: 0.97,
              }}
            >
              <Image
                src="/images/branding/timun-sfax-logo-white.png"
                alt=""
                width={1257}
                height={1257}
                className={logoLayer}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SVG color filters for subtle neon tints */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <filter id="neon-cyan-soft" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.35 0 0 0 0
                      0 1 0 0 0.45
                      0 0 1 0 0.5
                      0 0 0 1 0"
            />
          </filter>
          <filter id="neon-magenta-soft" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.45
                      0 0.45 0 0 0.1
                      0 0 1 0 0.4
                      0 0 0 1 0"
            />
          </filter>
          <filter id="neon-gold-soft" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.55
                      0 0.9 0 0 0.45
                      0 0 0.7 0 0.25
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
