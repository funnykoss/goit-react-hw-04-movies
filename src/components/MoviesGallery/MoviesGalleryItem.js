import React from 'react';
import s from './MoviesGallery.modules.css';
import { Link, useLocation } from 'react-router-dom';

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
        {movie.title}
      </Link>
    </li>
  );
}
