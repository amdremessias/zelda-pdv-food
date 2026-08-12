import { Button } from "@/components/ui/button";
import { ArrowLeft, UserCheck, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function DataRights() {
  const WHATSAPP_URL = "https://wa.me/5514997135218?text=Olá,%20gostaria%20de%20solicitar%20o%20atendimento%20aos%20meus%20direitos%20como%20titular%20de%20dados%20no%20Zelda%20PDV%20Food.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-lg tracking-wider group-hover:bg-primary transition-colors">
              Z
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">Zelda PDV Food</span>
              <span className="block text-xs text-muted-foreground">MC Infra TI</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <UserCheck className="w-4 h-4" /> LGPD e Direitos do Consumidor
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Direitos do Titular</h1>
          <p className="text-muted-foreground text-lg">
            Saiba como requisitar a confirmação, acesso, correção ou exclusão de seus dados.
          </p>
        </div>

        <div className="space-y-8 bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">1. Seus Direitos sob a LGPD</h2>
            <p className="text-muted-foreground leading-relaxed">
              De acordo com a Lei Geral de Proteção de Dados (Artigo 18 da Lei nº 13.709/2018), todo titular de dados possui o direito de requisitar à MC Infra TI, a qualquer momento, a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos ou inexatos, a anonimização ou eliminação de dados desnecessários, entre outros direitos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">2. Como Fazer uma Solicitação</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para exercer qualquer um dos seus direitos como titular de dados, envie uma solicitação formal informando seu nome completo, dados de contato e o escopo do pedido através dos nossos canais oficiais de atendimento. Nossa equipe retornará dentro do prazo legal estabelecido.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">3. Canais Oficiais de Atendimento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Atendemos solicitações de titulares de dados com agilidade pelos seguintes meios:
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-umami-event="whatsapp-click" data-umami-event-placement="data-rights">
                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="w-4 h-4" /> WhatsApp: (14) 99713-5218
                </Button>
              </a>
              <a href="mailto:contato@mcinfrati.com.br">
                <Button variant="outline" className="gap-2">
                  <Mail className="w-4 h-4" /> contato@mcinfrati.com.br
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-secondary/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Zelda PDV Food / MC Infra TI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}