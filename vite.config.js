
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        activityEntry: resolve(__dirname, "src/activityEntry/index.html"),
        calendar: resolve(__dirname, "src/calendar/index.html"),
        detailsModal: resolve(__dirname, "src/details-modal/index.html"),
        // Add more entries only if main entry points.
      },
    },
  },
});
