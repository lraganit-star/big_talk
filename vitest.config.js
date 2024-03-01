import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.{js,ts}"],
  },
  resolve: {
    alias: {
      "@client/": resolve(__dirname, "./client/"),
    },
  },
});
