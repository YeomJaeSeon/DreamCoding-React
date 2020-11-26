import React from 'react';
import styles from './Video.module.css';

const Video = ({ item, onClick, display }) => {
  const title = item.snippet.title;
  const channelTitle = item.snippet.channelTitle;
  const thumbnail = item.snippet.thumbnails.medium.url;

  const handleClick = () => {
    onClick(item);
  };

  const displayType = display === 'grid' ? styles.grid : styles.list;

  return (
    <li className={`${styles.container} ${displayType}`}>
      <div className={styles.video} onClick={handleClick}>
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
