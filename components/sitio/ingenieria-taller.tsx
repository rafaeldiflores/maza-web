import Image from "next/image";
import { AndroidFrame } from "@/components/android-frame";
import { CREADOR } from "@/lib/site";

const DETALLES_REALES = [
  {
    titulo: "Presupuestos con 3 opciones o destildables",
    texto: "Básico, Recomendada o Premium en 1 link. El total y el stock se ajustan solos.",
  },
  {
    titulo: "Carga horaria real en «Mi Día»",
    texto: "Suma las horas estimadas de tu cola y te dice a qué hora terminas la jornada.",
  },
  {
    titulo: "Caja al centavo y costos protegidos",
    texto: "Separa tu ganancia del efectivo en cajón y oculta costos de compra a mecánicos.",
  },
];

export function IngenieriaTaller() {
  return (
    <section
      id="ingenieria-real"
      className="border-b border-border-strong px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Columna izquierda: Directa y sin relleno */}
        <div className="flex flex-col gap-3.5 lg:col-span-6">
          <p className="rotulo text-[#FF9900]">
            FORJADO EN TALLER REAL · EL QUISCO, CHILE
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
            1 AÑO PROBADO EN EL MESÓN + 4 AÑOS DE INGENIERÍA.
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted">
            Nacido en <strong className="text-ink">{CREADOR.taller}</strong>, testeado y probado en
            todo el proceso operativo real antes de abrirse a otros talleres.
          </p>

          <ul className="mt-1 flex flex-col border-t border-border-strong">
            {DETALLES_REALES.map((d) => (
              <li
                key={d.titulo}
                className="flex flex-col gap-0.5 border-b border-border-strong py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="testigo bg-[#FF9900]" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold text-ink">{d.titulo}</h3>
                </div>
                <p className="pl-4 text-xs text-ink-muted">{d.texto}</p>
              </li>
            ))}
          </ul>

          {/* Firma sobria del fundador */}
          <div className="mt-1 flex items-center gap-3 pt-1">
            <Image
              src={CREADOR.foto}
              alt={`${CREADOR.nombre}, fundador de MAZA`}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border border-border-strong object-cover object-top"
            />
            <div className="text-xs leading-snug">
              <p className="font-bold text-ink">{CREADOR.nombre}</p>
              <p className="text-ink-muted">
                {CREADOR.titulo} · Fundador en {CREADOR.taller}
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha: 2 capturas completas 9:16 sin recortes laterales ni inferiores */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-6">
          <div className="flex flex-col items-center gap-2">
            <AndroidFrame aspect="aspect-[9/16]" className="max-w-[205px] sm:max-w-[225px]">
              <Image
                src="/screenshots/mi-dia.png"
                alt="Vista Mi Día en MAZA calculando horas de trabajo y hora de término"
                fill
                sizes="(max-width: 640px) 180px, 225px"
                className="object-contain object-top"
              />
            </AndroidFrame>
            <span className="font-mono text-[10px] sm:text-xs text-ink-muted text-center">
              Cálculo de horas en «Mi Día»
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <AndroidFrame aspect="aspect-[9/16]" className="max-w-[205px] sm:max-w-[225px]">
              <Image
                src="/screenshots/balances.png"
                alt="Cierre de caja en MAZA separando ganancia del día y efectivo exacto en cajón"
                fill
                sizes="(max-width: 640px) 180px, 225px"
                className="object-contain object-top"
              />
            </AndroidFrame>
            <span className="font-mono text-[10px] sm:text-xs text-ink-muted text-center">
              Efectivo exacto en cajón
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
