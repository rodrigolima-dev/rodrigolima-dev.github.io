# Rodrigo Lima — personal site

A static portfolio built with React, TypeScript, and Vite. It presents web products, APIs, applied AI work, and the engineering practices behind them.

## Run locally

Requires Node.js 24 and npm 11. No account, API key, database, or environment file is needed.

```bash
npm ci
npm run dev
```

Run the release checks with:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

The static output is written to `dist/`.

## What is shown

- The project cards cover a renamed e-commerce product backed by the `orpheuswim-frontend` and `orpheuswim-api` repositories, the OpportunusAI dashboard, HIT, and Vector Chunk Kit.
- The OpportunusAI carousel shows product interfaces. Its engineering context is explained through organization permissions, AI-assisted conversations, and knowledge review.
- The visual language names Clean Architecture, modularization, Docker, CI/CD, code review, agents, LangChain, LangGraph, and MCP exploration as engineering practices. Public evidence is documented in `03-provas-e-aplicacao.md`.
- The hero portrait was derived from a photo supplied by the site owner. Other site graphics were made for this site.

Content is available in English and Brazilian Portuguese. The language and light/dark theme controls remember the visitor's choice locally. The site has no backend, analytics, third-party scripts, remote fonts, or visitor data collection.

## Structure

- `src/content.ts` — interface copy in both languages.
- `src/projects.ts` — selected projects and their evidence-backed claims.
- `src/App.tsx` and `src/styles.css` — page structure, controls, and responsive design.
- `public/media/` — the portrait, dashboard captures, fictional product image, and HIT screens.
- `src/App.test.tsx` — interaction and disclosure checks.

## Publishing

The GitHub Pages workflow runs only when manually started on `main`. It installs dependencies and runs lint, formatting, type checks, tests, and build before deployment. The site needs no runtime secrets. Review the final images, links, and repository visibility before each release.

No license is included because reuse rights have not been specified.
