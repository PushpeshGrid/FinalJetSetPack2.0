import './clientrole.css'



import React, { useState } from 'react';


const AppList = {
  admin: ['App 1', 'App 2', 'App 3'],
  user: ['App 4', 'App 5', 'App 6'],
  guest: ['App 7', 'App 8', 'App 9'],
};

const AppSelector = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);

  const handleRoleChange = (event) => {
    const { value } = event.target;
    setSelectedRole(value);

    if (AppList.hasOwnProperty(value)) {
      setFilteredApps(AppList[value]);
    } else {
      setFilteredApps([]);
    }
  };

  return (
    <div className="app-selector">
      <label htmlFor="role">Select Role:</label>
      <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">-- Select Role --</option>
        <option value="admin">Front-end</option>
        <option value="user">Back-end</option>
        <option value="guest">Data-science</option>
      </select>

      {filteredApps.length > 0 ? (
        <div className="app-list">
          <h3>Apps for {selectedRole}:</h3>
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



