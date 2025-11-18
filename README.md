# bootleg-react

A tiny, home‑rolled React clone built from scratch to showcase how modern component‑based UI frameworks work under the hood. This repo explores JSX‑like rendering, a simplified virtual DOM, and basic state management—without relying on the real React library.

> Note: The project is currently a skeleton. Core source files and examples will be added incrementally.

## Goals

- Demystify how React‑style component systems work internally.
- Implement a minimal virtual DOM and diffing algorithm.
- Support JSX‑like element creation and basic stateful components.
- Favor readability and learning over performance or production hardening.

## Planned Architecture

- `src/core/`: Virtual DOM node representation, `createElement` helper, diffing and reconciliation.
- `src/dom/`: DOM-specific `render` function, mounting, and patching.
- `src/hooks/`: Minimal hooks (`useState`, `useEffect`) once the core runtime is in place.
- `examples/`: Small demo apps that exercise rendering, updates, and events.

## Getting Started

Project scaffolding is still in progress. Once tooling is wired up, the typical workflow will look something like:

```bash
# install dependencies
npm install

# run tests (once added)
npm test

# run a small demo playground (once added)
npm run dev
```

## Contributing (for humans and AIs)

- Keep modules small and explicit; avoid clever abstractions that obscure the learning value.
- Prefer TypeScript (`.ts`/`.tsx`) and modern ES modules.
- When you add new public APIs, update this README with a short usage snippet.

See `.github/copilot-instructions.md` for more detailed guidance for AI coding agents.
