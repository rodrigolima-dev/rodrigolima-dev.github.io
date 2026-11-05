# Rodrigo Lima — portfólio local

Portfólio estático em React, TypeScript e Vite. A página apresenta dois projetos principais (loja de crochê e painel OpportunusAI), dois projetos secundários, currículo em PDF, alternância PT/EN e tema claro/escuro.

## Executar

Requer Node.js 24 e npm 11.

```bash
npm ci
npm run dev
```

Para conferir a versão de produção local:

```bash
npm run build
npm run preview -- --port 4173 --strictPort
```

Checks disponíveis: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test` e `npm run build`.

## Estrutura

- `src/content.ts`: copy e fallback de idioma.
- `src/projects.ts`: identificadores, tecnologias e links dos projetos.
- `src/App.tsx` e `src/styles.css`: composição, acessibilidade e layout responsivo.
- `public/media/`: retrato e imagens liberadas dos projetos.
- `public/cv/rodrigo-lima-full-stack.pdf`: currículo fornecido pelo autor.
- `src/App.test.tsx`: testes de idioma, tema, storage, links e HIT.

O site não usa backend, analytics, fontes externas ou chamadas de serviços em tempo de execução. O workflow de publicação existente não foi alterado.
