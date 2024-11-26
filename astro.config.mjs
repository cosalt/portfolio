import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import github from '@astrojs/github-pages';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://cosalt.github.io/portfolio',
  base: '/portfolio', // Update base to match your repository name
  output: 'static',
  adapter: github(),
});
