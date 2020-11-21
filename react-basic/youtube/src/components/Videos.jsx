import React, { memo } from 'react';
import Video from './Video';
import styles from './Videos.module.css';

const Videos = memo(({ videos, onClick }) => {
  console.log('videos rendered');
  return (
    <ul className={styles.videos}>
      {videos.map((item) => {
        return <Video item={item} key={item.etag} onClick={onClick}></Video>;
      })}
    </ul>
  );
});
export default Videos;
