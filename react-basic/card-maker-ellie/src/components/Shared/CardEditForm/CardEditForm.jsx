import React from 'react';
import Button from '../Button/Button';
import FileInput from '../FileInput/FileInput';
import styles from './CardEditForm.module.css';

const CardEditForm = ({ card, onDeleteHandler, onUpdateHandler }) => {
  const {
    id,
    name,
    company,
    theme,
    job,
    email,
    comment,
    fileName,
    fileURL,
  } = card;
  const onDelete = () => {
    onDeleteHandler(id);
  };

  const onUpdate = (e) => {
    if (e.currentTarget === null) return;
    // object key에 변수로바로 접근하려면 [string]을 이용함.
    onUpdateHandler({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.row1}>
        <input
          className={styles.name}
          type="text"
          className={styles.name}
          name="name"
          value={name}
          onChange={onUpdate}
        />
        <input
          name="company"
          className={styles.company}
          type="text"
          value={company}
          onChange={onUpdate}
        />
        <select
          name="theme"
          className={styles.theme}
          value={theme}
          onChange={onUpdate}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row2}>
        <input
          name="job"
          className={styles.job}
          type="text"
          value={job}
          onChange={onUpdate}
        />
        <input
          name="email"
          className={styles.email}
          type="text"
          value={email}
          onChange={onUpdate}
        />
      </div>
      <div className={styles.row3}>
        <textarea
          name="comment"
          className={styles.comment}
          value={comment}
          onChange={onUpdate}
        />
      </div>
      <div className={styles.row4}>
        <div className={styles.fileinput}>
          <FileInput />
        </div>
        <Button name="Delete" onClick={onDelete} />
      </div>
    </form>
  );
};

export default CardEditForm;
