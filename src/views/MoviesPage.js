/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// import { Link, useHistory, useRouteMatch, useLocation } from 'react-router-dom';

import SearchMovies from '../components/SearchMovies/SearchMovies';
import * as fetchIP from '../services/movieApi';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import s from '../components/MoviesGallery/MoviesGallery.modules.css';

export default function MoviesPage() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchInput === '') return;
    fetchIP.fetchSearchMovies(searchInput, page).then(({ results }) => {
      if (results.length === 0) {
        return setError(`не удалось найти фильм по запросу ${searchInput}`);
      }
      setMovies([...movies, ...results]);
      setPage(page);
    });
    // .catch(error => setError(error));
    // .finally(() => setIsLoading(false));
  }, [page, searchInput]);

  const onSubmit = searchInput => {
    setSearchInput(searchInput);
    setMovies([]);
    setPage(1);
    setError(null);
  };

  // const onLoadMore = () => {
  //   setIsLoading(true);
  //   setPage(page => page + 1);
  //   console.log(page);
  //   scrolling();
  // };

  // const scrolling = () => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }, 1000);
  // };
  return (
    <>
      <SearchMovies onSubmit={onSubmit} />

      {movies && (
        <MoviesGallery
          movies={movies}
          data={movies}
          className={s.MoviesGallery}
        />
      )}
    </>
  );
}
