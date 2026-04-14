import { ExternalLink, Code, Smartphone, Globe } from "lucide-react";
import academiaBg from "../../assets/academia.jpg";
import cristalJrBg from "../../assets/Cristal-jr.jpg";
import criaUfmgBg from "../../assets/Cria-UFMG.jpg";
import alquimiaBg from "../../assets/Loja-Alquimia-Skate-Shop.jpg";

const projects = [
  {
    id: 1,
    title: "Cristal Mineração e Petróleo Jr",
    category: "Desenvolvimento Web",
    description: "Com um design profissional, moderno e intuitivo, o site apresenta de forma clara as áreas de atuação da empresa, como processos minerários, licenciamento ambiental, análises técnicas e muito mais.",
    image: cristalJrBg,
    tags: ["WordPress"],
    icon: Globe,
  },
  {
    id: 2,
    title: "Cria UFMG",
    category: "Desenvolvimento Web",
    description: "O projeto funcional, responsivo e de fácil navegação, proporcionando uma experiência agradável aos usuários.",
    image: criaUfmgBg,
    tags: ["WordPress"],
    icon: Globe,
  },
  {
    id: 3,
    title: "Academia Destaque",
    category: "Desenvolvimento Web",
    description: "A interface foi pensada para proporcionar uma experiência intuitiva e informativa. O layout mescla elementos modernos com uma navegação clara, incluindo seções que apresentam a equipe, estrutura, aulas, planos e local de atendimento.",
    image: academiaBg,
    tags: ["WordPress"],
    icon: Code,
  },
  {
    id: 4,
    title: "Alquimia Skate Shop",
    category: "Desenvolvimento Web",
    description: "O site conta com banners promocionais, área de destaques e mais vendidos, integração com redes sociais, blog visual, rastreabilidade via mapa e informações completas sobre atendimento. O layout é responsivo, adaptando-se perfeitamente a qualquer dispositivo.",
    image: alquimiaBg,
    tags: ["WordPress, WooCommerce"],
    icon: Smartphone
  },
];

export function PortfolioPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nosso{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfólio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada projeto é único e desenvolvido com tecnologias de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <h3 className="text-3xl font-bold mb-4">
            Tem um projeto em mente?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar sua ideia em realidade.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all hover:scale-105"
          >
            Iniciar Projeto
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
