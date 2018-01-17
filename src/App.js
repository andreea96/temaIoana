import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Form,FormGroup,Col,FormControl,ControlLabel} from 'react-bootstrap';
import './environment';
import {environment} from "./environment";

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
        this.state({
            username: event.target.value
        })
    }

componentDidUpdate(){
       console.log(this.state);
       console.log(environment);
       environment.users.push({
           username: this.state.username,
           password: this.state.password,
       });
    console.log(environment);
}

  render() {

    return (
      <div className="App">
          <h1>Titlu</h1>
          <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                      Email
                  </Col>
                  <Col sm={10}>
                      <FormControl type="email" placeholder="Email" />
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
                      <Button type="submit">Sign in</Button>
                  </Col>
              </FormGroup>
          </Form>
      </div>
    );
  }
}

export default App;
