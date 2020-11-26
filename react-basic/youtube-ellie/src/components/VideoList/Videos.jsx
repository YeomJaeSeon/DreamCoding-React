import React from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';

const Videos = ({ items, onClick, display }) => {
  return (
    <ul className={styles.videos}>
      {items.map((item) => {
        return (
          <Video
            key={item.id}
            item={item}
            onClick={onClick}
            display={display}
          ></Video>
        );
      })}
    </ul>
  );
};

export default Videos;
