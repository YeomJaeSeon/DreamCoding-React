import React, { useEffect } from 'react';
import styles from './Main.module.css';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import TopNav from '../../components/Shared/TopNav/TopNav';
import { useHistory, useLocation } from 'react-router-dom';
import Maker from '../../components/Shared/Maker/Maker';
import Preview from '../../components/Shared/Preview/Preview';

const Main = ({ authService }) => {
  console.log('Maker rendered!');
  const history = useHistory();
  const location = useLocation();
  // location을통해서 Login에서 보낸 사용자의 uid가 전달됨
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthStatus((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <div className={styles.Main}>
      <TopNav onLogout={onLogout}>logout</TopNav>
      <div className={styles.container}>
        <Maker />
        <Preview />
      </div>
      <BottomNav />
    </div>
  );
};

export default Main;
