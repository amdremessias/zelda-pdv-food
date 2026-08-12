/*
 * Direção Concreto & Citrus: brutalismo editorial contemporâneo para uma operação food service.
 * Use carvão, creme e Lima de Comanda como hierarquia; preserve assimetria, legibilidade e ação clara.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bike,
  Boxes,
  Check,
  ChevronDown,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Menu,
  MessageCircle,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Table2,
  Tags,
  TimerReset,
  Truck,
  UsersRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/zelda-hero-food-service_feacd660.jpg";
const WORKFLOW_IMAGE = "/manus-storage/zelda-ops-workflow_efb7a1d8.jpg";
const DASHBOARD_IMAGE = "/manus-storage/zelda-dashboard-mockup_2e79f1df.jpg";
const MARK_IMAGE = "/manus-storage/zelda-mark_eb8785ec.png";
const CONTACT_EMAIL = "messias.consultoria@yahoo.com";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const navItems = [
  { label: "Visão geral", id: "visao-geral" },
  { label: "Recursos", id: "recursos" },
  { label: "Para quem é", id: "segmentos" },
  { label: "Dúvidas", id: "faq" },
];

const resourceGroups = [
  {
    eyebrow: "01 / Frente de caixa",
    title: "Venda sem fazer o cliente esperar.",
    description:
      "Um PDV pensado para o ritmo do balcão: encontre produtos rápido, registre o pedido e conclua com o meio de pagamento que o seu cliente preferir.",
    icon: Zap,
    accent: "lime",
    items: ["Venda em poucos cliques", "Pix, cartão e dinheiro", "Busca por nome, código ou categoria"],
  },
  {
    eyebrow: "02 / Salão & comandas",
    title: "Mesa, cartão ou comanda: você escolhe o fluxo.",
    description:
      "Tenha uma visão clara do consumo em andamento, transfira mesas quando precisar e feche a conta com menos retrabalho.",
    icon: Table2,
    accent: "cream",
    items: ["Controle de mesas", "Comandas individuais", "Transferência e fechamento simplificado"],
  },
  {
    eyebrow: "03 / Estoque & compras",
    title: "Saiba o que entrou, saiu e precisa de atenção.",
    description:
      "Organize produtos, acompanhe movimentações e conecte a rotina de vendas às decisões de reposição.",
    icon: Boxes,
    accent: "rust",
    items: ["Cadastro de produtos", "Controle de entradas e saídas", "Categorias e fichas mais organizadas"],
  },
  {
    eyebrow: "04 / Delivery & retirada",
    title: "Do pedido recebido até a saída.",
    description:
      "Centralize o acompanhamento dos pedidos e deixe cada etapa mais visível para quem atende, prepara e entrega.",
    icon: Bike,
    accent: "cream",
    items: ["Acompanhamento por status", "Organização da fila de preparo", "Visibilidade para retirada e entrega"],
  },
];

const segments = [
  { title: "Bares & restaurantes", text: "Mais clareza no salão, nas comandas e no fechamento de cada mesa.", icon: Store, number: "A" },
  { title: "Lanchonetes & balcões", text: "Velocidade para atender picos sem transformar o caixa em gargalo.", icon: ShoppingBag, number: "B" },
  { title: "Adegas & conveniências", text: "Cadastro, estoque e venda alinhados para uma rotina de alta rotatividade.", icon: Tags, number: "C" },
  { title: "Tabacarias", text: "Uma operação organizada para itens, clientes recorrentes e controle de venda.", icon: PackageCheck, number: "D" },
];

const faqs = [
  {
    question: "O Zelda PDV Food serve para qual tipo de estabelecimento?",
    answer:
      "A proposta atende operações de bares, restaurantes, lanchonetes, adegas, conveniências e tabacarias. Na demonstração, a equipe entende o seu fluxo e apresenta os módulos que fazem sentido para o negócio.",
  },
  {
    question: "Posso trabalhar com mesas, comandas e atendimento no balcão?",
    answer:
      "Sim. A página apresenta os principais fluxos de salão, comanda e frente de caixa para que cada negócio possa organizar o atendimento conforme sua rotina.",
  },
  {
    question: "O sistema ajuda no controle de estoque?",
    answer:
      "Sim. O produto reúne recursos de cadastro, movimentação e acompanhamento de produtos para aproximar o que acontece no caixa das decisões de reposição.",
  },
  {
    question: "Como funciona a implantação?",
    answer:
      "O primeiro passo é conversar com a MC Infra TI sobre o seu cenário. A partir daí, a equipe orienta a configuração inicial, os fluxos prioritários e a melhor forma de começar.",
  },
  {
    question: "Como solicito uma demonstração?",
    answer: (
      <>
        Você pode enviar uma mensagem para <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> e contar um pouco sobre a sua operação. A equipe retorna para combinar o próximo passo.
      </>
    ),
  },
];

function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <span className={`brand-lockup brand-lockup-${size}`}>
      <img src={MARK_IMAGE} alt="" aria-hidden="true" />
      <span>
        <strong>zelda</strong>
        <small>PDV FOOD</small>
      </span>
    </span>
  );
}

function SectionLabel({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span>{index}</span>
      <i />
      <b>{children}</b>
    </div>
  );
}

function OrderBoard() {
  return (
    <div className="order-board" aria-label="Prévia visual de um fluxo de pedido">
      <div className="board-topline">
        <div className="board-brand"><span className="board-mark">Z/</span> operação ao vivo</div>
        <span className="board-status"><span /> caixa aberto · 18:42</span>
      </div>
      <div className="board-content">
        <div className="board-list">
          <div className="board-list-head"><span>pedido #0284</span><span className="board-pending">em preparo</span></div>
          <div className="order-row"><span className="order-qty">02</span><div><strong>Smash clássico</strong><small>sem cebola · com fritas</small></div><b>R$ 46,00</b></div>
          <div className="order-row"><span className="order-qty">01</span><div><strong>Refrigerante lata</strong><small>cola · bem gelado</small></div><b>R$ 7,00</b></div>
          <div className="order-row"><span className="order-qty">01</span><div><strong>Molho da casa</strong><small>adicional</small></div><b>R$ 4,50</b></div>
          <div className="board-total"><span>total do pedido</span><strong>R$ 57,50</strong></div>
        </div>
        <div className="board-side">
          <div className="side-label">próximos passos</div>
          <div className="progress-line"><span className="progress-dot active" /><span className="progress-fill" /><span className="progress-dot active" /><span className="progress-fill muted" /><span className="progress-dot" /></div>
          <div className="progress-copy"><span>recebido</span><span>preparo</span><span>entrega</span></div>
          <div className="side-card"><TimerReset size={16} /><div><small>tempo estimado</small><strong>18 min</strong></div></div>
          <button className="board-button" type="button" onClick={() => scrollToId("recursos")}>ver operação <ArrowUpRight size={15} /></button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    setCookieVisible(localStorage.getItem("zelda-cookie-consent") !== "accepted");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("zelda-cookie-consent", "accepted");
    setCookieVisible(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" aria-label="Zelda PDV Food, início" onClick={() => setMenuOpen(false)}><BrandMark /></a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="nav-cta" href={`mailto:${CONTACT_EMAIL}?subject=Quero conhecer o Zelda PDV Food`} onClick={() => setMenuOpen(false)}>
              falar com a equipe <ArrowUpRight size={15} />
            </a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-image" style={{ backgroundImage: `url(${HERO_IMAGE})` }} aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grid-line hero-grid-line-one" aria-hidden="true" />
          <div className="hero-grid-line hero-grid-line-two" aria-hidden="true" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <SectionLabel index="Z/01" light>gestão para food service</SectionLabel>
              <h1 id="hero-title">Seu balcão no ritmo. <em>Sua gestão no controle.</em></h1>
              <p className="hero-lead">O Zelda PDV Food conecta venda, atendimento, estoque e decisão em uma operação mais clara para quem vive o movimento do seu negócio.</p>
              <div className="hero-actions">
                <a className="button button-lime" href={`mailto:${CONTACT_EMAIL}?subject=Solicitar demonstração do Zelda PDV Food`}>solicitar demonstração <ArrowUpRight size={17} /></a>
                <button className="text-action" type="button" onClick={() => scrollToId("visao-geral")}>entender a proposta <ArrowDownRight size={17} /></button>
              </div>
              <div className="hero-note"><span className="note-dot" /> para bares, restaurantes, lanchonetes, adegas e tabacarias</div>
            </div>
            <div className="hero-board-wrap">
              <div className="board-kicker"><span>prévia de operação</span><span className="kicker-line" /></div>
              <OrderBoard />
              <div className="hero-caption"><span>interface demonstrativa</span><span>zelda / 2026</span></div>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <span>MC INFRA TI</span>
            <span>PDV · GESTÃO · OPERAÇÃO</span>
            <span className="scroll-cue"><span /> role para descobrir</span>
          </div>
        </section>

        <section className="signal-strip" aria-label="Principais ganhos da solução">
          <div className="page-width signal-grid">
            <div className="signal-intro"><span className="mono-label">o que muda na prática</span><p>Uma única visão para tirar ruído da rotina e devolver foco ao atendimento.</p></div>
            <div className="signal-item"><Zap size={20} /><div><strong>mais agilidade</strong><span>no registro e fechamento</span></div></div>
            <div className="signal-item"><LayoutDashboard size={20} /><div><strong>mais clareza</strong><span>para acompanhar a operação</span></div></div>
            <div className="signal-item"><BarChart3 size={20} /><div><strong>mais contexto</strong><span>para decidir o próximo passo</span></div></div>
          </div>
        </section>

        <section className="intro-section page-width" id="visao-geral">
          <div className="intro-aside"><SectionLabel index="Z/02">uma operação que conversa</SectionLabel><span className="vertical-stamp">ZELDA PDV FOOD<br />MC INFRA TI</span></div>
          <div className="intro-main">
            <h2>Seu negócio é movimentado. A gestão não precisa ser <span>confusa.</span></h2>
            <div className="intro-columns"><p>Entre um pedido e outro, existem mesas, comandas, estoque, pagamentos, delivery e decisões que não podem depender de planilhas soltas ou memória de equipe.</p><p>O Zelda organiza esses pontos em uma experiência direta, feita para acompanhar o jeito que sua operação realmente acontece — do primeiro clique ao fechamento do caixa.</p></div>
            <div className="principle-row"><span>01</span><strong>ver o que está acontecendo</strong><span>02</span><strong>agir no tempo certo</strong><span>03</span><strong>fechar o dia com clareza</strong></div>
          </div>
        </section>

        <section className="dark-section resources-section" id="recursos">
          <div className="page-width">
            <div className="section-heading split-heading">
              <div><SectionLabel index="Z/03" light>ferramentas para o turno inteiro</SectionLabel><h2>Menos atalhos improvisados.<br /><em>Mais operação no eixo.</em></h2></div>
              <p>Os módulos do Zelda PDV Food foram pensados para trabalhar juntos. Você acompanha a venda sem perder de vista o que sustenta o negócio.</p>
            </div>
            <div className="resource-grid">
              {resourceGroups.map((resource, index) => {
                const Icon = resource.icon;
                return <article className={`resource-card resource-${resource.accent}`} key={resource.title}>
                  <div className="resource-top"><span>{resource.eyebrow}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <h3>{resource.title}</h3><p>{resource.description}</p>
                  <ul>{resource.items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
                  <span className="resource-index">0{index + 1}</span>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="workflow-section page-width">
          <div className="workflow-image-wrap"><img src={WORKFLOW_IMAGE} alt="Mesa de operação com tablet, pedido e itens de um serviço de alimentação" /><div className="image-tag">Z/ fluxo visível</div></div>
          <div className="workflow-copy"><SectionLabel index="Z/04">do pedido ao fechamento</SectionLabel><h2>Uma linha de operação que <span>não se perde.</span></h2><p>Quando cada etapa está visível, a equipe ganha tempo para atender melhor e a gestão ganha contexto para agir. O Zelda acompanha o pedido sem transformar a rotina em um painel impossível de ler.</p>
            <ol className="flow-list"><li><span>01</span><div><strong>registrar</strong><small>o pedido entra com rapidez e clareza</small></div></li><li><span>02</span><div><strong>preparar</strong><small>a equipe acompanha o próximo passo</small></div></li><li><span>03</span><div><strong>fechar</strong><small>pagamento e resumo ficam organizados</small></div></li></ol>
            <a className="outline-action" href={`mailto:${CONTACT_EMAIL}?subject=Quero entender o fluxo do Zelda`}>conversar sobre meu fluxo <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="dashboard-section dark-section">
          <div className="page-width dashboard-grid">
            <div className="dashboard-copy"><SectionLabel index="Z/05" light>visão que ajuda a decidir</SectionLabel><h2>O dia termina melhor quando os dados <em>fazem sentido.</em></h2><p>Tenha uma leitura mais organizada de vendas, produtos, fluxo de caixa e itens que merecem atenção. Relatórios são úteis quando ajudam a escolher o próximo movimento.</p><div className="dashboard-points"><span><BarChart3 size={17} /> leitura de vendas</span><span><WalletCards size={17} /> fluxo de caixa</span><span><ClipboardList size={17} /> produtos em destaque</span></div><a className="button button-lime" href={`mailto:${CONTACT_EMAIL}?subject=Solicitar apresentação dos relatórios`}>ver a visão gerencial <ArrowUpRight size={17} /></a></div>
            <div className="dashboard-visual"><div className="dashboard-frame"><img src={DASHBOARD_IMAGE} alt="Prévia visual de um painel gerencial para food service" /></div><span className="dashboard-note note-one">vendas por período</span><span className="dashboard-note note-two">status atualizado</span></div>
          </div>
        </section>

        <section className="segments-section page-width" id="segmentos">
          <div className="section-heading segments-heading"><div><SectionLabel index="Z/06">feito para a rotina real</SectionLabel><h2>Qual é o ritmo do <span>seu negócio?</span></h2></div><p>O mesmo sistema, com espaço para diferentes jeitos de atender, produzir e vender.</p></div>
          <div className="segments-grid">{segments.map((segment) => { const Icon = segment.icon; return <article className="segment-card" key={segment.title}><div className="segment-number">{segment.number}</div><Icon size={23} strokeWidth={1.5} /><h3>{segment.title}</h3><p>{segment.text}</p><ArrowUpRight className="segment-arrow" size={18} /></article>; })}</div>
        </section>

        <section className="support-section">
          <div className="page-width support-grid"><div className="support-label"><SectionLabel index="Z/07" light>comece com contexto</SectionLabel><span className="support-mark">Z/</span></div><div className="support-copy"><h2>Implantar é mais simples quando alguém entende <em>o seu balcão.</em></h2><p>A conversa começa pelo seu cenário: como você vende, como organiza a equipe e onde hoje existe retrabalho. A MC Infra TI orienta o próximo passo com uma visão prática de implantação e suporte.</p><div className="support-list"><span><ShieldCheck size={18} /> segurança e permissões por operador</span><span><MessageCircle size={18} /> atendimento técnico para a sua rotina</span><span><Sparkles size={18} /> evolução guiada pela operação</span></div><a className="button button-dark" href={`mailto:${CONTACT_EMAIL}?subject=Quero falar sobre implantação`}>falar com a MC Infra TI <ArrowUpRight size={17} /></a></div></div>
        </section>

        <section className="faq-section page-width" id="faq"><div className="faq-intro"><SectionLabel index="Z/08">perguntas de operação</SectionLabel><h2>Antes de começar,<br /><span>vamos simplificar.</span></h2><p>Se sua dúvida não estiver aqui, envie uma mensagem. A melhor resposta depende do seu fluxo.</p><a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>enviar outra pergunta <ArrowUpRight size={15} /></a></div><div className="faq-list">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>0{index + 1}</span><strong>{faq.question}</strong><ChevronDown size={19} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>; })}</div></section>

        <section className="final-cta dark-section"><div className="page-width final-cta-inner"><div className="cta-sticker">Z/ próximo passo</div><SectionLabel index="Z/09" light>quando o caixa pede mais clareza</SectionLabel><h2>Seu próximo turno pode começar<br /><em>mais organizado.</em></h2><p>Conte para a MC Infra TI como o seu negócio funciona. A gente mostra onde o Zelda PDV Food pode entrar.</p><a className="button button-lime" href={`mailto:${CONTACT_EMAIL}?subject=Quero conhecer o Zelda PDV Food`}>solicitar uma demonstração <ArrowUpRight size={18} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-top"><div className="footer-brand"><a href="#top"><BrandMark size="md" /></a><p>Gestão e vendas para operações food service que precisam de ritmo, clareza e controle.</p><span className="footer-location">MC INFRA TI · BRASIL</span></div><div className="footer-col"><span className="footer-heading">navegação</span><a href="#visao-geral">Visão geral</a><a href="#recursos">Recursos</a><a href="#segmentos">Para quem é</a><a href="#faq">Dúvidas</a></div><div className="footer-col"><span className="footer-heading">contato</span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><a href={`mailto:${CONTACT_EMAIL}?subject=Suporte Zelda PDV Food`}>Falar com suporte</a><span>Atendimento MC Infra TI</span></div><div className="footer-col"><span className="footer-heading">legal</span><a href="/privacidade.html">Política de privacidade</a><a href="/termos.html">Termos de uso</a><a href="/cookiesone.html">Política de cookies</a><a href="/titulares.html">Direitos do titular</a></div></div><div className="page-width footer-bottom"><span>© 2026 MC Infra TI. Todos os direitos reservados.</span><span>ZELDA PDV FOOD / SISTEMA DE GESTÃO E VENDAS</span></div></footer>

      {cookieVisible && <aside className="cookie-banner" aria-label="Aviso de cookies"><div><span className="mono-label">privacidade em primeiro lugar</span><p>Usamos cookies para melhorar a experiência e entender o uso da página. Consulte a <a href="/privacidade.html">Política de Privacidade</a>.</p></div><button className="cookie-button" type="button" onClick={acceptCookies}>entendi <Check size={16} /></button></aside>}
    </div>
  );
}
