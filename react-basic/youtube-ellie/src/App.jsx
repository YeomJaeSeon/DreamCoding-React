import React, { useEffect, useState } from 'react';
import Videos from './components/VideoList/Videos';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';
import styles from './App.module.css';

const App = ({ youtube }) => {
  const [items, setItems] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [detailItem, setDetailItem] = useState({});

  useEffect(() => {
    youtube.mostPopular().then((items) => setItems(items));
  }, []);

  const handleSubmit = (search) => {
    setIsDetail(false);
    youtube.search(search).then((items) => setItems(items));
  };

  const click = (item) => {
    setDetailItem(item);
    setIsDetail(true);
  };

  return (
    <div className={styles.app}>
      <Header onHandleSubmit={handleSubmit}></Header>
      <div className={styles.forDetail}>
        {isDetail ? <Detail item={detailItem}></Detail> : null}
        <Videos isDetail={isDetail} items={items} onClick={click}></Videos>
      </div>
    </div>
  );
};

export default App;
