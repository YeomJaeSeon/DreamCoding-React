import React from 'react';
import styles from './Detail.module.css';

const Detail = ({ item }) => {
  console.log('detail rendered');
  let id = item.id;
  if (typeof id !== 'string') {
    id = item.id.videoId;
  }

  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`http://www.youtube.com/embed/${id}`}
        frameBorder="0"
        className={styles.player}
      ></iframe>
      <h1>{item.snippet.title}</h1>
      <h2>{item.snippet.channelTitle}</h2>
      <p>{item.snippet.description}</p>
    </div>
  );
};

export default Detail;
