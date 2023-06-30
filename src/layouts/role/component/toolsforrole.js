// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
// import Python from '../../../assets/images/icons/flags/python.gif';
// import Github from '../../../assets/images/icons/flags/github.gif';
// import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

// import Sublime from '../../../assets/images/icons/flags/sublime.png';
// import Firefox from '../../../assets/images/icons/flags/firefox.png';

// import Zoom from '../../../assets/images/icons/flags/zoom.png';

// import Slack from '../../../assets/images/icons/flags/slack.png';

// import Djando from '../../../assets/images/icons/flags/django.png';
// import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
// import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
// import Chrome from '../../../assets/images/icons/flags/chrome.gif';



// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };



// const backendApps = ['VsCode','GitHub','Homebrew','Sublime Text','Firefox','Zoom','Slack','Django','Python','Homebrew Cask','PyCharm','Chrome']



//   return (
//     <Box
//       sx={{
//         bgcolor: 'background.paper',
//         width: 500,
//         position: 'relative',
//         minHeight: 200,
//       }}
//     >
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//           aria-label="action tabs example"
//         >
//           <Tab label="Frontend" {...a11yProps(0)} />
//           <Tab label="Backend" {...a11yProps(1)} />
//           <Tab label="Data Science" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           {value === 0 && (
//             <>
//               <p class='flex content-center gap-4 align-items: center p-2 font-roboto font-helvetica font-arial font-sans'>
//               <img src ={VisualCode} class='h-8 w-8' alt ='vscode'/> VsCode
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Github} class='h-8 w-8' alt ='vscode'/> GitHub
//               </p> 
//               <p class='flex content-center gap-4 align-items: center p-2'>
//                <img src ={Homebrew} class='h-8 w-8' alt ='vscode'/> Homebrew
//               </p>
//             </>
//           )}
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           {value === 1 && (
//             <>
           
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={VisualCode} class='h-8 w-8' alt ='vscode'/> VsCode
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Github} class='h-8 w-8' alt ='github'/> GitHub
//               </p> 
//                <p class='flex content-center gap-4 align-items: center p-2'>
//                <img src ={Homebrew} class='h-8 w-8' alt ='homebrew'/> Homebrew
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'> 
//               <img src ={Sublime} class='h-8 w-8' alt ='sublime'/> Sublime Text
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Firefox} class='h-8 w-8' alt ='firefox'/> Firefox
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Zoom} class='h-8 w-8' alt ='zoom'/> Zoom
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Slack} class='h-8 w-8' alt ='slack'/> Slack
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Djando} class='h-8 w-8' alt ='django'/> Django
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Python} class='h-8 w-8' alt ='python'/> Python
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Cask} class='h-8 w-8' alt ='homebrew'/> Homebrew Cask
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Pycharm} class='h-8 w-8' alt ='pycharm'/> PyCharm
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Chrome} class='h-8 w-8' alt ='chrome'/> Chrome
//               </p>
//             </>
//           )}
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           {value === 2 && (
//             <>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={VisualCode} class='h-8 w-8' alt ='vscode'/> VsCode
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Github} class='h-8 w-8' alt ='github'/> GitHub
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//                <img src ={Homebrew} class='h-8 w-8' alt ='homebrew'/> Homebrew
//               </p>
//               <p class='flex content-center gap-4 align-items: center p-2'>
//               <img src ={Python} class='h-8 w-8' alt ='python'/> Python
//               </p>
              
//             </>
//           )}
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }





// usingradion button 

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
// import Python from '../../../assets/images/icons/flags/python.gif';
// import Github from '../../../assets/images/icons/flags/github.gif';
// import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

// import Sublime from '../../../assets/images/icons/flags/sublime.png';
// import Firefox from '../../../assets/images/icons/flags/firefox.png';

// import Zoom from '../../../assets/images/icons/flags/zoom.png';

// import Slack from '../../../assets/images/icons/flags/slack.png';

// import Djando from '../../../assets/images/icons/flags/django.png';
// import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
// import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
// import Chrome from '../../../assets/images/icons/flags/chrome.gif';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);
//   const [selectedRadio, setSelectedRadio] = React.useState(null);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const handleRadioChange = (event) => {
//     const radioValue = event.target.value;
//     if (selectedRadio === radioValue) {
//       setSelectedRadio(null); // Unselect the radio button if it's already selected
//       setValue(0); // Reset the tab value
//     } else {
//       setSelectedRadio(radioValue);
//       setValue(0); // Reset the tab value
//     }
//   };

//   const frontendApps = ['VsCode'];
//   const backendApps = [
//     'VsCode',
//     'GitHub',
//     'Homebrew',
//     'Sublime Text',
//     'Firefox',
//     'Zoom',
//     'Slack',
//     'Django',
//     'Python',
//     'Homebrew Cask',
//     'PyCharm',
//     'Chrome',
//   ];
//   const dataScienceApps = ['VsCode', 'GitHub', 'Homebrew', 'Python'];

//   let appsToShow = [];

//   if (selectedRadio === 'frontend') {
//     appsToShow = frontendApps;
//   } else if (selectedRadio === 'backend') {
//     appsToShow = backendApps;
//   } else if (selectedRadio === 'datascience') {
//     appsToShow = dataScienceApps;
//   }

//   return (
//     <Box
//       sx={{
//         bgcolor: 'background.paper',
//         width: 500,
//         position: 'relative',
//         minHeight: 200,
//       }}
//     >
//       <div>
//         <input
//           type="radio"
//           id="frontend"
//           name="appCategory"
//           value="frontend"
//           checked={selectedRadio === 'frontend'}
//           onChange={handleRadioChange}
//         />
//         <label htmlFor="frontend">Frontend</label>
//         <input
//           type="radio"
//           id="backend"
//           name="appCategory"
//           value="backend"
//           checked={selectedRadio === 'backend'}
//           onChange={handleRadioChange}
//         />
//         <label htmlFor="backend">Backend</label>
//         <input
//           type="radio"
//           id="datascience"
//           name="appCategory"
//           value="datascience"
//           checked={selectedRadio === 'datascience'}
//           onChange={handleRadioChange}
//         />
//         <label htmlFor="datascience">Data Science</label>
//       </div>
//       {selectedRadio ? (
//         <>
//           <AppBar position="static" color="default">
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               indicatorColor="primary"
//               textColor="primary"
//               variant="fullWidth"
//               aria-label="action tabs example"
//             >
//               <Tab label="Apps" {...a11yProps(0)} />
//             </Tabs>
//           </AppBar>
//           <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {value === 0 && (
//                 <>
//                   {appsToShow.map((app, index) => (
//                     <p
//                       key={index}
//                       className="flex content-center gap-4 align-items: center p-2"
//                     >
//                       {app}
//                     </p>
//                   ))}
//                 </>
//               )}
//             </TabPanel>
//           </SwipeableViews>
//         </>
//       ) : (
//         <Typography
//           component="div"
//           role="tabpanel"
//           hidden={false}
//           id="initial-message"
//           aria-labelledby="initial-message"
//         >
//           <Box sx={{ p: 3 }}>Get info relative to Your role</Box>
//         </Typography>
//       )}
//     </Box>
//   );
// }





// radiorole with image

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
// import Python from '../../../assets/images/icons/flags/python.gif';
// import Github from '../../../assets/images/icons/flags/github.gif';
// import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

// import Sublime from '../../../assets/images/icons/flags/sublime.png';
// import Firefox from '../../../assets/images/icons/flags/firefox.png';

// import Zoom from '../../../assets/images/icons/flags/zoom.png';

// import Slack from '../../../assets/images/icons/flags/slack.png';

// import Djando from '../../../assets/images/icons/flags/django.png';
// import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
// import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
// import Chrome from '../../../assets/images/icons/flags/chrome.gif';


// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [selectedRadio, setSelectedRadio] = useState(null);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const handleRadioChange = (event) => {
//     const radioValue = event.target.value;
//     if (selectedRadio === radioValue) {
//       setSelectedRadio(null); // Unselect the radio button if it's already selected
//       setValue(0); // Reset the tab value
//     } else {
//       setSelectedRadio(radioValue);
//       setValue(0); // Reset the tab value
//     }
//   };

//   const frontendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//   ];
//   const backendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Sublime Text', image: Sublime },
//     { name: 'Firefox', image: Firefox },
//     { name: 'Zoom', image: Zoom },
//     { name: 'Slack', image: Slack },
//     { name: 'Django', image: Djando },
//     {    name: 'Python', image: Python },
//     { name: 'Homebrew Cask', image: Cask },
//     { name: 'PyCharm', image: Pycharm },
//     { name: 'Chrome', image: Chrome },
//   ];
//   const dataScienceApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Python', image: Python },
//   ];

//   let appsToShow = [];

//   if (selectedRadio === 'frontend') {
//     appsToShow = frontendApps;
//   } else if (selectedRadio === 'backend') {
//     appsToShow = backendApps;
//   } else if (selectedRadio === 'datascience') {
//     appsToShow = dataScienceApps;
//   }

//   return (
//     // <DashboardLayout>
//       <> 
//     <h1 class='font-semibold mb-4'>Role category</h1>
//     <Box
//       sx={{
//         bgcolor: 'background.paper',
//         width: 500,
//         position: 'relative',
//         minHeight: 200,
       
//       }}
//     >
        
//       <div className="flex items-center gap-4 p-4">
//         <input
//           type="radio"
//           id="frontend"
//           name="appCategory"
//           value="frontend"
//           checked={selectedRadio === 'frontend'}
//           onChange={handleRadioChange}
//           className="mr-2"
//         />
//         <label htmlFor="frontend" className="cursor-pointer">
//           Frontend
//         </label>
//         <input
//           type="radio"
//           id="backend"
//           name="appCategory"
//           value="backend"
//           checked={selectedRadio === 'backend'}
//           onChange={handleRadioChange}
//           className="mr-2"
//         />
//         <label htmlFor="backend" className="cursor-pointer">
//           Backend
//         </label>
//         <input
//           type="radio"
//           id="datascience"
//           name="appCategory"
//           value="datascience"
//           checked={selectedRadio === 'datascience'}
//           onChange={handleRadioChange}
//           className="mr-2"
//         />
//         <label htmlFor="datascience" className="cursor-pointer">
//           Data Science
//         </label>
//       </div>
//       {selectedRadio ? (
//         <>
//           <AppBar position="static" color="default">
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               indicatorColor="primary"
//               textColor="primary"
//               variant="fullWidth"
//               aria-label="action tabs example"
//             >
//               <Tab label="Apps" />
//             </Tabs>
//           </AppBar>
//           <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//           >
//             <TabPanel value={value} index={0} dir={theme.direction}>
//               {appsToShow.map((app, index) => (
//                 <div key={index} className="flex items-center gap-4 p-2">
//                   <img src={app.image} alt={app.name} className="h-8 w-8" />
//                   <span>{app.name}</span>
//                 </div>
//               ))}
//             </TabPanel>
//           </SwipeableViews>
//         </>
//       ) : (
//         <Typography
//           component="div"
//           role="tabpanel"
//           hidden={false}
//           id="initial-message"
//           aria-labelledby="initial-message"
//           className="p-4 text-center"
//         >
//           <Box>Get info relative to Your role</Box>
//         </Typography>
//       )}
//     </Box>
//     </> 
    
//     // </DashboardLayout>
//   );
// }




// with dialog box

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
// import Python from '../../../assets/images/icons/flags/python.gif';
// import Github from '../../../assets/images/icons/flags/github.gif';
// import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

// import Sublime from '../../../assets/images/icons/flags/sublime.png';
// import Firefox from '../../../assets/images/icons/flags/firefox.png';

// import Zoom from '../../../assets/images/icons/flags/zoom.png';

// import Slack from '../../../assets/images/icons/flags/slack.png';

// import Djando from '../../../assets/images/icons/flags/django.png';
// import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
// import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
// import Chrome from '../../../assets/images/icons/flags/chrome.gif';

// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [selectedRadio, setSelectedRadio] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedApp, setSelectedApp] = useState(null);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const handleRadioChange = (event) => {
//     const radioValue = event.target.value;
//     if (selectedRadio === radioValue) {
//       setSelectedRadio(null);
//       setValue(0);
//     } else {
//       setSelectedRadio(radioValue);
//       setValue(0);
//     }
//   };

//   const frontendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//   ];

//   const backendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Sublime Text', image: Sublime },
//     { name: 'Firefox', image: Firefox },
//     { name: 'Zoom', image: Zoom },
//     { name: 'Slack', image: Slack },
//     { name: 'Django', image: Djando },
//     { name: 'Python', image: Python },
//     { name: 'Homebrew Cask', image: Cask },
//     { name: 'PyCharm', image: Pycharm },
//     { name: 'Chrome', image: Chrome },
//   ];

//   const dataScienceApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Python', image: Python },
//   ];

//   let appsToShow = [];

//   if (selectedRadio === 'frontend') {
//     appsToShow = frontendApps;
//   } else if (selectedRadio === 'backend') {
//     appsToShow = backendApps;
//   } else if (selectedRadio === 'datascience') {
//     appsToShow = dataScienceApps;
//   }

//   const handleOpenDialog = (app) => {
//     setSelectedApp(app);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <>
//       <h1 class='font-semibold mb-4'>Role category</h1>
//       <Box
//         sx={{
//           bgcolor: 'background.paper',
//           width: 500,
//           position: 'relative',
//           minHeight: 200,
//         }}
//       >
//         <div className="flex items-center gap-4 p-4">
//           <input
//             type="radio"
//             id="frontend"
//             name="appCategory"
//             value="frontend"
//             checked={selectedRadio === 'frontend'}
//             onChange={handleRadioChange}
//             className="mr-2"
//           />
//           <label htmlFor="frontend" className="cursor-pointer">
//             Frontend
//           </label>
//           <input
//             type="radio"
//             id="backend"
//             name="appCategory"
//             value="backend"
//             checked={selectedRadio === 'backend'}
//             onChange={handleRadioChange}
//             className="mr-2"
//           />
//           <label htmlFor="backend" className="cursor-pointer">
//             Backend
//           </label>
//           <input
//             type="radio"
//             id="datascience"
//             name="appCategory"
//             value="datascience"
//             checked={selectedRadio === 'datascience'}
//             onChange={handleRadioChange}
//             className="mr-2"
//           />
//           <label htmlFor="datascience" className="cursor-pointer">
//             Data Science
//           </label>
//         </div>
//         {selectedRadio ? (
//           <>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="fullWidth"
//                 aria-label="action tabs example"
//               >
//                 <Tab label="Apps" />
//               </Tabs>
//             </AppBar>
//             <SwipeableViews
//               axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//               index={value}
//               onChangeIndex={handleChangeIndex}
//             >
//               <TabPanel value={value} index={0} dir={theme.direction}>
//                 {appsToShow.map((app, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 p-2"
//                     onClick={() => handleOpenDialog(app)}
//                   >
//                     <img src={app.image} alt={app.name} className="h-8 w-8" />
//                     <span>{app.name}</span>
//                   </div>
//                 ))}
//               </TabPanel>
//             </SwipeableViews>
//           </>
//         ) : (
//           <Typography
//             component="div"
//             role="tabpanel"
//             hidden={false}
//             id="initial-message"
//             aria-labelledby="initial-message"
//             className="p-4 text-center"
//           >
//             <Box>Get info relative to Your role</Box>
//           </Typography>
//         )}
//       </Box>

//       {/* Dialog */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>{selectedApp && selectedApp.name}</DialogTitle>
//         <DialogContent>
//           {/* Add the content for the dialog here */}
//           <p>Dialog content goes here...</p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }




// dialog box with cursor pointer in middle 

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
// import Python from '../../../assets/images/icons/flags/python.gif';
// import Github from '../../../assets/images/icons/flags/github.gif';
// import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

// import Sublime from '../../../assets/images/icons/flags/sublime.png';
// import Firefox from '../../../assets/images/icons/flags/firefox.png';

// import Zoom from '../../../assets/images/icons/flags/zoom.png';

// import Slack from '../../../assets/images/icons/flags/slack.png';

// import Djando from '../../../assets/images/icons/flags/django.png';
// import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
// import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
// import Chrome from '../../../assets/images/icons/flags/chrome.gif';

// import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
// import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';

// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [selectedRadio, setSelectedRadio] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedApp, setSelectedApp] = useState(null);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const handleRadioChange = (event) => {
//     const radioValue = event.target.value;
//     if (selectedRadio === radioValue) {
//       setSelectedRadio(null); // Unselect the radio button if it's already selected
//       setValue(0); // Reset the tab value
//     } else {
//       setSelectedRadio(radioValue);
//       setValue(0); // Reset the tab value
//     }
//   };

//   const frontendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//   ];
//   const backendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Sublime Text', image: Sublime },
//     { name: 'Firefox', image: Firefox },
//     { name: 'Zoom', image: Zoom },
//     { name: 'Slack', image: Slack },
//     { name: 'Django', image: Djando },
//     { name: 'Python', image: Python },
//     { name: 'Homebrew Cask', image: Cask },
//     { name: 'PyCharm', image: Pycharm },
//     { name: 'Chrome', image: Chrome },
//   ];
//   const dataScienceApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Python', image: Python },
//   ];

//   let appsToShow = [];

//   if (selectedRadio === 'frontend') {
//     appsToShow = frontendApps;
//   } else if (selectedRadio === 'backend') {
//     appsToShow = backendApps;
//   } else if (selectedRadio === 'datascience') {
//     appsToShow = dataScienceApps;
//   }

//   const handleOpenDialog = (app) => {
//     setSelectedApp(app);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <>
//       <h1 className="font-semibold mb-4">Role category</h1>
//       <Box
//         sx={{
//           bgcolor: 'background.paper',
//           width: 500,
//           position: 'relative',
//           minHeight: 200,
//         }}
//       >
//         <div className="flex items-center gap-4 p-4">
//           <input
//             type="radio"
//             id="frontend"
//             name="appCategory"
//             value="frontend"
//             checked={selectedRadio === 'frontend'}
//             onChange={handleRadioChange}
//             className="mr-2"
//           />
//           <label htmlFor="frontend" className="cursor-pointer">
//             Frontend
//           </label>
//           <input
//             type="radio"
//             id="backend"
//             name="appCategory"
//             value="backend"
//             checked={selectedRadio === 'backend'}
//             onChange={handleRadioChange}
//             className="mr-2"
//           />
//           <label htmlFor="backend" className="cursor-pointer">
//             Backend
//           </label>
//           <input
//             type="radio"
//             id="datascience"
//             name="appCategory"
//             value="datascience"
//             checked={selectedRadio === 'datascience'}
//             onChange={handleRadioChange}
//             className="mr-2"
//           />
//           <label htmlFor="datascience" className="cursor-pointer">
//             Data Science
//           </label>
//         </div>
//         {selectedRadio ? (
//           <>
//             <AppBar position="static" color="default">
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="fullWidth"
//                 aria-label="action tabs example"
//               >
//                 <Tab label="Apps" />
//               </Tabs>
//             </AppBar>
//             <SwipeableViews
//               axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//               index={value}
//               onChangeIndex={handleChangeIndex}
//             >
//               <TabPanel value={value} index={0} dir={theme.direction}>
//                 {appsToShow.map((app, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 p-2"
//                     onClick={() => handleOpenDialog(app)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <img src={app.image} alt={app.name} className="h-8 w-8" />
//                     <span>{app.name}</span>
//                   </div>
//                 ))}
//               </TabPanel>
//             </SwipeableViews>
//           </>
//         ) : (
//           <Typography
//             component="div"
//             role="tabpanel"
//             hidden={false}
//             id="initial-message"
//             aria-labelledby="initial-message"
//             className="p-4 text-center"
//           >
//             <Box>Get info relative to Your role</Box>
//           </Typography>
//         )}
//       </Box>

//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         aria-labelledby="app-dialog-title"
//       >
//         <DialogTitle id="app-dialog-title">{selectedApp?.name}</DialogTitle>
//         <DialogContent>
//           {/* Replace this with your dialog content */}
//           <Typography>
//             This is the dialog content for {selectedApp?.name}.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }




// div box at right side

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import VisualCode from '../../../assets/images/icons/flags/visual-studio.png';
// import Python from '../../../assets/images/icons/flags/python.gif';
// import Github from '../../../assets/images/icons/flags/github.gif';
// import Homebrew from '../../../assets/images/icons/flags/homebrew.png';

// import Sublime from '../../../assets/images/icons/flags/sublime.png';
// import Firefox from '../../../assets/images/icons/flags/firefox.png';

// import Zoom from '../../../assets/images/icons/flags/zoom.png';

// import Slack from '../../../assets/images/icons/flags/slack.png';

// import Djando from '../../../assets/images/icons/flags/django.png';
// import Cask from '../../../assets/images/icons/flags/homebrewCask.png';
// import Pycharm from '../../../assets/images/icons/flags/pycharm.gif';
// import Chrome from '../../../assets/images/icons/flags/chrome.gif';

// import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
// import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [selectedRadio, setSelectedRadio] = useState(null);
//   const [selectedApp, setSelectedApp] = useState(null);
//   const [openContainer, setOpenContainer] = useState(false);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const handleRadioChange = (event) => {
//     const radioValue = event.target.value;
//     if (selectedRadio === radioValue) {
//       setSelectedRadio(null); // Unselect the radio button if it's already selected
//       setValue(0); // Reset the tab value
//     } else {
//       setSelectedRadio(radioValue);
//       setValue(0); // Reset the tab value
//     }
//   };

//   const frontendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//   ];
//   const backendApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Sublime Text', image: Sublime },
//     { name: 'Firefox', image: Firefox },
//     { name: 'Zoom', image: Zoom },
//     { name: 'Slack', image: Slack },
//     { name: 'Django', image: Djando },
//     { name: 'Python', image: Python },
//     { name: 'Homebrew Cask', image: Cask },
//     { name: 'PyCharm', image: Pycharm },
//     { name: 'Chrome', image: Chrome },
//   ];
//   const dataScienceApps = [
//     { name: 'VsCode', image: VisualCode },
//     { name: 'GitHub', image: Github },
//     { name: 'Homebrew', image: Homebrew },
//     { name: 'Python', image: Python },
//   ];

//   let appsToShow = [];

//   if (selectedRadio === 'frontend') {
//     appsToShow = frontendApps;
//   } else if (selectedRadio === 'backend') {
//     appsToShow = backendApps;
//   } else if (selectedRadio === 'datascience') {
//     appsToShow = dataScienceApps;
//   }

//   const handleAppSelection = (app) => {
//     setSelectedApp(app);
//     setOpenContainer(true);
//   };

//   const handleCloseContainer = () => {
//     setOpenContainer(false);
//   };

//   return (
//     <>
      
//         <h1 className="font-semibold mb-4">Role category</h1>
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             width: 500,
//             position: 'relative',
//             minHeight: 200,
//           }}
//         >
//           <div className="flex items-center gap-4 p-4">
//             <input
//               type="radio"
//               id="frontend"
//               name="appCategory"
//               value="frontend"
//               checked={selectedRadio === 'frontend'}
//               onChange={handleRadioChange}
//               className="mr-2"
//             />
//             <label htmlFor="frontend" className="cursor-pointer">
//               Frontend
//             </label>
//             <input
//               type="radio"
//               id="backend"
//               name="appCategory"
//               value="backend"
//               checked={selectedRadio === 'backend'}
//               onChange={handleRadioChange}
//               className="mr-2"
//             />
//             <label htmlFor="backend" className="cursor-pointer">
//               Backend
//             </label>
//             <input
//               type="radio"
//               id="datascience"
//               name="appCategory"
//               value="datascience"
//               checked={selectedRadio === 'datascience'}
//               onChange={handleRadioChange}
//               className="mr-2"
//             />
//             <label htmlFor="datascience" className="cursor-pointer">
//               Data Science
//             </label>
//           </div>
//           {selectedRadio ? (
//             <>
//               <AppBar position="static" color="default">
//                 <Tabs
//                   value={value}
//                   onChange={handleChange}
//                   indicatorColor="primary"
//                   textColor="primary"
//                   variant="fullWidth"
//                   aria-label="action tabs example"
//                 >
//                   <Tab label="Apps" />
//                 </Tabs>
//               </AppBar>
//               <SwipeableViews
//                 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                 index={value}
//                 onChangeIndex={handleChangeIndex}
//               >
//                 <TabPanel value={value} index={0} dir={theme.direction}>
//                   {appsToShow.map((app, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-4 p-2 cursor-pointer"
//                       onClick={() => handleAppSelection(app)}
//                     >
//                       <img src={app.image} alt={app.name} className="h-8 w-8" />
//                       <span>{app.name}</span>
//                     </div>
//                   ))}
//                 </TabPanel>
//               </SwipeableViews>
//             </>
//           ) : (
//             <Typography
//               component="div"
//               role="tabpanel"
//               hidden={false}
//               id="initial-message"
//               aria-labelledby="initial-message"
//               className="p-4 text-center"
//             >
//               <Box>Get info relative to Your role</Box>
//             </Typography>
//           )}
//           {openContainer && selectedApp && (
//             <div className="absolute top-0 right-0 bg-gray-200 h-full w-80 p-4">
//               {/* Your content inside the container */}
//               <h2 className="text-lg font-semibold mb-4">App Information</h2>
//               <div className="flex items-center gap-4">
//                 <img src={selectedApp.image} alt={selectedApp.name} className="h-8 w-8" />
//                 <span>{selectedApp.name}</span>
//               </div>
//               <p className="mt-2">Some additional information about the selected app.</p>
//               <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
//                 Open App
//               </button>
//               <button className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//                 Close Container
//               </button>
//             </div>
//           )}
//         </Box>
      
//     </>
//   );
// }




import React, { useState } from 'react';
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
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

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

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [openContainer, setOpenContainer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleRadioChange = (event) => {
    const radioValue = event.target.value;
    if (selectedRadio === radioValue) {
      setSelectedRadio(null); // Unselect the radio button if it's already selected
      setValue(0); // Reset the tab value
    } else {
      setSelectedRadio(radioValue);
      setValue(0); // Reset the tab value
    }
  };

  const frontendApps = [
    { name: 'VsCode', image: VisualCode },
    { name: 'GitHub', image: Github },
    { name: 'Homebrew', image: Homebrew },
  ];
  const backendApps = [
    { name: 'VsCode', image: VisualCode },
    { name: 'GitHub', image: Github },
    { name: 'Homebrew', image: Homebrew },
    { name: 'Sublime Text', image: Sublime },
    { name: 'Firefox', image: Firefox },
    { name: 'Zoom', image: Zoom },
    { name: 'Slack', image: Slack },
    { name: 'Django', image: Djando },
    { name: 'Python', image: Python },
    { name: 'Homebrew Cask', image: Cask },
    { name: 'PyCharm', image: Pycharm },
    { name: 'Chrome', image: Chrome },
  ];
  const dataScienceApps = [
    { name: 'VsCode', image: VisualCode },
    { name: 'GitHub', image: Github },
    { name: 'Homebrew', image: Homebrew },
    { name: 'Python', image: Python },
  ];

  let appsToShow = [];

  if (selectedRadio === 'frontend') {
    appsToShow = frontendApps;
  } else if (selectedRadio === 'backend') {
    appsToShow = backendApps;
  } else if (selectedRadio === 'datascience') {
    appsToShow = dataScienceApps;
  }

  const handleAppClick = (app) => {
    setSelectedApp(app);
    setOpenContainer(true);
  };

  const handleCloseContainer = () => {
    setOpenContainer(false);
  };

  return (
    
      <>
      <h1 className="font-semibold mb-4">Role category</h1>
      <div className="flex flex-row gap-8 ">
        
        <Box
          sx={{
            bgcolor: 'background.paper',
            width: 500,
            position: 'relative',
            minHeight: 200,
            borderRadius:2,
          }}
        >
          <div className="flex items-center gap-4 p-4">
            <input
              type="radio"
              id="frontend"
              name="appCategory"
              value="frontend"
              checked={selectedRadio === 'frontend'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="frontend" className="cursor-pointer">
              Frontend
            </label>
            <input
              type="radio"
              id="backend"
              name="appCategory"
              value="backend"
              checked={selectedRadio === 'backend'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="backend" className="cursor-pointer">
              Backend
            </label>
            <input
              type="radio"
              id="datascience"
              name="appCategory"
              value="datascience"
              checked={selectedRadio === 'datascience'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="datascience" className="cursor-pointer">
              Data Science
            </label>
          </div>
          {selectedRadio ? (
            <>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="action tabs example"
                >
                  <Tab label="Apps" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
               <TabPanel value={value} index={0} dir={theme.direction}>
                {appsToShow.map((app, index) => (
                    <div
                    key={index}
                    className="flex items-center gap-4 p-2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAppClick(app)}
                    >
                    <img
                        src={app.image}
                        alt={app.name}
                        className="h-8 w-8"
                    />
                    <span>{app.name}</span>
                    </div>
                ))}
                </TabPanel>
              </SwipeableViews>
            </>
          ) : (
            <Typography
              component="div"
              role="tabpanel"
              hidden={false}
              id="initial-message"
              aria-labelledby="initial-message"
              className="p-4 text-center"
            >
              <Box>Get info relative to Your role</Box>
            </Typography>
          )}
        </Box>






        {openContainer && (
           
          <div className="flex flex-col items-center rounded p-4  text-white bg-purple-500 bg-opacity-25  shadow-lg backdrop-blur backdrop-filter border border-purple-500 border-opacity-25">
            <h2 className="text-2xl font-bold">Selected App</h2>
            <div className="flex items-center gap-4 mt-2">
              <img
                src={selectedApp.image}
                alt={selectedApp.name}
                className="h-8 w-8"
              />
              <span>{selectedApp.name}</span>
            </div>




            {selectedApp.name === 'VsCode'?'Visual Studio Code (VS Code) is a lightweight and fast source code editor developed by Microsoft. It offers cross-platform compatibility and a highly customizable interface, allowing developers to personalize their coding environment. '
            :selectedApp.name === 'GitHub'?'GitHub is a web-based platform that serves as a hosting service for version control repositories. It allows developers to collaborate on projects, track changes to code, and manage software development workflows. '
            :selectedApp.name === 'Homebrew'?"Homebrew is a package manager for macOS, designed to simplify the installation and management of software packages on Apple's operating system. It provides a command-line interface that allows users to easily install, update, and uninstall various software packages, libraries, and utilities."
            :selectedApp.name === 'Sublime Text'?'Sublime Text is a fast, minimalist text editor with a powerful feature set. It supports multiple platforms and provides a clean interface for distraction-free coding. It offers extensive text editing capabilities, including multiple selections and powerful search and replace functionality. '
            :selectedApp.name === 'Firefox'?'Firefox is a versatile web browser that emphasizes speed, security, and user privacy. Its customizable nature, extensive feature set, and commitment to open-source principles have made it a popular choice among internet users.'
            :selectedApp.name === 'Zoom'?'Zoom is a widely used video conferencing platform that allows people to communicate and collaborate remotely. It supports high-quality video meetings with screen sharing, chat, and file sharing capabilities. Users can schedule and record meetings, integrate with calendars, and use virtual backgrounds. Zoom prioritizes security and privacy, and it is compatible with various devices and offers third-party integrations.'
            :selectedApp.name === 'Slack'?'Slack is a communication and collaboration platform designed for teams and organizations. It provides a digital workspace where users can communicate, share files, and collaborate on projects.'
            :selectedApp.name === 'Django'?'Django is a high-level Python web framework that promotes rapid development of web applications. It follows the MVC architectural pattern and provides an ORM for simplified database interactions. With a flexible URL routing system and built-in templating engine, developers can easily handle requests and generate dynamic content. Django includes authentication, authorization, and an admin interface for managing application data. It offers scalability, performance optimization, and has a vibrant ecosystem of third-party libraries. Django has a supportive community and comprehensive documentation. Overall, Django is a powerful framework for building robust web applications efficiently.'
            :selectedApp.name === 'Python'?"Python's versatility, simplicity, and extensive ecosystem of libraries and frameworks have made it a popular choice among developers for a wide range of applications, from small scripts to large-scale projects."
            :selectedApp.name === 'Homebrew Cask'?'Homebrew Cask is an extension to the Homebrew package manager for macOS, designed to simplify the installation and management of graphical applications and larger binary files. '
            :selectedApp.name === 'PyCharm'?'PyCharm is widely used by Python developers for its comprehensive set of features, intelligent code assistance, and seamless integration with Python frameworks and libraries. It offers an efficient and productive environment for Python development projects of any size or complexity.'
            :selectedApp.name === 'Chrome'?"Chrome's combination of speed, security, and extensive features has made it one of the most widely used web browsers globally, offering a user-friendly and versatile browsing experience.":''
            
            }

            

            
            <button
              className="bg-red-500 text-white px-4 py-2 mt-4"
              onClick={handleCloseContainer}
            >
              Close 
            </button>
          </div>
         
        )
        
        }
      </div>
      </>
    
  );
}
