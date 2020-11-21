import React from 'react';
import Video from './Video';
import styles from './Videos.module.css';

const Videos = ({ videos, onClick }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((item) => {
        return <Video item={item} key={item.etag} onClick={onClick}></Video>;
      })}
    </ul>
  );
};
export default Videos;
