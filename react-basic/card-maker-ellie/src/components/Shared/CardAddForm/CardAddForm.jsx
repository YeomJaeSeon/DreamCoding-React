import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from './CardAddForm.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
  const [file, setFile] = useState({ fileName: '', fileURL: '' });

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const formRef = useRef();

  const onAddHandler = () => {
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      job: jobRef.current.value || '',
      email: emailRef.current.value || '',
      comment: commentRef.current.value || '',
      fileName: file.fileName,
      fileURL: file.fileURL,
    };
    onAdd(card);
    formRef.current.reset();
    setFile({ fileName: '', fileURL: '' }); // state reset
  };

  const fileUpdate = (data) => {
    setFile({ fileName: data.name, fileURL: data.url });
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.row1}>
        <input
          className={styles.name}
          type="text"
          name="name"
          ref={nameRef}
          placeholder="이름입력"
        />
        <input
          name="company"
          className={styles.company}
          type="text"
          placeholder="회사입력"
          ref={companyRef}
        />
        <select name="theme" className={styles.theme} ref={themeRef}>
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
          placeholder="직업입력"
          ref={jobRef}
        />
        <input
          name="email"
          className={styles.email}
          type="text"
          placeholder="이메일입력"
          ref={emailRef}
        />
      </div>
      <div className={styles.row3}>
        <textarea
          name="comment"
          className={styles.comment}
          placeholder="할말입력"
          ref={commentRef}
        />
      </div>
      <div className={styles.row4}>
        <FileInput fileUpdate={fileUpdate} fileName={file.fileName} />
        <Button name="Add" onClick={onAddHandler} />
      </div>
    </form>
  );
};

export default CardAddForm;
