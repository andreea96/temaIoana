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
        this.currentUser=this.getUsername();
    }

    openModal(){
        this.setState({
            opened: true,
        })
    }
    handleLogOut(){

        localStorage.removeItem('activeUser');
    }

    handleModalClose(){
        this.setState({
            opened: false,
        })
    }

    getUsername(){
        return localStorage.getItem('activeUser');
    }

    render(){

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
            <Modal show={this.state.opened} onHide={()=>this.handleModalClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Your info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserInfo username={this.currentUser}/>
                </Modal.Body>
            </Modal>

        </div>);
    }

}

export default MenuComponent;