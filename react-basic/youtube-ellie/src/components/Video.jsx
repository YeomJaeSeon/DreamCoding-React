import React from 'react';

const Video = ({ item }) => {
  const title = item.snippet.title;
  return <li>{title}</li>;
};

export default Video;
