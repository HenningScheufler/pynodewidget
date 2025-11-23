import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './tests/setup.ts',
    css: false,
    // Coverage configuration: reporters include terminal text, lcov, json and html
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json', 'html'],
      reportsDirectory: 'coverage',
      // exclude test files and setup
      exclude: ['tests/**', 'src/**/*.test.*', 'src/**/__tests__/**'],
    },
    environmentOptions: {
      happyDOM: {
        width: 1024,
        height: 768,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
