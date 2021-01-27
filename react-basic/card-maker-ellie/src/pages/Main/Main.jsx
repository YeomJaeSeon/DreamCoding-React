import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import TopNav from '../../components/Shared/TopNav/TopNav';
import { useHistory, useLocation } from 'react-router-dom';
import Maker from '../../components/Shared/Maker/Maker';
import Preview from '../../components/Shared/Preview/Preview';

const Main = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: 'jaeseon',
      company: 'kakao',
      theme: 'Light',
      job: 'frontend Engineer',
      email: 'a89541457@gmail.com',
      comment: 'i love fe',
      fileName: '',
      fileURL: null,
    },
    2: {
      id: 2,
      name: 'soho',
      company: 'naver',
      theme: 'Colorful',
      job: 'frontend Engineer',
      email: 'a89541457@gmail.com',
      comment: 'i love fe',
      fileName: '',
      fileURL: 'jaeseon.png',
    },
    3: {
      id: 3,
      name: 'yousung',
      company: '공무원',
      theme: 'Dark',
      job: 'frontend Engineer',
      email: 'a89541457@gmail.com',
      comment: 'i love fe',
      fileName: '',
      fileURL: null,
    },
  });
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
  }, []);

  const onDelete = (selectedId) => {
    setCards((cards) => {
      delete cards[selectedId];
      return { ...cards };
    });
  };
  const createOrUpdate = (newCard) => {
    setCards((cards) => {
      //const updated = {...cards};
      //updated[newCard.id] = newCard;
      // return updated;
      //엘리방식. 내가한거랑 결국 완전히 같다.. newCard의 오브젝트를
      // 새롭게 안만들었고 난 새롭게 만든 차이밖에없음
      // 근데 새롭게만든 object를 전달하는거기떄문에 이건 엘리가 더 적절

      return { ...cards, [newCard.id]: newCard };
    });
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
