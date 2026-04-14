import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Página Não Encontrada
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all hover:scale-105"
        >
          <Home size={20} />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
