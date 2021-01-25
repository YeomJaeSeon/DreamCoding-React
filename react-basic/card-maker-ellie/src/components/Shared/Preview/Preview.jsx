import React from 'react';
import styles from './Preview.module.css';
import Card from '../Card/Card';
const Preview = ({ cards }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Preview</h1>
      <ul className={styles.ul}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default Preview;
