import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/PavanPortfolio/',  // Must match your GitHub repository name
  plugins: [
    react(),
  ],
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/client/src',
      '@shared': '/shared'
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
