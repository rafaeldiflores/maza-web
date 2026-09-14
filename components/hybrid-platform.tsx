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
            En el foso tu teléfono.
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

        {/* Maqueta visual dual: Monitor PC horizontal + Celular en mano */}
        <div className="reveal mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Lado PC Mostrador (8 columnas en desktop) */}
          <div className="caja flex flex-col overflow-hidden shadow-sm lg:col-span-8">
            {/* Barra de título de la ventana de navegador */}
            <div className="flex items-center justify-between border-b border-border-strong bg-surface px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-neutral-track" />
                <span className="h-2.5 w-2.5 bg-neutral-track" />
                <span className="h-2.5 w-2.5 bg-neutral-track" />
                <span className="rotulo ml-2 text-[10px] text-ink-faint">
                  app.maza.pro · Mostrador PC
                </span>
              </div>
              <span className="rotulo text-[9px] text-value-shade">
                ● En vivo (0.3s)
              </span>
            </div>

            {/* Cabecera del mostrador */}
            <div className="border-b border-border-soft bg-surface p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="rotulo text-[10px]">Mesón de Recepción</p>
                  <h4 className="text-base font-bold text-ink sm:text-lg">
                    Cola de trabajo y atención rápida
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="border border-border-strong bg-surface-alt px-3 py-1 text-xs font-semibold text-ink">
                    + Ingreso express
                  </span>
                  <span className="bg-value px-3 py-1 text-xs font-bold text-splash-bg">
                    Venta repuesto
                  </span>
                </div>
              </div>

              {/* Indicadores rápidos de mesón */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-neutral-track pt-3 text-center sm:gap-4">
                <div className="flex flex-col">
                  <span className="cifra text-lg text-ink sm:text-xl">7</span>
                  <span className="rotulo text-[9px]">En cola</span>
                </div>
                <div className="flex flex-col">
                  <span className="cifra text-lg text-ink sm:text-xl">3</span>
                  <span className="rotulo text-[9px]">Listas p/ entrega</span>
                </div>
                <div className="flex flex-col">
                  <span className="cifra text-lg text-value-shade sm:text-xl">
                    $184.500
                  </span>
                  <span className="rotulo text-[9px]">Caja hoy</span>
                </div>
              </div>
            </div>

            {/* Tabla horizontal de la cola en PC */}
            <div className="overflow-x-auto bg-surface">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border-strong bg-surface-alt text-ink-faint">
                    <th className="px-4 py-2 font-mono uppercase">Orden</th>
                    <th className="px-4 py-2 font-mono uppercase">Vehículo</th>
                    <th className="px-4 py-2 font-mono uppercase">Cliente</th>
                    <th className="px-4 py-2 font-mono uppercase">Estado</th>
                    <th className="px-4 py-2 font-mono uppercase text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-track text-ink">
                  <tr className="bg-value-soft/50 font-medium">
                    <td className="cifra px-4 py-3 text-value-shade">#0142</td>
                    <td className="px-4 py-3 font-semibold">Honda CB 500</td>
                    <td className="px-4 py-3 text-ink-muted">Diego Morales</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-value-shade">
                        <span className="testigo bg-value" /> Por aprobar
                      </span>
                    </td>
                    <td className="cifra px-4 py-3 text-right font-bold">
                      $45.000
                    </td>
                  </tr>
                  <tr>
                    <td className="cifra px-4 py-3">#0141</td>
                    <td className="px-4 py-3 font-semibold">Toyota Hilux</td>
                    <td className="px-4 py-3 text-ink-muted">
                      Transportes Sur
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-muted">
                        <span className="testigo bg-blue" /> En reparación
                      </span>
                    </td>
                    <td className="cifra px-4 py-3 text-right">$120.000</td>
                  </tr>
                  <tr>
                    <td className="cifra px-4 py-3">#0140</td>
                    <td className="px-4 py-3 font-semibold">Trek Marlin 7</td>
                    <td className="px-4 py-3 text-ink-muted">Camila Vega</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-success">
                        <span className="testigo bg-success" /> Lista retiro
                      </span>
                    </td>
                    <td className="cifra px-4 py-3 text-right">$28.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-border-strong bg-surface-alt px-4 py-2 text-[11px] text-ink-faint">
              Mostrador sincronizado · Imprime comprobantes térmicos en 1 clic
            </div>
          </div>

          {/* Lado Móvil (4 columnas en desktop) */}
          <div className="flex flex-col items-center lg:col-span-4">
            <div className="w-full max-w-[260px] border-2 border-ink bg-surface shadow-md">
              {/* Celular notch/speaker */}
              <div className="border-b border-border-strong px-4 py-2.5 text-center">
                <p className="rotulo text-[9px] text-value-shade">
                  ● Móvil en fosa
                </p>
                <p className="text-xs font-bold text-ink">ORDEN #0142 EN VIVO</p>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between border-b border-neutral-track pb-2.5">
                  <div>
                    <span className="rotulo text-[9px]">Mecánico asignado</span>
                    <p className="text-xs font-bold text-ink">Carlos M.</p>
                  </div>
                  <span className="testigo bg-value" />
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  <div className="border border-border-soft bg-surface-alt p-2 text-xs">
                    <p className="rotulo text-[9px]">Diagnóstico</p>
                    <p className="text-ink-muted">
                      Pastillas gastadas al 90%. Requiere cambio.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="border border-border-strong py-1.5 text-center text-[10px] font-bold text-ink"
                    >
                      📷 Foto falla
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="bg-value py-1.5 text-center text-[10px] font-bold text-splash-bg"
                    >
                      Avanzar estado
                    </button>
                  </div>
                </div>

                <div className="mt-3 border-t border-neutral-track pt-2.5 text-center">
                  <span className="rotulo text-[9px] text-ink-ghost">
                    App Android · Se usa con guantes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 pilares de la experiencia híbrida */}
        <div className="reveal mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="caja p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-border-strong text-ink">
                📱
              </span>
              <h3 className="text-base font-bold text-ink">En el foso</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              El mecánico tiene el teléfono al lado del motor: avanza estados,
              toma fotos de la falla y consulta a la IA por repuestos.
            </p>
          </div>

          <div className="caja p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-border-strong text-ink">
                💻
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
              <span className="grid h-9 w-9 place-items-center border border-border-strong text-ink">
                ⚡
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
