import logo from "@/assets/yobulma-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="YOBULMA" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              La plateforme de confiance pour le transport de colis au Sénégal et à l'international.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2"><Mail size={16} /> contact@yobulma.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +221 XX XXX XX XX</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Dakar, Sénégal</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              {["facebook", "instagram", "twitter"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors text-sm font-bold uppercase"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} YOBULMA. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
