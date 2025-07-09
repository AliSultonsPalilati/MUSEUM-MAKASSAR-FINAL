import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MUSEUM-MAKASSAR-FINAL-KLMPK6/',
  build: {
    outDir: 'dist'
  }
})
