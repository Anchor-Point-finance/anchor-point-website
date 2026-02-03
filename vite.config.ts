import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  // Change this if you later use a custom domain
  base: '/anchor-point-website/',
  server: {
    // Allow access from any host (including other devices on the network)
    host: '0.0.0.0',
    // Default port for dev server
    port: 5173,
  },
})
