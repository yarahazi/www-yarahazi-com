// header
fetch("/header.html")
  .then(res => res.text())
  .then(html => {
    const header= document.getElementById("header");
    if (header) {
      header.innerHTML = html;
    };
    
// footer
fetch("/footer.html")
  .then(response => response.text())
  .then(html => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.innerHTML = html;
    }
  });
