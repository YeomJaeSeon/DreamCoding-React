import React, { useEffect, useState, useCallback } from 'react';
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

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService])
  
  useEffect(() => {
    if (!userId) return;
    const stopSync = databaseService.databseSync(userId, (value) => {
      if (!value) setCards({});
      else setCards(value);
    });

    return () => stopSync();
  }, [userId, databaseService]);

  useEffect(() => {
    authService.onAuthStatus((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  const onDelete = useCallback((selectedId) => {
    setCards((cards) => {
      delete cards[selectedId];
      return { ...cards };
    });
    databaseService.delete(userId, selectedId);
  }, [databaseService, userId])

  const createOrUpdate = useCallback((newCard) => {
    setCards((cards) => {
      return { ...cards, [newCard.id]: newCard };
    });
    databaseService.write(userId, newCard);
  }, [userId, databaseService])

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
