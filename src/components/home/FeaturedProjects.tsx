"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function FeaturedProjects() {
  useScrollReveal();
  const { locale, t } = useLanguage();

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[var(--accent-warm)]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 reveal">
          <div className="max-w-lg">
            <p className="section-label">{t.featured.label}</p>
            <h2 className="section-title mt-2">{t.featured.title}</h2>
            <p className="section-desc">
              {t.featured.description}
            </p>
          </div>
          <Link href="/projects" className="btn-secondary group flex-shrink-0">
            {t.common.viewAllProjects}
            <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal">
          {FEATURED_PROJECTS.map((project, i) => (
            (() => {
              const githubLinks =
                "githubLinks" in project && project.githubLinks
                  ? project.githubLinks
                  : [{ label: "GitHub", href: project.href }];
              const projectTitle =
                "displayTitle" in project ? project.displayTitle : project.title;
              const projectDescription =
                locale === "vi" && "descriptionVi" in project
                  ? project.descriptionVi
                  : project.description;
              const projectTags =
                locale === "vi" && "tagsVi" in project ? project.tagsVi : project.tags;

              return (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 no-underline backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent-soft)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--surface)] to-[var(--background)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-black bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent-cyan)]/30 bg-clip-text text-transparent">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[var(--accent)]/0 transition-colors duration-500 group-hover:bg-[var(--accent)]/20 flex items-center justify-center gap-3">
                      {githubLinks.map((link, linkIndex) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.common.openRepo}: ${projectTitle} ${link.label}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--foreground)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-[var(--accent-soft)]"
                          style={{ transitionDelay: `${linkIndex * 100}ms` }}
                        >
                          <GithubIcon size={18} />
                        </a>
                      ))}
                      {"liveHref" in project && project.liveHref ? (
                        <a
                          href={project.liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.common.openLive}: ${projectTitle}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--foreground)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-[var(--accent-soft)]"
                          style={{ transitionDelay: `${githubLinks.length * 100}ms` }}
                        >
                          <ExternalLink size={18} />
                        </a>
                      ) : null}
                    </div>
                    {/* Top gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--surface)]/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-[var(--foreground)] no-underline transition-colors group-hover:text-[var(--accent-cyan)]"
                    >
                      {projectTitle}
                    </a>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] line-clamp-2">
                      {projectDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {projectTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
