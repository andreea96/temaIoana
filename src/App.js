import React, { Component } from 'react';
import './App.css';
import {Button,Form,FormGroup,Col,FormControl,ControlLabel,Label} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MainPage from "./MainPage";


class App extends Component {

    constructor(props){

        super(props);
        this.state={
            username: '',
            password: '',
            loggedUser: (localStorage.getItem('activeUser')===undefined)? false : localStorage.getItem('activeUser'),
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

    componentDidMount(){

        this.env=JSON.parse(sessionStorage.getItem('env'));
    }

    verificare(e)
    {
        e.preventDefault();
        var username = this.state.username;
        var pass=this.state.password;

        this.env.users.forEach((el) =>{
            if(el.username===username && el.password===pass)
                this.setState({
                    loggedUser:username,
                },()=> {localStorage.setItem('activeUser',username)});

        })

    }

    render() {
        if(this.state.loggedUser)
        {
            return(<MainPage username={this.state.loggedUser}/>);
        }
        return (
            <div className="App">
                <h1>Welcome!</h1>
                <Form horizontal>
                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl placeholder="username" onChange={this.changeUsername.bind(this)}/>
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

                <Col smOffset={2} sm={10}>
                    <h2>
                        <Label bsStyle='info'><Link to="/register">Don't have an account? Sign up!</Link></Label>
                    </h2>
                </Col>
            </div>
        );
    }
}

export default App;
