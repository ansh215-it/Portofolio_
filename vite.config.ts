import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Ubah bagian ini agar sama persis dengan nama repo GitHub Anda
  base: '/Portofolio_/', 
})