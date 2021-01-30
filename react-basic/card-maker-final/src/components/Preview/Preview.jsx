import React from 'react';
import Card from '../Card/Card';
import styles from './Preview.module.css';

const Preview = ({ cards }) => {
  return (
    <div className={styles.container}>
      <h1>Preview</h1>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </div>
  );
};
export default Preview;
