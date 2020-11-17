import React from 'react';
import styles from './Button3.module.css';

const Button3 = (props) => {
  return (
    <div className={styles.button}>
      <span className={styles.text}>Button3</span>
      <button className={styles.click}>click</button>
    </div>
  );
};

export default Button3;
