import React from 'react';
import styles from './Maker.module.css';
import CardEditForm from '../CardEditForm/CardEditForm';

const Maker = ({ cards }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Maker</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Maker;
