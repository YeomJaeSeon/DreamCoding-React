import React, { memo, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = memo(({ search }) => {
  console.log('navbar rendered');
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    search(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <nav className={styles.navbar}>
      <img
        src={process.env.PUBLIC_URL + './images/logo.png'}
        className={styles.logo}
        alt="youtube logo"
      />
      <span className={styles.text}>Youtube</span>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search..."
        />
        <button className={styles.button}>
          <img
            src={process.env.PUBLIC_URL + './images/search.png'}
            alt=""
            className={styles.img}
          />
        </button>
      </form>
    </nav>
  );
});

export default Navbar;
