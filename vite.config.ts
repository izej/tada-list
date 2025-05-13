import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // adres backendu
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
