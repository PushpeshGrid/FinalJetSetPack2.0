

import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";


import { useNavigate } from "react-router-dom";

// profileiconinfo
import {
  Popover,
  Typography,
  Button,
} from '@mui/material';






// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";




// images
import image from '../../../assets/images/Pushpeshprofile.jpg'


// profile token
import { useContext } from "react";

import { TokenContext } from "context/TokenContext";







function DashboardNavbar({ absolute, light, isMini }) {

// token handling
const {token} = useContext(TokenContext);





// handleprofileicon
const [anchorEl, setAnchorEl] = React.useState(null);
const [profilename,setProfileName] = useState('plodiwal')

const [emailAddress,setEmailAddress] = useState('plodiwal@gmail.com')



// setProfileName(sessionStorage.getItem('username'))


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'profile-dialog' : undefined;



// importing profilename from axios


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/get_profile/',
  headers: {
    'Authorization': 'Bearer '+token
  }
};
axios.request(config)
.then((response) => {
  console.log(response.data.data);
  let {username,email} = response.data.data;
  setProfileName(username);
  setEmailAddress(email);
})
.catch((error) => {
  console.log(error);
  setProfileName('plodiwal');
  setEmailAddress('plodiwal@gmail.com');
});





// axios
// .post('http://localhost:8000/get_profile/',{
//     headers:{
//         'Authorization': `Bearer ${token}`
//     }
// })
// .then((response) => {
//   let {username,email} = response.data;
//   setProfileName(username);
//   setEmailAddress(email);
  

//
  
})
.catch((error) => {
  console.error(error);
  setProfileName('plodiwal');
  setEmailAddress('plodiwal@gmail.com');
});


//

// const [anchorEl, setAnchorEl] = useState(null);
// const navigate = useNavigate()

// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
//   // navigate('/authentication/sign-in')
// };

// const open = Boolean(anchorEl);
// const id = open ? 'user-profile-popover' : undefined;




  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <Link to ='/notifications/'>
        <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      </Link>

      <Link to = '/profile/'>
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Account sessions" />
      </Link>
      <NotificationItem icon={<Icon>Tools</Icon>} title="New Tools " />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>

          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />

        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            {/* <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox> */}
            <MDBox color={light ? "white" : "inherit"}>


              {/* <Link to="/authentication/sign-in/basic"> */}

                <IconButton sx={navbarIconButton} size="small" disableRipple  onClick={handleClick}>
                  <Icon sx={iconsStyle}>account_circle</Icon>
                </IconButton>
              {/* </Link> */}




              <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <div className="bg-white rounded-lg"   style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                    <img
                      src={image}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mx-auto mb-2"
                     
                    />
                    <Typography variant="h6" component="div"className="text-xl text-center font-semibold mb-2" >
                     {profilename}
                    </Typography>
                    <Typography class="text-center text-sm">
                      {emailAddress}
                    </Typography>
                    <Link to ='/authentication/sign-in'>
                      <Button onClick={handleClose} color="secondary" sx={{ mt: 2 }}>
                        Logout
                      </Button>
                    </Link>
                  </div>
            </Popover>



        
      


              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon sx={iconsStyle}>settings</Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {renderMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
