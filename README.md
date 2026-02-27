# Landing Page padrão de Marketing

## | Como rodar na sua máquina

### Baixe o repositório na sua máquina
```bash
git clone https://github.com/GiovanePolese/servicesLandingPage.git
```

### Baixe as dependências
```bash
npm install
```

### Rode o projeto localmente
```bash
npm run dev
```

### Build de produção (SSG/SSR do Next.js)
```bash
npm run build
npm run start
```

## | Migração para Next.js

Este projeto foi migrado de Vite + React Router para **Next.js (App Router)**.

- A rota `/` está em `app/page.tsx`.
- A rota `/cadastro-concluido` está em `app/cadastro-concluido/page.tsx`.
- Como não há dependência de API para renderização inicial da landing page, o Next.js pode gerar páginas estáticas (SSG) automaticamente no build.

## | Padrões de conteúdo
Os conteúdos devem ser atualizados diretamente no aquivo `Texts.ts`, que contém todas as informações de textos e links das seções.

## | Cores e temas
Todas as cores devem estar no arquivo de temas `theme.ts` dentro de `./src/styles`.

Exemplo:
```ts
export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#5d5dff',
    textColor: {
      primary: '#d9e3ea',
    },
    backgroundColor: '#151719',
  },
}
```

Para utilizar basta usar no styled-components:
```ts
${props => props.theme.colors.primary}
```

## | Head, tags e scripts (migração do index.html)
As configurações que antes ficavam no `index.html` agora estão no `app/layout.tsx`:

- Meta tags de SEO (description, canonical, Open Graph, title, author) via `metadata` do Next.
- Favicon em `metadata.icons`.
- Fonte Montserrat via `next/font/google` (sem depender de `<link>` manual).
- Scripts do Google Analytics, Google Tag Manager e Vimeo via `next/script`.
- `noscript` do GTM renderizado no `body` apenas em produção.
