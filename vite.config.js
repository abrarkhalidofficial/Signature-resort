import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import path from "path";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "router",
        replacement: path.resolve(__dirname, "./src/router.jsx"),
      },
    ],
  },
  plugins: [
    react(),
    ViteWebfontDownload(),
    chunkSplitPlugin(),
    imagetools(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100,
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 30,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      webp: {
        quality: 70,
      },
      svgo: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "minifyStyles",
          },
          {
            name: "removeMetadata",
          },
          {
            name: "removeUselessStrokeAndFill",
          },
          {
            name: "reusePaths",
          },
          {
            name: "removeEmptyAttrs",
            active: true,
          },
        ],
      },
    }),
  ],
});
