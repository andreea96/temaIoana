import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Switch} from 'react-router-dom';
import Navigation from "./Navigation";
import {environments} from "./environment";

sessionStorage.setItem('env',JSON.stringify(environments));

ReactDOM.render(<div>
    <BrowserRouter>
        <Navigation/>
    </BrowserRouter>
    </div>, document.getElementById('root'));


registerServiceWorker();
