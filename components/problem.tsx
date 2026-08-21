import { PROBLEMS } from "@/lib/site";

export function Problem() {
  return (
    <section className="border-y border-border-soft bg-black/15 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5.5vw,3.25rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Un taller no se pierde por falta de trabajo.
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            Se pierde en el desorden: lo que nadie anotó, lo que quedó a
            medias en un WhatsApp, lo que se decidió de memoria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <div key={problem.title} className="reveal flex gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent/70"
              />
              <div>
                <h3 className="text-lg font-bold text-ink">{problem.title}</h3>
                <p className="mt-1.5 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
                  {problem.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
