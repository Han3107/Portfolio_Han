"use client";

import { useState, useEffect, useCallback } from "react";
import { TYPEWRITER_ROLES } from "@/lib/constants";

export default function TypewriterEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = TYPEWRITER_ROLES[roleIndex];
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));
      if (text.length === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setText(current.substring(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length);
        return;
      }
    }
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span
        className="ml-[2px] inline-block h-[1.1em] w-[2px] bg-current animate-blink"
      />
    </span>
  );
}
