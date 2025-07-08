/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react(),tailwindcss()],
  
})
 */


import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
// import Sitemap from 'vite-plugin-sitemap';
// import { defaultDescription } from './src/constants';
 
// const routes = [
//   { path: '/', name: 'Onism Himachal Trips' },
//   { path: '/ladakh-and-spiti-trips', name: 'Onism Ladakh and Spiti Trips' },
//   { path: '/kashmir-trips', name: 'Onism Kashmir Trips' },
// ];
 
// eslint-disable-next-line
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  // console.log('Command', command);
  // console.log('Mode', mode);
  // console.log('isSsrBuild', isSsrBuild);
  // console.log('isPreview', isPreview);
  // Load environment variables from .env file
  // const env = loadEnv(mode, process.cwd(), '');
 
  // const { VITE_APP_ENV } = env;
  // const isDev = VITE_APP_ENV === 'development';
  // const isProd = VITE_APP_ENV === 'production';
  return {
    build: {
      chunkSizeWarningLimit: 1600,
      outDir: 'build',
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
          manualChunks(id) {
            // if (id.includes('src/constants/') || id.includes('src/utils/')) {
            //   return 'shared';
            // }
            if (id.includes('node_modules')) {
              const modulePath = id.split('node_modules/')[1];
              const topLevelFolder = modulePath.split('/')[0];
              if (topLevelFolder !== '.pnpm') {
                return topLevelFolder;
              }
              const scopedPackageName = modulePath.split('/')[1];
              const chunkName =
                scopedPackageName.split('@')[
                  scopedPackageName.startsWith('@') ? 1 : 0
                ];
              return chunkName;
            }
          },
        },
      },
    },
    plugins: [
      chunkSplitPlugin({
        strategy: 'single-vendor',
        customChunk: (args) => {
          let { file } = args;
          if (file.startsWith('app/')) {
            file = file.substring(4);
            file = file.replace(/\.[^.$]+$/, '');
            return file;
          }
          return null;
        },
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'Accent Blogs',
            description: "Investor Blogs",
          },
        },
      }),
      nodePolyfills({
        // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
        include: ['crypto'],
        // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
        exclude: [
          'http', // Excludes the polyfill for `http` and `node:http`.
        ],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Override the default polyfills for specific modules.
        overrides: {
          // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
          fs: 'memfs',
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
      react(),
      tailwindcss(),
      ViteImageOptimizer({
        /* pass your config */
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
                  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                },
                cleanupIDs: {
                  minify: false,
                  remove: false,
                },
                convertPathData: false,
              },
            },
            'sortAttrs',
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
              },
            },
          ],
        },
        cache: true,
        // Path to the cache directory. Can be used with GitHub Actions and other build servers that support cache directories to speed up consecutive builds.
        cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer',
      }),
      // Sitemap(),
    ],
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
      // exclude: [
      //   'vite-plugin-node-polyfills/shims/buffer',
      //   'vite-plugin-node-polyfills/shims/global',
      //   'vite-plugin-node-polyfills/shims/process',
      // ],
    },
  };
});