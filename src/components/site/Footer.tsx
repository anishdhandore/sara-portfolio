import Link from "next/link";

import { contact, nav, site } from "@/content/site";
import { Doodle } from "@/components/ui/Doodle";
import { ScriptNote } from "@/components/ui/ScriptNote";

const linkStyles =
  "text-cream/85 transition-colors duration-[var(--duration-fast)] hover:text-gold";

/** Decorative — the label beside it already names the destination. */
const iconProps = {
  "aria-hidden": true as const,
  focusable: "false" as const,
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "shrink-0 text-gold",
};

export function Footer() {
  return (
    <footer id="contact" className="bg-ink">
      <div className="px-[var(--space-gutter)] py-[var(--space-section)]">
        <div className="grid gap-12 md:grid-cols-3 md:items-start md:gap-8">
          {/* Column 1 — the invitation */}
          <div>
            <h2 className="u-eyebrow text-sm text-cream">Get in touch</h2>
            <span aria-hidden className="mt-3 block h-px w-12 bg-gold" />
            <p className="mt-5 max-w-[22ch] text-muted">{contact.body}</p>
          </div>

          {/* Column 2 — the two ways to reach her */}
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <svg {...iconProps}>
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
                <path d="M2 4.5 8 9l6-4.5" />
              </svg>
              <a href={`mailto:${site.email}`} className={`${linkStyles} break-all`}>
                {site.email}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <svg {...iconProps}>
                <rect x="1.5" y="1.5" width="13" height="13" rx="4" />
                <circle cx="8" cy="8" r="3.25" />
                <circle cx="11.9" cy="4.1" r="0.6" fill="currentColor" />
              </svg>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyles}
              >
                {site.instagram}
              </a>
            </li>
          </ul>

          {/* Column 3 — the handwritten sign-off */}
          <div className="flex items-start justify-start gap-3 md:justify-end">
            <ScriptNote
              text={contact.note}
              rotate={-6}
              className="text-2xl md:text-right"
            />
            <Doodle kind="star" className="mt-1 w-6 shrink-0" />
          </div>
        </div>

        <Doodle kind="flourish" className="mt-14 h-8 w-full opacity-60" />
      </div>

      <div className="border-t border-[var(--color-rule-dark)] px-[var(--space-gutter)] py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.6875rem] text-muted">
            © 2025 Sara Dhandore. All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`u-eyebrow tracking-[0.16em] transition-colors duration-[var(--duration-fast)] ${
                      i === 0 ? "text-gold" : "text-cream/55 hover:text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
