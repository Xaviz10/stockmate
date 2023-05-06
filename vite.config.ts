import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    macrosPlugin(),
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1700,
  },
});
