import React, {Component} from 'react';
import {environment} from "./environment";
import {Button,Form,FormGroup,Col,FormControl,ControlLabel} from 'react-bootstrap';

class Registration extends Component {


    constructor(props){

        super(props);
         this.User={
            username: '',
            password: '',
            email: '',
            name: '',
            surname: '',
            id:'',
        };
        this.onSubmit=this.onSubmit.bind(this);

    }


    onSubmit(e) {

        e.preventDefault();
        //get actual values from referencies
        const newusername = this.User.username.value;
        const newpassword = this.User.password.value;
        const newemail = this.User.email.value;
        const newname = this.User.name.value;
        const newsurname = this.User.surname.value;
        const newid = this.User.id.value;

        this.User={
            username: newusername,
            password: newpassword,
            email: newemail,
            name: newname,
            surname: newsurname,
            id:newid,
        }

        console.log(this.User);
    }

    /**
     *  console.log(process.env.REACT_APP_var);
        process.env.REACT_APP_CEVA='4';
        console.log(process.env.REACT_APP_CEVA);
     */
    render(){
    return(
        <div className="register" >
            <h1>Register</h1>
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="username"
                                     placeholder="barosanu75"
                                     inputRef={node=>this.User.username=node}
                        />
                    </Col>

                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password"
                                     placeholder=""
                                     inputRef={node=>this.User.password=node}
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalname">
                    <Col componentClass={ControlLabel} sm={2}>
                        Prenume
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text"
                                     placeholder="alin"
                                     inputRef={node=>this.User.name=node}
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalsurname">
                    <Col componentClass={ControlLabel} sm={2}>
                        Nume
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text"
                                     placeholder="popescu"
                                     inputRef={node=>this.User.surname=node}
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl  type="email"
                                      placeholder="alin.popescu@yahoo.com"
                                      inputRef={node=>this.User.email=node}
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalid">
                    <Col componentClass={ControlLabel} sm={2}>
                        ID(Grupa+serie)
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text"
                                     placeholder="322AA"
                                     inputRef={node=>this.User.id=node}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={this.onSubmit}>Register</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )

};
}

export default Registration;