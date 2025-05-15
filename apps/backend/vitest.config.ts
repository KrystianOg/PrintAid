/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html"],
      exclude: ["node_modules/", "dist/", "migrations/"],
      all: true,
    },
    watch: false,
  },
});
