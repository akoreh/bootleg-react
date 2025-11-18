import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "BootlegReact.createElement",
    jsxFragment: "BootlegReact.Fragment",
  },
  resolve: {
    alias: {
      "bootleg-react": "/src/index.ts",
    },
  },
});
