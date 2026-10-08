# Rodrigo Lima — personal website

A lightweight React and TypeScript site introducing selected software engineering work. It focuses on the engineering decisions visible in three public repositories: a runnable dashboard, a deterministic LangGraph example, and offline n8n workflows.

## Run locally

Requires Node.js 24 and npm 11. No account, environment variable, API key, database, or external service is needed.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. To verify the source:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

The build produces static files in `dist/`. The page has no backend and does not collect visitor data. It loads no third-party scripts, analytics, or remote fonts.

## Content and structure

- `src/projects.ts` is the single list of featured projects, source links, engineering decisions, and stated evidence.
- `src/App.tsx` renders the page and the illustrated project diagrams. The illustrations are original conceptual visuals, not screenshots or production data.
- `src/styles.css` contains the responsive layout, focus treatment, and reduced-motion handling.
- `src/App.test.tsx` checks the public project links, disclosures, navigation behavior, and basic document access points.

Project descriptions are intentionally bounded by what the linked repositories demonstrate. The dashboard uses fictional data and a local demo sign-in. The LangGraph example has no model-provider call. The n8n workflows run manually and offline, with no Agent node or external integration. Follow each repository's README for its exact setup, tests, and limitations.

## Accessibility and deployment

The page uses semantic landmarks, descriptive links, visible keyboard focus, a skip link, a responsive navigation button, and `prefers-reduced-motion`. Review contrast and navigation in a real browser before release. To serve the static build, host the contents of `dist/` on any static host with HTTPS. No runtime secrets or server routes are required.

No license is included; reuse rights have not been specified.
