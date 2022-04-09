import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@crate/",
        replacement: "/crates/",
      },
    ],
  },
  plugins: [react()],
  server: {
    hmr: {
      // port: 443,
    },
  },
  define: {
    "process.env": {},
  },
});
