import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-js-portfolio/',
  plugins: [react({
    jsxRuntime: 'classic' // Adicione esta linha
  })],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`, // Força extensão .js
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})