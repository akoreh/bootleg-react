# Copilot Instructions for `bootleg-react`

These instructions guide AI coding agents working in this repository.

## Project Stage & Goals

- This repo is currently a skeleton; core source files are not yet present.
- Purpose: a tiny, home‑rolled React clone that showcases how modern component‑based UI frameworks work under the hood.
- Focus areas: JSX‑like rendering, a simplified virtual DOM, and basic state management—without depending on the real React library.
- When adding code, prioritize clarity, incremental demos, and teaching value over performance micro‑optimizations or production features.

## Architecture Expectations

- Organize core runtime code under `src/` (you may create it):
  - `src/core/` for virtual DOM node representation, `createElement` (or equivalent), diffing, and reconciliation logic.
  - `src/dom/` for DOM-specific mounting (`render`), patching, and event delegation.
  - `src/hooks/` for minimal state/effect abstractions (`useState`, `useEffect`) if/when implemented.
- Keep public API small and React‑inspired, e.g. `render`, `createElement`, and a tiny hooks surface.
- Prefer pure functions and immutable data structures for tree/state transforms so the internals are easy to reason about.
- Keep the implementation explicit; avoid magic or opaque abstractions that obscure the learning value.

## Conventions

- Use TypeScript for new implementation files (`.ts` / `.tsx`), with ambient types where helpful.
- Use modern ES modules (`import` / `export`) everywhere.
- Favor small, focused modules that can be read top‑to‑bottom in one sitting.
- Document tricky algorithms with brief block comments above functions, not inline per line.

## Tooling & Scripts (to define when wiring up)

When you introduce tooling, follow these patterns:

- `package.json` scripts (suggested):
  - `build`: bundle the library (e.g. with `tsup` or `esbuild`).
  - `test`: run unit tests (e.g. `vitest` or `jest`).
  - `dev`: run any simple demo playground (e.g. Vite + `examples/` directory).
- Place reusable utilities under `src/shared/` instead of duplicating logic.

## Testing & Examples

- Co‑locate tests next to implementation files (e.g. `foo.test.ts`).
- Construct small, realistic examples in `examples/` that show how to:
  - Render simple components.
  - Update state and trigger re‑renders.
  - Handle events and props.

## Working With This Repo as an AI Agent

- If a required directory or file does not exist yet, create it with minimal, coherent scaffolding.
- Prefer incremental, well‑scoped changes that keep the library buildable and testable.
- When adding new public APIs, update or create a top‑level `README.md` to document them with short usage snippets.
- Avoid introducing heavy dependencies; prefer small, single‑purpose build/test tools.

## When In Doubt

- Keep the library small, readable, and easy to reason about.
- Prefer explicitness over clever abstractions.
- Align naming and semantics with React where intuitive, but do not aim for feature parity.
