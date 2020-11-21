import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import Videos from './components/Videos';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [detailVideo, setDetailVideo] = useState();

  const search = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue === undefined) return;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchValue}&key=AIzaSyCO7WFU8aTHMymDqsiWV62tJcercFEfgAc`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).items);
        setVideos(JSON.parse(result).items);
      })
      .catch((error) => console.log('error', error));
  }, [searchValue]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCO7WFU8aTHMymDqsiWV62tJcercFEfgAc',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).items);
        setVideos(JSON.parse(result).items);
      })
      .catch((error) => console.log('error', error));
  }, []);
  const handleClick = (video) => {
    setDetailVideo(video);
  };

  return (
    <div className={styles.global}>
      <Navbar search={search}></Navbar>
      {detailVideo !== undefined ? (
        <>
          <Detail item={detailVideo}></Detail>
          <Videos videos={videos} onClick={handleClick}></Videos>
        </>
      ) : (
        <Videos videos={videos} onClick={handleClick}></Videos>
      )}
    </div>
  );
}
export default App;
