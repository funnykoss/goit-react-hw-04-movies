import React from 'react';
import MoviesGalleryItem from './MoviesGalleryItem';
import s from '././MoviesGallery.module.css';
// import PropTypes from 'prop-types';

export default function MoviesGallery({ movies }) {
  return (
    <ul className={s.MoviesGallery}>
      {movies.map(movie => (
        <MoviesGalleryItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
