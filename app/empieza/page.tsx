import { Header } from "@/components/header";
import { OfertaFranja } from "@/components/oferta-franja";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Features } from "@/components/features";
import { Assistant } from "@/components/assistant";
import { HybridPlatform } from "@/components/hybrid-platform";
import { Demo } from "@/components/demo";
import { SocialProof } from "@/components/social-proof";
import { QuienEstaDetras } from "@/components/quien-esta-detras";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { CtaFija } from "@/components/cta-fija";
import type { Metadata } from "next";
import {
  mensajeCtaPrincipal,
  textoCtaPrincipal,
  waLink,
} from "@/lib/site";

/**
 * La landing de venta directa, para quien llega desde un anuncio o la bio de
 * Instagram y TikTok: una sola página que cuenta todo y termina en "Probar
 * gratis" por WhatsApp. La raíz de mazataller.com es el sitio oficial
 * (funciones, planes, ayuda, entrar y crear cuenta); esta queda igual que
 * antes de separarlos, para no tocar lo que ya convierte.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/empieza" },
};

export default function Empieza() {
  const detalleCta = `Sin tarjeta · Te ayudamos a dejarlo listo`;

  return (
    <>
      <StructuredData />
      <OfertaFranja />
      <Header />
      <main className="flex-1">
        <Hero />
        <Demo />
        <Problem />
        <Features />
        <Assistant />
        <HybridPlatform />
        <SocialProof />
        <QuienEstaDetras />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CtaFija
        href={waLink(mensajeCtaPrincipal())}
        texto={textoCtaPrincipal()}
        detalle={detalleCta}
      />
    </>
  );
}
