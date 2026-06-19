"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const posts = [
  {
    title: "Getting Started with Next.js 15: What's New",
    titleVi: "Bắt đầu với Next.js 15: Có gì mới",
    excerpt: "Explore the latest features in Next.js 15 including the new App Router improvements, server components, and performance optimizations.",
    excerptVi: "Tìm hiểu các tính năng mới trong Next.js 15 như cải tiến App Router, server components và tối ưu hiệu năng.",
    date: "2026-05-20",
    readTime: "5 min read",
    readTimeVi: "5 phút đọc",
    category: "Next.js",
    slug: "#",
  },
  {
    title: "Building a Design System with TailwindCSS",
    titleVi: "Xây dựng Design System với TailwindCSS",
    excerpt: "Learn how to create a consistent and reusable design system using TailwindCSS, custom properties, and component patterns.",
    excerptVi: "Cách tạo design system nhất quán, có thể tái sử dụng bằng TailwindCSS, custom properties và component patterns.",
    date: "2026-04-15",
    readTime: "8 min read",
    readTimeVi: "8 phút đọc",
    category: "CSS",
    slug: "#",
  },
  {
    title: "TypeScript Best Practices for React Developers",
    titleVi: "Các thực hành TypeScript tốt cho React Developer",
    excerpt: "Master TypeScript patterns that will make your React code more type-safe, maintainable, and developer-friendly.",
    excerptVi: "Nắm các pattern TypeScript giúp code React an toàn kiểu dữ liệu hơn, dễ bảo trì và thân thiện với developer.",
    date: "2026-03-10",
    readTime: "6 min read",
    readTimeVi: "6 phút đọc",
    category: "TypeScript",
    slug: "#",
  },
  {
    title: "Understanding RESTful API Design Principles",
    titleVi: "Hiểu nguyên tắc thiết kế RESTful API",
    excerpt: "A comprehensive guide to designing clean, intuitive, and scalable REST APIs following industry best practices.",
    excerptVi: "Hướng dẫn thiết kế REST API rõ ràng, dễ dùng và có khả năng mở rộng theo các thực hành phổ biến.",
    date: "2026-02-22",
    readTime: "7 min read",
    readTimeVi: "7 phút đọc",
    category: "Backend",
    slug: "#",
  },
];

export default function BlogPage() {
  const { locale, t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent)]/15 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32 text-center">
          <p className="section-label">{t.blog.label}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
            {t.blog.titleA}{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
              {t.blog.titleB}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)] leading-7">
            {t.blog.description}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-soft)] hover:bg-[var(--surface)]/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Number */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent-cyan)] font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="flex-1">
                    {/* Category */}
                    <span className="inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-cyan)]">
                      {post.category}
                    </span>
                    
                    <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-cyan)] transition-colors">
                      <Link href={post.slug} className="no-underline text-inherit">
                        {locale === "vi" ? post.titleVi : post.title}
                      </Link>
                    </h2>
                    
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {locale === "vi" ? post.excerptVi : post.excerpt}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted)]">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {locale === "vi" ? post.readTimeVi : post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all group-hover:border-[var(--accent-cyan)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
