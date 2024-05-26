import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Çevre değişkenlerini yükle
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
});
