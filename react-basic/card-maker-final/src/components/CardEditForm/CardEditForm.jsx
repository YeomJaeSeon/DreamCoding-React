import React from 'react';
import styles from './CardEditForm.module.css';
import Button from '../Button/Button';

const CardEditForm = ({ FileInput, card, addOrUpdate, onDelete }) => {
  const { id, name, company, theme, job, email, comment, fileName } = card;
  const update = (e) => {
    addOrUpdate({ ...card, [e.target.name]: e.target.value });
  };
  const deleteHandler = () => {
    onDelete(id);
  };
  const fileUpdate = ({ url, fileName }) => {
    addOrUpdate({ ...card, fileURL: url, fileName: fileName });
  };
  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.row1}>
        <input
          onChange={update}
          name="name"
          value={name}
          className={styles.name}
          type="text"
        />
        <input
          onChange={update}
          name="company"
          value={company}
          className={styles.company}
          type="text"
        />
        <select
          onChange={update}
          value={theme}
          name="theme"
          className={styles.theme}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row2}>
        <input
          onChange={update}
          name="job"
          value={job}
          className={styles.job}
          type="text"
        />
        <input
          onChange={update}
          name="email"
          value={email}
          className={styles.email}
          type="text"
        />
      </div>
      <div className={styles.row3}>
        <textarea
          onChange={update}
          name="comment"
          value={comment}
          className={styles.comment}
        ></textarea>
      </div>
      <div className={styles.row4}>
        <FileInput onFileUpdate={fileUpdate} fileName={fileName} />
        <Button name="delete" onClick={deleteHandler} />
      </div>
    </form>
  );
};

export default CardEditForm;
