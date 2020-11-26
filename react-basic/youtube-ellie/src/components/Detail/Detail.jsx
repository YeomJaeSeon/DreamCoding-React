import React from 'react';
import styles from './Detail.module.css';

const Detail = ({ item }) => {
  return (
    <div className={styles.detail}>
      <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`http://www.youtube.com/embed/${item.id}`}
        frameBorder="0"
        className={styles.video}
      ></iframe>
      <h1 className={styles.title}>{item.snippet.title}</h1>
      <h3>{item.snippet.channelTitle}</h3>
      <pre className={styles.description}>{item.snippet.description}</pre>
    </div>
  );
};

export default Detail;
