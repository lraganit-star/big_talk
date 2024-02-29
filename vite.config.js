import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "../dist"),
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
