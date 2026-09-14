"use client";

import { useState } from "react";
import { AndroidFrame } from "./android-frame";

const ITEMS = [
  { name: "Diagnóstico y revisión general", price: 8000 },
  { name: "Cambio de pastillas de freno", price: 22000 },
  { name: "Repuesto: pastillas delanteras", price: 15000 },
];

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

const total = ITEMS.reduce((sum, item) => sum + item.price, 0);

export function OrdenMockup() {
  const [aprobado, setAprobado] = useState(false);

  return (
    <AndroidFrame
      className="max-w-[300px] sm:max-w-[325px]"
      aspect="aspect-auto"
    >
      <div className="w-full bg-surface pb-4 pt-4">
        <div className="border-b border-border-strong px-5 pb-3 pt-1 text-center">
          <p className="rotulo text-[10px]">Vista que recibe tu cliente</p>
          <h3 className="mt-1 text-lg font-bold text-ink">
            Honda CB 500 · 2021
          </h3>
          <p className="cifra mt-1 inline-block border border-border-soft px-2 py-0.5 text-[11px]">
            ORDEN #0142
          </p>
        </div>

        <div
          className={`flex items-center justify-between border-b border-border-strong px-5 py-3 transition-colors ${
            aprobado ? "bg-success/15" : "bg-value-soft"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`testigo ${aprobado ? "bg-success" : "bg-value"}`}
            />
            <span
              className={`rotulo text-[11px] ${
                aprobado ? "text-success font-bold" : "text-ink"
              }`}
            >
              {aprobado ? "Presupuesto aprobado" : "Esperando aprobación"}
            </span>
          </div>
          {aprobado && (
            <span className="rotulo text-[10px] text-success">✓ EN VIVO</span>
          )}
        </div>

        <div className="px-5 py-4">
          <p className="titulo-seccion">Presupuesto detallado</p>
          <div className="mt-3 flex flex-col">
            {ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline justify-between gap-3 border-b border-neutral-track py-2.5 text-[13px]"
              >
                <span className="text-ink-muted">{item.name}</span>
                <span className="cifra shrink-0 text-[13px]">
                  {currency.format(item.price)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-baseline justify-between border-t border-border-strong pt-3">
            <span className="rotulo">Total a pagar</span>
            <span className="cifra text-[22px] text-value-shade">
              {currency.format(total)}
            </span>
          </div>

          {!aprobado ? (
            <button
              type="button"
              onClick={() => setAprobado(true)}
              className="mt-4 w-full cursor-pointer bg-value py-3 text-sm font-bold text-splash-bg transition-transform hover:bg-value-shade active:scale-[0.98]"
            >
              Aprobar presupuesto
            </button>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 border border-success bg-success/10 py-2.5 text-xs font-bold text-success">
                <span>✓ Aprobado por el cliente</span>
              </div>
              <button
                type="button"
                onClick={() => setAprobado(false)}
                className="cursor-pointer text-center text-[11px] text-ink-faint hover:underline"
              >
                ↺ Reiniciar simulación
              </button>
            </div>
          )}

          <p className="mt-3 text-center text-[10px] text-ink-ghost">
            Haz clic para probar cómo lo aprueba tu cliente en segundos
          </p>
        </div>
      </div>
    </AndroidFrame>
  );
}
