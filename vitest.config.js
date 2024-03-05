import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    include: ["tests/unit/*.test.{js,ts}"],
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@client/": resolve(__dirname, "./client/"),
    },
  },
});
