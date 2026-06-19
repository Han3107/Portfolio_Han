"use client";

import { Code2, Database, Monitor, Server, Smartphone, Wrench } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const skillIcons = [
  <Code2 size={24} key="programming" />,
  <Server size={24} key="backend" />,
  <Database size={24} key="database" />,
  <Monitor size={24} key="frontend" />,
  <Smartphone size={24} key="mobile" />,
  <Wrench size={24} key="tools" />,
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent)]/15 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32 text-center">
          <p className="section-label">{t.aboutPage.label}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
            {t.aboutPage.titleA}{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
              {t.aboutPage.titleB}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-zinc-400 leading-7">
            {t.aboutPage.description}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="section-label">{t.aboutPage.skillsLabel}</p>
            <h2 className="section-title mt-2">{t.aboutPage.skillsTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.skills.map((skill, i) => (
              <div key={i} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-soft)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent-cyan)] ring-1 ring-[var(--border)] transition-all group-hover:bg-[var(--accent)] group-hover:text-white group-hover:scale-110">
                  {skillIcons[i]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{skill.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="section-label">{t.aboutPage.journeyLabel}</p>
            <h2 className="section-title mt-2">{t.aboutPage.journeyTitle}</h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-cyan)] to-transparent" />
            <div className="flex flex-col gap-8">
              {t.timeline.map((item, i) => (
                <div key={i} className="relative pl-16">
                  {/* Dot */}
                  <div className="absolute left-[18px] top-1 h-3 w-3 rounded-full border-2 border-[var(--accent-cyan)] bg-[var(--background)]" />
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/30 p-6 backdrop-blur-sm">
                    <span className="inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-cyan)]">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="text-sm text-[var(--accent-cyan)]">{item.place}</p>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
