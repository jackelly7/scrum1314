import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://localhost:44389', // match your backend port
        changeOrigin: true,
        secure: false, // allow self-signed certs
      },
    },
  },
});
