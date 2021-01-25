import React from 'react';
import styles from './Maker.module.css';
import CardEditForm from '../CardEditForm/CardEditForm';
import CardAddForm from '../CardAddForm/CardAddForm';

const Maker = ({ cards, onAdd }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Maker</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={onAdd} />
    </div>
  );
};

export default Maker;
