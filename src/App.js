import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Form,FormGroup,Col,FormControl,ControlLabel} from 'react-bootstrap';
import env from "./envService";


class App extends Component {

    constructor(props){

        super(props);
        this.state={
            username: '',
            password: '',
        }
    }

    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }
    changeUsername(event)
    {
        this.setState({
            username: event.target.value
        })
    }

    componentDidUpdate(){

        /* environment.users.push({
             username: this.state.username,
             password: this.state.password,
         });*/
    }

    verificare(e)
    {
        e.preventDefault();
        var username = this.state.username;
        var pass=this.state.password;

        env.users.forEach((el) =>{
            if(el.username===username && el.password===pass)
                console.log('success');

        })

    }

    render() {

        return (
            <div className="App">
                <h1>Titlu</h1>
                <Form horizontal>
                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={this.changeUsername.bind(this)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password"  onChange={this.changePassword.bind(this)}/>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.verificare.bind(this)} >Sign in </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default App;
