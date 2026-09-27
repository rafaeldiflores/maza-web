import { OrdenMockup } from "./orden-mockup";
import { WhatsappIcon } from "./whatsapp-icon";
import { TRIAL_DIAS, mensajeCtaPrincipal, textoCtaPrincipal, waLink } from "@/lib/site";

/** Lo que trae la prueba: ayuda concreta, no precio. */
const AYUDA = [
  `${TRIAL_DIAS} días gratis con el trabajo real de tu taller`,
  "Te ayudamos a cargar tus servicios y repuestos (mándanos una foto)",
  "Una persona te acompaña por WhatsApp, no un formulario",
];

export function Hero() {
  return (
    <section id="inicio" className="px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <h1 className="font-display text-[clamp(2.75rem,8.5vw,5rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
            Tu taller ordenado.
            <br />
            Tu cliente informado.
          </h1>

          <p className="max-w-[46ch] text-lg leading-relaxed text-ink-muted sm:text-xl">
            Menos llamadas preguntando “¿ya está listo?”, menos papeles
            perdidos. Tu cliente sigue su vehículo y aprueba el presupuesto
            desde WhatsApp; tú llevas la cola, el inventario y la caja desde el
            celular.
          </p>

          <ul className="flex flex-col gap-2 text-sm text-ink-muted sm:text-base">
            {AYUDA.map((texto) => (
              <li key={texto} className="flex items-start gap-2.5">
                <span className="testigo mt-2 bg-value" />
                {texto}
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
            <a
              href={waLink(mensajeCtaPrincipal())}
              target="_blank"
              rel="noreferrer"
              data-cta="hero"
              className="inline-flex items-center justify-center gap-2 bg-value px-7 py-3.5 text-base font-bold text-splash-bg transition-colors hover:bg-value-shade"
            >
              <WhatsappIcon />
              {textoCtaPrincipal()}
            </a>
            <a
              href="#funciones"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-ink underline underline-offset-4 hover:text-value-shade"
            >
              Ver cómo funciona ↓
            </a>
          </div>

          <p className="text-xs text-ink-faint">
            Sin tarjeta · Sin permanencia · Para talleres multirubro
          </p>
        </div>

        <div className="flex justify-center lg:col-span-7 lg:justify-end">
          <OrdenMockup />
        </div>
      </div>
    </section>
  );
}
