// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Menggunakan class untuk mode gelap
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        // Skema warna gelap dengan aksen ungu/biru
        bgDark: '#0a0a0c',
        bgCard: '#1a1a21', // Untuk efek glassmorphism
        primary: '#7c3aed', // Ungu
        accent: '#3b82f6', // Biru
        textPrimary: '#ffffff',
        textSecondary: '#a1a1aa',
      },
      fontFamily: {
        // Menggunakan font Poppins seperti dalam permintaan
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(124, 58, 237, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.05) 1px, transparent 1px)',
        'glow-effect': 'radial-gradient(circle at 50% -20%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)',
      },
      gridTemplateColumns: {
        // Menambahkan grid 12 kolom
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px 2px rgba(124, 58, 237, 0.3)',
      }
    },
  },
  plugins: [],
} satisfies Config