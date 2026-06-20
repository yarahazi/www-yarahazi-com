// おすすめ動画一覧
const videoIds = [
  "GRDoSVlQ9C0",
  "NLEaIeOoKzk",
  "GTUafer3moo"
];

// ランダムに選択
function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videoIds.length);
  return videoIds[randomIndex];
}

window.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("random-video");

  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${getRandomVideo()}`;
  }
});
