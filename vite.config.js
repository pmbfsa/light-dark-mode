import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  base: './',
  plugins: [
    webfontDownload(
      'https://fonts.googleapis.com/css2?family=Comfortaa&family=Kaushan+Script&family=Oswald&display=swap',
      { assetsSubfolder: 'fonts' },
    ),
  ],
});
