/**
 * The fixed glow behind every page.
 *
 * Pure CSS and a server component: it costs no JavaScript and cannot jank on
 * scroll, which a canvas or WebGL background would.
 */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[34rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.38),transparent)] blur-2xl" />
      <div className="absolute -right-32 top-[-6rem] h-[30rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(34_211_238/0.20),transparent)] blur-2xl" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[34rem] w-[52rem] rounded-full bg-[radial-gradient(closest-side,rgb(236_72_153/0.12),transparent)] blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_20%,#000_25%,transparent_70%)]" />
    </div>
  );
}
