import React from 'react';
import styles from './Card.module.css';

function getStyles(theme) {
  switch (theme) {
    case 'Dark':
      return styles.Dark;
    case 'Light':
      return styles.Light;
    case 'Colorful':
      return styles.Colorful;
    default:
      throw new Error(`unknown theme ${theme}`);
  }
}

const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({
  card: { name, company, theme, job, email, comment, fileURL },
}) => {
  const url = fileURL ? fileURL : DEFAULT_IMAGE;
  return (
    <li className={`${styles.container} ${getStyles(theme)}`}>
      <img className={styles.img} src={url} alt="profile" />
      <section className={styles.section}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.comment}>{comment}</p>
      </section>
    </li>
  );
};

export default React.memo(Card);
