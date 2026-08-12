import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfUse() {
  const WHATSAPP_URL = "https://wa.me/5514997135218?text=Olá,%20gostaria%20de%20esclarecer%20dúvidas%20sobre%20os%20Termos%20de%20Uso%20do%20Zelda%20PDV%20Food.";

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
            <FileText className="w-4 h-4" /> Condições de Utilização
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Termos de Uso</h1>
          <p className="text-muted-foreground text-lg">
            Diretrizes contratuais para a utilização do ecossistema Zelda PDV Food.
          </p>
        </div>

        <div className="space-y-8 bg-card text-card-foreground p-8 rounded-2xl border border-border shadow-sm">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao contratar, acessar ou utilizar o sistema <strong>Zelda PDV Food</strong>, fornecido pela <strong>MC Infra TI</strong>, o estabelecimento comercial e seus operadores concordam integralmente com estes Termos de Uso e com as políticas complementares de privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">2. Licença de Uso do Software</h2>
            <p className="text-muted-foreground leading-relaxed">
              O software é licenciado de forma não exclusiva, intransferível e limitada à operação interna do estabelecimento contratante. É expressamente proibida a engenharia reversa, redistribuição, sublicenciamento ou comercialização não autorizada do código e da plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">3. Responsabilidades do Estabelecimento</h2>
            <p className="text-muted-foreground leading-relaxed">
              O cliente é o único responsável pela veracidade dos cadastros de produtos, preços, estoque, fechamentos de caixa e conformidade fiscal exigida pela legislação brasileira aplicável ao setor de food service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">4. Suporte e Disponibilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              A MC Infra TI empenha-se em manter a alta disponibilidade dos serviços de retaguarda e PDV. Interrupções programadas para manutenção ou atualizações de melhoria serão comunicadas previamente aos canais oficiais de atendimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">5. Canais de Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dúvidas sobre estes termos podem ser encaminhadas diretamente para nossa equipe comercial e de suporte técnico:
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-umami-event="whatsapp-click" data-umami-event-placement="terms-of-use">
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