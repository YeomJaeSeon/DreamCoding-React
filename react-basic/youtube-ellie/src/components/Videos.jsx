import React from 'react';
import Video from './Video';

const Videos = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <Video key={item.id} item={item}></Video>;
      })}
    </ul>
  );
};

export default Videos;
