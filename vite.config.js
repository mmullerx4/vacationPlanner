//probably want to update this file

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        // Add more entries only if main entry points.
      },
    },
  },
});
