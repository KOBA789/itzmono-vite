import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      // port: 443,
    },
  },
  define: {
    "process.env": {},
  },
});
