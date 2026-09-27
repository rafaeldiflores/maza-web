import { OrdenMockup } from "./orden-mockup";
import { WhatsappIcon } from "./whatsapp-icon";
import {
  FUNDADOR,
  TRIAL_DIAS,
  clp,
  mensajeCtaPrincipal,
  ofertaFundador,
  precioDesde,
  precioDesdeLista,
  textoCtaPrincipal,
  waLink,
} from "@/lib/site";

export function Hero() {
  const oferta = ofertaFundador();

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
            Tu cliente aprueba el presupuesto desde WhatsApp y tú llevas la
            cola, el inventario y la caja desde el celular.
          </p>

          <div className="flex flex-col gap-1">
            {oferta && (
              <p className="flex items-center gap-2 text-sm">
                <span className="text-ink-faint line-through">
                  {clp.format(precioDesdeLista())}
                </span>
                <span className="rotulo bg-value px-1.5 py-0.5 text-[10px] text-splash-bg">
                  −{Math.round(FUNDADOR.descuento * 100)}% de por vida
                </span>
              </p>
            )}
            <p className="flex items-baseline gap-1.5">
              <span className="text-sm font-medium text-ink-faint">desde</span>
              <span className="cifra text-3xl text-value-shade">
                {clp.format(precioDesde())}
              </span>
              <span className="text-sm font-medium text-ink-faint">/ mes</span>
            </p>
          </div>

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
              href="#planes"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-ink underline underline-offset-4 hover:text-value-shade"
            >
              Ver precios ↓
            </a>
          </div>

          <p className="text-xs text-ink-faint">
            {TRIAL_DIAS} días gratis · Sin tarjeta · Para talleres
            multirubro
          </p>
        </div>

        <div className="flex justify-center lg:col-span-7 lg:justify-end">
          <OrdenMockup />
        </div>
      </div>
    </section>
  );
}
