document.addEventListener("click", (e) => {
  if (document.querySelector(".trend__selector .trend__selector-btn.active")) {
    document
      .querySelector(".trend__selector .trend__selector-btn.active")
      .classList.remove("active");
  }
  e.target.classList.toggle("active");
});

const trend = document.querySelector(".trend");
const fading = document.querySelector(".fading");
trend.addEventListener("scroll", () => {
  fading.classList.add("is-hidden");
});
trend.addEventListener("scrollend", () => {
  fading.classList.remove("is-hidden");
});

// const userScores = document.querySelectorAll(
//   ".trend__poster-card-img__user_score_chart"
// );
// const outerRings = document.querySelectorAll(".outer-ring");
// score();
// function score() {
//   userScores.forEach((scores) => {
//     let score = +scores.textContent.slice(0, 2);
//     ringColor(score);
//   });
// }

// function ringColor(score) {
//   outerRings.forEach((ring) => {
//     if (score >= 70) {
//       // console.log(score);
//       // ring.style.borderColor = "yellow";
//     } else {
//       // console.log(score);
//       // ring.style.borderColor = "red";
//     }
//   });

// }
