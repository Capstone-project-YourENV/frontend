import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: [0.6, 0.8],
      },
      jpeg: {
        quality: 70,
      },
      webp: {
        quality: 75,
      },
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  rewrites: [
    {
      source: '/(.*)',
      destination: '/',
    },
  ],
});
