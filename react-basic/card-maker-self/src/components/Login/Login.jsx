import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img src="/images/logo.png" alt="로고" className={styles.img} />
        <h1 className={styles.title}>Business Card Maker</h1>
      </header>
      <div className={styles.loginBody}>
        <h1 className={styles.loginTitle}>Login</h1>
        <button className={styles.google} onClick={login}>
          Google
        </button>
        <button className={styles.github} onClick={login}>
          Github
        </button>
      </div>
      <footer className={styles.footer}>
        <p>Code your dream</p>
      </footer>
    </section>
  );
};

export default Login;
