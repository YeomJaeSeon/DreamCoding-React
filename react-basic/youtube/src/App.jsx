import React, { useState, useEffect, useCallback } from 'react';
import styles from './App.module.css';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import Videos from './components/Videos';

const APIKEY = process.env.REACT_APP_API_KEY;

function App() {
  console.log('App rendered');
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [detailVideo, setDetailVideo] = useState();

  const search = useCallback((value) => {
    setSearchValue(value);
    setDetailVideo(undefined);
  }, []);

  useEffect(() => {
    if (searchValue === undefined) return;
    console.log('SEARCH~~~~~~~~~~');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue}&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setVideos(JSON.parse(result).items))
      .catch((error) => console.log('error', error));
  }, [searchValue]);

  useEffect(() => {
    console.log('MOST POPULARS~~~~~~~~~~');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=10&chart=mostPopular&key=${APIKEY}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setVideos(JSON.parse(result).items))
      .catch((error) => console.log('error', error));
  }, []);

  const handleClick = useCallback((video) => {
    setDetailVideo(video);
  }, []);

  return (
    <div className={styles.global}>
      <Navbar search={search}></Navbar>
      {detailVideo !== undefined ? (
        <div className={styles.detail}>
          <Detail item={detailVideo}></Detail>
          <Videos videos={videos} onClick={handleClick}></Videos>
        </div>
      ) : (
        <Videos videos={videos} onClick={handleClick}></Videos>
      )}
    </div>
  );
}
export default App;
