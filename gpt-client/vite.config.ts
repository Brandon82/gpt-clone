import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@state': resolve(__dirname, 'src/state'),
      '@config': resolve(__dirname, '../config.json'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
})
