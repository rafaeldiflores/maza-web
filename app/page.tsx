import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Features } from "@/components/features";
import { Assistant } from "@/components/assistant";
import { Demo } from "@/components/demo";
import { SocialProof } from "@/components/social-proof";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <Assistant />
        <Demo />
        <SocialProof />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
