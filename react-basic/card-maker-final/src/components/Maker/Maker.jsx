import React from 'react';
import CardAddForm from '../CardAddForm/CardAddForm';
import CardEditForm from '../CardEditForm/CardEditForm';
import styles from './Maker.module.css';

const Maker = ({ cards, addOrUpdate, onDelete, FileInput }) => {
  return (
    <div className={styles.container}>
      <h1>Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          addOrUpdate={addOrUpdate}
          onDelete={onDelete}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm addOrUpdate={addOrUpdate} FileInput={FileInput} />
    </div>
  );
};

export default Maker;
