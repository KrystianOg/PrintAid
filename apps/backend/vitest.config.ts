/// <reference types="vitest" />
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    setupFiles: ["./test/globalSetup.ts"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html"],
      exclude: ["node_modules/", "dist/", "migrations/"],
      all: true,
    },
    watch: false,
    env: loadEnv("test", process.cwd(), ""),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
