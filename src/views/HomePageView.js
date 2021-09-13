/* eslint-disable react-hooks/exhaustive-deps */
import PageHeading from '../components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import * as fetchIP from '../services/movieApi';
import MovieGallety from '../components/MoviesGallery/MoviesGallery'

export default function HopePageView() {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchIP
      .fetchTrendingMovies()
      .then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <PageHeading text="Tranding movie" />
      {movies && <MovieGallety movies={movies} />}
    </>
  );
}
