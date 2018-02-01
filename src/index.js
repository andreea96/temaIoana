import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './test';
import registerServiceWorker from './registerServiceWorker';
import Registration from "./Registration";
require('dotenv').config();
ReactDOM.render(<Registration />, document.getElementById('root'));
registerServiceWorker();
