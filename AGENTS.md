# Repository Guidelines

## Project Structure & Module Organization
- `src/`: Vite + React + TypeScript frontend (`main.tsx`, `App.tsx`, `index.css`).
- `crates/hello/`: Rust WebAssembly crate compiled with `wasm-pack` and imported in the app as `@crate/hello/pkg`.
- `tests/visual/`: Playwright visual regression tests and snapshot baselines.
- `scripts/run-visual-test.mjs`: Visual test wrapper that prints snapshot update guidance on failure.
- `.github/workflows/`: CI definitions for linting, visual regression, crate build, and container build/publish.
- `deploy/default.conf`: Nginx SPA config used by the container.
- Root configs: `vite.config.mts`, `tsconfig.json`, `eslint.config.mts`, `playwright.config.ts`, `Dockerfile`.

## Build, Test, and Development Commands
- `pnpm install`: install JS dependencies (Node `^22`, pnpm `10`).
- `pnpm dev`: run Vite and crate watchers together for local development.
- `pnpm build`: build Rust crate(s) and frontend bundle into `dist/`.
- `pnpm typecheck`: run TypeScript checks.
- `pnpm lint`: run ESLint and Prettier checks.
- `pnpm fix`: auto-fix ESLint and Prettier issues.
- `pnpm build:crates`: compile wasm crate(s) without building Vite output.
- `pnpm test:visual`: run visual regression tests (builds crates first).
- `pnpm test:visual:update`: update visual snapshots for intentional UI changes.

## Coding Style & Naming Conventions
- Use TypeScript + React function components with strict typing.
- Formatting is enforced by Prettier; linting uses ESLint (`typescript-eslint`, `react`, `react-hooks`).
- Use 2-space indentation in TS/TSX and keep imports grouped logically.
- React components: PascalCase filenames/exports (for example, `App.tsx`).
- Functions/variables: camelCase. Rust follows standard `rustfmt` defaults and snake_case for functions.

## Testing Guidelines
- No dedicated unit test framework is configured yet.
- Required quality gates are: `pnpm lint`, `pnpm typecheck`, `pnpm build:crates`, and visual regression in PR CI.
- Before opening a PR, run: `pnpm lint && pnpm typecheck && pnpm build`.
- For UI or dependency updates, also run: `pnpm test:visual`.
- If visual regression fails and the change is intentional, run `pnpm test:visual:update`, commit updated snapshots, and rerun tests.
- If you add tests, prefer colocated `*.test.ts(x)` files under `src/` and document the new command in `package.json`.

## Commit & Pull Request Guidelines
- Recent history favors concise, imperative commit subjects (for example, `Update blueprintjs`).
- Keep commit titles short; include scope when useful (for example, `feat(crate): add greeting options`).
- PRs should include:
  - clear summary and rationale,
  - linked issue (if applicable),
  - screenshots/GIFs for UI changes,
  - confirmation that lint, typecheck, and build pass locally.
