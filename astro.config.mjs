import { defineConfig } from 'astro/config';

import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind(), sitemap()],
  server: { port: 8000 }
});