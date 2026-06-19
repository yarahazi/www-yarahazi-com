const track = document.getElementById("carousel-track");
const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dotsContainer = document.getElementById("carousel-dots");

let currentIndex = 0;
let autoSlide;

// ドットを作成
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
    restartAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000); // 5秒ごと
}

function restartAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// ボタン
next.addEventListener("click", () => {
  nextSlide();
  restartAutoSlide();
});

prev.addEventListener("click", () => {
  prevSlide();
  restartAutoSlide();
});

// 初期化
updateCarousel();
startAutoSlide();
