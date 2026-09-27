"use client";

import { track } from "@vercel/analytics";
import { WhatsappIcon } from "./whatsapp-icon";
import { RubroIcono } from "./rubro-icono";
import { RUBROS, useRubro, type Rubro } from "./rubro-contexto";
import { TRIAL_DIAS, textoCtaPrincipal, waLink } from "@/lib/site";

const ORDEN: Rubro[] = ["bici", "moto", "auto"];

/**
 * Chips de rubro + botones del hero. El chip es el primer toque sin
 * compromiso: cambia la demo de abajo (vehículo, trabajos y precios) y
 * segmenta el lead, porque el mensaje de WhatsApp ya dice qué rubro es.
 */
export function HeroCta() {
  const { rubro, setRubro } = useRubro();
  const elegido = rubro ? RUBROS[rubro] : null;
  const mensaje = `Hola, quiero probar MAZA gratis por ${TRIAL_DIAS} días en mi ${
    elegido ? elegido.taller : "taller"
  }.`;

  const elegir = (id: Rubro) => {
    setRubro(id);
    track("rubro", { rubro: id });
  };

  return (
    <div className="flex w-full flex-col gap-4 sm:w-auto">
      <div className="flex flex-col gap-2">
        <p className="rotulo text-[10px]">¿Qué tipo de taller tienes?</p>
        <div className="flex gap-2" role="radiogroup" aria-label="Rubro del taller">
          {ORDEN.map((id) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={rubro === id}
              onClick={() => elegir(id)}
              className={`flex flex-1 items-center justify-center gap-2 border px-3 py-2.5 text-sm font-semibold transition-colors sm:flex-none sm:px-5 ${
                rubro === id
                  ? "border-ink bg-ink text-app-bg"
                  : "border-border-strong bg-surface text-ink hover:bg-surface-alt"
              }`}
            >
              <RubroIcono rubro={id} />
              {RUBROS[id].label}
            </button>
          ))}
        </div>
        <p className="min-h-5 text-xs text-ink-muted" aria-live="polite">
          {elegido && (
            <>
              La demo de abajo ya es de un {elegido.taller}.{" "}
              <a
                href="#demo-cliente"
                className="font-semibold text-ink underline underline-offset-2"
              >
                Verla ↓
              </a>
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noreferrer"
          data-cta={rubro ? `hero-${rubro}` : "hero"}
          className="inline-flex items-center justify-center gap-2 bg-value px-7 py-3.5 text-base font-bold text-splash-bg transition-colors hover:bg-value-shade"
        >
          <WhatsappIcon />
          {textoCtaPrincipal()}
        </a>
        <a
          href="#demo-cliente"
          onClick={() => track("demo", { accion: "ir" })}
          className="inline-flex items-center justify-center gap-2 border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-alt"
        >
          Ver lo que recibe tu cliente <span aria-hidden="true">▶</span>
        </a>
      </div>
    </div>
  );
}
