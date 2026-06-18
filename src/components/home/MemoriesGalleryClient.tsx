"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  Grid3X3,
  Maximize2,
  Minimize2,
  Shuffle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type GalleryMode = "even" | "wide" | "small";

interface MemoriesGalleryClientProps {
  images: string[];
}

const MODE_BUTTONS: Array<{
  label: string;
  mode: GalleryMode;
  icon: ReactNode;
}> = [
  { label: "Balanced", mode: "even", icon: <Grid3X3 size={16} /> },
  { label: "Wide", mode: "wide", icon: <Maximize2 size={16} /> },
  { label: "Compact", mode: "small", icon: <Minimize2 size={16} /> },
];

function shuffleImages(images: string[], seed: number) {
  return images
    .map((image, index) => {
      const value = Math.sin((index + 1) * 999 + seed * 77) * 10000;
      return { image, order: value - Math.floor(value) };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ image }) => image);
}

export default function MemoriesGalleryClient({
  images,
}: MemoriesGalleryClientProps) {
  const [mode, setMode] = useState<GalleryMode>("even");
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useScrollReveal();

  const galleryImages = useMemo(
    () => (shuffleSeed === 0 ? images : shuffleImages(images, shuffleSeed)),
    [images, shuffleSeed],
  );

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % galleryImages.length,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, galleryImages.length]);

  const containerClass =
    mode === "wide"
      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      : mode === "small"
        ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        : "grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";

  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-10 top-12 h-64 w-64 rounded-full bg-[var(--accent-warm)]/25 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-10">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between reveal">
          <div className="max-w-2xl">
            <p className="section-label">Gallery</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Moments &{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
                memories.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              A curated collection of memorable moments, gathered into a
              personal gallery within this portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:-ml-10 lg:flex-nowrap">
            {MODE_BUTTONS.map((item) => (
              <button
                key={item.mode}
                type="button"
                onClick={() => setMode(item.mode)}
                className={`inline-flex h-11 min-w-[8.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-4 text-sm font-semibold transition-all ${
                  mode === item.mode
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20"
                    : "border-[var(--border)] bg-[var(--surface)]/70 text-[var(--muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                }`}
                aria-pressed={mode === item.mode}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShuffleSeed((seed) => seed + 1)}
              className="inline-flex h-11 min-w-[8.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 px-4 text-sm font-semibold text-[var(--muted)] transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
            >
              <Shuffle size={16} />
              Shuffle
            </button>
          </div>
        </div>

        <div className={containerClass}>
          {galleryImages.map((image, index) => {
            const heightClass =
              mode === "small"
                ? "h-52 sm:h-56"
                : mode === "wide"
                  ? "h-72 sm:h-80 lg:h-96"
                  : "h-64 sm:h-72";

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative mb-5 block w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-cyan)] hover:shadow-2xl hover:shadow-[var(--accent)]/10 ${heightClass}`}
              >
                <Image
                  src={image}
                  alt={`Memory ${index + 1}`}
                  fill
                  sizes={
                    mode === "small"
                      ? "(min-width: 1024px) 25vw, 50vw"
                      : "(min-width: 1024px) 33vw, 100vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-80" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-[#17171f] shadow-sm backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeImage && activeIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close gallery image"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? current
                  : (current - 1 + galleryImages.length) % galleryImages.length,
              )
            }
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:flex"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
          <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-black">
            <Image
              src={activeImage}
              alt={`Memory ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? current
                  : (current + 1) % galleryImages.length,
              )
            }
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:flex"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
