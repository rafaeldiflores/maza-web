import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="preguntas" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="reveal font-display text-[clamp(2rem,5.5vw,3.25rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance lg:sticky lg:top-28 lg:self-start">
          Preguntas antes de decidir.
        </h2>

        <div className="reveal flex flex-col">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-border-soft first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-bold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-ink-faint transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-[62ch] pb-6 text-[15px] leading-relaxed text-ink-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
