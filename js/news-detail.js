const API_KEY = "AdcI8a9AAzyT78lwCGW1IusX5cEt23fy53m9";
const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch(`https://yarahazi.microcms.io/api/v1/news/${id}`, {
  headers: {
    "X-MICROCMS-API-KEY": API_KEY
  }
})
  .then(res => res.json())
  .then(item => {
    const [y, m, d] = item.date.split("-");

    document.getElementById("title").textContent = item.title;
    document.getElementById("meta").textContent =
      `${y}.${Number(m)}.${Number(d)} / ${item.category}`;
    document.getElementById("body").innerHTML = item.body;
  });
