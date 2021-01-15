import axios from 'axios'
import React, {useState } from 'react';
import setAuthToken from '../api'
import {Login} from './index'
import {Redirect,  Route ,useHistory} from 'react-router-dom'
import '../style/loginstyle.css'
const BACKEND_URL = require('./_URL_Backend');

function Logout() {
    const [resMessage, setResMessage]=useState('');
    
    const history = useHistory();
  const handleClick = (e)=>{
    
    axios.post(BACKEND_URL+'logout', {}, {headers:{authorisation:localStorage.getItem('jwtToken')}})
    .then(res => {
      
      
      console.log('redirecting ')
         return  history.push('/')   
      
      
      })
      



  }
  <Route  exact path="/" component = {Login} />

  return (
      <div>
      <button className="btn btn-primary" onClick={handleClick}>log out</button>
  <label>{resMessage}</label>
  </div>
  )
  
  
}

export default Logout;