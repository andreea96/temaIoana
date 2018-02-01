import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import App from "./App";
import Registration from "./Registration";

export default class Navigation extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/register' component={Registration} />
            </Switch>
        );
    }

}