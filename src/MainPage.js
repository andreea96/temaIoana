import React, { Component } from 'react';
import './App.css';
import {Table,Glyphicon} from 'react-bootstrap';
import {toast,ToastContainer} from 'react-toastify';


class MainPage extends Component {
    constructor(props){
        super(props);
        this.env=JSON.parse(sessionStorage.getItem('env'));
        this.userCourses=this.getCourses();
        this.userLabs=this.getLaboratories();
        this.setAttendance();
    }

    state={
        stateChanged: false
    };
    getAllCourses=()=> {
        return this.env.courses;
    }

     getAllLaboratories=()=>{
        return this.env.laboratories;
    }

    getUser(){
        let userC;
        this.env.users.map(function (user) {
            console.log(user.id);
            if(user.username===this.props.username){
                userC=user;
                }
        },this);
         return userC;
    }

    getCourses = ()=>{

        const allCourses=this.getAllCourses();
        let userCourses=[];
        let userID=this.getUser().id;
        console.log(userID);
        allCourses.map(function (course) {
            if(course.groups.includes(userID))
                userCourses.push(course);
        });
        console.log(userCourses);
        return userCourses;
    }

    getLaboratories = ()=>{
        const allLaboratories=this.getAllLaboratories();
        let userLaboratories=[];
        let userID=this.getUser().id;
       allLaboratories.map(function (lab) {
           if(lab.groups.includes(userID))
               userLaboratories.push(lab);
       });
        return userLaboratories;
    }

    setAttendance= ()=>{
       let user=this.getUser();
        user.attendance.map(function (attID,i) {
            for(var cI in this.userCourses)
                (this.userCourses[cI].id===attID) ? (this.userCourses[cI].wasHere=true) : (this.userCourses[cI].wasHere=false);

            for(var lI in this.userLabs)
                (this.userLabs[lI].id===attID) ? (this.userLabs[lI].wasHere=true) : (this.userLabs[lI].wasHere=false);


        },this)
    }

    /**
     *
     * @param id
     * @param type 0-course 1-lab
     */
    addAttendance(id,type){
        switch (type){
            case 0:
                this.userCourses.forEach(function (course) {
                    if(course.id===id)
                        course.wasHere=true;
                });
                break;
            case 1:
                this.userLabs.forEach(function (lab) {
                    if(lab.id===id)
                        lab.wasHere=true;
                });
                break;
        }
        var userC=this.getUser();
        for(var userIndex in this.env.users)
        {
            if(userC.username===this.env.users[userIndex].username){
                this.env.users[userIndex].attendance.push(id);
            }
        }
        sessionStorage.setItem('env',JSON.stringify(this.env));

    }

     handleClick(e,id,type){
         toast.success("Adding attendance", {
             position: toast.POSITION.TOP_CENTER,
             onOpen: ()=>this.addAttendance(id,type),
             onClose: ()=>this.forceUpdate(),
             autoClose: 2000,
         });
    }
    render(){

        return(<div>
            <Table responsive>
                <thead>
                <tr>
                    <th>
                        COURSES
                    </th>
                    <th>
                        LABORATORIES
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.userCourses.map(function (course,i) {
                        var labChecked=this.userLabs[i].wasHere;
                        var labID=this.userLabs[i].id;
                        var courseChecked = course.wasHere;

                        return(<tr>
                                <td class={(courseChecked)? "success" : "danger"}>{course.name}  <Glyphicon  onClick={(e)=>this.handleClick(e,course.id,0)} glyph={(courseChecked) ? "": "star"} /></td>
                                <td class={(labChecked)? "success" : "danger" } >{this.userLabs[i].name}     <Glyphicon onClick={(e)=>this.handleClick(e,labID,1)} onHover={()=>{}} glyph={(labChecked)? "": "star"} /> </td>
                            </tr>
                        )
                    },this)
                }
                </tbody>
            </Table>
            <ToastContainer closeButton={false} closeOnClick={false} pauseOnHover={false} />
        </div>)
    }
}

export default MainPage;

