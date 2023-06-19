import './signup.css'

// react-router-dom components
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import bgvideo from '../videos/singup.mp4'


import axios from "axios";

import { useState } from "react";


// fortokenoverallproject
import { useContext } from 'react';
import { TokenContext } from '../../../context/TokenContext';










// signupandcontinuepage


import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




function Cover() {




  // tokenhandling
  const { setToken } = useContext(TokenContext);







  // signupcontinuepage

 

  const navigate = useNavigate()


  const [username ,setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')





const signupHandle = (e)=>{
  // navigate("/authentication/welcome");
  // setOpen(true);

  e.preventDefault();
  const userData = {
    username: username,
    email: email,
    password: password
  }
  


  axios
      .post('http://127.0.0.1:8000/auth/signup/', userData)
      .then((response) => {
        navigate("/authentication/welcome");
        console.log(response);
        let data = response.data
        console.log(data)
        let token = data.token;
        setToken(token);
      })
      .catch((error) => {
        console.error(error);
      });
    
 


  //   const token = myAxios.post("/auth/signup/", userData).then((response) => response.data).then((response) => {
      
  //     console.log(response)
      
  // }).catch((tokenerror) => {
  //     console.log(tokenerror);
  // });
  // console.log(token);

 
  
  }




  return (
    <CoverLayout image={bgImage} video = {bgvideo}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput value = {username} type="text" label="Name" variant="standard" fullWidth  onChange = {(e) => setUsername(e.target.value)} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput value = {email} type="email" label="Email" variant="standard" fullWidth onChange = {(e) => setEmail(e.target.value)}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value = {password} type="password" label="Password" variant="standard" fullWidth onChange = {(e) => setPassword(e.target.value)} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>



          {/* <div> */}
            <button className="magicButton" onClick={signupHandle}>Sign Up and Continue</button>
{/* 
            <Dialog open={open} onClose={handleContinue}>
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



            <MDBox mt={4} mb={1} >

            


              {/* <MDButton variant="gradient" color="info" fullWidth >
                sign Up
              </MDButton> */}

           


            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
