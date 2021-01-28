import React from 'react';
import styles from './Maker.module.css';
import CardEditForm from '../CardEditForm/CardEditForm';
import CardAddForm from '../CardAddForm/CardAddForm';

const Maker = ({ FileInput, cards, onAdd, onDelete, onUpdate }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          onDeleteHandler={onDelete}
          onUpdateHandler={onUpdate}
        />
      ))}

       <CardAddForm FileInput={FileInput} onAdd={onAdd} />
      
    </div>
  );
};

export default Maker;
