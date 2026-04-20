import { motion } from "framer-motion";
import { User, Building2, Briefcase } from "lucide-react";

const audiences = [
  { icon: User, title: "Particuliers", desc: "Envoyez vos colis à vos proches au Sénégal et à l'étranger en toute simplicité." },
  { icon: Building2, title: "Entreprises", desc: "Optimisez votre logistique avec une solution fiable et économique pour vos expéditions." },
  { icon: Briefcase, title: "Groupeurs Professionnels", desc: "Rejoignez notre réseau, développez votre activité et accédez à plus de clients." },
];

export default function AudienceSection() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Pour qui ?</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Une solution pour chacun
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <a.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
