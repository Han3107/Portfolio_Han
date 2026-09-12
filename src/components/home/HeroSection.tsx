"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bug } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import TopographicBackground from "@/components/ui/TopographicBackground";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-24 top-16 h-[360px] w-[360px] rounded-full bg-[var(--accent-warm)] opacity-40 blur-[100px]" />
        <div className="absolute right-[-10%] top-[-12%] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-20 blur-[110px]" />
        <div className="absolute bottom-[-18%] left-[35%] h-[300px] w-[300px] rounded-full bg-[var(--accent-cyan)] opacity-20 blur-[90px]" />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_50%_50%,var(--hero-side-glow),transparent_58%)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 topo-bg opacity-40" />

        {/* Topographic Contour Lines & Survey Elevations */}
        <TopographicBackground />

        {/* Dynamic Glassmorphic Floating Bubbles with Wobble & Popping */}
        <FloatingBubbles />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1180px] items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:py-8">
        <div className="relative z-10 max-w-[590px] lg:pl-4 lg:pr-8">
          <h1
            className="animate-fade-in-up text-5xl font-black leading-none text-[var(--foreground)] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0s" }}
          >
            Han Han
          </h1>

          <p
            className="animate-fade-in-up mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/20 sm:text-base"
            style={{ animationDelay: "0.1s" }}
          >
            <Bug size={16} />
            {t.hero.role}
          </p>

          <p
            className="animate-fade-in-up mt-7 max-w-[560px] text-base font-medium leading-8 text-[var(--muted)] sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.intro}
          </p>

          <p
            className="animate-fade-in-up mt-4 text-sm font-semibold text-[var(--foreground)] sm:text-base"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="animate-underline-slide inline-block">
              {t.hero.note}
            </span>
          </p>

          <div
            className="animate-fade-in-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/contact" className="btn-primary">
              {t.hero.hire}
            </Link>
            <Link href="/projects" className="btn-secondary group">
              {t.hero.explore}
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center lg:min-h-[520px] lg:justify-center">
          <div className="animate-float-text pointer-events-none absolute left-[-8%] top-[36%] hidden -translate-y-1/2 whitespace-nowrap text-[64px] font-black leading-none text-[var(--accent)] opacity-[0.18] lg:block">
            {t.hero.leftWord}
          </div>

          <div
            className="animate-fade-in-up relative z-10 mt-0 lg:-mt-14"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 scale-110 rounded-full bg-[var(--accent)] opacity-25 blur-3xl" />

            <div className="relative h-[270px] w-[270px] overflow-hidden rounded-full border-[5px] border-[var(--portrait-ring)] bg-[var(--accent-warm)] shadow-2xl shadow-[var(--accent)]/20 sm:h-[320px] sm:w-[320px] lg:h-[340px] lg:w-[340px]">
              <Image
                src="/han2.jpg"
                alt={t.hero.portraitAlt}
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 270px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="animate-float-text pointer-events-none absolute right-[-8%] top-[36%] hidden -translate-y-1/2 whitespace-nowrap text-[64px] font-black leading-none text-[var(--accent)] opacity-[0.18] lg:block">
            {t.hero.rightWord}
          </div>
        </div>
      </div>
    </section>
  );
}
