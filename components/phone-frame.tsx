import Image from "next/image";
import { mediaExists } from "@/lib/media";
import { AndroidFrame } from "./android-frame";

function MockupSeguimiento() {
  return (
    <div className="flex h-full flex-col bg-surface p-4 text-xs">
      <div className="border-b border-border-strong pb-3 pt-5 text-center">
        <span className="rotulo text-[9px] text-value-shade">● Link de tu cliente</span>
        <h4 className="mt-0.5 font-bold text-ink text-sm">Honda CB 500 · 2021</h4>
        <p className="cifra mt-1 text-[10px] text-ink-faint">ORDEN #0142</p>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 grid h-4 w-4 place-items-center bg-success text-[9px] font-bold text-splash-bg">✓</span>
          <div>
            <p className="font-bold text-ink">Ingresado al taller</p>
            <p className="text-[10px] text-ink-ghost">10:15 hrs · Recepción</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="mt-0.5 grid h-4 w-4 place-items-center bg-success text-[9px] font-bold text-splash-bg">✓</span>
          <div>
            <p className="font-bold text-ink">Diagnóstico listo</p>
            <p className="text-[10px] text-ink-ghost">10:45 hrs · Presupuesto aprobado</p>
          </div>
        </div>

        <div className="flex items-start gap-2 border-l-2 border-value bg-value-soft/50 p-1.5">
          <span className="mt-0.5 grid h-4 w-4 place-items-center bg-value text-[9px] font-bold text-splash-bg">●</span>
          <div>
            <p className="font-bold text-value-shade">En reparación</p>
            <p className="text-[10px] text-ink-muted">Mecánico: Carlos M. (Cupo 1)</p>
          </div>
        </div>

        <div className="flex items-start gap-2 opacity-50">
          <span className="mt-0.5 grid h-4 w-4 place-items-center border border-border-strong text-[9px] text-ink-ghost">○</span>
          <div>
            <p className="font-medium text-ink">Lavado y control final</p>
            <p className="text-[10px] text-ink-ghost">Pendiente</p>
          </div>
        </div>

        <div className="flex items-start gap-2 opacity-50">
          <span className="mt-0.5 grid h-4 w-4 place-items-center border border-border-strong text-[9px] text-ink-ghost">○</span>
          <div>
            <p className="font-medium text-ink">Listo para retiro</p>
            <p className="text-[10px] text-ink-ghost">Aviso automático por WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-neutral-track pt-2.5 text-center text-[10px] text-ink-faint">
        Tu cliente lo sigue sin instalar nada
      </div>
    </div>
  );
}

function MockupPresupuesto() {
  return (
    <div className="flex h-full flex-col bg-surface p-4 text-xs">
      <div className="border-b border-border-strong pb-2 pt-5 text-center">
        <span className="rotulo text-[9px] text-value-shade">Aprobación en 1 clic</span>
        <h4 className="mt-0.5 font-bold text-ink text-sm">Presupuesto #0142</h4>
      </div>

      <div className="mt-3 flex flex-col divide-y divide-neutral-track text-[11px]">
        <div className="py-2 flex justify-between">
          <span className="text-ink-muted">Diagnóstico y escaneo</span>
          <span className="cifra font-bold text-ink">$8.000</span>
        </div>
        <div className="py-2 flex justify-between">
          <span className="text-ink-muted">Cambio pastillas freno</span>
          <span className="cifra font-bold text-ink">$22.000</span>
        </div>
        <div className="py-2 flex justify-between">
          <span className="text-ink-muted">Pastillas delanteras OEM</span>
          <span className="cifra font-bold text-ink">$15.000</span>
        </div>
      </div>

      <div className="mt-3 border-t-2 border-ink pt-2 flex justify-between items-baseline">
        <span className="rotulo text-[10px]">Total</span>
        <span className="cifra text-lg font-bold text-value-shade">$45.000</span>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <div className="w-full bg-value py-2.5 text-center text-xs font-bold text-splash-bg">
          ✓ Aprobar presupuesto
        </div>
        <p className="text-center text-[9px] text-ink-ghost">
          El cliente aprueba sin ir al taller
        </p>
      </div>

      <div className="mt-auto border-t border-neutral-track pt-2 text-center text-[10px] text-ink-faint">
        Cierra ventas 3 veces más rápido
      </div>
    </div>
  );
}

function MockupEquipo() {
  return (
    <div className="flex h-full flex-col bg-surface p-4 text-xs">
      <div className="border-b border-border-strong pb-2 pt-5 text-center">
        <span className="rotulo text-[9px] text-value-shade">Plan Empresa</span>
        <h4 className="mt-0.5 font-bold text-ink text-sm">Panel de Equipo</h4>
        <p className="text-[10px] text-ink-faint">Reparto de carga en vivo</p>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        <div className="border border-border-soft bg-surface-alt p-2.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-ink">Carlos M.</span>
            <span className="rotulo text-[9px] text-value-shade">3 órdenes</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full bg-neutral-track">
            <div className="h-full bg-value w-3/4" />
          </div>
          <p className="mt-1 text-[10px] text-ink-muted">En taller: Honda CB 500</p>
        </div>

        <div className="border border-border-soft bg-surface-alt p-2.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-ink">Roberto G.</span>
            <span className="rotulo text-[9px] text-blue">2 órdenes</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full bg-neutral-track">
            <div className="h-full bg-blue w-1/2" />
          </div>
          <p className="mt-1 text-[10px] text-ink-muted">En taller: Toyota Hilux</p>
        </div>

        <div className="border border-border-soft bg-surface-alt p-2.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-ink">Matías S.</span>
            <span className="rotulo text-[9px] text-success">Disponible</span>
          </div>
          <p className="mt-1 text-[10px] text-ink-ghost">Listo para nueva orden</p>
        </div>
      </div>

      <div className="mt-auto border-t border-neutral-track pt-2 text-center text-[10px] text-ink-faint">
        Cero confusión entre mecánicos
      </div>
    </div>
  );
}

function MockupIA() {
  return (
    <div className="flex h-full flex-col bg-surface p-4 text-xs">
      <div className="border-b border-border-strong pb-2 pt-5 text-center">
        <span className="rotulo text-[9px] text-value-shade">Asistente IA</span>
        <h4 className="mt-0.5 font-bold text-ink text-sm">Conoce tu taller</h4>
      </div>

      <div className="mt-3 flex flex-col gap-2 text-[11px]">
        <div className="self-end max-w-[85%] bg-ink text-app-bg p-2 text-right">
          ¿Qué repuestos tengo bajo el mínimo?
        </div>

        <div className="self-start max-w-[90%] border border-border-strong bg-surface-alt p-2 text-ink">
          <p className="font-bold text-[10px] text-value-shade mb-1">MAZA IA · Inventario</p>
          Te quedan <strong>2 juegos</strong> de pastillas delanteras (mínimo 5) y <strong>1L</strong> de aceite 10W40.
        </div>

        <div className="self-end max-w-[85%] bg-ink text-app-bg p-2 text-right">
          Avísale a Diego de la Honda
        </div>

        <div className="self-start max-w-[90%] border border-border-strong bg-surface-alt p-2 text-ink">
          <p className="font-bold text-[10px] text-success mb-1">WhatsApp listo</p>
          Mensaje redactado con link de retiro. ¿Enviar?
        </div>
      </div>

      <div className="mt-auto border-t border-neutral-track pt-2 text-center text-[10px] text-ink-faint">
        Lee tus datos reales, no inventa
      </div>
    </div>
  );
}

export interface PhoneFrameProps {
  file?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  aspect?: string;
}

export function PhoneFrame({
  file,
  alt = "Captura de pantalla de la app MAZA en Android",
  className,
  children,
  aspect = "aspect-[9/19.5]",
}: PhoneFrameProps) {
  const ready = file ? mediaExists(file) : false;

  return (
    <AndroidFrame className={className} aspect={aspect}>
      {children ? (
        children
      ) : ready && file ? (
        <Image
          src={`/${file}`}
          alt={alt}
          fill
          sizes="(max-width: 640px) 260px, 290px"
          className="object-cover object-top"
        />
      ) : file?.includes("seguimiento") ? (
        <MockupSeguimiento />
      ) : file?.includes("presupuesto") ? (
        <MockupPresupuesto />
      ) : file?.includes("equipo") ? (
        <MockupEquipo />
      ) : file?.includes("ia") ? (
        <MockupIA />
      ) : (
        <MockupSeguimiento />
      )}
    </AndroidFrame>
  );
}
