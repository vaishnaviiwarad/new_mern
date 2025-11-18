import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/new_mern/",    // required for GitHub Pages
  plugins: [react()],
   test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js'
  }

})
