import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
    minify: 'terser',
    manifest: true,
    sourcemap: false,
    cssMinify: 'terser',
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },

  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Accent Blogs',
          description: 'Investor Blogs',
        },
      },
    }),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
          'sortAttrs',
        ],
      },
      cache: true,
      cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer'
    }),
  ],

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
