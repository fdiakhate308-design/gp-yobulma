import { motion } from "framer-motion";
import { Zap, Shield, Eye, Users, Coins } from "lucide-react";

const advantages = [
  { icon: Zap, title: "Rapidité des envois" },
  { icon: Shield, title: "Sécurité garantie" },
  { icon: Eye, title: "Transparence totale" },
  { icon: Users, title: "Réseau de GP certifiés" },
  { icon: Coins, title: "Solution économique" },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Avantages</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Pourquoi choisir YOBULMA ?
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-4 border border-border/50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <a.icon className="text-accent" size={20} />
              </div>
              <span className="font-semibold text-foreground">{a.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
