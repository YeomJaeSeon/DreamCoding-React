import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <img
        src={process.env.PUBLIC_URL + './images/logo.png'}
        className={styles.logo}
        alt="youtube logo"
      />
      <span className={styles.text}>Youtube</span>
      <form action="" className={styles.form}>
        <input type="text" className={styles.input} />
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
};

export default Navbar;
