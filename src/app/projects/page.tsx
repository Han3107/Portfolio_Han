import type { Metadata } from "next";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Projects - Han Han Portfolio",
  description: "Browse my portfolio of software testing projects showcasing QA methodologies.",
};

const allProjects = [
  ...FEATURED_PROJECTS,
  {
    title: "225DHPC",
    description: "A C++ coursework repository focused on programming fundamentals and academic problem solving.",
    tags: ["C++", "Coursework", "Problem Solving"],
    image: "/images/projects/blog.jpg",
    href: "https://github.com/Han3107/225DHPC",
  },
  {
    title: "225_LTM",
    description: "An HTML project repository connected to networking coursework and web interface practice.",
    tags: ["HTML", "Networking", "Coursework"],
    image: "/images/projects/chat.jpg",
    href: "https://github.com/Han3107/225_LTM",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent-warm)]/10 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32 text-center">
          <p className="section-label">Projects</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
            My{" "}
            <span className="bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent)] bg-clip-text text-transparent">
              Creative Work
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)] leading-7">
            A collection of projects that showcase my skills in software testing,
            from manual testing to automation solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, i) => (
              <a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 no-underline backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent-soft)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[var(--surface)] to-[var(--background)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl font-black bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-cyan)]/20 bg-clip-text text-transparent select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[var(--accent)]/0 transition-colors duration-500 group-hover:bg-[var(--accent)]/10 flex items-center justify-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--foreground)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-[var(--accent-soft)]">
                      <ExternalLink size={18} />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--foreground)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-[var(--accent-soft)]" style={{ transitionDelay: "100ms" }}>
                      <GithubIcon size={18} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-cyan)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
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
    </>
  );
}
