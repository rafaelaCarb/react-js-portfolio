import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default ({
  base: '/react-js-portfolio/',
  plugins: [
    tailwindcss(),
  ],
})