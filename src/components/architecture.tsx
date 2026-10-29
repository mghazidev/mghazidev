import type { Project } from "@/content/projects";

/**
 * A project's architecture as a list of connections.
 *
 * Each edge is drawn as its own row, `Flutter ──ws──▶ Socket.IO`, rather than
 * laying the nodes out as a chain. A chain implies every node talks to the
 * next, which is false for star-shaped systems (one app, two backends) and
 * would misdescribe most of these projects.
 */
export function Architecture({ project, compact = false }: { project: Project; compact?: boolean }) {
  const node = (id: string) => project.architecture.nodes.find((n) => n.id === id);

  return (
    <ul
      className={compact ? "space-y-2" : "space-y-3"}
      aria-label={`${project.title} architecture`}
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      {project.architecture.edges.map((edge) => {
        const from = node(edge.from);
        const to = node(edge.to);
        if (!from || !to) return null;
        return (
          <li key={`${edge.from}-${edge.to}`}>
            {/* The drawing is for the eye; the sentence is what a screen reader hears. */}
            <span className="sr-only">
              {from.label} connects to {to.label} over {edge.via}.
            </span>
            <span aria-hidden className="flex items-center gap-2">
              <NodeBox label={from.label} detail={compact ? undefined : from.detail} compact={compact} />
              <span className="relative flex min-w-0 flex-1 items-center">
                <span className="h-px flex-1 bg-linear-to-r from-[var(--accent)] to-[color-mix(in_oklab,var(--accent)_25%,transparent)]" />
                <span className="size-0 border-y-4 border-l-[6px] border-y-transparent border-l-[color-mix(in_oklab,var(--accent)_60%,transparent)]" />
                <span className="absolute inset-x-0 -top-4 truncate text-center font-mono text-[10px] text-[var(--accent)]">
                  {edge.via}
                </span>
              </span>
              <NodeBox label={to.label} detail={compact ? undefined : to.detail} compact={compact} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function NodeBox({ label, detail, compact }: { label: string; detail?: string; compact: boolean }) {
  return (
    <span
      className={[
        "shrink-0 rounded-md border border-[color-mix(in_oklab,var(--accent)_40%,transparent)]",
        "bg-[color-mix(in_oklab,var(--accent)_8%,transparent)] text-center font-mono text-fg",
        compact ? "px-2 py-1 text-[11px]" : "min-w-28 px-3 py-2 text-xs",
      ].join(" ")}
    >
      {label}
      {detail && <span className="mt-0.5 block text-[10px] text-faint">{detail}</span>}
    </span>
  );
}
