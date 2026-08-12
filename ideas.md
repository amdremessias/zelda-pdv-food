# Direção de design — Zelda PDV Food

## Três abordagens iniciais

### Tema: Balcão Elétrico
**Introdução breve:** Uma linguagem escura e energética, inspirada em painéis de operação e letreiros de food service noturno. Usa alto contraste e acentos luminosos para comunicar velocidade e controle.

**Probabilidade:** 0,03

### Tema: Caderno de Operação
**Introdução breve:** Uma direção editorial e tátil, com base clara, tipografia expressiva e detalhes de papel, etiquetas e sinalização de balcão. O produto parece próximo, confiável e fácil de adotar.

**Probabilidade:** 0,08

### Tema: Concreto & Citrus
**Introdução breve:** Uma estética urbana premium que cruza o calor do universo gastronômico com a precisão de um sistema de gestão. Tons de carvão, creme e verde-lima criam uma presença contemporânea sem cair em visual tecnológico genérico.

**Probabilidade:** 0,04

## Abordagem escolhida: Concreto & Citrus

### Design Movement
Brutalismo editorial contemporâneo, suavizado por composição de revista, fotografia de ambiente e elementos funcionais de sinalização. A interface deve parecer uma ferramenta de operação real, não apenas uma vitrine de software.

### Core Principles
1. **Operação em primeiro plano:** cada bloco responde a uma dor concreta de quem vende, produz e fecha o caixa.
2. **Contraste com calor:** carvão e creme dão estrutura; o verde-lima aparece como sinal de ação, eficiência e aprovação.
3. **Ritmo editorial:** grandes títulos, números, cortes assimétricos e colunas de leitura evitam uma página genérica centralizada.
4. **Confiança sem excesso:** transparência sobre recursos, implantação e suporte no lugar de promessas exageradas ou depoimentos inventados.

### Color Philosophy
O carvão representa a tela de operação no fim de um turno intenso; o creme traz proximidade e legibilidade; o verde-lima é o sinal visual de que o pedido avançou, o estoque foi atualizado ou o caixa fechou. A assinatura cromática é o **Lima de Comanda**, `#C8F169`, usado com parcimônia em ações, indicadores e detalhes de navegação.

### Layout Paradigm
A página alterna uma coluna editorial de leitura com painéis funcionais deslocados, como uma bancada de trabalho. O hero combina texto alinhado à esquerda, uma placa de prova do produto e um trilho lateral de indicadores. A navegação ancora a pessoa na página e as seções mudam entre fundo carvão e papel-creme para marcar diferentes momentos da operação.

### Signature Elements
- Etiquetas numeradas e marcadores “Z/” que lembram ordens de produção e comandas.
- Cards com cantos recortados discretamente, linhas de medição e microtextos de interface.
- Um painel de demonstração com pedido, preparo, pagamento e resumo de caixa como fio narrativo visual.

### Interaction Philosophy
Interações devem parecer confirmações operacionais: hover destaca o próximo passo, botões têm resposta física curta e accordions revelam profundidade sem interromper a leitura. A página não bloqueia seleção de texto, não desativa menus nativos e preserva navegação por teclado.

### Animation
Usar entradas por opacidade e deslocamento vertical pequeno, com stagger de 40–70 ms nos grupos. Indicadores podem fazer uma transição de preenchimento curta, enquanto o painel de pedido alterna suavemente entre estados. Todos os efeitos não essenciais devem ser desativados em `prefers-reduced-motion`.

### Typography System
- **Display:** Space Grotesk, 600–700, para headlines, números e rótulos de seção.
- **Body:** DM Sans, 400–500, para descrições e navegação.
- **Mono de apoio:** IBM Plex Mono, 400–500, apenas para metadados, status, horários e etiquetas operacionais.
- Hierarquia: títulos com tracking negativo, corpo em blocos curtos, labels em caixa alta com espaçamento amplo.

### Brand Essence
Zelda PDV Food é o sistema de operação para bares, lanchonetes, restaurantes, adegas e tabacarias que precisam vender com ritmo e decidir com clareza — sem transformar o balcão em um labirinto. **Direto, atento, afiado.**

### Brand Voice
Headlines e CTAs falam como quem conhece o turno: claros, específicos e sem jargão vazio. Microcopy é útil, confiante e orientado ao próximo passo.

Exemplo de headline: “Seu balcão no ritmo. Sua gestão no controle.”

Exemplo de CTA: “Ver como funciona no meu negócio”

### Wordmark & Logo
O wordmark usa “Zelda” em Space Grotesk pesado com um corte diagonal no “Z”, acompanhado de um símbolo sem texto: um quadrado aberto com uma seta interna que sugere pedido avançando do balcão para a gestão. O símbolo deve aparecer com presença no header e no favicon, nunca como detalhe microscópico.

### Signature Brand Color
**Lima de Comanda — `#C8F169`**. É a cor proprietária que marca avanço, ação e precisão operacional.

## Mapa de conteúdo aprovado

A página terá: navegação com âncoras; hero com promessa direta e mockup de operação; faixa de benefícios rápidos; seção de problemas que o produto resolve; recursos divididos por frente de operação; fluxo “do pedido ao fechamento”; segmentos atendidos; bloco de implantação e suporte; FAQ interativo; CTA final; rodapé com links legais e aviso de cookies acessível.

## Decisões de implementação

A implementação será uma landing page React estática, responsiva e acessível. Os contatos usarão links editáveis e a página não inventará avaliações, clientes ou números de desempenho. O conteúdo será escrito para apresentar o produto com clareza e conduzir a pessoa à solicitação de demonstração.
