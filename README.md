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

## JSX Transformation

The project uses **esbuild** (via Vite) to transform JSX into `BootlegReact.createElement()` calls—no React or Babel dependencies required.

Configuration:

- `vite.config.ts` sets `jsxFactory: 'BootlegReact.createElement'`
- TypeScript uses `jsx: "preserve"` to let esbuild handle transformation
- JSX types defined in `src/jsx.d.ts` for TypeScript support

Example JSX:

```tsx
<div id="foo">
  <a>bar</a>
</div>
```

Gets transformed to:

```js
BootlegReact.createElement(
  "div",
  { id: "foo" },
  BootlegReact.createElement("a", null, "bar")
);
```

## Getting Started

```bash
# install dependencies
npm install

# run the demo playground
npm run dev

# run tests (once added)
npm test

# type check
npm run type-check
```

## Contributing (for humans and AIs)

- Keep modules small and explicit; avoid clever abstractions that obscure the learning value.
- Prefer TypeScript (`.ts`/`.tsx`) and modern ES modules.
- When you add new public APIs, update this README with a short usage snippet.

See `.github/copilot-instructions.md` for more detailed guidance for AI coding agents.
