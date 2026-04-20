import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import bgImg from "@/assets/bg.jpeg";
import { Package, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative mx-auto max-w-7xl w-full px-4 py-32 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <Package size={16} />
              Livraison simplifiée
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Envoyez vos colis en toute confiance avec{" "}
              <span className="text-accent">YOBULMA</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
              Une solution simple, rapide et sécurisée pour vos envois au Sénégal et à l'international.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="energy" size="xl">
                Envoyer un colis
                <ArrowRight size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                Devenir Groupeur Professionnel
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
