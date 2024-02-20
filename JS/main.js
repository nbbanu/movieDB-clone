//*********** card selector  ***************/ 
document.addEventListener("click", (e) => {
  const parent = e.target.parentElement.parentElement;

  if (e.target.classList.contains("card__selector-btn")) {
    if (parent.querySelector(".card__selector .card__selector-btn.active")) {
      parent
        .querySelector(".card__selector .card__selector-btn.active")
        .classList.remove("active");
    }
    e.target.classList.toggle("active");
  }
});

//*********** fading while scrolling ***************/ 
const trend = document.querySelector(".trend");
const fading = document.querySelector(".fading");

trend.addEventListener("scroll", () => {
  fading.classList.add("is-hidden");
});

trend.addEventListener("scrollend", () => {
  fading.classList.remove("is-hidden");
});

//*********** progress bars(circle and linear) ***************/ 
const progressBarGreen = document.querySelectorAll(
  ".leader__progress-inner-green"
);
const progressBarRed = document.querySelectorAll(".leader__progress-inner-red");
const allTimeProgressGauges = document.querySelectorAll(
  ".all-time__progress-bar__gauge"
);
const thisWeekprogressGauges = document.querySelectorAll(
  ".this-week__progress-bar__gauge"
);

allTimeProgressGauges.forEach((gauge) => {
  let gaugeValue = gauge.innerText;

  progressBarGreen.forEach((bar) => {
    if (gaugeValue < 240) {
      bar.style.width = "40px";
    }
  });
});

thisWeekprogressGauges.forEach((gauge) => {
  let gaugeValue = parseFloat(gauge.innerText);
  let width = 12.7 * gaugeValue;
  progressBarRed.forEach((bar) => {
    bar.style.width = width + "px";
    if (gaugeValue >= 43) {
      bar.style.width = 490 + "px";
    }
  });
});

//*********** load movies and series ***************/ 
const trendPostersArea = document.querySelector(".trend__posters");

document.addEventListener("DOMContentLoaded", () => {
  loadTrendsToUI();
});

async function loadTrendsToUI() {
  const data = await getTrendMovies();

  trendPostersArea.innerHTML = data
    .map(
      (item) =>
        `<div class="trend__poster-card">
          <div class="poster-card__img">
            <img
              src="${base_image_path + item.poster_path}"
              alt="trend__poster-card__img"
            />
        
            <div class="poster-card-img__options">
              <div class="dropdown" data-dropdown>
                <i class="fa-solid fa-ellipsis" data-dropdown-item></i>
                <div class="dropdown-menu option-dropdown-menu">
                  <p class="option-dropdown-text">
                    Bu öğeyi derecelendirmek veya bir listeye eklemek ister misiniz?
                  </p>
                  <button class="option-dropdown-btn">
                    Giriş
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                  <div class="line"></div>
                  <p class="option-dropdown-text">Üye değil misin?</p>
                  <button class="option-dropdown-btn">
                    Kaydolun ve topluluğa katılın
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
        
            <div class="outer-ring flex-center-center ${
              item.vote_average > 30 && "minus"
            }" 
                style="background:conic-gradient(yellow ${
                  item.vote_average * 36
                }deg, #ededed 0deg)">
              <div class="poster-card-img__user_score_chart flex-center-center">
                <span class="progress-value">${item.vote_average * 10}</span>%
              </div>
            </div>
          </div>
          <div class="poster-card__header">
            <a href="#" class="poster-card__link link-style">
              ${item.title}
            </a>
            <p class="poster-card__date">08-11-2023</p>
          </div>
        </div>
    `
    )
    .join("");
}


