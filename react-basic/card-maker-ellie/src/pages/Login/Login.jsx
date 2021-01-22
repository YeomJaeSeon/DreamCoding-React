import React from 'react';
import TopNav from '../../components/Shared/TopNav/TopNav';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import styles from './Login.module.css';

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.id).then(console.log);
  };
  return (
    <div className={styles.container}>
      <TopNav />
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Login</h1>
        <button id="Google" onClick={onLogin} className={styles.google}>
          Google
        </button>
        <button id="Github" onClick={onLogin} className={styles.github}>
          Github
        </button>
      </div>
      <BottomNav />
    </div>
  );
};

export default Login;
