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

        const [y, m, d] = item.date.split("-");

        div.innerHTML = `
          <div class="news-meta">
            <span>${y}.${Number(m)}.${Number(d)}</span>
            <span>${item.category}</span>
          </div>
          <div class="news-title">${item.title}</div>
          <div class="news-excerpt">${item.body.slice(0, 60)}…</div>
        `;

        list.appendChild(div);
      });

    });

}
