import Image from "next/image";
import { AndroidFrame } from "@/components/android-frame";
import { CREADOR } from "@/lib/site";

const DETALLES_REALES = [
  {
    titulo: "Presupuestos con opciones o destildables",
    texto:
      "Envías hasta 3 alternativas (Básico, Recomendada, Premium) o ítems que el cliente puede destildar en su celular. El total y los repuestos se ajustan solos.",
  },
  {
    titulo: "Carga horaria en «Mi Día»",
    texto:
      "No es una lista ciega: suma las horas estimadas de tus trabajos en cola y te dice a qué hora terminas la jornada.",
  },
  {
    titulo: "Caja exacta y costos protegidos",
    texto:
      "Separa tu ganancia del día del efectivo exacto que debe haber en el cajón, y oculta tus costos de inventario a los mecánicos.",
  },
];

export function IngenieriaTaller() {
  return (
    <section
      id="ingenieria-real"
      className="border-b border-border-strong px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        {/* Columna izquierda: Explicación directa y humana */}
        <div className="flex flex-col gap-4 lg:col-span-6">
          <p className="rotulo text-[#FF9900]">
            FORJADO EN TALLER REAL · EL QUISCO, CHILE
          </p>
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
            UN AÑO PROBADO EN EL MESÓN ANTES DE SALIR.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
            MAZA nació en <strong className="text-ink">{CREADOR.taller}</strong> y une{" "}
            <strong className="text-ink">4 años de Ingeniería Informática</strong> con{" "}
            <strong className="text-ink">1 año operando en el taller</strong>, testeado y
            probado en todo el proceso operativo.
          </p>

          <ul className="mt-1 flex flex-col border-t border-border-strong">
            {DETALLES_REALES.map((d) => (
              <li
                key={d.titulo}
                className="flex flex-col gap-1 border-b border-border-strong py-3.5"
              >
                <div className="flex items-center gap-2">
                  <span className="testigo bg-[#FF9900]" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-ink">{d.titulo}</h3>
                </div>
                <p className="pl-4 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  {d.texto}
                </p>
              </li>
            ))}
          </ul>

          {/* Firma sobria del fundador */}
          <div className="mt-1 flex items-center gap-3 pt-1">
            <Image
              src={CREADOR.foto}
              alt={`${CREADOR.nombre}, fundador de MAZA`}
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full border border-border-strong object-cover object-top"
            />
            <div className="text-xs leading-snug">
              <p className="font-bold text-ink">{CREADOR.nombre}</p>
              <p className="text-ink-muted">
                {CREADOR.titulo} · Fundador en {CREADOR.taller}
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha: 2 capturas reales representativas de la ingeniería de la app */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:col-span-6">
          <div className="flex flex-col items-center gap-2">
            <AndroidFrame className="max-w-[220px] sm:max-w-[250px]">
              <Image
                src="/screenshots/mi-dia.png"
                alt="Vista Mi Día en MAZA calculando horas de trabajo y hora de término"
                fill
                sizes="(max-width: 640px) 180px, 250px"
                className="object-cover object-top"
              />
            </AndroidFrame>
            <span className="font-mono text-[10px] sm:text-xs text-ink-muted text-center">
              Cálculo de horas en «Mi Día»
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <AndroidFrame className="max-w-[220px] sm:max-w-[250px]">
              <Image
                src="/screenshots/balances.png"
                alt="Cierre de caja en MAZA separando ganancia del día y efectivo exacto en cajón"
                fill
                sizes="(max-width: 640px) 180px, 250px"
                className="object-cover object-top"
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
