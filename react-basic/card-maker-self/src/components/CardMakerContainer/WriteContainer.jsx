import React from 'react';
import styles from './WriteContainer.module.css'

const Container = ({onAddHandler}) => {
    return (
        <form className={styles.container} onSubmit={onAddHandler}>
            <div className={styles.row1}>
                <input placeholder="이름을 입력해주세요" name="name" className={styles.row1_col1}></input>
                <input placeholder="다니는 회사를 입력해주세요" name='company' className={styles.row1_col2}></input>
                <select name='version' className={styles.row1_col3}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                    <option value="beige">beige</option>
                </select>
            </div>
            <div className={styles.row2}>
                <input placeholder="직업을 입력해주세요" name='job' className={styles.row2_col1}></input>
                <input placeholder="이메일 입력해주세요" name='email' className={styles.row2_col2}></input>
            </div>
            <input placeholder="할말을 입력해주세요" name='comment' className={styles.row3}></input>
            <div className={styles.row4}>
                <button type='button' className={styles.btn1}>No file</button>
                <button type='submit' className={styles.btn2}>Add</button>
            </div>
        </form>
    )
}

export default Container;