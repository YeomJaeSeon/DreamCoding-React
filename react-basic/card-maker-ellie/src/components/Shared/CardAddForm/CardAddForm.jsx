import React, { useRef } from 'react';
import Button from '../Button/Button';
import FileInput from '../FileInput/FileInput';
import styles from './CardAddForm.module.css';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const onAddHandler = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      job: jobRef.current.value || '',
      email: emailRef.current.value || '',
      comment: commentRef.current.value || '',
      fileName: '',
      fileURL: null,
    };
    onAdd(card);
    formRef.current.reset();
    // form 태그에 이렇게 reset함수가 있어서 reset시킬수있다
  };

  return (
    <form ref={formRef} className={styles.form}>
      <div className={styles.row1}>
        <input
          className={styles.name}
          type="text"
          className={styles.name}
          name="name"
          ref={nameRef}
          placeholder="이름입력"
        />
        <input
          ref={companyRef}
          name="company"
          className={styles.company}
          type="text"
          placeholder="회사입력"
        />
        <select ref={themeRef} name="theme" className={styles.theme}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row2}>
        <input
          ref={jobRef}
          name="job"
          className={styles.job}
          type="text"
          placeholder="직업입력"
        />
        <input
          ref={emailRef}
          name="email"
          className={styles.email}
          type="text"
          placeholder="이메일입력"
        />
      </div>
      <div className={styles.row3}>
        <textarea
          ref={commentRef}
          name="comment"
          className={styles.comment}
          placeholder="할말입력"
        />
      </div>
      <div className={styles.row4}>
        <div className={styles.fileinput}>
          <FileInput />
        </div>
        <Button name="Add" onClick={onAddHandler} />
      </div>
    </form>
  );
};

export default CardAddForm;
