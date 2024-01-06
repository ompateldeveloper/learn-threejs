import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  build: {
    // Use raw-loader for glsl files
    assetsInlineLimit: 0,
  },
  plugins: [glsl()],
});