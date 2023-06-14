import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';
import './ipandosform.css'



function MyForm() {
  const [ipaddress, setIpaddress] = useState('');
  const [operatingsystem, setOperatingsystem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or validation here


    const data = JSON.stringify({
    "ip_address": ipaddress,
    "os": operatingsystem
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/user_info/',
    headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzYWgiLCJleHAiOjE2ODYyNjExNTd9.jcf9TJlXFvFJ5gr40D9uGu7z2ZhuJ7-esEEZQgKILog', 
        'Content-Type': 'application/json', 
        'Cookie': 'csrftoken=7Pen79SMaMyFMJaVcT9LuaM2pAURkove'
    },
    data : data
    };

    axios(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });



  };

  return (
    <form onSubmit={handleSubmit} className='formclass'>
        <h2>GIVE SOME INFO FOR GETTING TOOLS</h2>
      <div className='formclass__lables'>
        <label htmlFor="ipaddress" className='formclass__class-lable'>User IP Address:</label>
        <input 
            className='formclass__class-input'
          type="text"
          id="ipaddress"
          value={ipaddress}
          onChange={(e) => setIpaddress(e.target.value)}
        />
      </div>
      <div className='formclass__lables'>
        <label htmlFor="mobileNo" className='formclass__class-lable'>Operating System:</label>
        <input
        className='formclass__class-input'
          type="text"
          id="mobileNo"
          value={operatingsystem}
          onChange={(e) => setOperatingsystem(e.target.value)}
        />
      </div>
      <button type="submit" className='submitButton' onclick = {handleSubmit}>Submit</button>
    </form>
  );
}

export default MyForm;