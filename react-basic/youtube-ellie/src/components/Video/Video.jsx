import React from 'react';

const Video = ({ item }) => {
  const title = item.snippet.title;
  return <h1>{title}</h1>;
};

export default Video;
