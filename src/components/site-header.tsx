import Link from "next/link";

import { profile } from "@/content/profile";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#stack", label: "Stack", wideOnly: true },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          <span className="text-aurora">GZ</span> <span className="hidden sm:inline">{profile.name}</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm text-muted sm:gap-2">
            {NAV.map((item) => (
              <li key={item.href} className={item.wideOnly ? "hidden md:block" : undefined}>
                <Link
                  href={item.href}
                  className="rounded-lg px-2.5 py-1.5 transition-colors hover:bg-glass hover:text-fg sm:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
