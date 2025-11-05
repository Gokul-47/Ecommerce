import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Force consistent port
    strictPort: true, // Don't automatically try other ports
    hmr: {
      port: 5175 // Force WebSocket to use same port
    }
  }
})
