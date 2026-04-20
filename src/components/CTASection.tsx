import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Rejoignez <span className="text-accent">YOBULMA</span> dès aujourd'hui
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto">
            Envoyez vos colis en toute confiance ou développez votre activité en tant que Groupeur Professionnel.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="energy" size="xl">
              Envoyer un colis
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Users size={20} />
              S'inscrire comme GP
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
