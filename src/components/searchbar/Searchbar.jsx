import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={Styles.Searchbar}>
      <form onSubmit={handleSubmit} className={Styles.SearchForm}>
        <button type="submit" className={Styles.SearchForm_button}>
          <span className={Styles.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={Styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
