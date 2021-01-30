import React from 'react';
import styles from './Button.module.css';

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {name}
    </button>
  );
};

export default Button;
