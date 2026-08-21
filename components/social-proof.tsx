import Image from "next/image";
import { TESTIMONIALS } from "@/lib/site";
import { mediaExists } from "@/lib/media";

/**
 * Prueba social. Mientras TESTIMONIALS esté vacío la sección no se renderiza:
 * es preferible no tener testimonios a inventarlos — un testimonio falso se
 * nota y quema la confianza justo donde más importa.
 *
 * Para activarla: conseguir 2-3 talleres piloto reales, pedirles una frase y
 * una foto, y agregarlos al arreglo TESTIMONIALS en lib/site.ts.
 */
export function SocialProof() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal mb-12 max-w-2xl font-display text-[clamp(2rem,5.5vw,3.25rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
          Talleres que ya dejaron el cuaderno.
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col gap-5 rounded-2xl border border-border-soft bg-white/[0.03] p-6"
            >
              <blockquote className="text-[15px] leading-relaxed text-ink-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                {mediaExists(t.photo) ? (
                  <Image
                    src={`/${t.photo}`}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.08] font-display text-lg text-ink">
                    {t.name.charAt(0)}
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-ink">{t.name}</span>
                  <span className="text-xs text-ink-faint">{t.workshop}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
