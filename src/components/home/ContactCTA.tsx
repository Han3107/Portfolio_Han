"use client";

import Link from "next/link";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactCTA() {
  useScrollReveal();

  return (
    <section className="relative bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center reveal">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] shadow-lg shadow-[var(--accent)]/25">
          <MessageSquare size={28} className="text-[var(--foreground)]" />
        </div>

        <p className="section-label">Get In Touch</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--muted)] leading-7">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            <Mail size={18} className="mr-2" />
            Send a Message
          </Link>
          <a href="mailto:contact@hanhan.dev" className="btn-secondary group">
            <Send size={16} className="mr-2" />
            contact@hanhan.dev
          </a>
        </div>

        {/* Decorative dots */}
        <div className="mt-16 flex items-center justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]"
              style={{
                opacity: i === 2 ? 1 : 0.3 + i * 0.15,
                background: i === 2 ? "var(--accent-cyan)" : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
