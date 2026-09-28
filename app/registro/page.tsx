import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { CabeceraPagina } from "@/components/sitio/cabecera-pagina";
import { ProntoGooglePlay } from "@/components/sitio/pronto-google-play";
import { TRIAL_DIAS, URL_ALTA_WEB, WA_MESSAGES, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crear cuenta — MAZA",
  description: `Crea la cuenta de tu taller: ${TRIAL_DIAS} días gratis. MAZA se usa con la app de Android y la web.`,
  alternates: { canonical: "/registro" },
  robots: { index: false },
};

/**
 * Paso previo al formulario de alta. Quien toca "Crear cuenta" tiene que saber
 * antes de registrarse que el trabajo del taller se hace en la app de Android,
 * y que la app está en prueba cerrada: sin sumarse a los testers no la puede
 * instalar, y una cuenta solo con la web mira el sistema sin poder operarlo.
 */
const PASOS = [
  {
    titulo: "MAZA se usa con la app",
    texto:
      "Recibir, avanzar y entregar vehículos se hace en la app de Android. En el computador administras: venta, inventario, precios y balances.",
  },
  {
    titulo: "Súmate a la prueba de la app",
    texto:
      "La app todavía no está publicada en Google Play. Escríbeme por WhatsApp con el correo de tu Google Play y te agrego a los testers el mismo día.",
  },
  {
    titulo: `Crea tu cuenta: ${TRIAL_DIAS} días gratis`,
    texto:
      "Con todo incluido y sin tarjeta. Entras con la misma cuenta en la app y en el computador: es el mismo taller.",
  },
];

export default function Registro() {
  return (
    <>
      <SitioHeader />
      <main className="flex-1">
        <CabeceraPagina rotulo="Crear cuenta" titulo="Antes de empezar, tres cosas">
          <ProntoGooglePlay />
        </CabeceraPagina>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <ol className="caja flex flex-col">
              {PASOS.map((p, i) => (
                <li
                  key={p.titulo}
                  className={`grid grid-cols-[2.75rem_1fr] gap-3 p-6 ${i > 0 ? "border-t border-border-strong" : ""}`}
                >
                  <span className="cifra text-2xl text-value-shade">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="font-display text-[1.9rem] leading-none tracking-[0.01em] text-ink">{p.titulo}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={waLink(WA_MESSAGES.tester)}
                target="_blank"
                rel="noreferrer"
                data-cta="registro-tester"
                className="inline-flex h-12 items-center justify-center bg-value px-6 text-base font-bold text-splash-bg"
              >
                Pedir acceso a la app por WhatsApp
              </a>
              <a
                href={URL_ALTA_WEB}
                data-cta="registro-continuar"
                className="inline-flex h-12 items-center justify-center border border-ink px-6 text-base font-bold text-ink hover:bg-surface"
              >
                Continuar con el registro
              </a>
            </div>
            <p className="font-mono text-xs text-ink-faint">
              Puedes hacer las dos cosas en cualquier orden: la cuenta queda lista y la app se conecta
              sola cuando entres con ella.
            </p>
          </div>
        </section>
      </main>
      <SitioFooter />
    </>
  );
}
