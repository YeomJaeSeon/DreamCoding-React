import React, { useEffect, useState } from 'react';
import Videos from './components/VideoList/Videos';
import Header from './components/Header/Header';
import styles from './App.module.css';

const APIKEY = process.env.REACT_APP_API_KEY;

const App = () => {
  console.log('App');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=10&chart=mostPopular&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setItems(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const handleSubmit = (search) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=${search}&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const searchResult = result.items
          .filter((item) => item.id.kind !== 'youtube#channel')
          .map((item) => {
            return { ...item, id: item.id.videoId };
          });
        setItems(searchResult);
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className={styles.app}>
      <Header onHandleSubmit={handleSubmit}></Header>
      <Videos items={items}></Videos>
    </div>
  );
};

export default App;
