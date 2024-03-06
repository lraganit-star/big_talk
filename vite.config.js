import { defineConfig } from "vite";
import path from "path";

console.log(path.resolve(__dirname));

export default defineConfig({
  root: `client`,
  build: {
    outDir: `dist`,
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
