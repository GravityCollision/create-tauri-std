import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import nodePolyfills from "rollup-plugin-polyfill-node";

const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  // Svelte Plugin
  plugins: [svelte()],

  // Vite will highlight Rust errors
  clearScreen: false,
  // Ensure the Tauri Server's Port is used
  server: {
    port: 1420,
    strictPort: true,
  },
  // Environment Variables for Tauri
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // don't minify debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
})