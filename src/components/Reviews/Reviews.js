import { useState, useEffect } from 'react';
import * as fetchAPI from '../../services/movieApi';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';

export default function Reviews({ movieId }) {
  const [{ results }, setReviews] = useState([]);

  useEffect(() => {
    fetchAPI.fetchMoviesByIdReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {results && results.length > 0 ? (
          results.map(result => (
            <li key={result.id} className={s.ReviewCard}>
              <div className={s.imageSection}>
                <b>{result.author}:</b>
                <p>{result.content}</p>
              </div>
            </li>
          ))
        ) : (
          <b>No reviews!</b>
        )}
      </ul>
    </>
  );
}
Reviews.prototype = {
  movieId: PropTypes.object.isRequired,
};
