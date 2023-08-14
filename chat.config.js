import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    lib: {
      entry: './package/index.js',
      name: 'garfield-design',
      fileName: (format) => `garfield-design.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    createVuePlugin(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    })
  ],
  optimizeDeps: {
    include: [
      'vue',
      // 其他需要按需引入的依赖
    ]
  }
});