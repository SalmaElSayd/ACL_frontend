import axios from 'axios'
import {useHistory} from 'react-router-dom'
import React, {useState} from 'react';
import '../style/loginstyle.css'
import Button from 'react-bootstrap/Button'

import '../style/ViewStaff.css'
import '../style/buttons.css'

const BACKEND_URL = require('./_URL_Backend');


function AdddepartmentHr(){

    const [faculty_name, setfaculty_name]=useState('');
    const [dep_id, setdep_id]=useState('');
    const [dep_name, setdep_name]=useState('');
    const [course_id, setcourse_id]=useState('');

    const [resMessage, setResMessage]=useState('');
    const history = useHistory();
  const onSubmit = (e)=>{
      e.preventDefault();
    console.log("faculty being added ")
    const info = {
        faculty_name:faculty_name,
        id:dep_id,
        name:dep_name,
        course_id,course_id
    }
    axios.post(BACKEND_URL+'hr/adddepartment', info,{headers:{authorisation:localStorage.getItem('jwtToken')}})
    .then(res => {
     
        setResMessage(res.data.mess)

      })
      
  }
  const handlenameChange = (e)=>{
    const faculty_name = e.target.value ;
        setfaculty_name(faculty_name);
}
const handledep_idChange = (e)=>{
    const dep_id = e.target.value ;
    setdep_id(dep_id);
}
const handledep_nameChange = (e)=>{
    const dep_name = e.target.value ;
    setdep_name(dep_name);
}
const handledCourse_ideChange = (e)=>{
    const course_id = e.target.value ;
    setcourse_id(course_id);
}

const handleHome=(e)=>{
    window.location='/home'
}



        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <h1>
           Add a departmentHr 
            </h1>
            <div className='form-loc'>
            <form onSubmit={onSubmit}>
        <input  className="form-control" placeholder="faculty name" type="text" onChange={handlenameChange} />
        <br />
        <input className="form-control" placeholder="add a dep id" type="text" onChange={handledep_idChange} />
        <br />
        <input  className="form-control" placeholder="add a dep name" type="text" onChange={handledep_nameChange} />
        <br />
        <input  className="form-control" placeholder="add a new course  id" type="text" onChange={handledCourse_ideChange} />
        <br />
        <input   className="form-control" className ='btn btn-primary btn-block btn-large' type="submit" />
            </form>
            </div>
        <label>{resMessage}</label>

        <div className="gobackbutton">
             <Button onClick={handleHome} variant="outline-primary">Go back gome </Button>{'    '}
               </div>
            </div>
        );
    
}

export default AdddepartmentHr;