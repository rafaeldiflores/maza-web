import { DEMO_VIDEO, waLink } from "@/lib/site";
import { mediaExists } from "@/lib/media";

/**
 * Video de demo, vertical (9:16) como un reel: es el formato de quien llega
 * desde Instagram o TikTok. Va justo después del hero.
 *
 * Sin archivo no se renderiza nada: un bloque "pendiente" solo alarga la
 * página. Para activarlo basta dejar public/demo/demo.mp4 (y opcionalmente
 * demo/poster.jpg) y volver a desplegar.
 */
export function Demo() {
  if (!mediaExists(DEMO_VIDEO.file)) return null;
  const posterReady = mediaExists(DEMO_VIDEO.poster);

  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="reveal mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14">
        <div className="flex max-w-[38ch] flex-col gap-3 text-center sm:order-2 sm:text-left">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Mira MAZA en 30 segundos.
          </h2>
          <p className="text-base leading-relaxed text-ink-muted">
            Del ingreso del vehículo al presupuesto aprobado por el cliente,
            tal como se ve en el taller.
          </p>
          <a
            href={waLink(
              "Hola, quiero agendar una demo en vivo de MAZA para ver cómo funciona en mi taller."
            )}
            target="_blank"
            rel="noreferrer"
            data-cta="demo"
            className="text-sm font-semibold text-ink underline underline-offset-4 hover:text-value-shade"
          >
            ¿Prefieres verlo en vivo? Agenda una demo →
          </a>
        </div>

        <video
          className={`w-full bg-splash-bg ${
            DEMO_VIDEO.vertical ? "aspect-[9/16] max-w-[320px]" : "aspect-video"
          } border border-border-strong sm:order-1`}
          controls
          playsInline
          preload="metadata"
          poster={posterReady ? `/${DEMO_VIDEO.poster}` : undefined}
        >
          <source src={`/${DEMO_VIDEO.file}`} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
