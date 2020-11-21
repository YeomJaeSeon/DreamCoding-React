import React from 'react';
import styles from './Video.module.css';

const Video = ({ item, onClick }) => {
  const videoImg = item.snippet.thumbnails.default.url;
  const videoTitle = item.snippet.title;
  const videoName = item.snippet.channelTitle;
  const onVideoClick = () => {
    onClick(item);
  };
  return (
    <li className={styles.list}>
      <button className={styles.video} onClick={onVideoClick}>
        <img src={videoImg} alt="youtube video" className={styles.video_img} />
        <span className={styles.video_text}>
          <p className={styles.video_des}>{videoTitle}</p>
          <p className={styles.video_name}>{videoName}</p>
        </span>
      </button>
    </li>
  );
};

export default Video;
