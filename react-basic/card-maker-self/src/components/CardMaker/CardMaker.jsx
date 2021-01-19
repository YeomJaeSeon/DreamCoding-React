import React from 'react';
import styles from './CardMaker.module.css'
import Container from '../CardMakerContainer/Container'
// 요기서 state를 관리해야할듯
// 요기서 realTime database사용


// 실시간으로 가져올때 state로받아서
// 컴포넌트 리랜더링일어나 업데이트일어나야함.

const CardMaker = () =>{
    return (
    <div className={styles.main}>
        <h1 className={styles.title}>Card Maker</h1>
        {/* 요 Container는 realtimeDatabase를통해서 동적으로
        만들어져야함 */}
        <Container />
    </div>
    )
}
export default CardMaker;