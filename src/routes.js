import React from 'react';
import { Router, Route } from 'react-router'

import Login from './App';
import Registration from './Registration';


const Routes = (props) => (
    <Router {...props}>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
    </Router>
);

export default Routes;