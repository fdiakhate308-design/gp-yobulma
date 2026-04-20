import { motion } from "framer-motion";
import { Send, UserCheck, MapPin, PackageCheck } from "lucide-react";

const steps = [
  { icon: Send, step: "01", title: "Publiez votre demande", desc: "Décrivez votre colis et indiquez la destination souhaitée." },
  { icon: UserCheck, step: "02", title: "Trouvez un GP certifié", desc: "Choisissez parmi les Groupeurs Professionnels vérifiés disponibles." },
  { icon: MapPin, step: "03", title: "Suivez en temps réel", desc: "Visualisez le trajet de votre colis à tout moment." },
  { icon: PackageCheck, step: "04", title: "Recevez en sécurité", desc: "Votre colis arrive à destination, garanti et protégé." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Processus</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Comment ça marche ?</h2>
          <p className="mt-4 text-primary-foreground/60">Quatre étapes simples pour envoyer votre colis.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-5">
                <s.icon className="text-accent" size={28} />
              </div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Étape {s.step}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
