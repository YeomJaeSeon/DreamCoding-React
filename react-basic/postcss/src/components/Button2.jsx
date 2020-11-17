import React from 'react';
import styles from './Button2.module.css';

const Button2 = (props) => {
  return (
    <div className={styles.button}>
      <span className={styles.text}>Button2</span>
      <button className={styles.click}>click</button>
    </div>
  );
};

export default Button2;
