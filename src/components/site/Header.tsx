import Link from "next/link";

import { nav } from "@/content/site";
import { Doodle } from "@/components/ui/Doodle";

/**
 * Sticky top bar: handwritten wordmark on the left, letterspaced nav on the right.
 *
 * The nav is hidden below `md` — a mobile menu is deliberately out of scope,
 * and every destination is still reachable by scrolling the one-page layout.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-rule-dark)] bg-ink">
      <div className="flex h-18 items-center justify-between px-[var(--space-gutter)]">
        <Link href="#home" className="relative inline-block pb-2 leading-none">
          <span className="font-script text-[1.5rem] text-gold">Sara Dhandore</span>
          <Doodle
            kind="underline"
            className="absolute -bottom-0.5 left-0 w-28"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item, i) => {
              const isActive = i === 0;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`u-eyebrow relative inline-block pb-1 tracking-[0.16em] transition-colors duration-[var(--duration-fast)] ${
                      isActive ? "text-gold" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 block h-px w-full bg-gold"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
