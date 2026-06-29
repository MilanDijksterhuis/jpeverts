import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@img':   path.resolve(__dirname, '.'),
      '@fotos': path.resolve(__dirname, 'fotos'),
    },
  },
  server: {
    port: parseInt(process.env.PORT) || 5173,
    strictPort: false,
    fs: { allow: ['.', 'fotos'] },
  },
})
