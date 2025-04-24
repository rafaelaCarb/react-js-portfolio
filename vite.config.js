import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/react-js-portfolio/',
  plugins: [tailwindcss()],
})