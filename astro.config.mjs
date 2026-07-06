// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL de production — à mettre à jour après le déploiement (utilisée pour le SEO / Open Graph)
  site: 'https://rayane937.github.io',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
