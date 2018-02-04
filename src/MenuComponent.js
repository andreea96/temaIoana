import React, { Component } from 'react';
import './App.css';
import {Table,Glyphicon,Navbar,Nav,NavItem,Modal,Tab,Tabs} from 'react-bootstrap';
import {toast,ToastContainer} from 'react-toastify';
import UserInfo from "./UserInfoComponent";


class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            opened: false,
        };
    }

    openModal(){
        alert('jdn');
        this.setState({
            opened: true,
        })
    }
    handleLogOut(){

        localStorage.removeItem('activeUser');
    }

    handleModalClose(){
        this.setState({
            isOpen: false,
        })
    }

    render(){

        let isOpen=this.state.opened;
        return(<div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" onClick={()=>this.openModal()}>Info</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={()=>this.handleLogOut()} href="/">
                            Logut
                        </NavItem>
                    </Nav>
            </Navbar>
          
        </div>);
    }

}

export default MenuComponent;