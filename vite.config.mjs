import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: '.',
  publicDir: false, // We'll handle static files via plugin
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].[hash][extname]';
          }
          return '[name].[hash][extname]';
        }
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'partials/*.html',
          dest: '.'
        },
        {
          src: 'lib/**/*',
          dest: 'lib'
        },
        {
          src: 'img/*',
          dest: 'img'
        }
      ]
    })
  ],
  server: {
    port: 3000,
    open: true
  }
});
