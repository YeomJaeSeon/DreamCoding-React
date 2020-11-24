import React, { useEffect, useState } from 'react';
import Videos from './components/VideoList/Videos';
import Header from './components/Header/Header';
import styles from './App.module.css';

const App = ({ youtube }) => {
  console.log('App');
  const [items, setItems] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then((items) => setItems(items));
  }, []);

  const handleSubmit = (search) => {
    youtube.search(search).then((items) => setItems(items));
  };

  return (
    <div className={styles.app}>
      <Header onHandleSubmit={handleSubmit}></Header>
      <Videos items={items}></Videos>
    </div>
  );
};

export default App;
