import React, { useRef } from 'react';

import styles from './Header.module.css';

const Header = ({ onHandleSubmit }) => {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === '') return;
    onHandleSubmit(inputValue);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="youtube logo" className={styles.logo} />
      <h1 className={styles.youtube}>YouTube</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search..."
        ></input>
        <button className={styles.search_button}>
          <img
            src="/images/search.png"
            alt="search"
            className={styles.searchImg}
          />
        </button>
      </form>
    </header>
  );
};
export default Header;
