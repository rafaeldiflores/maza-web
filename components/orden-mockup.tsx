"use client";

import { useState } from "react";
import { AndroidFrame } from "./android-frame";

interface BudgetItem {
  id: string;
  name: string;
  category: "diagnostico" | "servicio" | "repuesto";
  price: number;
}

const ITEMS: BudgetItem[] = [
  {
    id: "diag",
    name: "Diagnóstico y escaneo general",
    category: "diagnostico",
    price: 8000,
  },
  {
    id: "frenos",
    name: "Cambio pastillas de freno (mano de obra)",
    category: "servicio",
    price: 22000,
  },
  {
    id: "repuesto",
    name: "Pastillas delanteras OEM (repuesto)",
    category: "repuesto",
    price: 15000,
  },
];

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function OrdenMockup() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "diag",
    "frenos",
    "repuesto",
  ]);
  const [estado, setEstado] = useState<"pendiente" | "aprobado" | "rechazado">(
    "pendiente"
  );
  const [mobileTab, setMobileTab] = useState<"cliente" | "taller">("cliente");

  // Cálculo en tiempo real según los ítems seleccionados
  const totalSeleccionado = ITEMS.filter((item) =>
    selectedIds.includes(item.id)
  ).reduce((sum, item) => sum + item.price, 0);

  const hasRepuesto = selectedIds.includes("repuesto");
  const countSeleccionados = selectedIds.length;

  const toggleItem = (id: string) => {
    if (estado !== "pendiente") return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAprobar = () => {
    if (countSeleccionados === 0) return;
    setEstado("aprobado");
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setTimeout(() => setMobileTab("taller"), 550);
    }
  };

  const handleRechazar = () => {
    setEstado("rechazado");
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setTimeout(() => setMobileTab("taller"), 550);
    }
  };

  const handleReiniciar = () => {
    setEstado("pendiente");
    setSelectedIds(["diag", "frenos", "repuesto"]);
    setMobileTab("cliente");
  };

  return (
    <div className="flex w-full flex-col items-center">
      {/* ─── Píldora de estado de sincronización entre ambos dispositivos ─── */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-center">
        <span
          className={`rotulo inline-flex items-center gap-1.5 border px-3 py-1 text-[10px] ${
            estado === "aprobado"
              ? "border-success bg-success/15 text-success font-bold"
              : estado === "rechazado"
              ? "border-danger bg-danger/15 text-danger font-bold"
              : "border-border-strong bg-surface text-ink"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              estado === "aprobado"
                ? "bg-success animate-pulse"
                : estado === "rechazado"
                ? "bg-danger"
                : "bg-value"
            }`}
          />
          {estado === "aprobado"
            ? "Sincronizado (0.3s) · Presupuesto Aprobado"
            : estado === "rechazado"
            ? "Sincronizado (0.3s) · Presupuesto Rechazado"
            : "Simulación interactiva bidireccional"}
        </span>

        <span className="hidden text-xs text-ink-muted sm:inline">
          {estado === "aprobado"
            ? "¡Tu taller recibió la orden aprobada y descontó el stock!"
            : estado === "rechazado"
            ? "¡El taller liberó el cupo de inmediato sin llamadas!"
            : "Marca o desmarca ítems, luego aprueba o rechaza:"}
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
          {estado !== "pendiente" && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  estado === "aprobado" ? "bg-success" : "bg-danger"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  estado === "aprobado" ? "bg-success" : "bg-danger"
                }`}
              />
            </span>
          )}
        </button>
      </div>

      {/* ─── Contenedor dual de los 2 dispositivos ─── */}
      <div className="grid w-full grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:gap-5 xl:gap-8">
        {/* ══════════════════════════════════════════════════════════════
            PANTALLA 1: CELULAR DEL CLIENTE (Selección y aprobación/rechazo)
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
            className="max-w-[280px] sm:max-w-[290px]"
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
                  estado === "aprobado"
                    ? "bg-success/15"
                    : estado === "rechazado"
                    ? "bg-danger/15"
                    : "bg-value-soft"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`testigo ${
                      estado === "aprobado"
                        ? "bg-success animate-pulse"
                        : estado === "rechazado"
                        ? "bg-danger"
                        : "bg-value"
                    }`}
                  />
                  <span
                    className={`rotulo text-[10.5px] ${
                      estado === "aprobado"
                        ? "text-success font-bold"
                        : estado === "rechazado"
                        ? "text-danger font-bold"
                        : "text-ink"
                    }`}
                  >
                    {estado === "aprobado"
                      ? "Presupuesto aprobado"
                      : estado === "rechazado"
                      ? "Presupuesto rechazado"
                      : "Esperando tu visto bueno"}
                  </span>
                </div>
                {estado !== "pendiente" && (
                  <span
                    className={`rotulo text-[9px] font-bold ${
                      estado === "aprobado" ? "text-success" : "text-danger"
                    }`}
                  >
                    ✓ EN VIVO
                  </span>
                )}
              </div>

              {/* Detalle del presupuesto con checkboxes interactivos */}
              <div className="flex flex-1 flex-col justify-between px-4 py-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="titulo-seccion text-[9.5px]">
                      Servicios a realizar
                    </p>
                    {estado === "pendiente" && (
                      <span className="text-[9px] text-value-shade font-semibold">
                        Seleccionable
                      </span>
                    )}
                  </div>

                  {/* Lista de ítems interactivos */}
                  <div className="mt-2 flex flex-col gap-1.5 text-[11px]">
                    {ITEMS.map((item) => {
                      const isChecked = selectedIds.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          disabled={estado !== "pendiente"}
                          onClick={() => toggleItem(item.id)}
                          className={`flex w-full items-center justify-between gap-2 rounded border p-1.5 text-left transition-all ${
                            estado === "pendiente"
                              ? "cursor-pointer hover:border-neutral-400 active:scale-[0.99]"
                              : "cursor-default"
                          } ${
                            isChecked
                              ? "border-border-strong bg-surface shadow-xs"
                              : "border-dashed border-neutral-track bg-neutral-track/20 opacity-55"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-xs border text-[9px] font-bold ${
                                isChecked
                                  ? "border-value bg-value text-splash-bg"
                                  : "border-border-strong bg-surface text-transparent"
                              }`}
                            >
                              ✓
                            </span>
                            <span
                              className={`text-[10px] leading-tight truncate ${
                                isChecked
                                  ? "text-ink font-medium"
                                  : "text-ink-ghost line-through"
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>
                          <span
                            className={`cifra text-[10.5px] font-medium shrink-0 ${
                              isChecked ? "text-ink" : "text-ink-ghost"
                            }`}
                          >
                            {currency.format(item.price)}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Total recalculado en tiempo real */}
                  <div className="mt-2.5 flex items-baseline justify-between border-t border-border-strong pt-2">
                    <div className="flex flex-col">
                      <span className="rotulo text-[10px]">Total a pagar</span>
                      <span className="text-[9px] text-ink-faint">
                        {countSeleccionados} de {ITEMS.length} ítems
                      </span>
                    </div>
                    <span className="cifra text-lg font-bold text-value-shade">
                      {currency.format(totalSeleccionado)}
                    </span>
                  </div>
                </div>

                {/* Botones de acción: Aprobar y Rechazar */}
                <div className="mt-3">
                  {estado === "pendiente" ? (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          disabled={countSeleccionados === 0}
                          onClick={handleAprobar}
                          className={`flex-1 py-2.5 text-center text-xs font-bold text-splash-bg transition-transform shadow-sm ${
                            countSeleccionados > 0
                              ? "cursor-pointer bg-value hover:bg-value-shade active:scale-[0.98]"
                              : "cursor-not-allowed bg-neutral-track text-ink-ghost"
                          }`}
                        >
                          Aprobar ({currency.format(totalSeleccionado)})
                        </button>

                        <button
                          type="button"
                          onClick={handleRechazar}
                          className="cursor-pointer border border-danger/40 bg-danger/5 px-3 py-2.5 text-center text-xs font-bold text-danger transition-colors hover:bg-danger/15 active:scale-[0.98]"
                          title="Rechazar presupuesto"
                        >
                          ✕ Rechazar
                        </button>
                      </div>

                      <p className="text-center text-[9px] text-ink-ghost">
                        Toca los ítems para modificar o elige aprobar/rechazar
                      </p>
                    </div>
                  ) : estado === "aprobado" ? (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-center gap-1.5 border border-success bg-success/15 py-2 text-center text-[11px] font-bold text-success">
                        <span>
                          ✓ Presupuesto aprobado ({currency.format(totalSeleccionado)})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleReiniciar}
                        className="cursor-pointer text-center text-[10px] text-ink-faint hover:underline"
                      >
                        ↺ Reiniciar simulación
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-center gap-1.5 border border-danger bg-danger/15 py-2 text-center text-[11px] font-bold text-danger">
                        <span>✕ Presupuesto rechazado por el cliente</span>
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
                </div>
              </div>
            </div>
          </AndroidFrame>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PANTALLA 2: CELULAR DEL TALLER / MECÁNICO (App en taller)
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
              App MAZA en taller o recepción
            </p>
          </div>

          <AndroidFrame
            className="max-w-[280px] sm:max-w-[290px]"
            aspect="aspect-[9/18.8]"
          >
            <div className="flex h-full flex-col bg-surface pb-3 pt-3.5 text-xs select-none">
              {/* Encabezado del taller */}
              <div className="border-b border-border-strong bg-surface-alt px-4 pb-2 text-center">
                <div className="flex items-center justify-between text-[9px]">
                  <span className="rotulo text-ink">Taller Central</span>
                  <span className="rotulo text-value-shade">Cupo 1 · Carlos M.</span>
                </div>
                <h4 className="mt-0.5 text-sm font-bold text-ink">
                  ORDEN #0142 EN VIVO
                </h4>
                <p className="text-[10px] text-ink-muted">
                  Honda CB 500 F · Diego Morales
                </p>
              </div>

              {/* ─── Estado dinámico en el taller (Pendiente / Aprobado / Rechazado) ─── */}
              <div
                className={`border-b px-4 py-2.5 transition-all duration-300 ${
                  estado === "aprobado"
                    ? "border-success bg-success/20 text-success"
                    : estado === "rechazado"
                    ? "border-danger bg-danger/15 text-danger"
                    : "border-border-strong bg-amber-500/10 text-amber-700 dark:text-amber-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        estado === "aprobado"
                          ? "bg-success animate-ping"
                          : estado === "rechazado"
                          ? "bg-danger"
                          : "bg-amber-500"
                      }`}
                    />
                    <span className="rotulo text-[10px] font-bold">
                      {estado === "aprobado"
                        ? "🟢 PRESUPUESTO APROBADO"
                        : estado === "rechazado"
                        ? "🔴 PRESUPUESTO RECHAZADO"
                        : "⏳ ESPERANDO APROBACIÓN"}
                    </span>
                  </div>
                  {estado !== "pendiente" && (
                    <span
                      className={`rotulo text-[9px] font-bold ${
                        estado === "aprobado" ? "text-success" : "text-danger"
                      }`}
                    >
                      0.3s Sinc
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[10px] leading-tight text-ink-muted">
                  {estado === "aprobado"
                    ? `Diego Morales aprobó ${countSeleccionados} servicio(s) por ${currency.format(
                        totalSeleccionado
                      )}. Trabajo autorizado.`
                    : estado === "rechazado"
                    ? "El cliente rechazó el presupuesto desde el link. Vehículo liberado para retiro."
                    : `Cliente revisando presupuesto por WhatsApp (${currency.format(
                        totalSeleccionado
                      )}).`}
                </p>
              </div>

              {/* ─── Tareas de taller y stock reactivo ─── */}
              <div className="flex flex-1 flex-col justify-between px-4 py-2.5">
                <div className="space-y-2">
                  {/* Tarjeta de inventario del repuesto */}
                  <div className="rounded border border-border-soft bg-surface-alt p-2 text-[10.5px]">
                    <div className="flex justify-between items-center text-ink font-semibold">
                      <span>Repuesto: Pastillas OEM</span>
                      <span
                        className={`rotulo text-[9px] font-bold ${
                          estado === "aprobado" && hasRepuesto
                            ? "text-success"
                            : estado === "rechazado" ||
                              (estado === "aprobado" && !hasRepuesto)
                            ? "text-ink-faint"
                            : "text-value-shade"
                        }`}
                      >
                        {estado === "aprobado" && hasRepuesto
                          ? "✓ Descontado de bodega"
                          : estado === "aprobado" && !hasRepuesto
                          ? "No requerido (cliente trae pieza)"
                          : estado === "rechazado"
                          ? "Stock intacto (2 en bodega)"
                          : "2 en bodega (reservado)"}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-ink-muted">
                      {estado === "aprobado" && hasRepuesto
                        ? "1 juego descontado de inventario automáticamente."
                        : estado === "aprobado" && !hasRepuesto
                        ? "Cliente desmarcó este repuesto. No se toca el stock."
                        : estado === "rechazado"
                        ? "Presupuesto rechazado: ningún repuesto fue consumido."
                        : "Esperando confirmación de compra."}
                    </p>
                  </div>

                  {/* Tarjeta de mano de obra y asignación */}
                  <div className="rounded border border-border-soft bg-surface-alt p-2 text-[10.5px]">
                    <div className="flex justify-between items-center text-ink font-semibold">
                      <span>Mano de obra y cupo</span>
                      <span className="rotulo text-[9px] text-ink-faint">
                        Carlos M. (Cupo 1)
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-ink-muted">
                      {estado === "aprobado"
                        ? `Cambio de pastillas y diagnóstico autorizado por ${currency.format(
                            totalSeleccionado
                          )}.`
                        : estado === "rechazado"
                        ? "Cupo 1 liberado. Mecánico disponible para nueva orden."
                        : "Mecánico en espera de autorización del cliente."}
                    </p>
                  </div>
                </div>

                {/* ─── Botones de acción del taller ─── */}
                <div className="mt-3">
                  {estado === "aprobado" ? (
                    <div className="flex flex-col gap-1.5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="border border-border-strong bg-surface py-2 text-center text-[10px] font-bold text-ink">
                          📷 Foto inicio
                        </div>
                        <div className="bg-value py-2 text-center text-[10px] font-bold text-splash-bg">
                          Iniciar trabajo →
                        </div>
                      </div>
                      <p className="text-center text-[9px] text-success font-semibold">
                        ✓ Cupo desbloqueado en tiempo real
                      </p>
                    </div>
                  ) : estado === "rechazado" ? (
                    <div className="flex flex-col gap-1.5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="border border-border-strong bg-surface py-2 text-center text-[10px] font-bold text-ink">
                          Cobrar revisión ($8.000)
                        </div>
                        <div className="border border-ink bg-surface-alt py-2 text-center text-[10px] font-bold text-ink">
                          Liberar cupo ✓
                        </div>
                      </div>
                      <p className="text-center text-[9px] text-ink-muted font-semibold">
                        Vehículo listo para entrega sin reparar
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
          💡 En MAZA el cliente elige qué reparar desde su casa, los totales se
          calculan solos y tu taller sabe exactamente qué hacer en 0.3 segundos.
        </p>
      </div>
    </div>
  );
}
