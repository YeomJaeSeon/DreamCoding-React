import React, { useRef, useState } from 'react';
import styles from './FileInput.module.css';

const FileInput = ({ uploadService, onFileUpdate, fileName }) => {
  const [pending, setPending] = useState(false);
  const inputRef = useRef();
  const click = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const fileUpdate = async (data) => {
    setPending(true);
    const file = await uploadService.upload(data.target.files[0]);
    onFileUpdate({ url: file.url, fileName: file.original_filename });
    setPending(false);
  };
  return (
    <>
      {!pending ? (
        <button
          className={`${styles.container} ${fileName && styles.exist}`}
          onClick={click}
        >
          {fileName || 'No File'}
        </button>
      ) : (
        <div className={styles.loadingBack}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        className={styles.file}
        onChange={fileUpdate}
      />
    </>
  );
};
export default FileInput;
