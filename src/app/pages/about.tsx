import { History, Target, Users, Award, Lightbulb, Rocket } from "lucide-react";
import equipeBg from "../../assets/equipe.jpg";

const timeline = [
  {
    year: "2015",
    title: "2015 – O Início de um Sonho",
    description: "No fim de 2015, quatro estudantes visionárias, movidas pelo inconformismo e pela vontade de transformar a realidade ao seu redor, deram vida à CompAct Jr. Nascia ali uma empresa marcada pela inovação, protagonismo e propósito. Sem imaginar os desafios que enfrentariam, elas já sabiam: estavam iniciando algo grandioso.",
  },
  {
    year: "2017",
    title: "A Consolidação da Base",
    description: "Os processos são organizados, o time amadurece e a cultura da empresa começa a se enraizar. A missão vai além dos projetos: formar líderes e transformar realidades passa a ser o norte.",
  },
  {
    year: "2021",
    title: "Reinvenção e Recomeço",
    description: "Em um momento de transição, a CompAct Jr se reinventa. Com o retorno gradual das atividades presenciais, a empresa busca retomar o ritmo e reacender sua essência. Mais do que entregar soluções, o foco se volta para formar pessoas e resgatar a cultura que sempre foi sua base. Mesmo diante dos desafios, a crença no propósito permanece firme.",
  },
  {
    year: "2023",
    title: "A Retomada da Esperança",
    description: "Com o apoio da FEJERS, do Politécnico e do curso de SPI, a CompAct Jr ganha uma nova chance. Um grupo de estudantes, movido por propósito e coragem, assume a missão de reconstruir a empresa. Recrutamos, organizamos, sonhamos. O que parecia ter acabado, agora é reerguido com mais força, amadurecimento e visão de futuro.",
  },
  {
    year: "2025",
    title: "Voltamos com Tudo!",
    description: "Com planejamento, engajamento e muita vontade de crescer, os primeiros resultados começaram a aparecer: projetos em andamento, cultura interna fortalecida e um novo sentimento de pertencimento. A chama está acesa novamente. Em 2025, provamos que a CompAct não apenas voltou — ela voltou para fazer história.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente as melhores e mais modernas soluções tecnológicas.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em conjunto com nossos clientes para alcançar os melhores resultados.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Nosso compromisso é entregar projetos que geram impacto real nos negócios.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Qualidade e atenção aos detalhes em cada projeto que desenvolvemos.",
  },
];

export function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CompAct Jr
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa história, valores e o que nos move a criar soluções digitais excepcionais.
          </p>
        </div>

        {/* About Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
              <img
                src={equipeBg}
                alt="Team CompAct Jr"
                className="relative rounded-3xl shadow-2xl border border-primary/20"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Rocket size={16} className="text-primary" />
                <span className="text-sm">Empresa Júnior de Tecnologia</span>
              </div>

              <h2 className="text-4xl font-bold">Quem Somos</h2>
              
              <p className="text-lg text-muted-foreground">
                A CompAct Jr é uma empresa júnior especializada em tecnologia, fundada por estudantes apaixonados por inovação e transformação digital. Nosso foco é ajudar empresas e empreendedores a expandirem sua presença digital de forma inteligente e eficaz.
              </p>

              <p className="text-lg text-muted-foreground">
                Com uma equipe jovem e dinâmica, combinamos conhecimento acadêmico de ponta com experiência prática no mercado. Desenvolvemos soluções personalizadas que atendem tanto empresas quanto consumidores finais que buscam se destacar no ambiente digital.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-card border border-border rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">Muitos</div>
                  <div className="text-sm text-muted-foreground">Projetos Entregues</div>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">Vários</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <History size={16} className="text-primary" />
              <span className="text-sm">Nossa Jornada</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              História da{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CompAct Jr
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-primary/20 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full border-4 border-background"></div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="text-sm text-primary font-bold mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nossos{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Valores
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
