import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'chat', // or 'email', or 'host'
      filename: 'remoteEntry.js',
      exposes: {
        './chat-component': './src/components/chat-component',
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
    port: 3001, // Change accordingly
  },
});
