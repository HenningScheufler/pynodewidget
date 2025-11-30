import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/standalone/standalone-entry.tsx'),
      formats: ['iife'],
      name: 'PyNodeWidget',
      fileName: 'standalone',
    },
    rollupOptions: {
      output: {
        // Inline everything for true standalone operation
        inlineDynamicImports: true,
        assetFileNames: 'standalone.[ext]',
      },
    },
    minify: true,
    sourcemap: false,
    cssCodeSplit: false,
  },
})
