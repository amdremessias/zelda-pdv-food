import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function CookiePolicy() {
  const WHATSAPP_URL = "https://wa.me/5514997135218?text=Olá,%20gostaria%20de%20esclarecer%20dúvidas%20sobre%20a%20Política%20de%20Cookies%20do%20Zelda%20PDV%20Food.";

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
            <Cookie className="w-4 h-4" /> Gestão de Preferências
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Política de Cookies</h1>
          <p className="text-muted-foreground text-lg">
            Entenda como utilizamos tecnologias de armazenamento local e telemetria.
          </p>
        </div>

        <div className="space-y-8 bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">1. O que são Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você acessa sites e aplicações web. Eles permitem que o sistema reconheça suas preferências e otimize sua experiência de navegação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">2. Como Utilizamos Cookies e Telemetria</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies essenciais para manter preferências de interface (como modo de exibição) e ferramentas de análise de tráfego anônimas — incluindo o sistema <strong>Umami Analytics</strong> — para medir o desempenho da landing page e aprimorar a usabilidade do produto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">3. Gerenciamento pelo Usuário</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você pode a qualquer momento configurar seu navegador de internet para recusar ou apagar cookies armazenados. Note que a desativação de cookies essenciais pode impactar o correto funcionamento de certas áreas da aplicação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">4. Suporte e Esclarecimentos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se persistirem dúvidas sobre o uso de cookies em nossa plataforma, fale com nossa equipe pelos canais oficiais:
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-umami-event="whatsapp-click" data-umami-event-placement="cookie-policy">
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