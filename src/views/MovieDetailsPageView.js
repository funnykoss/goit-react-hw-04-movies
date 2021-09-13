import PageHeading from '../components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchIP from '../services/movieApi';

export default function MovieDetailsPageView() {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const { poster_path, title, vote_average, overview, genres } = film;
  useEffect(() => {
    fetchIP.fetchMoviesById(movieId).then(setFilm);
  }, [movieId]);
  return (
    <>
      <PageHeading text={`Movies ${movieId}`} />
      {film && (
        <>
          <img
            src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
          <h2>{title}</h2>
          <p>User Score:{vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Geners</h2>
          <p>
            <ul>
              {genres && genres.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
          </p>
        </>
      )}
    </>
  );
}
