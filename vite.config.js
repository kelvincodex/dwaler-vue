import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "/resources/ts/src/"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  base: "/"
})
