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
        <p className="reveal titulo-seccion mb-10">
          Talleres que ya dejaron el cuaderno
        </p>

        <div className="caja grid grid-cols-1 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal flex flex-col gap-5 p-6 ${
                i % 3 !== 2 ? "md:border-r" : ""
              } ${i < TESTIMONIALS.length - 3 ? "border-b md:border-b-0" : "border-b md:border-b-0"} border-neutral-track`}
            >
              <blockquote className="text-[15px] leading-relaxed text-ink-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                {mediaExists(t.photo) ? (
                  <Image
                    src={`/${t.photo}`}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 border border-border-strong object-cover"
                  />
                ) : (
                  <span className="grid h-10 w-10 place-items-center border border-border-strong font-display text-lg text-ink">
                    {t.name.charAt(0)}
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-ink">
                    {t.name}
                  </span>
                  <span className="rotulo text-[10px]">{t.workshop}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
