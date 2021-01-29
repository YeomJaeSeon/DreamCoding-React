import React, { useEffect } from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import Header from '../../components/Header/Header';
import styles from './Login.module.css';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToApp = (uid) => {
    history.push({
      pathname: '/app',
      state: { id: uid },
    });
  };
  useEffect((user) => {
    if (user) authService.authStatus(goToApp);
  }, []);

  const googleLogin = () => {
    authService.login();
  };
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.loginSection}>
        <button className={styles.button} onClick={googleLogin}>
          Google
        </button>
      </section>
      <BottomNav />
    </div>
  );
};

export default Login;
