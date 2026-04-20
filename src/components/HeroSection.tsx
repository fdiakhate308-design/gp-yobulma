import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.jpg";
import { Package, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 py-32 lg:px-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="YOBULMA - suivi de colis et livraison"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
