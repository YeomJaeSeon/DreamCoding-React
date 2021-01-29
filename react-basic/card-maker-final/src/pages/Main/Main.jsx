import React, { useEffect } from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import Header from '../../components/Header/Header';
import styles from './Main.module.css';
import { useHistory } from 'react-router-dom';

const Main = ({ authService }) => {
  const history = useHistory();
  const gotoLogin = (uid) => {
    history.push('/');
  };
  useEffect((user) => {
    if (!user) authService.authStatus(gotoLogin);
  }, []);
  const logOut = () => {
    authService.logout();
  };
  return (
    <div className={styles.container}>
      <Header logOut={logOut} />
      <BottomNav />
    </div>
  );
};

export default Main;
