# Rodrigo Lima — personal site

A small, static portfolio built with React, TypeScript, and Vite. It presents selected public code alongside a short account of the work behind OpportunusAI.

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

- The featured dashboard is a **public V1 demonstration** with fictional data. The operational OpportunusAI V2 is private; its code and production data are not part of this site.
- The V1 images are captures of the public demonstration. The V2 images are cropped captures of the private product interface. Customer details, operational figures, and private rules were removed or replaced with synthetic examples before publication. The conversation is a test view; the campaigns capture shows a blank planning form with example text, not an executed campaign.
- The LangGraph and n8n visuals explain the linked public examples. Their repositories define what those examples actually implement and test.
- The hero portrait was derived from a photo supplied by the site owner. Other site graphics were made for this site.

Content is available in English and Brazilian Portuguese. The language and light/dark theme controls remember the visitor's choice locally. The site has no backend, analytics, third-party scripts, remote fonts, or visitor data collection.

## Structure

- `src/content.ts` — interface copy in both languages.
- `src/projects.ts` — featured repositories and their public claims.
- `src/App.tsx` and `src/styles.css` — page structure, controls, and responsive design.
- `public/media/` — the portrait, public V1 captures, and labeled diagrams.
- `src/App.test.tsx` — interaction and disclosure checks.

## Publishing

The GitHub Pages workflow runs only when manually started on `main`. It installs dependencies and runs lint, formatting, type checks, tests, and build before deployment. The site needs no runtime secrets. Review the final images, links, and repository visibility before each release.

No license is included because reuse rights have not been specified.
