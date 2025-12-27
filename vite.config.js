import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NO tailwindcss import here for version 3!
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})