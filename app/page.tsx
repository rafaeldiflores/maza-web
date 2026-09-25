import { Header } from "@/components/header";
import { OfertaFranja } from "@/components/oferta-franja";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Features } from "@/components/features";
import { Assistant } from "@/components/assistant";
import { HybridPlatform } from "@/components/hybrid-platform";
import { Demo } from "@/components/demo";
import { SocialProof } from "@/components/social-proof";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { CtaFija } from "@/components/cta-fija";
import { WaTracking } from "@/components/wa-tracking";
import {
  FUNDADOR,
  TRIAL_DIAS,
  cuposFundador,
  mensajeCtaPrincipal,
  ofertaFundador,
  textoCtaPrincipal,
  waLink,
} from "@/lib/site";

export default function Home() {
  const detalleCta = ofertaFundador()
    ? `50% de por vida · quedan ${cuposFundador()} de ${FUNDADOR.cupos} cupos`
    : `${TRIAL_DIAS} días gratis · Sin tarjeta`;

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
      <WaTracking />
    </>
  );
}
