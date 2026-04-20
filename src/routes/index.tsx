import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AudienceSection from "@/components/AudienceSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YOBULMA — Envoi de colis sécurisé au Sénégal" },
      { name: "description", content: "Envoyez vos colis en toute confiance avec YOBULMA. Solution simple, rapide et sécurisée pour vos envois au Sénégal et à l'international." },
      { property: "og:title", content: "YOBULMA — Envoi de colis sécurisé au Sénégal" },
      { property: "og:description", content: "Solution simple, rapide et sécurisée pour vos envois au Sénégal et à l'international." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AudienceSection />
      <AdvantagesSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
