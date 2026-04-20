import { motion } from "framer-motion";
import { TrendingUp, Handshake, HeartHandshake, Cpu } from "lucide-react";

const impacts = [
  { icon: TrendingUp, title: "Amélioration du transport", desc: "Des livraisons plus rapides et fiables pour tous." },
  { icon: Handshake, title: "Opportunités économiques", desc: "Création de revenus pour les Groupeurs Professionnels." },
  { icon: HeartHandshake, title: "Confiance renforcée", desc: "Un système d'évaluation qui protège clients et GP." },
  { icon: Cpu, title: "Modernisation du secteur", desc: "La technologie au service de la logistique africaine." },
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Impact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Notre impact au quotidien
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
