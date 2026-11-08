import Link from "next/link";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#stack", label: "Stack", wideOnly: true },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education", wideOnly: true },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="group font-display text-[1.65rem] leading-none">
          <span className="sm:hidden">GZ</span>
          <span className="hidden sm:inline">Ghazi Zaidi</span>
          <span className="text-signal">.</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm text-muted sm:gap-2">
            {NAV.map((item) => (
              <li key={item.href} className={item.wideOnly ? "hidden md:block" : undefined}>
                <Link
                  href={item.href}
                  className="relative px-2 py-1.5 transition-colors after:absolute after:inset-x-2 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:text-fg hover:after:scale-x-100 sm:px-3 sm:after:inset-x-3"
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
