import Image from "next/image";

const HECHOS = [
  {
    etiqueta: "01 · VALIDADO EN EL BARRO",
    titular: "Forjado en taller real",
    detalle:
      "Nacido de 1 año en el taller Litoral Bikes (El Quisco), testeado y probado en todo el proceso operativo antes de abrirse a otros talleres.",
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
                  <div className="mb-3 flex items-center gap-3 rounded-sm border border-[#26262C] bg-[#141417] p-2.5 lg:hidden">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FF9900]/70 bg-[#0A0A0A]">
                      <Image
                        src="/fundador.jpg"
                        alt="Litoral Bikes - El Quisco"
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#FF9900] uppercase tracking-wider">
                        <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Litoral Bikes · El Quisco
                      </span>
                      <span className="text-xs font-bold text-[#F2F2F5] leading-snug">
                        1 año en el taller real
                      </span>
                      <span className="text-[11px] text-[#9A9AA3] leading-tight">
                        Testeado y probado en todo el proceso operativo
                      </span>
                    </div>
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
