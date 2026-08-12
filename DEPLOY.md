# Instruções de Implantação — Zelda PDV Food

Este repositório contém o código-fonte completo da landing page moderna e responsiva do **Zelda PDV Food** (MC Infra TI), estruturado na direção visual *Concreto & Citrus*.

## Configuração no Netlify

Para publicar este site no Netlify, utilize os seguintes parâmetros no painel de criação de site:

- **Build command:** `pnpm build` (ou `npm run build`)
- **Publish directory:** `dist/public`
- **Node version:** 22+

O arquivo `netlify.toml` incluído na raiz já configura automaticamente o redirecionamento de rotas do lado do cliente (SPA/Wouter) e o diretório de publicação correto.
