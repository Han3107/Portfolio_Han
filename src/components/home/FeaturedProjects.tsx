"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FeaturedProjects() {
  useScrollReveal();

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[var(--accent-warm)]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 reveal">
          <div className="max-w-lg">
            <p className="section-label">Featured Work</p>
            <h2 className="section-title mt-2">Latest Projects That Recently Done</h2>
            <p className="section-desc">
              Explore my recent projects showcasing software testing skills.
            </p>
          </div>
          <Link href="/projects" className="btn-secondary group flex-shrink-0">
            View All Projects
            <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal">
          {FEATURED_PROJECTS.map((project, i) => (
            <a
              key={i}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
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
                <div className="absolute inset-0 bg-[var(--accent)]/0 transition-colors duration-500 group-hover:bg-[var(--accent)]/20 flex items-center justify-center">
                  <ExternalLink size={24} className="text-[var(--foreground)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75" />
                </div>
                {/* Top gradient */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--surface)]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
