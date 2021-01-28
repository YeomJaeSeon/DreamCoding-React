import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import TopNav from '../../components/Shared/TopNav/TopNav';
import { useHistory, useLocation } from 'react-router-dom';
import Maker from '../../components/Shared/Maker/Maker';
import Preview from '../../components/Shared/Preview/Preview';

const Main = ({ authService, FileInput, databaseService }) => {
  const location = useLocation().state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(location.id || null);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) return;
    // databaseSErvie.databseSync는 여느함수완 다르다. 이벤트리스너처럼
    // 이벤트 대기하고있는 함수이므로 이게 실행이되는거임
    // const event = document.querySelector('.class').addEventListener(
    // 'click', () => ~~); 이거랑똒같은거임
    // 이렇게 event로 선언만해도 함수등록되서 이벤트 발생하면 콜백함수 실행되는거랑
    // 같은 이치임.

    const stopSync = databaseService.databseSync(userId, (value) => {
      if (!value) setCards({});
      else setCards(value);
    });

    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthStatus((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, []);

  const onDelete = (selectedId) => {
    setCards((cards) => {
      delete cards[selectedId];
      return { ...cards };
    });
    databaseService.delete(userId, selectedId);
  };

  const createOrUpdate = (newCard) => {
    setCards((cards) => {
      return { ...cards, [newCard.id]: newCard };
    });
    databaseService.write(userId, newCard);
  };

  return (
    <div className={styles.Main}>
      <TopNav onLogout={onLogout}>logout</TopNav>
      <div className={styles.container}>
        <Maker
          FileInput={FileInput}
          cards={cards}
          onAdd={createOrUpdate}
          onDelete={onDelete}
          onUpdate={createOrUpdate}
        />
        <Preview cards={cards} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Main;
