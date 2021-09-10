/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import * as fetchIP from '../services/movieApi';

export default function MoviesListView() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchIP
      .fetchTrendingMovies()
      .then(({results})=> setFilms([...films, ...results]));
  }, []);

  return (
    <>
      {films && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `${url}/${film.id}`,
                  state: { from: location },
                }}
              >
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
