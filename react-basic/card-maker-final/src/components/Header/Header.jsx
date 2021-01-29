import React from 'react';
import styles from './Header.module.css';

const Header = ({ logOut }) => {
  return (
    <header className={styles.container}>
      {logOut && (
        <button className={styles.logoutBtn} onClick={logOut}>
          logout
        </button>
      )}
      <img className={styles.img} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Card Maker</h1>
    </header>
  );
};

export default Header;
