import Image from "next/image";

import type { Shot } from "@/content/projects";

/**
 * A screenshot in the frame that matches what it is.
 *
 * Every phone screen gets the same device frame and every web screen the same
 * browser window, so the work reads as one body rather than a scrapbook of
 * mismatched mockups.
 */
export function Frame({ shot, priority = false, sizes }: { shot: Shot; priority?: boolean; sizes?: string }) {
  const image = (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      priority={priority}
      sizes={sizes ?? "(min-width: 1024px) 960px, 100vw"}
      className="h-auto w-full"
    />
  );

  if (shot.frame === "phone") {
    return (
      <div className="mx-auto w-full max-w-[18rem] rounded-[2.6rem] border border-line-strong bg-[#0d0b17] p-2.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)]">
        <div className="overflow-hidden rounded-[2.1rem]">{image}</div>
      </div>
    );
  }

  if (shot.frame === "browser") {
    return (
      <div className="overflow-hidden rounded-xl border border-line-strong bg-ink-2 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)]">
        <div aria-hidden className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="size-2.5 rounded-full bg-[#28c840]/80" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-glass" />
        </div>
        {image}
      </div>
    );
  }

  // Capped at the image's own width: a 320px crop stretched to fill a column
  // goes soft, and a sharp small image reads better than a blurry big one.
  return (
    <div
      className="overflow-hidden rounded-xl border border-line-strong bg-white"
      style={{ maxWidth: shot.width }}
    >
      {image}
    </div>
  );
}
