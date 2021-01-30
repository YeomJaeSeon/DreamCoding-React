import React from 'react';
import styles from './Card.module.css';

const getStyles = (theme) => {
  switch (theme) {
    case 'Light':
      return styles.light;
    case 'Dark':
      return styles.dark;
    case 'Colorful':
      return styles.colorful;
    default:
      throw new Error(`${theme}은 적절치 못한 theme이다.`);
  }
};

const Card = ({ card }) => {
  const { name, company, theme, job, email, comment, fileURL } = card;
  return (
    <div className={`${styles.container} ${getStyles(theme)}`}>
      <img
        className={styles.img}
        src={fileURL || '/images/default_logo.png'}
        alt="logo"
      />
      <section>
        <p>{name}</p>
        <p className={styles.company}>{company}</p>
        <p>{job}</p>
        <p>{email}</p>
        <p>{comment}</p>
      </section>
    </div>
  );
};

export default Card;
