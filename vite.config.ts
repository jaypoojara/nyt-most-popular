/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// ? why arrow function: https://github.com/vitest-dev/vitest/discussions/1106
export default defineConfig(() => ({
  plugins: [react()],

  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
    coverage: {
      provider: "istanbul", // or 'v8'
    },
    testDir: "src/test/",
    include: ["src/test/**/*.(test|spec).ts?(x)"],
  },
}));
