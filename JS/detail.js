const params = new URLSearchParams(document.location.search);
const movieId = params.get("id");
const mainMovie = document.querySelector(".main-movie_details");
const moviePoster = document.querySelector(".movie-poster img");
const score = document.querySelector(".outer-ring");
const movieTitle = document.querySelector(".movie-detail_header-h2");
//   const movieYear = document.querySelector(".movie-detail_header-year");
const certification = document.querySelector(".certification");
const releaseDate = document.querySelector(".release");
const runtime = document.querySelector(".runtime");
const genresArea = document.querySelector(".genres");
const tagline = document.querySelector(".movie-detail_tagline-text");
const overview = document.querySelector(".movie-detail_overview-text");

document.addEventListener("DOMContentLoaded", () => {
  loadMainMovieToMovieDetail(movieId);
});

async function loadMainMovieToMovieDetail(movieId) {
  const data = await getMovieDetail(movieId);
  // ***************  score chart **************

  score.style.background = `
  conic-gradient(${data.vote_average < 7 ? "yellow" : "green"} ${
    data.vote_average * 36
  }deg, #ededed 0deg)
  `;
  score.innerHTML = `
    <div class="poster-card-img__user_score_chart flex-center-center">
     <span class="progress-value">${Math.round(data.vote_average * 10)}</span>%
    </div>
    `;

  // ***************  background **************
  mainMovie.style.background = `url(${
    base_image_path + data.backdrop_path
  }) no-repeat`;
  mainMovie.style.backgroundSize = "cover";

  moviePoster.src = base_image_path + data.poster_path;

  movieTitle.innerHTML = data.title;

  certification.innerHTML = data.adult ? "18+" : "13+";

  releaseDate.innerHTML = data.release_date;

  runtime.innerHTML =
    Math.floor(data.runtime / 60) + " h " + (data.runtime % 60) + "m";

  genresArea.innerHTML = data.genres
    .map((type) => `<span class="genre text-hover">${type.name}</span> `)
    .join(", ");

  tagline.innerHTML = data.tagline;

  overview.innerHTML = data.overview;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  moviePoster.onload = () => {
    ctx.drawImage(moviePoster, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    console.log(imageData);
  };
}
