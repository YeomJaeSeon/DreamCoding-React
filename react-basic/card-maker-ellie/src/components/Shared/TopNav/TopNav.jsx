import React from 'react';
import styles from './TopNav.module.css';

const TopNav = ({ onLogout, children }) => {
  return (
    <nav className={styles.container}>
      <img className={styles.img} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Bussiness Card Maker</h1>
      {children && (
        <button onClick={onLogout} className={styles.logout}>
          logout
        </button>
      )}
    </nav>
  );
};

export default React.memo(TopNav);
