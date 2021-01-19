import React from 'react';
import styles from './Container.module.css'

const Container = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <input className={styles.row1_col1}></input>
                <input className={styles.row1_col2}></input>
                <select className={styles.row1_col3}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                </select>
            </div>
            <div className={styles.row2}>
                <input className={styles.row2_col1}></input>
                <input className={styles.row2_col2}></input>
            </div>
            <input className={styles.row3}></input>
            <div className={styles.row4}>
                <button className={styles.btn1}>No file</button>
                <button className={styles.btn2}>Add</button>
            </div>
        </div>
    )
}

export default Container;