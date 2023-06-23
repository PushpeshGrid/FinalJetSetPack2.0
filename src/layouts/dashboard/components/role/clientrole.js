import './clientrole.css'

import React, { useState } from 'react';



import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// axios import
import axios from 'axios';


// fortoken

import { useContext } from 'react';

import { TokenContext } from '../../../../context/TokenContext';


const AppList = {
    Frontend: ['App 1', 'App 2', 'App 3','app 4'],
    Backend: ['App 4', 'App 5', 'App 6'],
    Data_Science: ['App 7', 'App 8', 'App 9'],
};

const AppSelector = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);

  const [installationStatus, setInstallationStatus] = useState(null)


//   loadinghanding
  const [isLoading, setIsLoading] = useState(false);

//   error handling

const [errorMessage, setErrorMessage] = useState('');


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


// const handleDownload = async () =>{

//     try {
//         // Make a POST request to retrieve the array of strings containing download scripts
//         const response = await axios.post('http://127.0.0.1:8000/set_environment/', {
//           token: 'your_token_here' // Replace with your actual token
//         });
//         console.log(response)


//         // const downloadScripts = response.data; // Assuming the response contains the array of strings

//         // Dynamically create and initiate downloads for each script
//         // downloadScripts.forEach((script, index) => {
//             // const downloadLink = document.createElement('a');
//             // downloadLink.href = `data:text/plain;charset=utf-8,${encodeURIComponent(script)}`;
//             // downloadLink.download = `app_script_${index}.txt`; // Provide a suitable filename

//             // Trigger the download
//             // downloadLink.click();
//       });
//     } catch (error) {
//       console.error('Error occurred during download:', error);
//     }
//   };









     // tokenhandling
     const { token } = useContext(TokenContext);


     const handleDownload = (e)=>{
        e.preventDefault();

        setIsLoading(true)

        console.log('clicked')

        let userdata = {
            roles:selectedRole
        }
        console.log(userdata);

        axios
            .post('http://127.0.0.1:8000/set_environment/', userdata,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
            const { data } = response.data
            console.log(data)
            // Set the installation status in the component state
            setInstallationStatus(data);
            setIsLoading(false)
        
            })
            .catch((error) => {
            console.error(error);
            setErrorMessage('Installation Failed')
            setIsLoading(false)
            
            });

            
            // navigate('/dashboard/')
            // Add your submit logic here
  };

     
  const renderInstallationStatus = () => {
    if (installationStatus) {
      return Object.keys(installationStatus).map((appName) => (
       
        <div>
      
             if(installationStatus[appName] === 'Failed'){
                <li key ={appName} className='applist-failed'> {`${appName}:'Failed to Install'`}</li>
                
             }
            else{
                <li key ={appName} className='applist-passed'> {`${appName}:'Successfully Installed'`}</li>
                }
            

          {/* {`${appName}: ${
            installationStatus[appName] === 'Failed' ? 'Failed to Install' : 'Successfully Installed'
          }`} */}
          
         </div>
      ));
    }

   
  }

  const loadingCircle = ()=> {

    if(isLoading){
        return(
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }



  
    

  }




  return (
    <div className="app-selector">
      <label htmlFor="role">Select Role:</label>
      <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">-- Select Role --</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Data_Science">Datascience</option>
      </select>

      {filteredApps.length > 0 ? (
        <div className="app-list">
        <div className='flex justify-start '>
          <h3>Apps for {selectedRole}:</h3>
          <div>

            <button className="mb-8 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded" onClick={handleDownload}>Run</button>
            {loadingCircle()}
            {errorMessage && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{errorMessage}</p>}
          </div>
        </div>
          <ul>
            {/* {filteredApps.map((app, index) => (
              <li key={index}>{app}</li>
            ))} */}

            {renderInstallationStatus()}

          </ul>
        </div>
      ) : null}
    </div>
  );
            }

export default AppSelector;



