const API_KEY = "ここにAPIキー";
const ENDPOINT = "https://yarahazi.microcms.io/api/v1/news";

fetch(ENDPOINT, {
  headers: {
    "X-MICROCMS-API-KEY": API_KEY
  }
})
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");

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
