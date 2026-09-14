import { DEMO_VIDEO, waLink } from "@/lib/site";
import { mediaExists } from "@/lib/media";

export function Demo() {
  const ready = mediaExists(DEMO_VIDEO.file);
  const posterReady = mediaExists(DEMO_VIDEO.poster);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="caja reveal overflow-hidden">
          {ready ? (
            <video
              className="aspect-video w-full bg-splash-bg"
              controls
              preload="none"
              poster={posterReady ? `/${DEMO_VIDEO.poster}` : undefined}
            >
              <source src={`/${DEMO_VIDEO.file}`} type="video/mp4" />
            </video>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 border-t border-border-strong p-8 text-center">
              <span className="grid h-12 w-12 place-items-center border border-border-strong text-value-shade">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 translate-x-0.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7-11-7Z" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-ink text-lg">¿Quieres ver MAZA en acción?</p>
                <p className="mt-1.5 max-w-[44ch] text-sm text-ink-muted">
                  Te mostramos la app funcionando en vivo en 5 minutos por videollamada o WhatsApp, adaptada a tu rubro (autos, motos o bicicletas).
                </p>
              </div>
              <a
                href={waLink("Hola, quiero agendar una demo en vivo de MAZA para ver cómo funciona en mi taller.")}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center bg-value px-7 py-3 text-sm font-bold text-splash-bg hover:bg-value-shade transition-colors"
              >
                Agendar demostración en vivo →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
