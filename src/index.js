import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Registration from "./Registration";
import {BrowserRouter,Switch} from 'react-router-dom';

import Routes from './routes';
import Navigation from "./Navigation";

ReactDOM.render(<div>
    <BrowserRouter>
        <Navigation/>
    </BrowserRouter>
    </div>, document.getElementById('root'));


registerServiceWorker();
