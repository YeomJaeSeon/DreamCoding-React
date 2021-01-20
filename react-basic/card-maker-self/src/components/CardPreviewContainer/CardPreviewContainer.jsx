import React from 'react';
import styles from './CardPreviewContainer.module.css';

const CardPreviewContainer = ({
    name,
    company,
    version,
    job,
    email,
    comment,
}) => {
    return (
        <div className={styles.container}>
            <section className={styles.img}></section>
            <section className={styles.info}>
                <h1>{name}</h1>
                <h3>{company}</h3>
                <div className={styles.line}></div>
                <p>{job}</p>
                <p>{email}</p>
                <p>{comment}</p>
            </section>
        </div>
    )
}

export default CardPreviewContainer;