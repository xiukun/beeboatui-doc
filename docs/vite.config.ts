import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [],
  build: {
    rollupOptions: {
      plugins: [],
    },
  },
  resolve: {
    alias: {
      assert: 'browser-assert',
      path: 'path-browserify',
    },
  },
  define: {
    'process.env.BABEL_TYPES_8_BREAKING': 'false',
    'process.platform': '"darwin"',
    'Buffer.isBuffer': 'undefined',
  },
  server: {
    fs: {
      strict: false,
    },
  },
  // optimizeDeps: {
  //     include: ['@beeboat/components/index.ts'],
  // },
})
