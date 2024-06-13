import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portofolio/',  // Sesuaikan dengan nama repository atau path aplikasi Anda
  plugins: [react()],
  build: {
    outDir: 'dist',  // Pastikan output directory sesuai dengan yang diharapkan oleh Netlify
  },
});
