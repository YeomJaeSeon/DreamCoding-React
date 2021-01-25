import React from 'react';
import Button from '../Button/Button';
import FileInput from '../FileInput/FileInput';
import styles from './CardEditForm.module.css';

const CardEditForm = ({
  card: { name, company, theme, job, email, comment, fileName, fileURL },
}) => {
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <div className={styles.row1}>
        <input
          className={styles.name}
          type="text"
          className={styles.name}
          name="name"
          value={name}
        />
        <input
          name="company"
          className={styles.company}
          type="text"
          value={company}
        />
        <select name="theme" className={styles.theme} value={theme}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row2}>
        <input name="job" className={styles.job} type="text" value={job} />
        <input
          name="email"
          className={styles.email}
          type="text"
          value={email}
        />
      </div>
      <div className={styles.row3}>
        <textarea name="comment" className={styles.comment} value={comment} />
      </div>
      <div className={styles.row4}>
        <div className={styles.fileinput}>
          <FileInput />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
