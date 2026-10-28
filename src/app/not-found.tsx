import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">Nothing here.</h1>
      <p className="mt-4 max-w-md text-lg text-muted">That page doesn&apos;t exist — but the work does.</p>
      <Link
        href="/#work"
        className="mt-8 w-fit rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
      >
        See the work
      </Link>
    </section>
  );
}
