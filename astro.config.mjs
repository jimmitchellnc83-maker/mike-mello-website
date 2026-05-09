// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikemello.com',
  server: {
    port: 4322
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
