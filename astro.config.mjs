import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static", 
  site: "https://toadland.ru",
  integrations: [sitemap()],
  prefetch: true,
});
