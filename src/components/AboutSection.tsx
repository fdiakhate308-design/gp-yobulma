import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Notre Mission",
    desc: "Simplifier et sécuriser le transport de colis pour tous, en connectant expéditeurs et Groupeurs Professionnels certifiés.",
  },
  {
    icon: Eye,
    title: "Notre Vision",
    desc: "Digitaliser le secteur logistique au Sénégal et en Afrique, en rendant chaque envoi traçable, fiable et accessible.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    desc: "Confiance, transparence et proximité. Nous plaçons l'humain au cœur de chaque livraison.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">À propos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Qui est <span className="text-primary">YOBULMA</span> ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            YOBULMA est la plateforme qui révolutionne le transport de colis au Sénégal en connectant expéditeurs et transporteurs de confiance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <item.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
