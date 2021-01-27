import React, { useState, useRef } from 'react';
import Loader from '../LoadingSpinner/Loader';
import styles from './FileInput.module.css';

function getStyle(fileName) {
  if (fileName) return styles.exist;
}

const FileInput = ({ uploadService, fileUpdate, fileName }) => {
  const inputRef = useRef();
  const [pending, setPending] = useState(false);

  const click = () => {
    inputRef.current.click();
    // button을 클릭해도 input 을클릭한거같은 trick을 낼수있다.
  };
  const change = (e) => {
    console.log(e.target.files[0]);
    uploadService.upload(e.target.files[0]).then((data) => {
      fileUpdate({ name: data.original_filename, url: data.url });
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
      <button className={styles.button} onClick={click}>
        {fileName || 'No File'}
      </button>
    </div>
  );
};
// onChange={(e) => {
//   const file = e.target.files[0];
//   uploadService.upload(file).then(({ original_filename, url }) => {
//     fileUpdate(original_filename, url);
//   });
//
export default FileInput;
