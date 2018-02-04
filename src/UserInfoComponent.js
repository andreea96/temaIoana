import React, {Component} from 'react';
import './App.css';
import {
    Panel,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

class UserInfo extends Component {

    constructor(props) {

        super(props);
        this.setUser(localStorage.getItem('activeUser'));
        this.setUserCourses();
        this.setUserLabs();

    }

    setUser(username) {

        this.user = new Object();
        this.user.username = username;
        JSON.parse(localStorage.getItem('env')).users.forEach(function (user, i) {
            if (user.username === username) {
                this.user.password = user.password;
                this.user.name = user.name;
                this.user.surname = user.surname;
                this.user.email = user.email;
                this.user.id = user.id;
                this.user.attendance = user.attendance;
                this.user.courses = [];
                this.user.labs = [];
            }
        }, this);
    }

    setUserCourses() {
        JSON.parse(localStorage.getItem('env')).courses.forEach(function (course) {

            if (course.groups.includes(this.user.id))
                this.user.courses.push(new Object({
                    "name": course.name,
                    "dates": course.dates,
                }));
        }, this)
    }

    setUserLabs() {
        JSON.parse(localStorage.getItem('env')).laboratories.forEach(function (lab) {
            if (lab.groups.includes(this.user.id))
                this.user.labs.push(new Object({
                    "name": lab.name,
                    "dates": lab.dates,
                }))
        }, this);
    }

    render() {

        return (<div>
            <h4>Username:</h4>
            {localStorage.getItem('activeUser')}
            <h4>Password:</h4>
            {this.user.password}
            <h4>Name:</h4>
            {this.user.name}
            <h4>Surname</h4>
            {this.user.surname}
            <h4>Email</h4>
            {this.user.email}
            <h4>ID</h4>
            {this.user.id}
            <h4>Courses</h4>
            {
                this.user.courses.map(function (course) {
                return (<Panel>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                {course.name}
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <ListGroup>
                                {
                                    course.dates.map(function (date) {
                                        return (
                                            <ListGroupItem><b>{date.day}</b> at {date.hour}</ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Panel.Collapse>
                    </Panel>
                );
                }, this)}

            <h4>Laboratories</h4>
            {this.user.labs.map(function (lab) {
                return (<Panel>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                {lab.name}
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <ListGroup>
                                {
                                    lab.dates.map(function (date) {
                                        return (
                                            <ListGroupItem><b>{date.day}</b> at {date.hour}</ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Panel.Collapse>
                    </Panel>
                );
            }, this)}
        </div>);
    }

}

export default UserInfo;