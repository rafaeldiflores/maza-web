import { LogoMark } from "./logo";
import { WA_MESSAGES, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="hero-stagger mx-auto flex max-w-4xl flex-col items-start gap-7">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-ink text-bg-start shadow-lg shadow-black/30 sm:h-20 sm:w-20">
          <LogoMark className="h-11 w-11 sm:h-14 sm:w-14" />
        </span>

        <h1 className="font-display text-[clamp(3rem,11vw,6rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
          Gestión inteligente
          <br />
          para tu taller.
        </h1>

        <p className="max-w-[52ch] text-lg leading-relaxed text-ink-muted sm:text-xl">
          MAZA reemplaza el cuaderno y las planillas sueltas: cola de trabajo,
          inventario, presupuestos que tu cliente aprueba desde el celular y un
          link para que siga su vehículo en vivo. Para talleres de autos,
          motos o bicicletas.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="#funciones"
            className="inline-flex items-center justify-center rounded-full border border-border-strong px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white/5"
          >
            Ver funciones
          </a>
        </div>
      </div>
    </section>
  );
}
