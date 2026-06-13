"use client";

import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    issuedDate: "12/02/2026",
    expiryDate: "12/02/2029",
    description:
      "Certified in having demonstrated the knowledge, skills, and basic competencies needed to use Google AI.",
  },
];

export default function CertificationsPreview() {
  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute right-10 top-12 h-64 w-64 rounded-full bg-[var(--accent-cyan)]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between reveal">
          <div className="max-w-2xl">
            <p className="section-label">Achievements</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Recognized certifications demonstrating expertise and commitment
              to professional development.
            </p>
          </div>

          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-cyan)] hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-1 reveal"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent-cyan)] ring-1 ring-[var(--border)] transition-all group-hover:bg-[var(--accent)] group-hover:text-white">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent-cyan)]">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="mt-4 flex gap-4 text-sm">
                    <div>
                      <span className="text-[var(--muted)]">Issued: </span>
                      <span className="font-semibold text-[var(--foreground)]">
                        {cert.issuedDate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[var(--muted)]">Valid Until: </span>
                      <span className="font-semibold text-[var(--foreground)]">
                        {cert.expiryDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
