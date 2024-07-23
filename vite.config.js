import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ecommerce_rtk/",
  plugins: [react()],
  server: {
    host : true,
  },
})
