//! This file contains code to configure vite https://vitejs.dev/config/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
