import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function SearchMovies({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim === '') {
      toast.error('Enter your query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          type="text"
          placeholder="Search movies"
          onChange={handleChange}
          value={query}
          className={s.searchFormInput}
        />
      </form>
    </header>
  );
}
SearchMovies.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
