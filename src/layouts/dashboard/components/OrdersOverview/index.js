
// for the openslackinfo dialog box

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';






















// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";







// slackinfos
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});






function OrdersOverview() {

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleTool1 = ()=>{
  //   console.log('hi')
  // }

  const handleTool2 = ()=>{

  }



  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              9
            </MDTypography>{" "}
            this app month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>

      <div>
         <div onClick={handleClickOpen}>
              <TimelineItem 
                color="success"
                icon="inventory_2"
                title="New app"
                dateTime="22 DEC 7:20 PM"
              />

            </div>

            <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Info
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="About the app" secondary="Slack" />
            
          </ListItem>
          <h1>What is Slack?</h1>
          <article>Slack is a messaging app for business that connects people to the information that they need. By bringing people together to work as one unified team, Slack transforms the way that organisations communicate.</article>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default Setting"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
            

            </div> 
       








        <div onClick={handleTool2}>
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New app"
          dateTime="21 DEC 11 PM"
          
        /></div>
        <TimelineItem
          color="info"
          icon="inventory_2"
          title="New app "
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New app "
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New app"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
