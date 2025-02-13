import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        id: '/',
        name: 'myHotel',
        short_name: 'hotel',
        description: 'meet your goal',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/screenshots/screenshot1.png',
            sizes: '928x1780',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/screenshots/screenshot2.png',
            sizes: '750x1338',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: '/screenshots/screenshot3.png',
            sizes: '978x1732',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/',
  publicDir: 'public',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
});
