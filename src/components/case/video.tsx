/** A project video: landscape fills the column; a phone recording plays inside a device frame. */
export function ProjectVideo({ video }: { video: { src: string; poster: string; caption: string; portrait?: boolean } }) {
  const player = (
    <video
      src={video.src}
      poster={video.poster}
      controls
      muted
      playsInline
      preload="metadata"
      className={video.portrait ? "block w-full rounded-[1.7rem] bg-ink-2" : "w-full rounded-xl border border-line-strong bg-ink-2"}
    />
  );
  return (
    <figure className={video.portrait ? "mx-auto w-full max-w-[18rem]" : undefined}>
      {video.portrait ? (
        <div className="rounded-[2.2rem] border border-line-strong bg-[#0d0b17] p-2 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)]">
          {player}
        </div>
      ) : (
        player
      )}
      <figcaption className={`mt-3 font-mono text-xs text-faint ${video.portrait ? "text-center" : ""}`}>{video.caption}</figcaption>
    </figure>
  );
}
