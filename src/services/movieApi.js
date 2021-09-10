import axios from 'axios';
const API_KEY = '1d492e008148c42709362e98500fe1a3';

export function fetchTrendingMovies(timePeriod = `week`, page = 1) {
  return axios
    .get
    (`https://api.themoviedb.org/3/trending/movie/${timePeriod}?api_key=${API_KEY}&page=${page}`)
    .then(({ data }) => data)
    .catch(error => error);
}

// export function fetchSearchMovies({ searchInput = '' }) {
//   return axios
//     .get(
//       `${BASE_URL}/${searchInput}/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
//     )
//     .then(({ data }) => data)
//     .catch(error => error);
// }
// export function fetchMoviesById(id) {
//   return axios
//     .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
//     .then(({ data }) => data)
//     .catch(error => error);
// }
// export function fetchMoviesByIdCredits(id) {
//   return axios
//     .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
//     .then(({ data }) => data)
//     .catch(error => error);
// }
// export function fetchMoviesByIdReviews(id) {
//   return axios
//     .get(
//       `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//     )
//     .then(({ data }) => data)
//     .catch(error => error);
// }
