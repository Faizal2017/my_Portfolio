// Simple and direct dark mode script
document.addEventListener("DOMContentLoaded", function () {
  // Force dark background immediately
  function applyDarkModeStyles() {
    const container = document.getElementById("content-container");
    if (container) {
      container.style.cssText =
        "background-color: #2d2d2d !important; color: #e0e0e0 !important;";
    }
  }

  // Check dark mode on page load
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    applyDarkModeStyles();
  }

  // This will be called when the dark mode toggle is clicked
  document.addEventListener("themeChanged", function (e) {
    const newTheme = e.detail.theme;
    if (newTheme === "dark") {
      applyDarkModeStyles();
    } else {
      const container = document.getElementById("content-container");
      if (container) {
        container.style.cssText = "";
      }
    }
  });
});
