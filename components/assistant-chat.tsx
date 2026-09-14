"use client";

import { useState } from "react";
import { AndroidFrame } from "./android-frame";

interface ChatScenario {
  id: string;
  pill: string;
  userPrompt: string;
  botBadge: string;
  botText: string;
  metrics?: { label: string; val: string; isAlert?: boolean }[];
  quote?: string;
  actionText?: string;
}

const SCENARIOS: ChatScenario[] = [
  {
    id: "stock",
    pill: "¿Qué repuestos tengo bajo stock?",
    userPrompt: "¿Qué repuestos tengo bajo el mínimo?",
    botBadge: "Inventario en tiempo real",
    botText:
      "Revisé tus 44 repuestos registrados. Tienes 2 productos bajo el stock mínimo de seguridad:",
    metrics: [
      {
        label: "Pastillas delanteras OEM",
        val: "2 en bodega (mín: 5)",
        isAlert: true,
      },
      {
        label: "Aceite 10W40 semi-sintético",
        val: "1 litro (mín: 4L)",
        isAlert: true,
      },
      {
        label: "Líquido de frenos DOT 4",
        val: "6 unidades (normal)",
      },
    ],
    actionText: "Generar pedido sugerido a proveedor",
  },
  {
    id: "caja",
    pill: "¿Cuánto llevo facturado este mes?",
    userPrompt: "¿Cuánto llevo facturado este mes?",
    botBadge: "Caja y Balances",
    botText:
      "Resumen de facturación del taller en lo que va del mes:",
    metrics: [
      { label: "Total facturado", val: "$2.840.000 CLP" },
      { label: "Órdenes cerradas", val: "38 vehículos" },
      { label: "Rendimiento", val: "+14% vs mes anterior" },
      { label: "Por cobrar hoy", val: "$184.500 CLP (3 entregas)" },
    ],
    actionText: "Ver reporte detallado de ingresos",
  },
  {
    id: "whatsapp",
    pill: "Avísale a Diego de su moto",
    userPrompt: "Avísale a Diego que su moto está lista para retiro",
    botBadge: "Redacción WhatsApp",
    botText:
      "Identifiqué la orden #0142 de Diego Morales (Honda CB 500 F). Mensaje redactado:",
    quote:
      "“Hola Diego, tu Honda CB 500 está lista en Taller Central. Total a pagar: $45.000. Revisa el detalle del trabajo y comprobante aquí: maza.pro/o/0142”",
    actionText: "Abrir WhatsApp con mensaje listo",
  },
  {
    id: "diagnostico",
    pill: "Me suena atrás al frenar, ¿qué puede ser?",
    userPrompt: "Cliente dice que le suena atrás al frenar, ¿qué puede ser?",
    botBadge: "Diagnóstico y Catálogo",
    botText:
      "Diagnóstico sugerido cruzado con el catálogo de tu taller:",
    metrics: [
      {
        label: "Pastillas traseras desgastadas",
        val: "Tienes 3 juegos en stock ($14.000)",
      },
      {
        label: "Servicio mano de obra",
        val: "Cambio de pastillas ($22.000)",
      },
    ],
    actionText: "Crear orden con estos servicios",
  },
  {
    id: "cola",
    pill: "¿Cuántos vehículos hay en el taller?",
    userPrompt: "¿Cómo está la cola de trabajo hoy?",
    botBadge: "Cola de trabajo",
    botText:
      "Hay 7 vehículos en el taller en este momento:",
    metrics: [
      { label: "En fosa / reparación", val: "3 vehículos" },
      { label: "Esperando repuesto", val: "1 vehículo" },
      { label: "Listos para retiro", val: "3 vehículos" },
      { label: "Próxima cita", val: "15:30 hrs (Yamaha R3)" },
    ],
    actionText: "Ver cola completa en mostrador",
  },
];

export function AssistantChat() {
  const [selectedId, setSelectedId] = useState<string>("stock");
  const [animating, setAnimating] = useState<boolean>(false);

  const active =
    SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  const handleSelect = (id: string) => {
    if (id === selectedId) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedId(id);
      setAnimating(false);
    }, 140);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {/* Marco Android con el chat interactivo */}
      <AndroidFrame
        className="max-w-[280px] sm:max-w-[305px]"
        aspect="aspect-[9/19]"
      >
        <div className="flex h-full flex-col bg-surface-alt text-xs select-none">
          {/* Cabecera del chat */}
          <div className="border-b border-border-strong bg-surface px-4 pb-2.5 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative grid h-7 w-7 place-items-center bg-ink text-app-bg text-[10px] font-bold">
                  IA
                  <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-surface bg-success" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-ink text-[12px] leading-tight">
                    MAZA Asistente
                  </span>
                  <span className="rotulo text-[8px] text-success">
                    ● Conectado a tu taller
                  </span>
                </div>
              </div>
              <span className="rotulo text-[9px] text-ink-faint">
                Taller Central
              </span>
            </div>
          </div>

          {/* Área de mensajes de la conversación */}
          <div className="flex flex-1 flex-col justify-between overflow-y-auto p-3.5 space-y-3">
            <div
              className={`flex flex-col gap-3 transition-opacity duration-150 ${
                animating ? "opacity-30" : "opacity-100"
              }`}
            >
              {/* Mensaje del mecánico / usuario */}
              <div className="self-end max-w-[90%] rounded-lg bg-ink px-3 py-2 text-app-bg text-[11px] shadow-sm">
                <p>{active.userPrompt}</p>
                <span className="mt-1 block text-right text-[8px] text-ink-ghost">
                  10:42 hrs
                </span>
              </div>

              {/* Respuesta de la IA con datos reales */}
              <div className="self-start max-w-[95%] rounded-lg border border-border-strong bg-surface p-3 text-ink text-[11px] shadow-sm">
                <div className="mb-1.5 flex items-center justify-between border-b border-neutral-track pb-1">
                  <span className="rotulo text-[8.5px] text-value-shade font-bold">
                    {active.botBadge}
                  </span>
                  <span className="rotulo text-[8px] text-ink-faint">
                    Datos en vivo
                  </span>
                </div>

                <p className="leading-relaxed text-ink-muted">{active.botText}</p>

                {/* Métricas o alertas */}
                {active.metrics && (
                  <div className="mt-2.5 flex flex-col divide-y divide-neutral-track rounded border border-neutral-track bg-surface-alt text-[10px]">
                    {active.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between p-1.5"
                      >
                        <span className="text-ink-muted truncate max-w-[130px]">
                          {m.label}
                        </span>
                        <span
                          className={`cifra font-bold shrink-0 ${
                            m.isAlert ? "text-danger" : "text-ink"
                          }`}
                        >
                          {m.val}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Cita de WhatsApp si aplica */}
                {active.quote && (
                  <div className="mt-2 rounded border-l-2 border-success bg-success/10 p-2 text-[10px] italic text-ink">
                    {active.quote}
                  </div>
                )}

                {/* Botón de acción sugerida */}
                {active.actionText && (
                  <div className="mt-2.5 border border-border-strong bg-surface py-1 px-2 text-center text-[9.5px] font-bold text-value-shade hover:bg-surface-alt cursor-default">
                    ⚡ {active.actionText}
                  </div>
                )}
              </div>
            </div>

            {/* Falsa barra de entrada de texto */}
            <div className="border-t border-border-strong pt-2">
              <div className="flex items-center justify-between rounded border border-border-strong bg-surface px-2.5 py-1.5 text-[10px] text-ink-faint">
                <span className="truncate">Preguntar sobre stock, caja...</span>
                <span className="text-ink-muted">➤</span>
              </div>
            </div>
          </div>
        </div>
      </AndroidFrame>

      {/* Selector de preguntas cliqueables */}
      <div className="flex max-w-[480px] flex-col items-center gap-3 text-center">
        <p className="rotulo text-[10px] text-value-shade">
          Toca una pregunta para probar el asistente:
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {SCENARIOS.map((s) => {
            const isSelected = s.id === selectedId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSelect(s.id)}
                className={`cursor-pointer rounded-sm border px-3 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "border-value bg-value text-splash-bg font-bold shadow-sm"
                    : "border-border-strong bg-surface text-ink-muted hover:border-ink hover:text-ink"
                }`}
              >
                {s.pill}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
