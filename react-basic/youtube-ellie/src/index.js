import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';

const APIKEY = process.env.REACT_APP_API_KEY;
const youtube = new Youtube(APIKEY);

ReactDOM.render(<App youtube={youtube} />, document.getElementById('root'));
