"use client";

import { useState } from "react";
import type { IconName } from "@/lib/site";
import { FeatureIcon } from "./feature-icon";

interface WorkshopTool {
  id: string;
  icon: IconName;
  title: string;
  badge: string;
  microCopy: string;
  detail: string;
}

const TOOLS: WorkshopTool[] = [
  {
    id: "qr",
    icon: "qr",
    title: "QR al ingreso",
    badge: "3 SEG",
    microCopy: "Vincula la orden y la patente al instante sin tipear datos.",
    detail:
      "Escanea el código QR del cliente desde la cámara del celular o tablet y asocia el vehículo al taller en segundos, evitando rellenar formularios repetidos.",
  },
  {
    id: "inventario",
    icon: "inventario",
    title: "Inventario automático",
    badge: "AUTO-REBAJA",
    microCopy: "El stock de repuestos se descuenta solo con cada orden.",
    detail:
      "Los repuestos y aceites se rebajan del inventario al incluirlos en una reparación. Si algo está bajo el mínimo, el sistema te avisa antes de que falte.",
  },
  {
    id: "cola",
    icon: "cola",
    title: "Cola de trabajo y agenda",
    badge: "EN VIVO",
    microCopy: "Estados claros desde el ingreso hasta la entrega final.",
    detail:
      "Visualiza de un solo vistazo qué vehículos están en diagnóstico, cuáles en cupo de faena y cuáles listos para entrega, con citas organizadas.",
  },
  {
    id: "balances",
    icon: "balances",
    title: "Balances y caja diaria",
    badge: "CERO PLANILLAS",
    microCopy: "Ventas del día, semana y mes sin usar hojas de cálculo.",
    detail:
      "Arqueo diario de caja, medios de pago (efectivo, débito, transferencia), margen de repuestos y mano de obra. Todo calculado automáticamente.",
  },
  {
    id: "servicios",
    icon: "servicios",
    title: "Catálogo a tu medida",
    badge: "A MEDIDA",
    microCopy: "Precios y nombres propios para mecánica, detailing o lavado.",
    detail:
      "Configura tus servicios con tus propias tarifas y nombres. Funciona igual de bien para mantenciones de pauta, desabolladura o lavado y estética.",
  },
  {
    id: "rubro",
    icon: "rubro",
    title: "Autos, motos o bicis",
    badge: "TU RUBRO",
    microCopy: "La app habla tu idioma según la especialidad de tu taller.",
    detail:
      "Adapta la terminología, pautas de kilometraje y campos específicos según si trabajas con vehículos, flotas, motocicletas o bicicletas.",
  },
  {
    id: "domicilio",
    icon: "domicilio",
    title: "Despacho a domicilio",
    badge: "VÍA WHATSAPP",
    microCopy: "Sectores, costos y comprobante directo al cliente.",
    detail:
      "Configura zonas de cobertura y recargos por traslado, enviando el comprobante de recepción o entrega directamente al WhatsApp de tu cliente.",
  },
  {
    id: "exportar",
    icon: "exportar",
    title: "Exportación a Excel",
    badge: "1 CLIC EXCEL",
    microCopy: "Descarga tu cartera de clientes y repuestos cuando quieras.",
    detail:
      "Tus datos te pertenecen. Exporta todo el historial de clientes, reparaciones y catálogo de bodega a planillas Excel con un solo toque.",
  },
];

export function WorkshopToolsGrid() {
  const [expandedAll, setExpandedAll] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleAll = () => {
    const nextState = !expandedAll;
    setExpandedAll(nextState);
    const newExpanded: Record<string, boolean> = {};
    if (nextState) {
      TOOLS.forEach((t) => {
        newExpanded[t.id] = true;
      });
    }
    setExpandedIds(newExpanded);
  };

  return (
    <div className="reveal mt-20 sm:mt-28">
      {/* Cabecera técnica con selector de modo */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b-2 border-ink pb-3.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="testigo bg-value" />
            <span className="rotulo text-value-shade">Módulos complementarios</span>
          </div>
          <h3 className="mt-1 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-none text-ink">
            Y todo el resto del taller, resuelto
          </h3>
          <p className="mt-1.5 text-xs text-ink-muted sm:text-sm">
            8 herramientas integradas para ordenar tu taller sin planillas ni cuadernos.
          </p>
        </div>

        {/* Switch modo rápido / detallado */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="rotulo-sm hidden text-ink-ghost sm:inline">Lectura:</span>
          <button
            type="button"
            onClick={handleToggleAll}
            className="flex items-center gap-2 border border-border-strong bg-surface-alt px-3 py-1.5 font-mono text-[11px] font-bold text-ink transition-colors hover:border-value hover:text-value"
            aria-expanded={expandedAll}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                expandedAll ? "bg-value" : "bg-neutral-track"
              }`}
            />
            {expandedAll ? "Modo compacto ▴" : "Ver detalles completos ▾"}
          </button>
        </div>
      </div>

      {/* Grid compacto de 4 columnas en desktop, 2 en tablet y móvil */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
        {TOOLS.map((tool) => {
          const isExpanded = expandedAll || !!expandedIds[tool.id];

          return (
            <div
              key={tool.id}
              onClick={() => toggleItem(tool.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleItem(tool.id);
                }
              }}
              role="button"
              tabIndex={0}
              className={`group flex flex-col justify-between border bg-surface p-4 transition-all duration-200 cursor-pointer select-none text-left ${
                isExpanded
                  ? "border-value/80 bg-surface-alt/70 shadow-md shadow-black/20"
                  : "border-border-strong hover:border-border-strong hover:bg-surface-alt/40"
              }`}
            >
              <div>
                {/* Cabecera de la ficha: Ícono + Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center border text-ink transition-colors ${
                      isExpanded
                        ? "border-value bg-value-soft text-value-shade"
                        : "border-border-soft bg-surface-alt/60 group-hover:border-value/40 group-hover:text-value"
                    }`}
                  >
                    <FeatureIcon name={tool.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-value-shade bg-value-soft border border-value/20 px-2 py-0.5">
                    {tool.badge}
                  </span>
                </div>

                {/* Título conciso */}
                <h4 className="mt-3 text-sm font-bold text-ink sm:text-[15px] leading-snug group-hover:text-value transition-colors">
                  {tool.title}
                </h4>

                {/* Micro-copy escaneable al paso */}
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-[13px]">
                  {tool.microCopy}
                </p>

                {/* Detalle extendido opcional (desplegable) */}
                {isExpanded && (
                  <div className="mt-3 border-t border-neutral-track pt-2.5 text-[11px] leading-relaxed text-ink-faint animate-fadeIn">
                    {tool.detail}
                  </div>
                )}
              </div>

              {/* Indicador sutil de interacción */}
              <div className="mt-3 flex items-center justify-between border-t border-neutral-track/60 pt-2 font-mono text-[10px] uppercase text-ink-ghost group-hover:text-ink-muted">
                <span>{isExpanded ? "Ocultar" : "Detalle"}</span>
                <span className="text-xs">{isExpanded ? "▴" : "▾"}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
