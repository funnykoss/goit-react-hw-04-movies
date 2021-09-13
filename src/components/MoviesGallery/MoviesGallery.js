import React from 'react';
import MoviesGalleryItem from './MoviesGalleryItem';
import s from '././MoviesGallery.module.css';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

export default function MoviesGallery({ movies }) {
  return (
    <div className={s.MoviesGallery}>
      <ul className={s.MoviesGalleryList}>
        {movies.map(movie => (
          <MoviesGalleryItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}
MoviesGallery.prototype = {
  movies: PropTypes.object.isRequired,
};
