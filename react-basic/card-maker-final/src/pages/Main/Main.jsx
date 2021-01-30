import React, { useEffect, useState } from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import Header from '../../components/Header/Header';
import styles from './Main.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import Maker from '../../components/Maker/Maker';
import Preview from '../../components/Preview/Preview';

const Main = ({ authService, FileInput, database }) => {
  const [cards, setCards] = useState({});
  const history = useHistory();
  const location = useLocation();
  const uid = location.state.id;

  useEffect(() => {
    const gotoLogin = () => {
      history.push('/');
    };
    const syncData = database.dataSync(uid, (snapshot) => {
      const data = snapshot.val();
      if (data) setCards(data);
      else setCards({});
    });
    authService.authStatus((user) => {
      if (!user) gotoLogin();
    });

    return () => {
      console.log('unmount!');
      syncData();
    };
  }, [authService, database, uid, history]);
  const logOut = () => {
    authService.logout();
  };

  const addOrUpdate = (newCard) => {
    setCards((cards) => {
      return { ...cards, [newCard.id]: newCard };
    });
    database.write(uid, newCard);
  };
  const onDelete = (selectedId) => {
    setCards((cards) => {
      const newCard = { ...cards };
      delete newCard[selectedId];
      return newCard;
    });
    database.delete(uid, selectedId);
  };
  return (
    <div className={styles.container}>
      <Header logOut={logOut} />
      <div className={styles.section}>
        <Maker
          cards={cards}
          addOrUpdate={addOrUpdate}
          onDelete={onDelete}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Main;
