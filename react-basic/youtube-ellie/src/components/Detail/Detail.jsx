import React from 'react';
import styles from './Detail.module.css';

const Detail = ({ item }) => {
  return (
    <div className={styles.detail}>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`http://www.youtube.com/embed/${item.id}`}
        frameBorder="0"
        className={styles.video}
      ></iframe>
      <h1 className={styles.title}>{item.snippet.title}</h1>
      <p className={styles.description}>{item.snippet.description}</p>
    </div>
  );
};

export default Detail;
