import './clientrole.css'

import React, { useState } from 'react';

// axios import
import axios from 'axios';


const AppList = {
    frontend: ['App 1', 'App 2', 'App 3','app 4'],
    backend: ['App 4', 'App 5', 'App 6'],
    datascience: ['App 7', 'App 8', 'App 9'],
};

const AppSelector = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);


//   rolechangind handling
  const handleRoleChange = (event) => {
    const { value } = event.target;
    setSelectedRole(value);

    if (AppList.hasOwnProperty(value)) {
      setFilteredApps(AppList[value]);
    } else {
      setFilteredApps([]);
    }
  };


//   downloadinghandling

const handleDownload = () =>{
    console.log('hi')
    axios
      .post('http://127.0.0.1:8000/get_apps/')
      .then((response) => {
        let data=response.data
        console.log(response , data);
        
       
      })
      .catch((error) => {
        console.error(error);
        
      });
}

  return (
    <div className="app-selector">
      <label htmlFor="role">Select Role:</label>
      <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">-- Select Role --</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="datascience">Datascience</option>
      </select>

      {filteredApps.length > 0 ? (
        <div className="app-list">
        <div className='flex justify-start '>
          <h3>Apps for {selectedRole}:</h3>
          <button className="mb-8 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded" onClick={handleDownload}>Download</button>
        </div>
          <ul>
            {filteredApps.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default AppSelector;



