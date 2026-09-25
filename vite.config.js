import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        agrinegros: resolve(__dirname, 'src/agrinegros.html'),
        binitin: resolve(__dirname, 'src/binitin-golf.html'),
        runpanaad: resolve(__dirname, 'src/runpanaad.html'),
      },
    },
  },
});