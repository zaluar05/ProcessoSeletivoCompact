import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              CompAct Jr
            </div>
            <p className="text-muted-foreground mb-6">
              Transformando ideias em realidade digital desde 2015.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/compact.jr/"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/16238685/admin/feed/following/"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Desenvolvimento Web</li>
              <li className="text-muted-foreground">Aplicativos Mobile</li>
              <li className="text-muted-foreground">Design UX/UI</li>
              <li className="text-muted-foreground">Consultoria Digital</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                +55 55 9730-8027
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                Santa Maria, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2026 CompAct Jr. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}