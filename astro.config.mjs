import { defineConfig } from "astro/config";
import react from "@astrojs/react"; // Импортируем рендерер для React
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
<<<<<<< Updated upstream
  site: "https://toadland.ru",
=======
  output: "server",
  adapter: node({
    mode: "standalone",
  }), // обязательно, без предварительно отрисованных страниц
  site: "https://sh1z.online",
>>>>>>> Stashed changes
  integrations: [sitemap()],
  integrations: [react()], // Добавляем React как интеграцию
  prefetchAll: true,
});
