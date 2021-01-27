import React, { useState, useRef } from 'react';
import styles from './FileInput.module.css';

const FileInput = ({ uploadService, fileUpdate, fileName }) => {
  const inputRef = useRef();
  const [pending, setPending] = useState(false);

  const click = () => {
    inputRef.current.click();
    // button을 클릭해도 input 을클릭한거같은 trick을 낼수있다.
  };
  const change = (e) => {
    setPending(true);
    uploadService.upload(e.target.files[0]).then((data) => {
      fileUpdate({ name: data.original_filename, url: data.url });
      setPending(false);
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        className={styles.input}
        onChange={change}
      />
      {!pending ? (
        <button
          className={`${styles.button} ${fileName ? styles.pink : styles.gray}`}
          onClick={click}
        >
          {fileName || 'No File'}
        </button>
      ) : (
        <div className={styles.loading}></div>
      )}
    </div>
  );
};

export default FileInput;
