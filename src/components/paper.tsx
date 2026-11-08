/**
 * The page itself: warm paper with a faint layout grid and a whisper of grain.
 *
 * Pure CSS and a server component. The grain is an inline SVG noise filter,
 * tiled, so it costs one tiny data URL and no JavaScript.
 */
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.09 0 0 0 0 0.07 0 0 0 0 0.06 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export function Paper() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgb(22_19_15/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(22_19_15/0.05)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_55%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply" style={{ backgroundImage: GRAIN }} />
    </div>
  );
}
