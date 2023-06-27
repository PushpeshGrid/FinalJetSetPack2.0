import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
import Python from '../../../assets/images/icons/flags/python.gif';
import Github from '../../../assets/images/icons/flags/github.gif';
import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

import Sublime from '../../../assets/images/icons/flags/sublime.png';
import Firefox from '../../../assets/images/icons/flags/firefox.png';

import Zoom from '../../../assets/images/icons/flags/zoom.png';

import Slack from '../../../assets/images/icons/flags/slack.png';

import Djando from '../../../assets/images/icons/flags/django.png';
import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
import Chrome from '../../../assets/images/icons/flags/chrome.gif';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };



const backendApps = ['VsCode','GitHub','Homebrew','Sublime Text','Firefox','Zoom','Slack','Django','Python','Homebrew Cask','PyCharm','Chrome']



  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 500,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Frontend" {...a11yProps(0)} />
          <Tab label="Backend" {...a11yProps(1)} />
          <Tab label="Data Science" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {value === 0 && (
            <>
              <p class='flex content-center gap-4 align-items: center p-2 font-roboto font-helvetica font-arial font-sans'>
              <img src ={VisualCode} class='h-8 w-8' alt ='vscode'/> VsCode
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Github} class='h-8 w-8' alt ='vscode'/> GitHub
              </p> 
              <p class='flex content-center gap-4 align-items: center p-2'>
               <img src ={Homebrew} class='h-8 w-8' alt ='vscode'/> Homebrew
              </p>
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {value === 1 && (
            <>
           
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={VisualCode} class='h-8 w-8' alt ='vscode'/> VsCode
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Github} class='h-8 w-8' alt ='github'/> GitHub
              </p> 
               <p class='flex content-center gap-4 align-items: center p-2'>
               <img src ={Homebrew} class='h-8 w-8' alt ='homebrew'/> Homebrew
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'> 
              <img src ={Sublime} class='h-8 w-8' alt ='sublime'/> Sublime Text
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Firefox} class='h-8 w-8' alt ='firefox'/> Firefox
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Zoom} class='h-8 w-8' alt ='zoom'/> Zoom
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Slack} class='h-8 w-8' alt ='slack'/> Slack
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Djando} class='h-8 w-8' alt ='django'/> Django
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Python} class='h-8 w-8' alt ='python'/> Python
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Cask} class='h-8 w-8' alt ='homebrew'/> Homebrew Cask
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Pycharm} class='h-8 w-8' alt ='pycharm'/> PyCharm
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Chrome} class='h-8 w-8' alt ='chrome'/> Chrome
              </p>
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {value === 2 && (
            <>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={VisualCode} class='h-8 w-8' alt ='vscode'/> VsCode
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Github} class='h-8 w-8' alt ='github'/> GitHub
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
               <img src ={Homebrew} class='h-8 w-8' alt ='homebrew'/> Homebrew
              </p>
              <p class='flex content-center gap-4 align-items: center p-2'>
              <img src ={Python} class='h-8 w-8' alt ='python'/> Python
              </p>
              
            </>
          )}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
