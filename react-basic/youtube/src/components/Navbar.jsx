import React, { memo, useRef } from 'react';
import styles from './Navbar.module.css';
import logosrc from '../images/logo.png';
import searchsrc from '../images/search.png';
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
      <img src={logosrc} className={styles.logo} alt="youtube logo" />
      <span className={styles.text}>Youtube</span>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search..."
        />
        <button className={styles.button}>
          <img src={searchsrc} alt="" className={styles.img} />
        </button>
      </form>
    </nav>
  );
});

export default Navbar;
