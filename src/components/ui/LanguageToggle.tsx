"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "vi"];

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 p-1"
      aria-label={t.language.label}
    >
      <Languages size={15} className="ml-2 text-[var(--muted)]" />
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
            locale === item
              ? "bg-[var(--accent)] text-white"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          aria-pressed={locale === item}
        >
          {item === "en" ? t.language.english : t.language.vietnamese}
        </button>
      ))}
    </div>
  );
}
