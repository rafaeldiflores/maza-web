import { ComputerFrame } from "./computer-frame";
import { PhoneFrame } from "./phone-frame";

export function HybridPlatform() {
  return (
    <section className="border-y border-border-soft bg-surface-alt px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-3xl">
          <span className="rotulo inline-flex items-center gap-2 border border-border-strong px-3 py-1.5 text-[10px]">
            <span className="testigo bg-value" />
            Doble superficie · Sincronizado en tiempo real
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,3.75rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            En el taller tu teléfono.
            <br />
            En el mesón tu computador.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            MAZA está pensada para cómo se trabaja de verdad: la rapidez del
            celular al lado del vehículo y la comodidad de la pantalla ancha en
            la recepción. Sin instalaciones pesadas: se conecta con código QR
            igual que WhatsApp Web.
          </p>
        </div>

        {/* Maqueta visual dual: Monitor PC horizontal + Celular Android en taller */}
        <div className="reveal mt-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          {/* Lado PC Mostrador (8 columnas en desktop): Monitor con ventana de navegador */}
          <div className="lg:col-span-8">
            <ComputerFrame
              file="screenshots/mostrador-pc.png"
              alt="Mostrador PC de MAZA con cola de trabajo y atención rápida en vivo"
            />
          </div>

          {/* Lado Móvil (4 columnas en desktop): Celular Android en taller */}
          <div className="flex flex-col items-center justify-center lg:col-span-4">
            <PhoneFrame
              className="max-w-[260px] sm:max-w-[275px]"
              aspect="aspect-[9/18.5]"
            >
              <div className="flex h-full flex-col bg-surface p-4 text-xs">
                {/* Cabecera del celular con estado de sincronización */}
                <div className="border-b border-border-strong pb-2.5 pt-3.5 text-center">
                  <span className="rotulo text-[9px] text-value-shade">
                    ● Móvil en taller
                  </span>
                  <p className="mt-0.5 text-xs font-bold text-ink">
                    ORDEN #0142 EN VIVO
                  </p>
                </div>

                <div className="flex flex-1 flex-col justify-between py-2">
                  <div className="flex items-center justify-between border-b border-neutral-track pb-2">
                    <div>
                      <span className="rotulo text-[9px]">Mecánico asignado</span>
                      <p className="text-xs font-bold text-ink">
                        Carlos M. (Cupo 1)
                      </p>
                    </div>
                    <span className="testigo bg-value" />
                  </div>

                  <div className="my-2 flex flex-col gap-2">
                    <div className="border border-border-soft bg-surface-alt p-2.5 text-xs">
                      <p className="rotulo text-[9px]">Diagnóstico</p>
                      <p className="mt-0.5 text-ink-muted">
                        Pastillas gastadas al 90%. Requiere cambio.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="flex items-center justify-center gap-1 border border-border-strong py-1.5 text-center text-[10px] font-bold text-ink">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3 text-ink-muted"
                          aria-hidden="true"
                        >
                          <path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
                          <circle cx="12" cy="14" r="3.5" />
                        </svg>
                        <span>Foto falla</span>
                      </div>
                      <div className="bg-value py-1.5 text-center text-[10px] font-bold text-splash-bg">
                        Avanzar estado
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-neutral-track pt-2 text-center">
                    <span className="rotulo text-[9px] text-ink-ghost">
                      App Android · Se usa con guantes
                    </span>
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>

        {/* 3 pilares de la experiencia híbrida */}
        <div className="reveal mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="caja p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-border-strong bg-surface text-value">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </span>
              <h3 className="text-base font-bold text-ink">En el taller</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              El mecánico tiene el teléfono al lado del motor: avanza estados,
              toma fotos de la falla y consulta a la IA por repuestos.
            </p>
          </div>

          <div className="caja p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-border-strong bg-surface text-blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="2" y="3" width="20" height="14" rx="1.5" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </span>
              <h3 className="text-base font-bold text-ink">En el mesón</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              La recepción tiene toda la cola visible en pantalla ancha: ingresa
              clientes en segundos, vende repuestos express y cobra en caja.
            </p>
          </div>

          <div className="caja p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-border-strong bg-surface text-value">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M13 2 3 14h8l-1 8 11-13h-8l1-7Z" />
                </svg>
              </span>
              <h3 className="text-base font-bold text-ink">Estilo WhatsApp Web</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Sin instalaciones complejas: abres el navegador en tu PC, escaneas
              el QR con la app y todo se sincroniza en menos de 1 segundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
