// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://charcoles-hub.github.io',
  base: '/demo-fisioymes-v2',
  vite: { plugins: [tailwindcss()] },
});
