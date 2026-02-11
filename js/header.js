function initHeader() {

  /* =========
     Mobile menu
  ========= */
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.textContent = isOpen ? "×" : "≡";
    });
  }

  /* =========
     Header scroll control
  ========= */
  const header = document.getElementById("site-header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
        header.classList.add("shrink");
      }

      if (current < 10) {
        header.classList.remove("shrink");
      }

      lastScroll = current;
    });
  }
}
