import React from 'react';
import styles from './Button1.module.css';

const Button1 = (props) => {
  return (
    <div className={styles.button}>
      <span className={styles.text}>Button1</span>
      <button className={styles.click}>click</button>
    </div>
  );
};

export default Button1;
