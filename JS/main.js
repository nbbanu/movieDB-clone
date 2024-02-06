document.addEventListener("click", (e) => {
  if (document.querySelector(".card__selector .card__selector-btn.active")) {
    document
      .querySelector(".card__selector .card__selector-btn.active")
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

const outerRings = document.querySelectorAll(".outer-ring");
const progressValues = document.querySelectorAll(".progress-value");

let i = 0;
let progressStartValue = 0;
let progressEndValueArr = [];

pushProgressValue();
function pushProgressValue() {
  progressValues.forEach((value) => {
    let score = value.textContent;

    progressEndValueArr.push(score);
  });
}

let progress = setInterval(() => {
  progressStartValue++;

  progressValues.forEach((value) => {
    value.textContent = `${progressStartValue}`;
    outerRings.forEach((ring) => {
      // if(progressEndValueArr[i] >= 70){

      // }
      ring.style.background = `conic-gradient(yellow ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
    });
  });

  if (progressStartValue == 30) {
    clearInterval(progress);
  }
}, 50);




const progressBarGreen = document.querySelectorAll(".leader__progress-inner-green");
const progressBarRed = document.querySelectorAll(".leader__progress-inner-red");
const allTimeProgressGauges= document.querySelectorAll(".all-time__progress-bar__gauge");
const thisWeekprogressGauges= document.querySelectorAll(".this-week__progress-bar__gauge");

allTimeProgressGauges.forEach(gauge => {
    let gaugeValue = gauge.innerText;

    progressBarGreen.forEach(bar => {
      if(gaugeValue < 240){
        bar.style.width = "40px";
      }
      
    })
});

thisWeekprogressGauges.forEach(gauge => {
  let gaugeValue = parseFloat(gauge.innerText);
  let width = (12.7 * gaugeValue);
  progressBarRed.forEach(bar => {
    bar.style.width = width + "px";
    if(gaugeValue >= 43){
      bar.style.width = 490 + "px";
    }
  });
 
})


