import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Heart } from "lucide-react";
import Logo from "@/components/ui/Logo";

/* Custom SVG icons for social brands (removed from lucide-react v1+) */
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon />,
  Linkedin: <LinkedinIcon />,
  Facebook: <FacebookIcon />,
  Mail: <MailIcon />,
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-4 items-start">
          {/* Column 1 - CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black leading-snug text-[var(--foreground)]">
                Get <span className="text-[var(--accent)]">Ready To</span>
                <br />
                Work <span className="text-[var(--muted)]">Together</span>
              </h2>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                Email Address
              </p>
              <div className="flex items-center gap-2 bg-[var(--surface-cream)] rounded-lg px-3 py-2.5 max-w-xs">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-[var(--foreground)] text-xs outline-none placeholder:text-[var(--muted)]"
                />
                <button className="text-[var(--accent)] hover:text-[var(--accent-cyan)] transition-colors flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    fill="currentColor"
                  >
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.40796223,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16346272 C3.50612381,0.9 2.40796223,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5951061 3.34915502,10.7521035 3.50612381,10.7521035 L16.6915026,11.5375905 C16.6915026,11.5375905 17.1624089,11.5375905 17.1624089,12.0088827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 - Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)]">
              Pages
            </h3>
            <ul className="mt-6 flex flex-col gap-4 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--accent-cyan)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)]">
              Services
            </h3>
            <ul className="mt-6 flex flex-col gap-4 list-none m-0 p-0">
              <li>
                <Link
                  href="#testing"
                  className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--accent-cyan)]"
                >
                  Testing
                </Link>
              </li>
              <li>
                <Link
                  href="#uxreview"
                  className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--accent-cyan)]"
                >
                  UI/UX Review
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--accent-cyan)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--accent-cyan)]"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)]">
              Contact
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm">caothihan05@gmail.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
                <span className="text-sm">Hai Chau, Da Nang</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-[var(--muted)] transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                    aria-label={social.label}
                  >
                    {iconMap[social.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-[var(--muted)]">
            (c) 2026 Han Han. Made with{" "}
            <Heart size={14} className="text-red-500" fill="currentColor" /> in
            Vietnam
          </p>
          <p className="text-sm text-[var(--muted)]">
            Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
