"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CTH_CV_Tester.pdf";
  link.download = "CTH_CV_Tester.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-[var(--border)]"
      style={{
        background: "rgba(255,248,245,0.82)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-[var(--foreground)] no-underline"
        >
          <Logo size={90} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-semibold text-[var(--foreground)] list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 transition-colors hover:text-[var(--accent-cyan)] no-underline text-[var(--foreground)]"
                >
                  {link.label}
                  {"hasDropdown" in link && link.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <button onClick={handleDownloadCV} className="btn-primary">
              Download CV
            </button>
          </div>
          <button
            className="lg:hidden text-[var(--foreground)] hover:text-[var(--accent-cyan)] transition-colors"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-[var(--border)] animate-fade-in-up"
          style={{
            background: "rgba(255,248,245,0.96)",
            backdropFilter: "blur(20px)",
          }}
        >
          <nav className="px-6 py-3">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-lg font-semibold text-[var(--foreground)] no-underline hover:text-[var(--accent-cyan)] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <button
                  onClick={() => {
                    handleDownloadCV();
                    setMobileOpen(false);
                  }}
                  className="btn-primary w-full text-center"
                >
                  Download CV
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
