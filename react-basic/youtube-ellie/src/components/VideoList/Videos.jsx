import React from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';

const Videos = ({ isDetail, items, onClick }) => {
  return (
    <>
      {isDetail ? (
        <ul className={styles.detailVideos}>
          {items.map((item) => {
            return <Video key={item.id} item={item} onClick={onClick}></Video>;
          })}
        </ul>
      ) : (
        <ul className={styles.videos}>
          {items.map((item) => {
            return (
              <Video
                key={item.id}
                item={item}
                onClick={onClick}
                isDetail={isDetail}
              ></Video>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Videos;
