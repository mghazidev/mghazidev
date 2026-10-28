import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {/* No year: `new Date()` fails the prerender under cacheComponents, and a
            hardcoded one goes stale every January. A notice doesn't need one. */}
        <p className="font-mono">© {profile.name}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
