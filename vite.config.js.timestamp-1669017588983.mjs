// vite.config.js
import { ViteWebfontDownload } from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/vite-plugin-webfont-dl/dist/index.js";
import { chunkSplitPlugin } from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/vite-plugin-chunk-split/dist/index.js";
import { defineConfig } from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/vite/dist/node/index.js";
import { imagetools } from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/vite-imagetools/dist/index.mjs";
import path from "path";
import react from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///C:/Users/pc/Documents/GitHub/Signature-resort/node_modules/vite-plugin-imagemin/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\pc\\Documents\\GitHub\\Signature-resort";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/components")
      },
      {
        find: "assets",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/assets")
      },
      {
        find: "router",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/router.jsx")
      }
    ]
  },
  plugins: [
    react(),
    ViteWebfontDownload(),
    chunkSplitPlugin(),
    imagetools(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 30
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      webp: {
        quality: 70
      },
      svgo: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "minifyStyles"
          },
          {
            name: "removeMetadata"
          },
          {
            name: "removeUselessStrokeAndFill"
          },
          {
            name: "reusePaths"
          },
          {
            name: "removeEmptyAttrs",
            active: true
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFNpZ25hdHVyZS1yZXNvcnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHBjXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcU2lnbmF0dXJlLXJlc29ydFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcGMvRG9jdW1lbnRzL0dpdEh1Yi9TaWduYXR1cmUtcmVzb3J0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZVdlYmZvbnREb3dubG9hZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi13ZWJmb250LWRsXCI7XHJcbmltcG9ydCB7IGNodW5rU3BsaXRQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tY2h1bmstc3BsaXRcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gXCJ2aXRlLWltYWdldG9vbHNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZW1pblwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJjb21wb25lbnRzXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50c1wiKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6IFwiYXNzZXRzXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzXCIpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJyb3V0ZXJcIixcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9yb3V0ZXIuanN4XCIpLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlV2ViZm9udERvd25sb2FkKCksXHJcbiAgICBjaHVua1NwbGl0UGx1Z2luKCksXHJcbiAgICBpbWFnZXRvb2xzKCksXHJcbiAgICB2aXRlQ29tcHJlc3Npb24oe1xyXG4gICAgICBhbGdvcml0aG06IFwiYnJvdGxpQ29tcHJlc3NcIixcclxuICAgICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgICB9KSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIGdpZnNpY2xlOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlwbmc6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgfSxcclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgIHF1YWxpdHk6IFswLjcsIDAuOF0sXHJcbiAgICAgICAgc3BlZWQ6IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdlYnA6IHtcclxuICAgICAgICBxdWFsaXR5OiA3MCxcclxuICAgICAgfSxcclxuICAgICAgc3Znbzoge1xyXG4gICAgICAgIG11bHRpcGFzczogdHJ1ZSxcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlVmlld0JveFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJtaW5pZnlTdHlsZXNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlTWV0YWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlVXNlbGVzc1N0cm9rZUFuZEZpbGxcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmV1c2VQYXRoc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVFbXB0eUF0dHJzXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsMkJBQTJCO0FBQ3pXLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxrQkFBa0I7QUFQekIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3pEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3JEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDekQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sb0JBQW9CO0FBQUEsSUFDcEIsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDUixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixTQUFTLENBQUMsS0FBSyxHQUFHO0FBQUEsUUFDbEIsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
