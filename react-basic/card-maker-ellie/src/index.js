import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';
import UploadService from './service/img_upload';
import FileInputer from './components/Shared/FileInput/FileInput';
import DatabaseService from './service/realtime_database';

const authService = new AuthService();
// 이렇게 index.js에서 authService에관한 오브젝트를 만든다.
// login 메소드 내에서 만들지말고 index.js에서부터 만들어서
// view인 react에 네트워크통신에관한 로직을 의존성 주입을한다.

const uploadService = new UploadService();

const databaseService = new DatabaseService();

const FileInput = memo((props) => {
  // 하나의 완성된 엘리먼트를 리턴한다.
  return <FileInputer {...props} uploadService={uploadService} />;
});

//-> 확장성이 높아짐.
// )) 이런방식으로하면 다른 의존성 서비스를 inject받을경우
// 의존성 서비스 props drilling피할수있다.

// -> 확장성이 떨어짐.
// const FileInput = <FileInput uploadService={uploadService} />;

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      databaseService={databaseService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
