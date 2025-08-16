import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import glsl from "vite-plugin-glsl";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    glsl(),
  ],
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    assetsDir: "assets", // 👈 Organized assets in separate directory
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"), // 👈 Add this for asset imports
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
      allow: [
        path.resolve(__dirname, "attached_assets"), // 👈 Allow serving from assets
      ],
    },
  },
  assetsInclude: [
    "**/*.gltf",
    "**/*.glb",
    "**/*.mp3",
    "**/*.ogg",
    "**/*.wav",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.png",
    "**/*.svg",
  ],
});