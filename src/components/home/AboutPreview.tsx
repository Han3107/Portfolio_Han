"use client";

import Link from "next/link";
import { Eye, Zap, FileText, Layers } from "lucide-react";
import { ABOUT_CARDS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
};

export default function AboutPreview() {
  useScrollReveal();

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
      {/* Grid BG */}
      <div className="absolute inset-0 grid-bg" />
      {/* Glow */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--accent)] opacity-20 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:gap-16 px-6 py-16 lg:py-28 lg:grid-cols-[1fr_1.2fr] items-center">
        {/* Left */}
        <div className="flex flex-col items-start reveal-left">
          <div className="max-w-2xl">
            <p className="section-label">About Me</p>
            <div className="mt-2 flex items-center gap-4">
              <h2 className="section-title">
                Ensuring software quality through meticulous testing and keen observation
              </h2>
              <span className="hidden h-px w-16 bg-[var(--accent-warm)] sm:block flex-shrink-0" />
            </div>
            <p className="section-desc">
              Focused on software quality assurance, learning modern
              testing tools, and finding bugs before users do.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/about" className="btn-secondary group">
              More About Me
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                -&gt;
              </span>
            </Link>
          </div>
        </div>

        {/* Right - Cards */}
        <div className="grid gap-6 sm:grid-cols-2 reveal">
          {ABOUT_CARDS.map((card, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-8 shadow-lg backdrop-blur-sm transition-colors hover:bg-[var(--surface)]/80 hover:border-[var(--accent-soft)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent-cyan)] ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white">
                  {iconMap[card.icon]}
                </div>
                <span className="text-sm font-semibold tracking-wider text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  {card.tag}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] group-hover:text-[var(--muted)] transition-colors">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
