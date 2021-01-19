import React from 'react';
import styles from './Main.module.css'
import CardMaker from '../../components/CardMaker/CardMaker'
import CardPreview from '../../components/CardPreview/CardPreview'
import {authService} from '../../fbase'
import {useHistory} from 'react-router-dom'

const Main = () => {
  const history = useHistory()
  const logout = () => {
    authService.signOut().then(() => {
      history.push('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src="/images/logo.png" alt="로고" className={styles.img}/>
          <h1 className={styles.desc}>Business Card Maker</h1>
        </div>
        <button className={styles.logout} onClick={logout}>Logout</button>
      </header>
      <section className={styles.main}>
        <CardMaker />
        <CardPreview />
      </section>
    </div>
  ); 
};

export default Main;
