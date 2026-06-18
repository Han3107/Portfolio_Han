"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const themeChangeEvent = "themechange";

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const activeTheme = document.documentElement.dataset.theme;
  if (activeTheme === "light" || activeTheme === "dark") {
    return activeTheme;
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

function subscribeThemeChange(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeThemeChange, getThemeSnapshot, () => "light");
  const isDark = theme === "dark";

  function toggleTheme() {
    applyTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-[4.5rem] items-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] p-1 text-[var(--muted)] shadow-sm transition-colors hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span
        className={`absolute top-1 h-8 w-8 rounded-full bg-[var(--accent)] shadow-lg shadow-[var(--accent)]/20 transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Sun size={16} className={isDark ? "text-[var(--muted)]" : "text-white"} />
      </span>
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Moon size={16} className={isDark ? "text-white" : "text-[var(--muted)]"} />
      </span>
    </button>
  );
}
