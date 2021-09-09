const API_KEY = '1d492e008148c42709362e98500fe1a3';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchWithErrorHandling(url = '', config = {}) {
  fetch(url, config).then(response => {
    if (response.ok) {
      response.json();
    }
    Promise.reject(new Error('Not found'));
  });
}

export function trendingMovies(timePeriod = `week`, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/${timePeriod}?api_key=${API_KEY}&page=${page}&language=en-US`,
  );
}

export function searchMovie(query, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&include_adult=false&query=${query}&language=en-US`,
  );
}
export function searchMovieById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${this.API_KEY}&language=en-US`,
  );
}
export function searchMovieCredits(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${this.API_KEY}&language=en-US`,
  );
}
export function searchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${this.API_KEY}&language=en-US`,
  );
}
