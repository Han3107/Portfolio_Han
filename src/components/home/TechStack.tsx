"use client";

import { TECH_STACK, type TechItem } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

const TECH_GROUPS = [
  {
    title: "Languages",
    items: ["HTML5", "Java", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "NestJS"],
  },
  {
    title: "Database",
    items: ["SQL Server", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Docker", "Postman"],
  },
] as const;

const TECH_BY_NAME = new Map(TECH_STACK.map((tech) => [tech.name, tech]));

function TechBadge({ name, level, color, viewBox = "0 0 24 24", icon }: TechItem) {
  return (
    <div className="group flex min-h-14 items-center gap-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm transition-all duration-300 hover:border-[var(--accent-cyan)] hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-cream)]/70 transition-transform duration-300 group-hover:scale-110">
        <svg
          viewBox={viewBox}
          className="h-5 w-5 flex-shrink-0 transition-colors"
          style={{ fill: color }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d={icon} />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-[var(--foreground)]">
          {name}
        </p>
        <p className="mt-0.5 text-xs text-[var(--muted)]">{level}</p>
      </div>
    </div>
  );
}

export default function TechStack() {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center reveal">
          <div className="max-w-2xl">
            <p className="section-label">{t.techStack.label}</p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <h2 className="section-title">{t.techStack.title}</h2>
            </div>
            <p className="section-desc">{t.techStack.description}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TECH_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/35 p-5 shadow-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                {group.title}
              </h3>
              <div className="mt-4 grid gap-3">
                {group.items.map((name) => {
                  const tech = TECH_BY_NAME.get(name);
                  return tech ? <TechBadge key={name} {...tech} /> : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
