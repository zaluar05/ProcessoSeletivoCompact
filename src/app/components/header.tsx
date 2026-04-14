import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          CompAct Jr
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${isActive("/") ? "text-primary" : ""}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className={`hover:text-primary transition-colors ${isActive("/portfolio") ? "text-primary" : ""}`}
            >
              Portfólio
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              className={`hover:text-primary transition-colors ${isActive("/sobre") ? "text-primary" : ""}`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              className={`hover:text-primary transition-colors ${isActive("/contato") ? "text-primary" : ""}`}
            >
              Contato
            </Link>
          </li>
        </ul>


        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className={`block py-2 hover:text-primary transition-colors ${isActive("/") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`block py-2 hover:text-primary transition-colors ${isActive("/portfolio") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={`block py-2 hover:text-primary transition-colors ${isActive("/sobre") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={`block py-2 hover:text-primary transition-colors ${isActive("/contato") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link 
                to="/contato" 
                className="w-full px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}