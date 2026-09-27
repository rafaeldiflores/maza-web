import { FAQS, PLANS, precioFinal } from "@/lib/site";

/**
 * JSON-LD para que Google entienda que esto es una app con planes de pago y
 * muestre las preguntas frecuentes como resultado enriquecido.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "MAZA",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android",
        description:
          "App de gestión para talleres multirubro: cola de trabajo, inventario, presupuestos con aprobación online y seguimiento en vivo para los clientes.",
        inLanguage: "es-CL",
        offers: PLANS.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: precioFinal(plan.price),
          priceCurrency: "CLP",
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
