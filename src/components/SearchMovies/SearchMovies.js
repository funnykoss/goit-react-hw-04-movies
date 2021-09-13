import { useState } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

export default function SearchMovies({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter your query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          placeholder="Search movies"
          onChange={handleNameChange}
          value={query}
        />
      </form>
    </header>
  );
}
