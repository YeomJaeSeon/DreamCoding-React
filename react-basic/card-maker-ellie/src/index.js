import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';

const authService = new AuthService();
// 이렇게 index.js에서 authService에관한 오브젝트를 만든다.
// login 메소드 내에서 만들지말고 index.js에서부터 만들어서
// view인 react에 네트워크통신에관한 로직을 의존성 주입을한다.

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
