import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone", // или 'middleware', если нужно интегрировать с другими фреймворками
  }),
  site: "https://toadland.ru",
  integrations: [sitemap()],
  prefetch: true,
});
