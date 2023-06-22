

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";



// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import bgvideo from '../videos/signupvid.mp4';



// axios
import { myAxios } from "helper/helper";


import axios from "axios";


import Aftersign from '../components/Aftersign/index'


// signupandcontinuepage


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

import NextAftersign from '../components/Aftersign/index'






// fortokenoverallproject
import { useContext } from 'react';
import { TokenContext } from '../../../context/TokenContext';















function Basic() {

   // tokenhandling
   const { setNewToken,token } = useContext(TokenContext);



  



  // signupcontinuepage

  // const [open, setOpen] = React.useState(false);



  // const handleCancle = () => {
  //   setOpen(false);
  // };
  // const handleContinue = () =>{
  //   navigate("/Dashboard/")
  //   console.log('hi')
  // }



  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  // errorhandling
  const [errorMessage, setErrorMessage] = useState('');



  const navigate = useNavigate()

// login handle
const loginHandle= (e)=>{
 
  // setOpen(true);


  e.preventDefault();


  const userData = {
    username,
    password
  }

//   const token = myAxios.post("/auth/login/", userData).then((response) => response.data).then((response) => {
//     navigate("/authentication/welcome");

//     let data = token
// }).catch((tokenerror) => {
//     console.log(tokenerror);
// });
// console.log(token);

axios
.post('http://127.0.0.1:8000/auth/login/', userData)
.then((response) => {
  
  
  let data = response.data
  console.log({data})
  let token = data.token;
  console.log({token})
  setNewToken(token);
  navigate("/authentication/welcome");
  // localStorage.setItem('token',token)
})
.catch((error) => {
  console.error(error);
  setErrorMessage('Please enter the correct username or password.');
});


if(!token){
  setErrorMessage('Please enter the correct username or password.');
}


}





  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout  video = {bgvideo}>
      
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>

            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>

            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>

            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
            
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email"  value ={username}label='username' fullWidth  onChange = {(e) => setUsername(e.target.value)} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" value = {password} label='password' fullWidth onChange = {(e) =>setPassword(e.target.value)}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>

            
            <MDBox mt={4} mb={1}>




            {/* <div> */}
            <button className="magicButton" onClick={loginHandle}>Sign In and Continue</button>
            {errorMessage && <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">{errorMessage}</p>}
            {/* <Dialog open={open} onClose={handleContinue}>
            <DialogTitle>Welcome</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Give Some Info for Getting tools, please enter your IP add address and OS here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="IP Address"
            type="IPAdd"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="os"
            label="OS(operating system)"
            type="OS"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancle}>Cancel</Button>
          <Button onClick={handleContinue}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div> */}



              {/* <MDButton variant="gradient" color="info" fullWidth onclick={loginHandle}>
                sign in
              </MDButton> */}
            </MDBox>


            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
