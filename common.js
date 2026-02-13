// ===============================
// Header Load
// ===============================

fetch("/header.html")
  .then(res => res.text())
  .then(html => {
    const headerContainer = document.getElementById("header");

    if (headerContainer) {
      headerContainer.innerHTML = html;

      // ★ 読み込み後に初期化
      if (typeof initHeader === "function") {
        initHeader();
      }
    }
  });


// ===============================
// Footer Load
// ===============================

fetch("/footer.html")
  .then(res => res.text())
  .then(html => {
    const footerContainer = document.getElementById("footer");

    if (footerContainer) {
      footerContainer.innerHTML = html;
    }
  });
