import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // GANTI 'yubz-portfolio' dengan nama repository GitHub Anda jika berbeda!
  base: '/Portofolio_/', 
})
