"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const months = [
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
];

const languageColors = [
  "#ff4f45",
  "#ff8f70",
  "#b83f24",
  "#ffb59f",
  "#d65a3a",
  "#9f341d",
];

const languages = [
  { name: "TypeScript", value: 44.36, color: languageColors[0] },
  { name: "Java", value: 19.08, color: languageColors[1] },
  { name: "C#", value: 12.75, color: languageColors[2] },
  { name: "CSS", value: 8.6, color: languageColors[3] },
  { name: "SCSS", value: 7.75, color: languageColors[4] },
  { name: "Less", value: 7.46, color: languageColors[5] },
];

const heatLevels = [
  "border border-[var(--github-heat-empty-border)] bg-[var(--github-heat-empty)]",
  "bg-[#ffb59f]",
  "bg-[#ff8f70]",
  "bg-[#e45a32]",
  "bg-[#9f341d]",
];

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function getContributionLevel(week: number, day: number) {
  const signal = (week * 7 + day * 11 + week * day) % 17;
  const activeSeason = week > 22 && week < 51;

  if (!activeSeason && signal < 14) return 0;
  if (signal > 14) return 4;
  if (signal > 11) return 3;
  if (signal > 7) return 2;
  if (signal > 4) return 1;
  return 0;
}

function ContributionGrid() {
  const weeks = Array.from({ length: 52 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => getContributionLevel(week, day))
  );

  return (
    <div className="overflow-x-auto pb-2">
      <div className="min-w-[940px]">
        <div className="grid grid-cols-12 gap-3 px-1 text-sm font-semibold text-[var(--foreground)]/80">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <div className="mt-2 flex gap-1.5">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid gap-1.5">
              {week.map((level, dayIndex) => (
                <span
                  key={`${weekIndex}-${dayIndex}`}
                  className={`h-4 w-4 rounded-[3px] ${heatLevels[level]}`}
                  aria-label={`${level} contribution level`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguageLegend() {
  return (
    <div className="space-y-7">
      <div className="flex h-3 overflow-hidden rounded-full bg-[var(--surface-cream)]">
        {languages.map((language) => (
          <span
            key={language.name}
            className="h-full"
            style={{
              width: `${language.value}%`,
              backgroundColor: language.color,
            }}
          />
        ))}
      </div>

      <div className="grid gap-4 text-sm text-[var(--muted)] sm:grid-cols-2">
        {languages.map((language) => (
          <div key={language.name} className="flex items-center gap-2">
            <span
              className="h-3.5 w-3.5 rounded-full"
              style={{ backgroundColor: language.color }}
            />
            <span>
              {language.name} {language.value.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubActivity() {
  useScrollReveal();

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[var(--accent-warm)]/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3 reveal">
          <div className="flex h-11 w-11 items-end justify-center gap-1 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            <span className="h-4 w-1.5 rounded-full bg-[#ffb59f]" />
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="h-5 w-1.5 rounded-full bg-[#9f341d]" />
          </div>
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">
            GitHub Stats
          </h2>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] bg-[var(--github-card-bg)] p-6 shadow-sm reveal lg:p-8">
          <ContributionGrid />
          <div className="mt-4 h-5 rounded-[4px] bg-[var(--github-scroll-bg)] px-3">
            <div className="flex h-full items-center gap-2">
              <span className="h-0 w-0 border-y-[5px] border-r-[7px] border-y-transparent border-r-[var(--muted)]/50" />
              <div className="h-2 flex-1 rounded-full bg-[var(--github-scroll-track)]" />
              <span className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-[var(--muted)]/50" />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-4 text-lg font-medium text-[var(--foreground)] sm:flex-row sm:items-center sm:justify-between">
            <span>329 contributions in the last year</span>
            <div className="flex items-center gap-2 text-base text-[var(--foreground)]/80">
              <span>Less</span>
              {heatLevels.map((levelClass, level) => (
                <span
                  key={level}
                  className={`h-4 w-4 rounded-[3px] ${levelClass}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)]/72 p-6 shadow-sm backdrop-blur-sm reveal lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[8px] border border-[var(--border)] bg-[var(--surface-cream)]/60 p-6 text-center">
                <p className="text-4xl font-bold text-[var(--accent)]">300+</p>
                <p className="mt-2 text-[var(--muted)]">Commits</p>
              </div>
              <div className="rounded-[8px] border border-[var(--border)] bg-[var(--surface-cream)]/60 p-6 text-center">
                <p className="text-4xl font-bold text-[#9f341d]">10+</p>
                <p className="mt-2 text-[var(--muted)]">Projects</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                Core Stack
              </p>
              <p className="mt-4 text-xl font-bold text-transparent bg-gradient-to-r from-[var(--accent)] via-[var(--accent-cyan)] to-[#9f341d] bg-clip-text">
                NestJS - Next.js - PostgreSQL
              </p>
            </div>
          </div>

          <div className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)]/72 p-6 shadow-sm backdrop-blur-sm reveal lg:p-10">
            <h3 className="mb-8 text-3xl font-semibold text-[var(--foreground)]">
              Most Used Languages
            </h3>
            <LanguageLegend />
          </div>
        </div>

        <div className="mt-10 flex justify-center reveal">
          <a
            href="https://github.com/Han3107"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-4 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-8 text-sm font-bold text-[var(--foreground)] no-underline shadow-sm transition hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-cream)]"
          >
            <GithubIcon size={22} />
            View Full Profile on GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
