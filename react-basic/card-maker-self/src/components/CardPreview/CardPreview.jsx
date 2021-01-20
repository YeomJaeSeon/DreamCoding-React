import React, {useState, useEffect} from 'react';
import styles from './CardPreview.module.css';
import {realtimeDatabase} from '../../fbase';
import CardPreviewContainer from '../CardPreviewContainer/CardPreviewContainer';

let isChange;

const CardPreview = () => {
    const [cardState, setCardState] = useState([])

    // fbase realtime으로 변경 인식
    const fbaseRef = realtimeDatabase.ref('users');
    fbaseRef.on('value', (snapshot) =>{
        const fbasDatas = snapshot.val();
        isChange= Date.now();
        if(fbasDatas){
            const dataToArr = Object.values(fbasDatas);
            isChange = dataToArr;
        }
    });
    // useEffect(() => {
    //     fbaseRef.on('value', (snapshot) =>{
    //         const fbasDatas = snapshot.val();
    
    //         if(fbasDatas){
    //           const dataToArr = Object.values(fbasDatas);
    //           console.log(dataToArr)
    //           setCardState(dataToArr)
    //         }
    //     });
    // }, [isChange])
    useEffect(()=>{
        console.log('수정된 값:' +isChange);

    }, [isChange])


    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Card Preview</h1>
            {cardState.map(item => {
                return (
                  <CardPreviewContainer
                    key={item.id}
                    name={item.name}
                    company={item.company}
                    version={item.version}
                    job={item.job}
                    email={item.email}
                    comment={item.comment}
                  />
                )
            })}
        </div>
    )
}
export default CardPreview;