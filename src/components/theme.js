const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("site-theme", theme);
  document.documentElement.style.colorScheme = theme;
};

const initTheme = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const savedTheme =
    localStorage.getItem("site-theme") || (prefersDarkMode ? "dark" : "light");
  applyTheme(savedTheme);
<<<<<<< Updated upstream
  document.documentElement.style.visibility =
    "visible"; /* Отображаем страницу обратно страницу до установки темы */
};

// Применяем тему перед подготовкой страницы
document.addEventListener("astro:after-swap", initTheme);
// Также инициализируем при первоначальной загрузке
=======
  document.documentElement.style.visibility = "visible";
};

document.addEventListener("astro:after-swap", initTheme);

>>>>>>> Stashed changes
initTheme();

// Обработчик изменения системной темы
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";
    applyTheme(newTheme);
  });
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("site-theme", newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
  }
});
