import React, {useState, useEffect} from 'react';
import styles from './CardMaker.module.css'
import WriteContainer from '../CardMakerContainer/WriteContainer'
import FinishContainer from '../CardMakerContainer/FinishContainer'
import {realtimeDatabase} from '../../fbase'

const CardMaker = () =>{
    const [cardData, setCardData] = useState([]);
    const database = realtimeDatabase;

    useEffect(() => {
        database.ref('users').once('value').then(snapshot=>{
            const fbaseDatas = snapshot.val();

            if(fbaseDatas){
                const fbaseDatasArr = Object.values(fbaseDatas);
                setCardData(fbaseDatasArr);
            }
        })
    }, [])

    const add = (e) => {
        e.preventDefault();
        const id = Date.now();
        const name = e.target.name.value;
        const company = e.target.company.value;
        const version = e.target.version.value;
        const job = e.target.job.value;
        const email = e.target.email.value;
        const comment = e.target.comment.value;

        e.target.name.value = '';
        e.target.company.value = '';
        e.target.job.value = '';
        e.target.email.value = '';
        e.target.comment.value = '';
        
        // firebase database 저장
        database.ref('users/'+id).set({
            id,
            name,
            company,
            version,
            job,
            email,
            comment,
        })

        setCardData([...cardData, {
            id,
            name,
            company,
            version,
            job,
            email,
            comment,
        }])
    }

    const onDelete = (selectedCardId) => {
        // firebase database 삭제
        database.ref('users/'+selectedCardId).remove();
        setCardData(cardData.filter(item=> item.id !== selectedCardId))
    }

    const onUpdate = (selectedCardId, target) => {
        
        const name = target.name;
        // 수정될 key
        const value = target.value;
        // 수정될 content
        setCardData(cardData.map(item => {
            if(item.id === selectedCardId){
                item[name] = value;
                return item;
            }
            return item;
        }))

        // firebase update
        const updates = {};
        updates['/users/' + selectedCardId + '/' + name] = value;
        database.ref().update(updates)
    }

    return (
    <div className={styles.main}>
        <h1 className={styles.title}>Card Maker</h1>
        {cardData.map(item=>{
            return (
              <FinishContainer 
                key={item.id}
                id={item.id}
                name={item.name}
                company={item.company}
                version={item.version}
                job={item.job}
                email={item.email}
                comment={item.comment}
                onDeleteHandler={onDelete}
                onUpdateHandler={onUpdate}
              />
            )
        })}
        <WriteContainer onAddHandler={add} />
    </div>
    )
}
export default CardMaker;