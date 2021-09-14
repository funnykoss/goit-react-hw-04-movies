/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom';
import * as fetchAPI from '../../services/movieApi';
// import PageHeading from '../../components/PageHeading/PageHeading';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import s from './MoviesPageSearch.module.css';

export default function MoviesPageSearch() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch);
  }, [history, location]);

  useEffect(() => {
    query && getMovies();
  }, [query]);

  const getMovies = () => {
    fetchAPI.fetchSearchMovies(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error(`There are no results. Try another ${query}`);
        return;
      }
      setMovies(results);
    });
  };

  const onSubmit = query => {
    setQuery(query);
    setMovies([]);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      {/* <PageHeading text="Movies Search" /> */}
      <SearchMovies onSubmit={onSubmit} className={s.searchbar} />
      {movies && <MoviesGallery movies={movies} data={movies} />}
    </>
  );
}
