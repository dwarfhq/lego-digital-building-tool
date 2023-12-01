import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["./src/**/*.fbx"],
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "BrickBuilder",
      fileName: "brick-builder",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
