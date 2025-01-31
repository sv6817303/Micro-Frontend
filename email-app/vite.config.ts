import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'email',
      filename: 'remoteEntry.js',
      exposes: {
        './email-component': './src/components/email-component', // Correctly exposing
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext', 
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    // ✅ Ensures top-level await is supported
  },
  server: {
    port: 3002,
  },
});
