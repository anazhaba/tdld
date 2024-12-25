import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static", // обязательно, без предварительно отрисованных страниц
  site: "https://toadland.ru",
  integrations: [sitemap()],
});
