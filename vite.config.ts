import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: [/\/node_modules\/react/],
    exclude: [/\/node_modules\/(?!react)/],
    fastRefresh: false
  })],
  define: {},
}
)
