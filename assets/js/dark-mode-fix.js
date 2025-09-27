// Direct script to force dark mode styling
document.addEventListener("DOMContentLoaded", () => {
  const applyDarkMode = () => {
    const theme =
      document.documentElement.getAttribute("data-theme") ||
      localStorage.getItem("theme") ||
      "light";
    const contentContainer = document.getElementById("content-container");

    if (theme === "dark" && contentContainer) {
      // Apply direct inline styles with !important via JavaScript
      contentContainer.setAttribute(
        "style",
        "background-color: #2d2d2d !important; " +
          "color: #e0e0e0 !important; " +
          "border: 1px solid #444 !important; " +
          "transition: background-color 0.3s ease, color 0.3s ease;"
      );
    }
  };

  // Run immediately
  applyDarkMode();

  // Also set up a MutationObserver to detect theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "data-theme") {
        applyDarkMode();
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });
});
