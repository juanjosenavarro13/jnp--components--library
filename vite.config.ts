import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "./dist/types",
      exclude: ["**/index.**", "**/App.tsx", "**/main.tsx"],
    }),
  ],
  build: {
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/index.ts"),
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
