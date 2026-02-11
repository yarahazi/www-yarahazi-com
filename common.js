/* =========
   Header
========= */
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    const header = document.getElementById("header");
    if (header) {
      header.innerHTML = html;
      initHeader();   // ← ここが超重要
    }
  });

/* =========
   Footer
========= */
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.innerHTML = html;
    }
  });
