import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';
import axios from 'axios';

//좀더 깔끔한 의존성 주입
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

const youtube = new Youtube(httpClient);

ReactDOM.render(<App youtube={youtube} />, document.getElementById('root'));
