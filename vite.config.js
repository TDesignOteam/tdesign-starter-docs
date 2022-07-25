import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import tdocPlugin from "./plugin-tdoc";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/starter/" : "./",
  resolve: {
    alias: {
      "@docs": path.resolve(__dirname, "./docs"),
    },
  },
  build: {
    outDir: "./dist",
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: "/",
    https: false,
    fs: {
      strict: false,
    },
  },
  plugins: [
    createVuePlugin({
      include: /(\.md|\.vue)$/,
      jsx: true,
    }),
    tdocPlugin(),
  ],
});
