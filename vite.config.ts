import reactRefresh from "@vitejs/plugin-react-refresh";
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
  plugins: [reactRefresh()],
  server: {
    hmr: {
      // port: 443,
    },
  },
  define: {
    "process.env": {},
  },
});
