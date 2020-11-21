import React from 'react';
import styles from './Detail.module.css';
import Videos from './Videos';

const Detail = ({ item }) => {
  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`http://www.youtube.com/embed/${item.id}`}
        frameborder="0"
      ></iframe>
      <h1>{item.snippet.title}</h1>
      <h2>{item.snippet.channelTitle}</h2>
      <p>{item.snippet.description}</p>
      <Videos></Videos>
    </div>
  );
};

export default Detail;
