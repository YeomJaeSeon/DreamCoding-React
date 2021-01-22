import React from 'react';
import TopNav from '../../components/Shared/TopNav/TopNav';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import styles from './Login.module.css';

const Login = (props) => {
  return (
    <div className={styles.container}>
      <TopNav />
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Login</h1>
        <button className={styles.google}>Google</button>
        <button className={styles.github}>Github</button>
      </div>
      <BottomNav />
    </div>
  );
};

export default Login;
