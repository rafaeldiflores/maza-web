import Image from "next/image";

const HECHOS = [
  {
    etiqueta: "01 · VALIDADO EN EL BARRO",
    titular: "Forjado en taller real",
    detalle:
      "Nacido de 5 años de operación real en Litoral Bikes (El Quisco). Probado en el mesón diario antes de abrirse a otros talleres.",
  },
  {
    etiqueta: "02 · MULTIRUBRO REAL",
    titular: "Recepción en 30 segundos",
    detalle:
      "Adaptado a talleres multirubro: ingreso rápido por patente o número de serie, fotos de recepción y orden con código QR.",
  },
  {
    etiqueta: "03 · PUESTA EN MARCHA",
    titular: "Catálogo listo en minutos",
    detalle:
      "Sube una foto de tu pizarra de precios, un PDF o pega un texto de WhatsApp y la IA carga tus servicios y repuestos.",
  },
  {
    etiqueta: "04 · ACOMPAÑAMIENTO",
    titular: "Puesta en marcha asistida",
    detalle:
      "Sin bots ni esperas. Nuestro equipo configura tu taller contigo y deja cargado tu catálogo de servicios y repuestos.",
  },
] as const;

/**
 * Franja de respaldo real y autoridad técnica. Cero humo, 100% honesto.
 */
export function SocialProof() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {HECHOS.map((h) => {
            const esPilar03 = h.etiqueta.startsWith("03");
            return (
              <div
                key={h.etiqueta}
                className={`flex flex-col gap-2.5 border-b border-r bg-[var(--surface)] p-6 ${
                  esPilar03
                    ? "border-[#FF9900]/40 lg:border-[var(--line)]"
                    : "border-[var(--line)]"
                }`}
              >
                {h.etiqueta.startsWith("01") && (
                  <div className="relative mb-3 h-36 w-full overflow-hidden rounded-sm border border-[#26262C] lg:hidden">
                    <Image
                      src="/fundador.jpg"
                      alt="Litoral Bikes - El Quisco"
                      fill
                      sizes="(max-width: 1024px) 100vw, 300px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-[#141417]/60 to-transparent" />
                    <span className="absolute bottom-2 left-2 rounded-xs border border-[#26262C] bg-[#0A0A0A]/85 px-2 py-1 font-mono text-[10px] text-[#F2F2F5]">
                      📍 Litoral Bikes · 5 años de operación real
                    </span>
                  </div>
                )}
              <span className="font-mono text-[11px] font-semibold tracking-wider text-ink-faint uppercase">
                {h.etiqueta}
              </span>
              <h3 className="font-display text-2xl font-extrabold tracking-[0.02em] text-[var(--ink)] leading-tight">
                {h.titular}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {h.detalle}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
