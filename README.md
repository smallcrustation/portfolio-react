# Portfolio (React)

Single-page portfolio built with **React 19**, **TypeScript**, and **Vite**. UI is organized by feature (`src/features/*`) with shared utilities under `src/shared`.

## Requirements

- **Node.js 20+** (see `.nvmrc`; `package.json` `engines` field matches)

## Setup

```bash
npm install
cp .env.example .env.local   # optional: override titles, email, social URLs
```

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Vite dev server with HMR                         |
| `npm run build`| Typecheck (`tsc`) + production bundle to `dist/` |
| `npm run preview` | Serve the production build locally            |
| `npm test`     | Vitest (unit / component tests)                  |
| `npm run lint` | ESLint (TypeScript + React hooks / refresh)    |

## Environment variables

Only variables prefixed with `VITE_` are exposed to the client. See `.env.example` for the supported set and defaults in `src/shared/lib/env.ts`.

## How to add a new feature

1. Create a folder under `src/features/<feature-name>/` (for example `src/features/blog/`).
2. Add UI components and co-located CSS; keep routes/sections isolated.
3. If the feature needs app-wide state, add a provider under `src/app/providers/` **or** a local provider next to the feature and wrap only the subtree that needs it.
4. Register new in-page sections in `src/features/navigation/context/NavContext.tsx` (`NAV_SECTION_IDS`) and attach `ref` registration in the section component (see `About`, `ProjectsSection`, `Contact`).
5. Add static copy or data in a `data/` file or `shared/lib` helpers; avoid hard-coding secrets—use `import.meta.env` with `VITE_` prefixes.
6. Add tests next to the code (`*.test.ts` / `*.test.tsx`) and run `npm test`.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs install, build, tests, and lint on pushes and pull requests to `main` / `master`.

## Releases

See `RELEASE.md` and `CHANGELOG.md` for versioning and tag workflow.

## Legacy deploy notes

Older scripts targeted ZEIT Now; the production artifact is now the **`dist/`** folder from `npm run build`. Deploy that directory to any static host (Vercel, Netlify, S3, nginx, etc.).
