const params = new URLSearchParams(document.location.search);
const movieId = params.get("id");

getMovieDetail(movieId);
