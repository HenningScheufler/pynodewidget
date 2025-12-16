import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Define process.env for browser environment
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': JSON.stringify({}),
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/standalone_entry.tsx'),
      name: 'PyNodeWidget',
      formats: ['iife'],
      fileName: () => 'standalone.iife.js',
    },
    rollupOptions: {
      output: {
        // Inline all dependencies including React and ReactFlow
        inlineDynamicImports: true,
        // No externals - bundle everything
        globals: {},
      },
    },
    minify: 'esbuild',  // Use esbuild instead of terser
    sourcemap: false,
    cssCodeSplit: false,
    // Increase chunk size warning limit for large bundle
    chunkSizeWarningLimit: 3000,
  },
})
