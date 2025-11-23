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
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.tsx'),
        json_schema_node_entry: path.resolve(__dirname, 'src/json_schema_node_entry.ts')
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        inlineDynamicImports: false,
        manualChunks: (id) => {
          // Force all modules into their respective entry chunks
          // No shared chunks between entry points
          return undefined;
        },
      },
    },
    minify: true,
    sourcemap: true,
    cssCodeSplit: false,
  },
})