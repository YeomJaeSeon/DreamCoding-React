import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import styles from './CardAddForm.module.css';

const CardAddForm = ({ FileInput, addOrUpdate }) => {
  const [file, setFile] = useState({ fileURL: '', fileName: '' });
  const formRef = useRef();

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const addCard = (e) => {
    e.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      job: jobRef.current.value || '',
      email: emailRef.current.value || '',
      comment: commentRef.current.value || '',
      fileURL: file.fileURL || '',
      fileName: file.fileName || '',
    };
    addOrUpdate(card);
    formRef.current.reset();
    setFile({ fileURL: '', fileName: '' });
  };

  const onFileUpdate = ({ url, fileName }) => {
    setFile({ fileName: fileName, fileURL: url });
  };

  return (
    <form
      ref={formRef}
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.row1}>
        <input
          placeholder="이름 입력"
          ref={nameRef}
          className={styles.name}
          type="text"
        />
        <input
          placeholder="회사 입력"
          ref={companyRef}
          className={styles.company}
          type="text"
        />
        <select ref={themeRef} name="" id="" className={styles.theme}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row2}>
        <input
          placeholder="직업 입력"
          ref={jobRef}
          className={styles.job}
          type="text"
        />
        <input
          placeholder="이메일 입력"
          ref={emailRef}
          className={styles.email}
          type="text"
        />
      </div>
      <div className={styles.row3}>
        <textarea
          placeholder="자네 할말있나?"
          ref={commentRef}
          className={styles.comment}
        ></textarea>
      </div>
      <div className={styles.row4}>
        <FileInput onFileUpdate={onFileUpdate} fileName={file.fileName} />
        <Button name="Add" onClick={addCard} />
      </div>
    </form>
  );
};

export default CardAddForm;
