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

  return data?.results;
};

const getTrendMovies = async (type = "day") => {
  const url = `trending/movie/${type}?language=en-US`;
  const data = await get(url);

  return data;
};

const getTrailersMovies = async (type="movie") => {
    const url = `${type}/popular?language=en-US`;
    const data = await get(url);
// const url2 = `watch/providers/regions?language=en-US`;
// const data2 = await get(url2);
// console.log(data2)
    return data;
}

