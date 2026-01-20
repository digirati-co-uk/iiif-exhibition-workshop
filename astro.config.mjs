// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'
import path from 'path';
import { fileURLToPath } from 'url';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
      },
    },
  },
    integrations: [starlight({
  title: 'IIIF Exhibition Building Workshop 2026',
  plugins: [
    starlightThemeNova(/* options */),
  ],
  customCss: ['./src/global.css'],
        // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Workshop',
                autogenerate: { directory: 'workshop' },
            },
        ],
		}), react()],
});
