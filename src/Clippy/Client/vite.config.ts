import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/manifests.ts", // Bundle registers one or more manifests
      formats: ["es"],
      fileName: "clippy",
    },
    outDir: "../wwwroot/App_Plugins/Clippy", // your web component will be saved in this location
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  }
});
