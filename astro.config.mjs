import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sgcho-0809.github.io',
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
