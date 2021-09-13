import React from 'react';
import s from './MoviesGallery.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesGalleryItem({ movie }) {
  const location = useLocation();
  return (
    <li className={s.MoviesGalleryItem}>
      <Link
        className={s.GalleryItemMovies}
        to={{
          pathname: `movies/${movie.id}`,
          state: { from: location },
          label: 'Back to Movies',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.original_title}
          width="300"
          className={s.image}
        />
        <div className={s.titleTumb}>
          <span className={s.movieTitle}>{movie.title}</span>
        </div>
      </Link>
    </li>
  );
}
MoviesGalleryItem.prototype = {
  movie: PropTypes.object.isRequired,
};
