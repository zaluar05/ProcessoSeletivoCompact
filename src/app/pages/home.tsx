import { ArrowRight, Sparkles, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";

export function HomePage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm">Nova Identidade Visual</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Expansão{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Digital
                </span>{" "}
                Inteligente
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                Somos a CompAct Jr, empresa júnior especializada em tecnologia que transforma sua presença digital em resultados concretos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contato"
                  className="group px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Começar Projeto
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link 
                  to="/portfolio"
                  className="px-8 py-4 bg-card border border-border hover:border-primary rounded-lg transition-all"
                >
                  Ver Portfólio
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">10+ Anos</div>
                  <div className="text-sm text-muted-foreground">De Existência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">MUITOS</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-accent/50 rounded-3xl blur-2xl"></div>
              <img
                src={logoImage}
                alt="Technology"
                className="relative rounded-3xl shadow-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fazemos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções tecnológicas para empresas e consumidores que querem expandir sua presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Estratégia Digital</h3>
              <p className="text-muted-foreground">
                Desenvolvemos estratégias personalizadas para aumentar sua captação de clientes através de prospecção passiva.
              </p>
            </div>

            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Presença Marcante</h3>
              <p className="text-muted-foreground">
                Criamos identidades visuais que destacam sua marca e tornam sua presença digital inesquecível.
              </p>
            </div>

            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Resultados Reais</h3>
              <p className="text-muted-foreground">
                Focamos em soluções que geram resultados mensuráveis e crescimento sustentável para seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto Para Expandir Sua{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Presença Digital?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato conosco e descubra como podemos transformar sua presença digital em resultados.
            </p>
            <Link 
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all hover:scale-105"
            >
              Fale Conosco
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
