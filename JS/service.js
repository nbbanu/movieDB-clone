const base_api = "https://api.themoviedb.org/3/";

const get = async (url) => {
  const request_url = base_api + url;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + read_access_token,
    },
  };

  const res = await fetch(request_url, options);
  const data = await res.json();

  return data?.results ? data?.results : data;
};

const getTrends = async (type = "day") => {
  const url = `trending/movie/${type}?language=en-US`;
  const data = await get(url);

  return data;
};

const getTrailers = async (type="movie") => {
  const url = `${type}/popular?language=en-US`;
  const data = await get(url);

  return data;
}

const getPopulars = async (type="tv") => {
  const url = `${type}/popular?language=en-US`;
  const data = await get(url);

  return data;
}

const getFreeToWatch = async (type = "day") => {
  const url = `trending/movie/${type}?language=en-US`;
  const data = await get(url);
  
  return data;
}

const getTrailerVideos = async (movie_id) => {
  const url = `movie/${movie_id}/videos?language=en-US`;
  const data = await get(url)

  return data;
}

const getMovieDetail = async(movie_id) => {
  const url = `movie/${movie_id}`;
  const data = await get(url);

  console.log(data)
  return data;
}

