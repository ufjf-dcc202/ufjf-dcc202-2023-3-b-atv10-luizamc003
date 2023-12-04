/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    // exclude: ["./e2e/index.html.spec.js"],
    exclude: ["**/e2e/**"],
  },
});
