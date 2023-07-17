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

import bgvideo from "../videos/signupvid.mp4";

// axios
import { myAxios } from "helper/helper";

import axios from "axios";

// fortokenoverallproject
import { useContext } from "react";
import { TokenContext } from "../../../context/TokenContext";

function Basic() {
  // tokenhandling
  const { setNewToken, token } = useContext(TokenContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // errorhandling
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // login handle
  const loginHandle = (e) => {
    // navigate("/authentication/welcome");

    // setOpen(true);
    e.preventDefault();
    sessionStorage.setItem("username", username);

    const userData = {
      username,
      password,
    };

    axios
      .post("http://127.0.0.1:8000/auth/login/", userData)
      .then((response) => {
        let data = response.data;
        console.log({ data });
        let token = data.token;
        console.log({ token });
        setNewToken(token);
        navigate("/authentication/welcome");
        // localStorage.setItem('token',token)
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Please enter the correct username or password.");
      });

    if (!token) {
      setErrorMessage("Please enter the correct username or password.");
    }
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout video={bgvideo}>
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
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}
          >
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                {/* <FacebookIcon color="inherit" /> */}
              </MDTypography>
            </Grid>

            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                {/* <GitHubIcon color="inherit" /> */}
              </MDTypography>
            </Grid>

            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                {/* <GoogleIcon color="inherit" /> */}
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                value={username}
                label="username"
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                value={password}
                label="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <button className="magicButton" onClick={loginHandle}>
                Sign In and Continue
              </button>
              {errorMessage && (
                <p className="text-xs  bg-red-100 text-red-700 px-4 py-2 rounded mb-4 mt-4">
                  {errorMessage}
                </p>
              )}
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
