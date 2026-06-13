"use client";

import { TECH_STACK } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function TechBadge({ name, level, color, icon }: { name: string; level: string; color: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-6 py-3 shadow-sm backdrop-blur-md transition-colors hover:bg-[var(--surface)] hover:border-[var(--accent-soft)] flex-shrink-0">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 flex-shrink-0"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon} />
      </svg>
      <span className="text-base font-medium text-[var(--foreground)]">{name}</span>
      <span className="ml-1 rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--muted)]">
        {level}
      </span>
    </div>
  );
}

export default function TechStack() {
  useScrollReveal();

  // Duplicate items for seamless infinite scroll
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent-cyan)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6 mb-12">
        <div className="text-center flex flex-col items-center reveal">
          <div className="max-w-2xl">
            <p className="section-label">My Tech Stack</p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <h2 className="section-title">
                Tools & Technologies I Work With
              </h2>
            </div>
            <p className="section-desc">
              A comprehensive list of technologies I use to bring ideas to life.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-container mt-12">
        <div className="marquee-track animate-marquee">
          {items.map((tech, i) => (
            <TechBadge key={`r1-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse */}
      <div className="marquee-container mt-4">
        <div
          className="marquee-track animate-marquee"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...items].reverse().map((tech, i) => (
            <TechBadge key={`r2-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
