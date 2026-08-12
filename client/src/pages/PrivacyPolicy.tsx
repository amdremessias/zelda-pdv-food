import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const WHATSAPP_URL = "https://wa.me/5514997135218?text=Olá,%20gostaria%20de%20esclarecer%20dúvidas%20sobre%20a%20Política%20de%20Privacidade%20do%20Zelda%20PDV%20Food.";

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
            <ShieldCheck className="w-4 h-4" /> Conformidade e Transparência
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Política de Privacidade</h1>
          <p className="text-muted-foreground text-lg">
            Última atualização: Agosto de 2026. Minuta técnica para adequação à LGPD.
          </p>
        </div>

        <div className="space-y-8 bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              O <strong>Zelda PDV Food</strong>, desenvolvido sob a responsabilidade da <strong>MC Infra TI</strong>, preza pela segurança da informação e pela privacidade dos dados de seus clientes, operadores de estabelecimentos de food service e visitantes. Esta política descreve como tratamos informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">2. Coleta de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos apenas os dados essenciais para a prestação dos serviços de gestão de PDV e atendimento comercial, incluindo nome, telefone de contato (WhatsApp), e-mail corporativo e dados cadastrais do estabelecimento comercial fornecidos voluntariamente pelos usuários.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">3. Uso das Informações</h2>
            <p className="text-muted-foreground leading-relaxed">
              As informações coletadas são utilizadas para emissão de propostas comerciais, configuração de módulos de software, suporte técnico especializado, melhoria contínua da plataforma e cumprimento de obrigações legais ou regulatórias.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">4. Segurança da Informação</h2>
            <p className="text-muted-foreground leading-relaxed">
              Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados e situações de destruição, perda, alteração ou difusão. O acesso aos dados é restrito a profissionais autorizados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">5. Contato com o Encarregado</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para esclarecer dúvidas sobre esta política ou exercer seus direitos como titular de dados, entre em contato diretamente com nossa equipe de suporte:
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-umami-event="whatsapp-click" data-umami-event-placement="privacy-policy">
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