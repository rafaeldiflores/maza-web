import { DEMO_VIDEO, WA_MESSAGES, waLink } from "@/lib/site";
import { mediaExists } from "@/lib/media";

export function Demo() {
  const ready = mediaExists(DEMO_VIDEO.file);
  const posterReady = mediaExists(DEMO_VIDEO.poster);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="reveal overflow-hidden rounded-[2rem] border border-border-soft bg-white/[0.04]">
          {ready ? (
            <video
              className="aspect-video w-full bg-black"
              controls
              preload="none"
              poster={posterReady ? `/${DEMO_VIDEO.poster}` : undefined}
            >
              <source src={`/${DEMO_VIDEO.file}`} type="video/mp4" />
            </video>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 border border-dashed border-white/15 p-8 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/[0.06] text-accent">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 translate-x-0.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7-11-7Z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-ink">Demo en camino</p>
                <p className="mt-1 max-w-[42ch] text-sm text-ink-muted">
                  Todavía no hay un video subido. Mientras tanto, te la
                  mostramos por videollamada o WhatsApp.
                </p>
                <code className="mt-2 block text-[11px] text-ink-faint/70">
                  /public/{DEMO_VIDEO.file}
                </code>
              </div>
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-accent-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Pedir una demo
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
