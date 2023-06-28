import React from 'react'



// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useState } from 'react';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// toolsforfrontend..
import Toolsforrole from './component/toolsforrole';


// deletebutton
// import DeleteTools from './component/deletetools';



import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// axios import
import axios from 'axios';


// fortoken

import { useContext } from 'react';

import { TokenContext } from '../../context/TokenContext';
import MDBox from 'components/MDBox';

// installall
// import * as React from 'react';
// import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
// import { Rotate90DegreesCcw } from '@mui/icons-material';

import DashboardNavbar from "examples/Navbars/DashboardNavbar";




const AppList = {
    Frontend: ['App 1', 'App 2', 'App 3','app 4'],
    Backend: ['App 4', 'App 5', 'App 6'],
    Data_Science: ['App 7', 'App 8', 'App 9'],
};












const Index = ()=> {



    const [selectedRole, setSelectedRole] = useState('');
    const [filteredApps, setFilteredApps] = useState([]);
  
    const [installationStatus, setInstallationStatus] = useState(null)
  
  
  //   loadinghanding
    const [isLoading, setIsLoading] = useState(false);
  
  //   error handling
  
  const [errorMessage, setErrorMessage] = useState('');

  // delete handling

  const [uninstall,setUninstall] = useState('');


  //renderappmessage
  const [appRender,setAppRender] = useState(false);
  
  
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
  
          setIsLoading(true);
          setUninstall('');
  
  
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
  

// uninstallhandling

    const handleDelete = (e)=>{
        
        e.preventDefault();

        setAppRender(true);
        setIsLoading(true)
        setErrorMessage('');


        let userdata = {
            roles:selectedRole
        }

        axios
        .post('http://localhost:8000/delete_environment/', userdata,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            
        // const { data } = response.data
        console.log(response.data)
        setIsLoading(false)
        setUninstall('Successfully Uninstall')
        // Set the installation status in the component state
        // setInstallationStatus(data);
        
    
        })
        .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setUninstall('Uninstallation Failed')
        // setErrorMessage('Installation Failed')
        
        
        });



    }

       
    const renderInstallationStatus = () => {
      if (installationStatus) {
        return Object.keys(installationStatus).map((appName) => (
         
          <React.Fragment key={appName}>
          {installationStatus[appName] === 'Suscessful' ? (
            <li className="applist-passed">{`${appName}: Successfully Installed`}</li>
            
          ) : (
            <li className="applist-failed">{`${appName}: Already Exists`}</li>
          )}
          </React.Fragment>
        ));
      }
    }
  
  
  //   {`${appName}: ${
  //             installationStatus[appName] === 'Failed' ? 'Failed to Install' : 'Successfully Installed'
  //           }`} 
            
  
    const loadingCircle = ()=> {
  
      if(isLoading){
          return(
              <Box sx={{ display: 'flex',mt:4 }}>
                  <CircularProgress />
              </Box>
          )
      }
  
  
    }
  



  return (
    <DashboardLayout>
        <DashboardNavbar />
   <Toolsforrole />
   <MDBox mt={6} mb={3}>
    {/* <Grid container spacing={1} justifyContent="space-around"> */}

    <div className="app-selector">
      <label htmlFor="role">Roles:</label>
      <select id="role" value={selectedRole} onChange={handleRoleChange} class ='w-96 rounded-md'>
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


            <Fab sx={{ ml: 2 }} variant="extended" size="small" color="primary" aria-label="add"  onClick={handleDownload}>
                 <NavigationIcon sx={{ mr: 1 ,transform: 'rotate(180deg)'}} />
                Install All
            </Fab>


            <Fab sx={{ ml: 2 }} variant="extended" size="small" color="primary" aria-label="add"  onClick={handleDelete}>
                 <NavigationIcon sx={{ mr: 1 ,transform: 'rotate(180deg)' }} />
                Uninstall 
            </Fab>


            {/* <button className="mb-8 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded" onClick={handleDownload}>Install all</button> */}
            {loadingCircle()}
            {errorMessage && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{errorMessage}</p>}
            {uninstall === 'Successfully Uninstall' ? <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{uninstall}</p> : uninstall === 'Uninstallation Failed'? <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{uninstall}</p>:''}
          </div>
        </div>
          <ul>
            {/* {filteredApps.map((app, index) => (
              <li key={index}>{app}</li>
            ))} */}

            {appRender === false ? renderInstallationStatus(): ''}

          </ul>
        </div>
      ) : null}
    </div>


    {/* <DeleteTools /> */}
    {/* </Grid> */}
    </MDBox>

    </DashboardLayout>
  )
}

export default Index