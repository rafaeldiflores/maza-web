import { PROBLEMS } from "@/lib/site";

export function Problem() {
  return (
    <section className="border-y border-border-soft bg-surface-alt px-5 py-20 sm:px-8 sm:py-28">
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

        <div className="caja reveal grid grid-cols-1 sm:grid-cols-2">
          {PROBLEMS.map((problem, i) => (
            <div
              key={problem.title}
              className={`flex flex-col gap-1.5 border-neutral-track p-6 ${
                i % 2 === 0 ? "sm:border-r" : ""
              } ${i < PROBLEMS.length - 2 ? "border-b" : ""}`}
            >
              <h3 className="text-base font-bold text-ink">
                {problem.title}
              </h3>
              <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
