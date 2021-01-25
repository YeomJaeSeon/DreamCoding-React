import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import TopNav from '../../components/Shared/TopNav/TopNav';
import { useHistory, useLocation } from 'react-router-dom';
import Maker from '../../components/Shared/Maker/Maker';
import Preview from '../../components/Shared/Preview/Preview';

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'jaeseon',
      company: 'kakao',
      theme: 'Light',
      job: 'frontend Engineer',
      email: 'a89541457@gmail.com',
      comment: 'i love fe',
      fileName: 'jaeseon',
      fileURL: null,
    },
    {
      id: 2,
      name: 'soho',
      company: 'naver',
      theme: 'Colorful',
      job: 'frontend Engineer',
      email: 'a89541457@gmail.com',
      comment: 'i love fe',
      fileName: 'jaeseon',
      fileURL: 'jaeseon.png',
    },
    {
      id: 3,
      name: 'yousung',
      company: '공무원',
      theme: 'Dark',
      job: 'frontend Engineer',
      email: 'a89541457@gmail.com',
      comment: 'i love fe',
      fileName: 'jaeseon',
      fileURL: null,
    },
  ]);

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
  const add = (newCard) => {
    setCards((cards) => [...cards, newCard]);
  };

  return (
    <div className={styles.Main}>
      <TopNav onLogout={onLogout}>logout</TopNav>
      <div className={styles.container}>
        <Maker cards={cards} onAdd={add} />
        <Preview cards={cards} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Main;
