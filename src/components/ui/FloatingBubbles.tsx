"use client";

import React, { useState, useEffect } from "react";

interface BubbleConfig {
  id: number;
  size: number; // in px
  left: number; // percentage (0 - 100)
  duration: number; // seconds
  delay: number; // seconds
  swayDuration: number; // seconds
  opacity: number;
  hueShift: string; // accent variant
  depth: "fg" | "mid" | "bg";
}

const INITIAL_BUBBLES: BubbleConfig[] = [
  { id: 1, size: 72, left: 12, duration: 13, delay: 0, swayDuration: 4.2, opacity: 0.85, hueShift: "ocean", depth: "fg" },
  { id: 2, size: 38, left: 22, duration: 9, delay: 2, swayDuration: 3.1, opacity: 0.7, hueShift: "ice", depth: "mid" },
  { id: 3, size: 90, left: 34, duration: 16, delay: 5, swayDuration: 5.5, opacity: 0.9, hueShift: "cobalt", depth: "fg" },
  { id: 4, size: 24, left: 42, duration: 8, delay: 1, swayDuration: 2.8, opacity: 0.6, hueShift: "ocean", depth: "bg" },
  { id: 5, size: 54, left: 52, duration: 12, delay: 4, swayDuration: 3.8, opacity: 0.8, hueShift: "ice", depth: "mid" },
  { id: 6, size: 32, left: 62, duration: 10, delay: 6, swayDuration: 3.4, opacity: 0.65, hueShift: "cobalt", depth: "bg" },
  { id: 7, size: 84, left: 74, duration: 15, delay: 3, swayDuration: 4.8, opacity: 0.88, hueShift: "ocean", depth: "fg" },
  { id: 8, size: 44, left: 85, duration: 11, delay: 0.5, swayDuration: 3.6, opacity: 0.75, hueShift: "ice", depth: "mid" },
  { id: 9, size: 28, left: 92, duration: 8.5, delay: 7, swayDuration: 3.0, opacity: 0.6, hueShift: "cobalt", depth: "bg" },
  { id: 10, size: 60, left: 18, duration: 14, delay: 8, swayDuration: 4.5, opacity: 0.82, hueShift: "ice", depth: "mid" },
  { id: 11, size: 48, left: 68, duration: 11.5, delay: 9.5, swayDuration: 3.9, opacity: 0.75, hueShift: "ocean", depth: "mid" },
  { id: 12, size: 36, left: 80, duration: 9.5, delay: 4.5, swayDuration: 3.2, opacity: 0.65, hueShift: "cobalt", depth: "bg" },
];

export default function FloatingBubbles() {
  const [poppedIds, setPoppedIds] = useState<Set<number>>(new Set());

  // Allow clicking a bubble to pop it with a burst animation
  const handlePop = (id: number) => {
    setPoppedIds((prev) => new Set(prev).add(id));
    // Respawn after 3.5 seconds
    setTimeout(() => {
      setPoppedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 3500);
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-1"
      aria-hidden="true"
    >
      {INITIAL_BUBBLES.map((b) => {
        const isPopped = poppedIds.has(b.id);

        return (
          <div
            key={b.id}
            className={`absolute pointer-events-auto cursor-pointer transition-transform duration-300 ${
              isPopped ? "bubble-pop" : "bubble-rise-track"
            }`}
            style={
              {
                left: `${b.left}%`,
                bottom: "-120px",
                width: `${b.size}px`,
                height: `${b.size}px`,
                animationDuration: `${b.duration}s`,
                animationDelay: `${b.delay}s`,
                filter: b.depth === "bg" ? "blur(1px)" : "none",
                opacity: isPopped ? 0 : b.opacity,
                "--sway-time": `${b.swayDuration}s`,
              } as React.CSSProperties
            }
            onClick={() => handlePop(b.id)}
            title="Click to pop!"
          >
            {/* The oscillating and wobbling glass bubble sphere */}
            <div
              className="bubble-sphere relative h-full w-full rounded-full"
              style={{
                background:
                  b.hueShift === "ocean"
                    ? "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.85) 0%, rgba(189, 232, 245, 0.5) 30%, rgba(73, 136, 196, 0.35) 65%, rgba(28, 77, 141, 0.5) 100%)"
                    : b.hueShift === "ice"
                    ? "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(225, 245, 252, 0.6) 30%, rgba(189, 232, 245, 0.4) 65%, rgba(73, 136, 196, 0.45) 100%)"
                    : "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.82) 0%, rgba(189, 232, 245, 0.45) 30%, rgba(73, 136, 196, 0.35) 65%, rgba(15, 40, 84, 0.48) 100%)",
                boxShadow:
                  "inset 0 0 16px rgba(255, 255, 255, 0.6), inset 3px 3px 12px rgba(189, 232, 245, 0.5), inset -4px -4px 14px rgba(28, 77, 141, 0.3), 0 8px 24px rgba(28, 77, 141, 0.16)",
                border: "1.2px solid rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
              }}
            >
              {/* Primary Glare Reflection (Upper Crescent Glaze) */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "14%",
                  left: "20%",
                  width: "28%",
                  height: "18%",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.2) 100%)",
                  transform: "rotate(-35deg)",
                  filter: "blur(0.4px)",
                }}
              />

              {/* Secondary Glare Highlight (Small bright dot) */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "32%",
                  left: "14%",
                  width: "10%",
                  height: "10%",
                  background: "rgba(255, 255, 255, 0.9)",
                }}
              />

              {/* Bottom Edge Bounce Reflection */}
              <div
                className="absolute rounded-full"
                style={{
                  bottom: "10%",
                  right: "18%",
                  width: "36%",
                  height: "14%",
                  background:
                    "radial-gradient(ellipse at center, rgba(189, 232, 245, 0.65) 0%, transparent 80%)",
                  transform: "rotate(-25deg)",
                }}
              />
            </div>

            {/* Bubble burst particles if popped */}
            {isPopped && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <span className="bubble-sparkle sparkle-1" />
                <span className="bubble-sparkle sparkle-2" />
                <span className="bubble-sparkle sparkle-3" />
                <span className="bubble-sparkle sparkle-4" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
