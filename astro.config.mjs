import { defineConfig } from "astro/config";
import react from "@astrojs/react"; // Импортируем рендерер для React
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://toadland.ru",
  integrations: [sitemap()],
  integrations: [react()], // Добавляем React как интеграцию
});
