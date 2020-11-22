import React from 'react';
import styles from './Video.module.css';

const Video = ({ item: { snippet } }) => {
  //destrcuturing
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const thumbnail = snippet.thumbnails.medium.url;

  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
        <div className={styles.metadata}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channelTitle}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default Video;
