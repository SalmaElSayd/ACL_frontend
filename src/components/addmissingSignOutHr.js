import axios from 'axios'
import {useHistory} from 'react-router-dom'
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";


import '../style/ViewStaff.css'
import '../style/buttons.css'

const BACKEND_URL = require('./_URL_Backend');



function AddmissingSignOutHr(){

    const [id, setid]=useState('');
    const [signIn, setsignIn]=useState('');

    const [resMessage, setResMessage]=useState('');
    const history = useHistory();
  const onSubmit = (e)=>{
      e.preventDefault();
    console.log("faculty being added ")
    const info = {
        id:id,
        signOut:signIn
    }
    axios.post(BACKEND_URL+'hr/addmissingSignOut', info,{headers:{authorisation:localStorage.getItem('jwtToken')}})
    .then(res => {
     
        setResMessage(res.data.mess)
       

      })
      
  }
  const handleIdChange = (e)=>{
    const id = e.target.value ;
    setid(id);
}
const handlesignInChange = (date)=>{
    setsignIn(date);
}


const handleHome=(e)=>{
    window.location='/hr'
}

    return (
        <div className='form-loc'>
                <h1>
          add missing sign-Out
            </h1>
            
            <form className="submit" onSubmit={onSubmit}>
        <input className="form-control" placeholder="staff id" type="text" onChange={handleIdChange} />
        <br />
        <Datetime  onChange={handlesignInChange} />


        <input className ='btn btn-primary  btn-large' type="submit" />
            </form>
        <label>{resMessage}</label>
<div className="gobackbutton">
         <Button onClick={handleHome} variant="outline-primary">Go back gome </Button>{'    '}
         </div>
            </div>

        );
    
}

export default AddmissingSignOutHr;  