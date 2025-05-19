import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      'providers': path.resolve(__dirname, './src/providers'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'styles': path.resolve(__dirname, './src/styles'),
      'utils': path.resolve(__dirname, './src/utils'),
      'models': path.resolve(__dirname, './src/models'),
      'api': path.resolve(__dirname, './src/api'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'services': path.resolve(__dirname, './src/services'),
      'features': path.resolve(__dirname, './src/features'),
      'app': path.resolve(__dirname, './src/app'),
      'assets': path.resolve(__dirname, './src/assets'),
      'locales': path.resolve(__dirname, './src/locales'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
