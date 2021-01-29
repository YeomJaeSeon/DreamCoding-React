import React, { useEffect } from 'react';
import TopNav from '../../components/Shared/TopNav/TopNav';
import BottomNav from '../../components/Shared/BottomNav/BottomNav';
import styles from './Login.module.css';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
  const history = useHistory();
  // history.push를 하면 이런식으로 여러 params들을 포함해서 보낼수있음 (uid를 추가로보냄)
  // 로그인 하면 app으로 라우팅되는데 로그인한 사용자의 정보를 보내기 위해 이런식으로 전달함(나중에 realtime db도사용할거기 떄문에)

  const onLogin = (e) => {
    authService.login(e.target.id);
  };

  // Login 컴포넌트 마운트될때 로그인이 되어있으면 바로 app페이지 로 라우팅
  useEffect(() => {
    const goToApp = (uid) => {
      history.push({
        pathname: '/app',
        state: { id: uid },
      });
    };

    authService.onAuthStatus((user) => {
      if (user) {
        goToApp(user.uid);
      }
    });
  }, [authService, history]);

  return (
    <div className={styles.container}>
      <TopNav />
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Login</h1>
        <button id="Google" onClick={onLogin} className={styles.google}>
          Google
        </button>
        <button id="Github" onClick={onLogin} className={styles.github}>
          Github
        </button>
      </div>
      <BottomNav />
    </div>
  );
};

export default Login;
