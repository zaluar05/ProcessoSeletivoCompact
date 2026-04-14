import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para transformar sua presença digital. Preencha o formulário e entraremos em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-muted-foreground mb-8">
                Você também pode entrar em contato diretamente através dos canais abaixo:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">+55 55 9730-8027</p>
                    <p className="text-sm text-muted-foreground">Seg - Sex, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Localização</h3>
                    <p className="text-muted-foreground">Santa Maria, RS</p>
                    <p className="text-sm text-muted-foreground">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato agora e vamos conversar sobre como podemos ajudar sua empresa a crescer no ambiente digital.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Resposta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
