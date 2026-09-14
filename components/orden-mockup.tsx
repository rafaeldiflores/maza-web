"use client";

import { useState } from "react";
import { AndroidFrame } from "./android-frame";

const ITEMS = [
  { name: "Diagnóstico y escaneo general", price: 8000 },
  { name: "Cambio pastillas de freno", price: 22000 },
  { name: "Pastillas delanteras OEM (repuesto)", price: 15000 },
];

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

const total = ITEMS.reduce((sum, item) => sum + item.price, 0);

export function OrdenMockup() {
  const [aprobado, setAprobado] = useState(false);
  const [mobileTab, setMobileTab] = useState<"cliente" | "taller">("cliente");

  const handleAprobar = () => {
    setAprobado(true);
    // Si está en móvil, tras 600ms cambiar automáticamente a la vista del taller para ver la sincronización
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setTimeout(() => {
        setMobileTab("taller");
      }, 550);
    }
  };

  const handleReiniciar = () => {
    setAprobado(false);
    setMobileTab("cliente");
  };

  return (
    <div className="flex w-full flex-col items-center">
      {/* ─── Píldora de estado de sincronización entre ambos dispositivos ─── */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="rotulo inline-flex items-center gap-1.5 border border-border-strong bg-surface px-3 py-1 text-[10px] text-ink">
          <span
            className={`h-2 w-2 rounded-full ${
              aprobado ? "bg-success animate-pulse" : "bg-value"
            }`}
          />
          {aprobado ? "Sincronizado en 0.3s" : "Simulación interactiva en vivo"}
        </span>
        <span className="hidden text-xs text-ink-muted sm:inline">
          {aprobado
            ? "¡Tu taller recibió la orden aprobada sin llamadas!"
            : "Presiona 'Aprobar' en el cliente y mira cómo cambia el taller:"}
        </span>
      </div>

      {/* ─── Pestañas exclusivas para pantallas pequeñas (móviles) ─── */}
      <div className="mb-4 flex w-full max-w-[320px] rounded border border-border-strong bg-surface p-1 sm:hidden">
        <button
          type="button"
          onClick={() => setMobileTab("cliente")}
          className={`flex-1 py-1.5 text-center text-xs font-bold transition-all ${
            mobileTab === "cliente"
              ? "bg-ink text-app-bg shadow-sm"
              : "text-ink-muted"
          }`}
        >
          1. Celular Cliente
        </button>
        <button
          type="button"
          onClick={() => setMobileTab("taller")}
          className={`relative flex-1 py-1.5 text-center text-xs font-bold transition-all ${
            mobileTab === "taller"
              ? "bg-ink text-app-bg shadow-sm"
              : "text-ink-muted"
          }`}
        >
          2. App del Taller
          {aprobado && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
          )}
        </button>
      </div>

      {/* ─── Contenedor dual de los 2 dispositivos ─── */}
      <div className="grid w-full grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:gap-5 xl:gap-8">
        {/* ══════════════════════════════════════════════════════════════
            PANTALLA 1: CELULAR DEL CLIENTE (Link de aprobación)
            ══════════════════════════════════════════════════════════════ */}
        <div
          className={`flex flex-col items-center ${
            mobileTab === "taller" ? "hidden sm:flex" : "flex"
          }`}
        >
          <div className="mb-2 text-center">
            <span className="rotulo text-[9px] text-ink-faint">
              Paso 1 · Vista del Cliente
            </span>
            <p className="text-xs font-bold text-ink">Link enviado por WhatsApp</p>
          </div>

          <AndroidFrame
            className="max-w-[275px] sm:max-w-[285px]"
            aspect="aspect-[9/18.8]"
          >
            <div className="flex h-full flex-col bg-surface pb-3 pt-3.5 text-xs select-none">
              {/* Encabezado del link del cliente */}
              <div className="border-b border-border-strong px-4 pb-2 text-center">
                <span className="rotulo text-[9px] text-value-shade">
                  Link directo · Sin instalar nada
                </span>
                <h4 className="mt-0.5 text-sm font-bold text-ink">
                  Honda CB 500 · 2021
                </h4>
                <p className="cifra mt-0.5 inline-block border border-border-soft px-2 py-0.5 text-[10px] text-ink-muted">
                  ORDEN #0142
                </p>
              </div>

              {/* Estado del presupuesto */}
              <div
                className={`flex items-center justify-between border-b border-border-strong px-4 py-2 transition-colors ${
                  aprobado ? "bg-success/15" : "bg-value-soft"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`testigo ${
                      aprobado ? "bg-success animate-pulse" : "bg-value"
                    }`}
                  />
                  <span
                    className={`rotulo text-[10.5px] ${
                      aprobado ? "text-success font-bold" : "text-ink"
                    }`}
                  >
                    {aprobado ? "Presupuesto aprobado" : "Esperando tu aprobación"}
                  </span>
                </div>
                {aprobado && (
                  <span className="rotulo text-[9px] text-success font-bold">
                    ✓ EN VIVO
                  </span>
                )}
              </div>

              {/* Detalle del presupuesto */}
              <div className="flex flex-1 flex-col justify-between px-4 py-2.5">
                <div>
                  <p className="titulo-seccion text-[9.5px]">Presupuesto detallado</p>
                  <div className="mt-2 flex flex-col divide-y divide-neutral-track text-[11px]">
                    {ITEMS.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between gap-2 py-1.5"
                      >
                        <span className="text-ink-muted text-[10.5px] leading-tight">
                          {item.name}
                        </span>
                        <span className="cifra shrink-0 text-[11px] font-medium">
                          {currency.format(item.price)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex items-baseline justify-between border-t border-border-strong pt-2">
                    <span className="rotulo text-[10px]">Total a pagar</span>
                    <span className="cifra text-lg font-bold text-value-shade">
                      {currency.format(total)}
                    </span>
                  </div>
                </div>

                {/* Botón de acción del cliente */}
                <div className="mt-3">
                  {!aprobado ? (
                    <button
                      type="button"
                      onClick={handleAprobar}
                      className="w-full cursor-pointer bg-value py-2.5 text-center text-xs font-bold text-splash-bg transition-transform hover:bg-value-shade active:scale-[0.98] shadow-sm"
                    >
                      Aprobar presupuesto →
                    </button>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-center gap-1.5 border border-success bg-success/15 py-2 text-center text-[11px] font-bold text-success">
                        <span>✓ Aprobado por el cliente</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleReiniciar}
                        className="cursor-pointer text-center text-[10px] text-ink-faint hover:underline"
                      >
                        ↺ Reiniciar simulación
                      </button>
                    </div>
                  )}

                  <p className="mt-1.5 text-center text-[9px] text-ink-ghost">
                    {aprobado
                      ? "Aprobado sin ir al taller ni llamar"
                      : "Toca para ver el cambio instantáneo"}
                  </p>
                </div>
              </div>
            </div>
          </AndroidFrame>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PANTALLA 2: CELULAR DEL TALLER / MECÁNICO (App en fosa)
            ══════════════════════════════════════════════════════════════ */}
        <div
          className={`flex flex-col items-center ${
            mobileTab === "cliente" ? "hidden sm:flex" : "flex"
          }`}
        >
          <div className="mb-2 text-center">
            <span className="rotulo text-[9px] text-value-shade">
              Paso 2 · Vista del Mecánico
            </span>
            <p className="text-xs font-bold text-ink">
              App MAZA en fosa o recepción
            </p>
          </div>

          <AndroidFrame
            className="max-w-[275px] sm:max-w-[285px]"
            aspect="aspect-[9/18.8]"
          >
            <div className="flex h-full flex-col bg-surface pb-3 pt-3.5 text-xs select-none">
              {/* Encabezado del taller */}
              <div className="border-b border-border-strong bg-surface-alt px-4 pb-2 text-center">
                <div className="flex items-center justify-between text-[9px]">
                  <span className="rotulo text-ink">Taller Central</span>
                  <span className="rotulo text-value-shade">Fosa 1 · Carlos M.</span>
                </div>
                <h4 className="mt-0.5 text-sm font-bold text-ink">
                  ORDEN #0142 EN VIVO
                </h4>
                <p className="text-[10px] text-ink-muted">
                  Honda CB 500 F · Diego Morales
                </p>
              </div>

              {/* ─── Estado dinámico en el taller ─── */}
              <div
                className={`border-b px-4 py-2.5 transition-all duration-300 ${
                  aprobado
                    ? "border-success bg-success/20 text-success"
                    : "border-border-strong bg-amber-500/10 text-amber-700 dark:text-amber-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        aprobado ? "bg-success animate-ping" : "bg-amber-500"
                      }`}
                    />
                    <span className="rotulo text-[10px] font-bold">
                      {aprobado
                        ? "🟢 ¡PRESUPUESTO APROBADO!"
                        : "⏳ ESPERANDO APROBACIÓN"}
                    </span>
                  </div>
                  {aprobado && (
                    <span className="rotulo text-[9px] text-success">
                      0.3s Sinc
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[10px] leading-tight text-ink-muted">
                  {aprobado
                    ? "Diego Morales aprobó desde su celular. Listo para iniciar trabajo."
                    : "Presupuesto enviado. Fosa en espera de confirmación."}
                </p>
              </div>

              {/* ─── Tareas de taller y stock ─── */}
              <div className="flex flex-1 flex-col justify-between px-4 py-2.5">
                <div className="space-y-2">
                  <div className="rounded border border-border-soft bg-surface-alt p-2 text-[10.5px]">
                    <div className="flex justify-between items-center text-ink font-semibold">
                      <span>Repuesto: Pastillas OEM</span>
                      <span
                        className={`rotulo text-[9px] ${
                          aprobado ? "text-success font-bold" : "text-ink-faint"
                        }`}
                      >
                        {aprobado ? "✓ Stock descontado" : "En bodega (2)"}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-ink-muted">
                      {aprobado
                        ? "1 juego descontado de inventario automáticamente."
                        : "Reservado a la espera de autorización."}
                    </p>
                  </div>

                  <div className="rounded border border-border-soft bg-surface-alt p-2 text-[10.5px]">
                    <div className="flex justify-between items-center text-ink font-semibold">
                      <span>Mano de obra</span>
                      <span className="rotulo text-[9px] text-ink-faint">
                        Carlos M.
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-ink-muted">
                      {aprobado
                        ? "Cambio de pastillas y purgado asignado a Fosa 1."
                        : "Esperando visto bueno del cliente."}
                    </p>
                  </div>
                </div>

                {/* ─── Botones del mecánico en fosa ─── */}
                <div className="mt-3">
                  {aprobado ? (
                    <div className="flex flex-col gap-1.5 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="border border-border-strong py-2 text-center text-[10px] font-bold text-ink bg-surface">
                          📷 Foto inicio
                        </div>
                        <div className="bg-value py-2 text-center text-[10px] font-bold text-splash-bg">
                          Avanzar a listo
                        </div>
                      </div>
                      <p className="text-center text-[9px] text-success font-semibold">
                        ✓ Fosa desbloqueada en tiempo real
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <div className="border border-neutral-track bg-neutral-track/30 py-2.5 text-center text-[10.5px] font-medium text-ink-ghost cursor-not-allowed">
                        🔒 Trabajo en pausa por aprobación
                      </div>
                      <p className="text-center text-[9px] text-ink-ghost">
                        El mecánico no pierde tiempo llamando
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AndroidFrame>
        </div>
      </div>

      {/* ─── Micro-aviso explicativo inferior ─── */}
      <div className="mt-4 text-center">
        <p className="text-xs text-ink-faint">
          💡 En MAZA todo ocurre en tiempo real: sin planillas, sin llamadas y
          con el inventario cuadrado solo.
        </p>
      </div>
    </div>
  );
}
