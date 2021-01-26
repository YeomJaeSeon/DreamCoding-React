import React from 'react';
import styles from './Maker.module.css';
import CardEditForm from '../CardEditForm/CardEditForm';
import CardAddForm from '../CardAddForm/CardAddForm';

const Maker = ({ cards, onAdd, onDelete, onUpdate }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          onDeleteHandler={onDelete}
          onUpdateHandler={onUpdate}
        />
      ))}
      <CardAddForm onAdd={onAdd} />
    </div>
  );
};

export default Maker;
