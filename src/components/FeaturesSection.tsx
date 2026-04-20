import { motion } from "framer-motion";
import { ShieldCheck, Truck, MapPin, CreditCard, Star } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Certification des GP", desc: "Chaque Groupeur Professionnel est vérifié et certifié pour garantir la sécurité de vos colis." },
  { icon: Truck, title: "Demande simplifiée", desc: "Publiez votre demande d'envoi en quelques clics et recevez des offres rapidement." },
  { icon: MapPin, title: "Suivi en temps réel", desc: "Suivez votre colis à chaque étape grâce à notre système de géolocalisation." },
  { icon: CreditCard, title: "Paiement sécurisé", desc: "Payez en toute sérénité avec nos solutions de paiement intégrées et protégées." },
  { icon: Star, title: "Avis & notations", desc: "Consultez les évaluations des GP et partagez votre expérience après chaque envoi." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Fonctionnalités</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mt-4 text-muted-foreground">
            Des outils pensés pour simplifier chaque étape de votre envoi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <f.icon className="text-primary group-hover:text-accent transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
