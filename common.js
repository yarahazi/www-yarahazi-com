/* =========
   Header
========= */
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    const header = document.getElementById("header");
    if (header) {
      header.innerHTML = html;
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
