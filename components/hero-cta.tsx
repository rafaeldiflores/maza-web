"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { WhatsappIcon } from "./whatsapp-icon";
import { TRIAL_DIAS, textoCtaPrincipal, waLink } from "@/lib/site";

const RUBROS = [
  { id: "bici", label: "Bici", emoji: "🚲", taller: "taller de bicicletas" },
  { id: "moto", label: "Moto", emoji: "🏍️", taller: "taller de motos" },
  { id: "auto", label: "Auto", emoji: "🚗", taller: "taller de autos" },
] as const;

type Rubro = (typeof RUBROS)[number]["id"];

/**
 * Chips de rubro + botones del hero. El chip es el primer toque sin
 * compromiso y además segmenta el lead: el mensaje de WhatsApp ya dice qué
 * rubro es. Sin chip elegido, el mensaje es el genérico de la prueba.
 */
export function HeroCta() {
  const [rubro, setRubro] = useState<Rubro | null>(null);
  const elegido = RUBROS.find((r) => r.id === rubro);
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
          {RUBROS.map((r) => (
            <button
              key={r.id}
              type="button"
              role="radio"
              aria-checked={rubro === r.id}
              onClick={() => elegir(r.id)}
              className={`flex flex-1 items-center justify-center gap-1.5 border px-3 py-2.5 text-sm font-semibold transition-colors sm:flex-none sm:px-5 ${
                rubro === r.id
                  ? "border-ink bg-ink text-app-bg"
                  : "border-border-strong bg-surface text-ink hover:bg-surface-alt"
              }`}
            >
              <span aria-hidden="true">{r.emoji}</span>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noreferrer"
          data-cta={elegido ? `hero-${elegido.id}` : "hero"}
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
