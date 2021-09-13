import axios from 'axios';
const API_KEY = '1d492e008148c42709362e98500fe1a3';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function fetchTrendingMovies(timePeriod = `week`, page = 1) {
  return axios
    .get(
      `${BASE_URL}trending/movie/${timePeriod}?api_key=${API_KEY}&page=${page}`,
    )
    .then(({ data }) => data)
    .catch(error => error);
}

export function fetchSearchMovies(searchInput) {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&&page=1&include_adult=false&query=${searchInput}`,
    )
    .then(({ data }) => data)
    .catch(error => error);
}
export function fetchMoviesById(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data)
    .catch(error => error);
}
export function fetchCast(movieId) {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(({ data }) => data)
    .catch(error => error);
}
export function fetchMoviesByIdReviews(movieId) {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(({ data }) => data)
    .catch(error => error);
}
