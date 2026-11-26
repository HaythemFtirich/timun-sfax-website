"use client";

import { useEffect, useRef } from "react";

type ThemeName =
  | "hero"
  | "about"
  | "numbers"
  | "principles"
  | "timeline"
  | "events"
  | "executive-board"
  | "message-team"
  | "default";

type Theme = {
  count: number;
  speed: number;
  size: [number, number];
  alpha: [number, number];
  color: [number, number, number];
  linkDist: number;
  linkAlpha: number;
  drift: [number, number];
  swirl: number;
  pulse: number;
  orbit: number;
  attractToCenter: number;
  twinkle: number;
};

const THEMES: Record<ThemeName, Theme> = {
  hero: {
    count: 70,
    speed: 0.22,
    size: [1, 2.6],
    alpha: [0.08, 0.32],
    color: [240, 201, 135],
    linkDist: 0,
    linkAlpha: 0,
    drift: [0.02, -0.18],
    swirl: 0.18,
    pulse: 0.15,
    orbit: 0,
    attractToCenter: 0,
    twinkle: 0.25,
  },
  about: {
    count: 55,
    speed: 0.16,
    size: [1.1, 2.4],
    alpha: [0.1, 0.28],
    color: [224, 208, 192],
    linkDist: 130,
    linkAlpha: 0.12,
    drift: [0.01, -0.03],
    swirl: 0.12,
    pulse: 0.1,
    orbit: 0.02,
    attractToCenter: 0,
    twinkle: 0.15,
  },
  numbers: {
    count: 60,
    speed: 0.18,
    size: [1.2, 3],
    alpha: [0.12, 0.38],
    color: [240, 201, 135],
    linkDist: 90,
    linkAlpha: 0.06,
    drift: [0, 0],
    swirl: 0.08,
    pulse: 0.45,
    orbit: 0.22,
    attractToCenter: 0.02,
    twinkle: 0.2,
  },
  principles: {
    count: 65,
    speed: 0.2,
    size: [0.9, 2.2],
    alpha: [0.07, 0.24],
    color: [216, 178, 106],
    linkDist: 110,
    linkAlpha: 0.07,
    drift: [0.16, -0.02],
    swirl: 0.22,
    pulse: 0.12,
    orbit: 0,
    attractToCenter: 0,
    twinkle: 0.12,
  },
  timeline: {
    count: 75,
    speed: 0.24,
    size: [0.8, 2.4],
    alpha: [0.08, 0.3],
    color: [240, 201, 135],
    linkDist: 100,
    linkAlpha: 0.05,
    drift: [0.12, 0.08],
    swirl: 0.28,
    pulse: 0.18,
    orbit: 0.04,
    attractToCenter: 0,
    twinkle: 0.22,
  },
  events: {
    count: 80,
    speed: 0.3,
    size: [1, 2.8],
    alpha: [0.1, 0.36],
    color: [240, 201, 135],
    linkDist: 95,
    linkAlpha: 0.08,
    drift: [0.05, -0.06],
    swirl: 0.35,
    pulse: 0.28,
    orbit: 0.06,
    attractToCenter: 0.01,
    twinkle: 0.35,
  },
  "executive-board": {
    count: 60,
    speed: 0.17,
    size: [1, 2.6],
    alpha: [0.09, 0.28],
    color: [224, 208, 192],
    linkDist: 120,
    linkAlpha: 0.09,
    drift: [0.01, -0.02],
    swirl: 0.1,
    pulse: 0.2,
    orbit: 0.05,
    attractToCenter: 0.03,
    twinkle: 0.16,
  },
  "message-team": {
    count: 55,
    speed: 0.14,
    size: [1, 2.4],
    alpha: [0.08, 0.26],
    color: [240, 201, 135],
    linkDist: 110,
    linkAlpha: 0.08,
    drift: [0, -0.01],
    swirl: 0.08,
    pulse: 0.15,
    orbit: 0,
    attractToCenter: 0.06,
    twinkle: 0.18,
  },
  default: {
    count: 55,
    speed: 0.16,
    size: [1, 2.4],
    alpha: [0.08, 0.26],
    color: [216, 178, 106],
    linkDist: 110,
    linkAlpha: 0.07,
    drift: [0.02, -0.04],
    swirl: 0.14,
    pulse: 0.12,
    orbit: 0.02,
    attractToCenter: 0,
    twinkle: 0.15,
  },
};

function themeForSection(id: string | null): ThemeName {
  if (!id) return "hero";
  if (id in THEMES) return id as ThemeName;
  return "default";
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  seed: number;
  phase: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpTheme(from: Theme, to: Theme, t: number): Theme {
  return {
    count: Math.round(lerp(from.count, to.count, t)),
    speed: lerp(from.speed, to.speed, t),
    size: [lerp(from.size[0], to.size[0], t), lerp(from.size[1], to.size[1], t)],
    alpha: [lerp(from.alpha[0], to.alpha[0], t), lerp(from.alpha[1], to.alpha[1], t)],
    color: [
      lerp(from.color[0], to.color[0], t),
      lerp(from.color[1], to.color[1], t),
      lerp(from.color[2], to.color[2], t),
    ],
    linkDist: lerp(from.linkDist, to.linkDist, t),
    linkAlpha: lerp(from.linkAlpha, to.linkAlpha, t),
    drift: [lerp(from.drift[0], to.drift[0], t), lerp(from.drift[1], to.drift[1], t)],
    swirl: lerp(from.swirl, to.swirl, t),
    pulse: lerp(from.pulse, to.pulse, t),
    orbit: lerp(from.orbit, to.orbit, t),
    attractToCenter: lerp(from.attractToCenter, to.attractToCenter, t),
    twinkle: lerp(from.twinkle, to.twinkle, t),
  };
}

function createParticle(w: number, h: number, theme: Theme): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * theme.speed,
    vy: (Math.random() - 0.5) * theme.speed,
    r: theme.size[0] + Math.random() * (theme.size[1] - theme.size[0]),
    a: theme.alpha[0] + Math.random() * (theme.alpha[1] - theme.alpha[0]),
    seed: Math.random() * 1000,
    phase: Math.random() * Math.PI * 2,
  };
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    const g = context;

    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "static";
    if (reduceMotion) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let current: ThemeName = "hero";
    let target: ThemeName = "hero";
    let blend = 1;
    let particles: Particle[] = [];
    let time = 0;
    const pointer = { x: -9999, y: -9999, active: false, down: false, impulse: 0 };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      el!.width = Math.max(1, Math.floor(width * dpr));
      el!.height = Math.max(1, Math.floor(height * dpr));
      el!.style.width = `${width}px`;
      el!.style.height = `${height}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      const theme = THEMES[target];
      const desired = Math.max(24, Math.round(theme.count * (width * height) / (1440 * 900)));
      if (particles.length === 0) {
        particles = Array.from({ length: desired }, () => createParticle(width, height, theme));
      } else if (particles.length < desired) {
        for (let i = particles.length; i < desired; i++) particles.push(createParticle(width, height, theme));
      } else if (particles.length > desired) {
        particles.length = desired;
      }
    }

    function pickActiveSection() {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id], [data-bg-section]")
      );
      if (sections.length === 0) return "default" as ThemeName;
      const center = window.innerHeight * 0.45;
      let best: { id: string | null; dist: number } = { id: null, dist: Infinity };
      for (const el of sections) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const mid = r.top + r.height * 0.35;
        const dist = Math.abs(mid - center);
        if (dist < best.dist) best = { id: el.getAttribute("id"), dist };
      }
      if (!best.id && window.scrollY < window.innerHeight * 0.7) return "hero";
      return themeForSection(best.id);
    }

    function onPointerMove(e: PointerEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    }
    function onPointerLeave() {
      pointer.active = false;
      pointer.down = false;
    }
    function onPointerDown(e: PointerEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      pointer.down = true;
      pointer.impulse = 1;
    }
    function onPointerUp() {
      pointer.down = false;
    }

    let scrollTicking = false;
    function onScroll() {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const next = pickActiveSection();
        if (next !== target) {
          current = blend < 1 ? (current as ThemeName) : target;
          target = next;
          blend = 0;
        }
        scrollTicking = false;
      });
    }

    function step() {
      if (!running) return;
      raf = requestAnimationFrame(step);
      if (document.hidden) return;
      time += 0.016;
      if (blend < 1) blend = Math.min(1, blend + 0.02);
      const theme = lerpTheme(THEMES[current], THEMES[target], blend);
      if (pointer.impulse > 0) pointer.impulse = Math.max(0, pointer.impulse - 0.03);

      g.clearRect(0, 0, width, height);
      const [cr, cg, cb] = theme.color;
      const cx = width * 0.5;
      const cy = height * 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // ambient drift
        p.vx += theme.drift[0] * 0.02;
        p.vy += theme.drift[1] * 0.02;
        // subtle orbit
        if (theme.orbit > 0.001) {
          const dxo = p.x - cx;
          const dyo = p.y - cy;
          p.vx += (-dyo) * 0.00002 * theme.orbit * 60;
          p.vy += (dxo) * 0.00002 * theme.orbit * 60;
        }
        // attract to center
        if (theme.attractToCenter > 0.001) {
          p.vx += (cx - p.x) * 0.00003 * theme.attractToCenter * 60;
          p.vy += (cy - p.y) * 0.00003 * theme.attractToCenter * 60;
        }
        // pointer interaction
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          const radius = 180;
          if (d2 < radius * radius && d2 > 0.001) {
            const d = Math.sqrt(d2);
            const f = (1 - d / radius);
            const force = (pointer.down ? 0.9 : 0.35) + pointer.impulse * 0.8;
            p.vx += (dx / d) * f * force * 0.08;
            p.vy += (dy / d) * f * force * 0.08;
            // swirl
            p.vx += (-dy / d) * f * theme.swirl * 0.08;
            p.vy += (dx / d) * f * theme.swirl * 0.08;
          }
        }

        // friction and speed cap
        p.vx *= 0.985;
        p.vy *= 0.985;
        const sp = Math.hypot(p.vx, p.vy);
        const maxSp = 0.4 + theme.speed * 1.2 + (pointer.down ? 0.6 : 0);
        if (sp > maxSp) {
          p.vx = (p.vx / sp) * maxSp;
          p.vy = (p.vy / sp) * maxSp;
        }
        p.x += p.vx + Math.sin(time * 0.4 + p.seed) * 0.08;
        p.y += p.vy + Math.cos(time * 0.35 + p.seed) * 0.08;

        // wrap
        const pad = 20;
        if (p.x < -pad) p.x = width + pad;
        if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        if (p.y > height + pad) p.y = -pad;
      }

      // links
      if (theme.linkDist > 10 && theme.linkAlpha > 0.001) {
        g.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < theme.linkDist) {
              const alpha = (1 - d / theme.linkDist) * theme.linkAlpha;
              g.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${alpha})`;
              g.beginPath();
              g.moveTo(a.x, a.y);
              g.lineTo(b.x, b.y);
              g.stroke();
            }
          }
        }
      }

      // particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pulse = 1 + Math.sin(time * (0.8 + theme.pulse) + p.phase) * 0.18 * theme.pulse;
        const tw = 1 + Math.sin(time * 2.2 + p.seed) * 0.25 * theme.twinkle;
        const r = p.r * pulse;
        const alpha = Math.max(0, Math.min(1, p.a * tw));
        const grad = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3.2);
        grad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${alpha})`);
        grad.addColorStop(0.45, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        g.fillStyle = grad;
        g.beginPath();
        g.arc(p.x, p.y, r * 3.2, 0, Math.PI * 2);
        g.fill();
      }
    }

    resize();
    onScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        // resume smoothly
      }
    });
    raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-70 mix-blend-screen"
    />
  );
}
