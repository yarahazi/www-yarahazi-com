const API_KEY = "AdcI8a9AAzyT78lwCGW1IusX5cEt23fy53m9";
const ENDPOINT = "https://yarahazi.microcms.io/api/v1/news";

const list = document.getElementById("news-list");

// news-list が無ければ何もしない
if (list) {

  // index.html なら3件、news.htmlなら100件取得
  const limit = location.pathname.includes("index") || location.pathname === "/"
    ? 3
    : 100;

  fetch(`${ENDPOINT}?limit=${limit}`, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY
    }
  })
    .then(res => res.json())
    .then(data => {

      data.contents.forEach(item => {
        const div = document.createElement("div");
        div.className = "news-item";

        div.onclick = () => {
          location.href = `news-detail.html?id=${item.id}`;
        };

        const date = new Date(item.date || item.publishedAt);

        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");

div.innerHTML = `
  <div class="news-date">${y}.${m}.${d}</div>
  <div class="news-category">${item.category || ""}</div>
  <div class="news-title">${item.title}</div>
  <div class="news-arrow">›</div>
`;
        
        list.appendChild(div);
      });

    });

}
