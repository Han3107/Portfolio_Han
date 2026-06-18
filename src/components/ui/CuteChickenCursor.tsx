"use client";

import { useEffect, useRef } from "react";

export default function CuteChickenCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const cursorElement = cursor;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || reduceMotion) {
      cursorElement.style.display = "none";
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");

    let animationFrame = 0;
    let hasMoved = false;

    function moveCursor(event: PointerEvent) {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!hasMoved) {
        hasMoved = true;
        currentRef.current = targetRef.current;
        cursorElement.style.opacity = "1";
      }
    }

    function animate() {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      cursorElement.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      animationFrame = window.requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", moveCursor);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", moveCursor);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cute-chicken-cursor" aria-hidden="true">
      <div className="cute-chicken-cursor__ring" />
      <div className="cute-chicken-cursor__bird">
        <span className="cute-chicken-cursor__comb" />
        <span className="cute-chicken-cursor__head" />
        <span className="cute-chicken-cursor__body" />
        <span className="cute-chicken-cursor__wing" />
        <span className="cute-chicken-cursor__eye" />
        <span className="cute-chicken-cursor__beak" />
        <span className="cute-chicken-cursor__leg cute-chicken-cursor__leg--left" />
        <span className="cute-chicken-cursor__leg cute-chicken-cursor__leg--right" />
      </div>
    </div>
  );
}
