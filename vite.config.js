import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: './',
  plugins: [
    webfontDownload(
      'https://fonts.googleapis.com/css2?family=Comfortaa&family=Kaushan+Script&family=Oswald&display=swap',
      { assetsSubfolder: 'fonts' },
    ),
    sitemap({
      hostname: 'https://pmbfsa.github.io/light-dark-mode/',
      outDir: 'docs',
    }),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
