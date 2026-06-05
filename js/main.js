/**
 * Common UI: active nav, dark mode toggle.
 */
(function ($) {
  const THEME_KEY = "ship-traffic-theme";

  function setActiveNav() {
    const page = document.body.getAttribute("data-page");
    if (!page) return;
    $(".main-nav .nav-btn").each(function () {
      const $link = $(this);
      if ($link.data("page") === page) {
        $link.addClass("is-active").attr("aria-current", "page");
      }
    });
  }

  function updateThemeButton(theme) {
    const $btn = $("#theme-toggle");
    if (!$btn.length) return;
    const isDark = theme === "dark";
    $btn.text(isDark ? "Light" : "Dark");
    $btn.attr(
      "aria-label",
      isDark ? "라이트 모드로 전환" : "다크 모드로 전환"
    );
    $btn.attr("aria-pressed", isDark ? "true" : "false");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeButton(theme);
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const theme = saved === "dark" ? "dark" : "light";
    applyTheme(theme);
  }

  function bindThemeToggle() {
    $("#theme-toggle").on("click", function () {
      const current =
        document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  $(function () {
    setActiveNav();
    initTheme();
    bindThemeToggle();
  });
})(jQuery);
