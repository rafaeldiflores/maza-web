import Image from "next/image";

/**
 * Pantalla del mesón con el asistente abierto, para el ComputerFrame del
 * inicio. La consulta cruza cola, caja y presupuestos con los mismos datos de
 * la captura (órdenes #0138–#0142), así la respuesta se puede comprobar con la
 * tabla de atrás. En pantallas chicas el panel no cabe legible: solo captura.
 */
const ENTREGAS = [
  { orden: "#0142", cliente: "Diego Morales", vehiculo: "Honda CB 500 F", estado: "Lista", monto: "$45.000", listo: true },
  { orden: "#0138", cliente: "Andrés Bravo", vehiculo: "Scott Scale 965", estado: "Lista", monto: "$32.000", listo: true },
  { orden: "#0139", cliente: "Felipe Vera", vehiculo: "Yamaha YZF R3", estado: "Repuesto 15:00", monto: "$85.000", listo: false },
];

export function MesonConAsistente() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/screenshots/mostrador-pc.png"
        alt="La web de MAZA en el computador del mesón, con el asistente respondiendo qué se entrega hoy"
        fill
        sizes="(max-width: 1024px) 100vw, 850px"
        className="object-cover object-top"
        priority
      />

      <aside
        aria-hidden="true"
        className="absolute bottom-0 right-0 top-0 hidden w-[44%] flex-col border-l border-border-strong bg-surface shadow-[-12px_0_30px_-12px_rgba(0,0,0,0.35)] md:flex"
      >
        <header className="flex items-center justify-between border-b border-border-strong px-3 py-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-ink">
            <span className="grid h-4 w-4 place-items-center bg-ink text-[9px] text-app-bg">✦</span>
            Asistente MAZA
          </span>
          <span className="text-[10px] text-ink-ghost">×</span>
        </header>

        <div className="flex flex-1 flex-col gap-2 overflow-hidden px-3 py-2 text-[9.5px] leading-snug lg:gap-1 lg:text-[8.5px] xl:gap-2 xl:text-[10px]">
          <p className="max-w-[88%] self-end bg-ink px-2 py-1.5 text-app-bg">
            ¿Qué entrego hoy, cuánto cobro y quién no ha aprobado?
          </p>

          <div className="flex flex-col gap-1.5 border border-border-strong bg-surface-alt p-2 text-ink">
            <p className="rotulo text-[7.5px] text-value-shade">Cola · Caja · Presupuestos</p>
            <p>
              Hoy entregas <strong>3 vehículos</strong> y cobras <strong className="cifra">$162.000</strong>:
            </p>

            <table className="w-full border-collapse text-[8.5px] lg:text-[8px] xl:text-[9px]">
              <tbody>
                {ENTREGAS.map((e) => (
                  <tr key={e.orden} className="border-t border-neutral-track">
                    <td className="py-1 pr-1">
                      <span className="font-bold">{e.cliente}</span>
                      <span className="block text-ink-faint lg:hidden xl:block">{e.vehiculo}</span>
                    </td>
                    <td className={`py-1 pr-1 font-bold ${e.listo ? "text-success" : "text-value-shade"}`}>
                      {e.listo ? "✓ " : "◷ "}
                      {e.estado}
                    </td>
                    <td className="cifra py-1 text-right font-bold">{e.monto}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="border-l-2 border-value bg-value-soft/50 px-1.5 py-1">
              <strong>Transportes Sur Ltda</strong> no ha aprobado el presupuesto de la Hilux
              (<span className="cifra">$120.000</span>), enviado hace 2 días.
            </p>
          </div>

          <div className="flex gap-1 whitespace-nowrap">
            <span className="bg-value px-1.5 py-1 text-[8.5px] font-bold text-splash-bg">
              Avisar a los 2 listos
            </span>
            <span className="border border-ink px-1.5 py-1 text-[8.5px] font-bold text-ink">
              Reenviar presupuesto
            </span>
          </div>
        </div>

        <footer className="border-t border-border-strong px-3 py-2">
          <div className="flex items-center justify-between border border-border-strong px-2 py-1 text-[9px] text-ink-ghost">
            Pregúntale a tu taller…
            <span className="text-ink">↑</span>
          </div>
        </footer>
      </aside>
    </div>
  );
}
