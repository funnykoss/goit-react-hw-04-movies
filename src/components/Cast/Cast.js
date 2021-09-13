import { useState, useEffect } from 'react';
import * as fetchAPI from '../../services/movieApi';
import s from './Cast.module.css';
import PropTypes from 'prop-types';

import photo from '../../img/no_foto.jpg';

export default function Cast({ movieId }) {
  const [{ cast }, setCast] = useState([]);

  useEffect(() => {
    fetchAPI.fetchCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={s.cast}>
      {cast && cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={s.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : photo
              }
              alt={name}
              className={s.photo}
            />
            <p className={s.name}>{name}</p>
            <p className={s.character}>{character}</p>
          </li>
        ))
      ) : (
        <b>Nothing found!</b>
      )}
    </ul>
  );
}

Cast.prototype = {
  movieId: PropTypes.object.isRequired,
};
