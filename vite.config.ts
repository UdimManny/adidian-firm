import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssr: {
    // Bundle these into the prerender build (react-helmet-async is CommonJS).
    noExternal: ['react-helmet-async', 'lucide-react'],
  },
});
