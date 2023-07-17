import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import VisualCode from "../../../assets/images/icons/flags/visual-studio.png";
import Python from "../../../assets/images/icons/flags/python.gif";
import Github from "../../../assets/images/icons/flags/github.gif";
import Homebrew from "../../../assets/images/icons/flags/homebrew.png";
import Sublime from "../../../assets/images/icons/flags/sublime.png";
import Firefox from "../../../assets/images/icons/flags/firefox.png";
import Zoom from "../../../assets/images/icons/flags/zoom.png";
import Slack from "../../../assets/images/icons/flags/slack.png";
import Djando from "../../../assets/images/icons/flags/django.png";
import Cask from "../../../assets/images/icons/flags/homebrewCask.png";
import Pycharm from "../../../assets/images/icons/flags/pycharm.gif";
import Chrome from "../../../assets/images/icons/flags/chrome.gif";
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
    { name: "VsCode", image: VisualCode },
    { name: "GitHub", image: Github },
    { name: "Homebrew", image: Homebrew },
    { name: "Homebrew Cask", image: Cask },
    { name: "Sublime Text", image: Sublime },
    { name: "Slack", image: Slack },
    { name: "Chrome", image: Chrome },
    { name: "GitHub", image: Github },
  ];
  const backendApps = [
    { name: "VsCode", image: VisualCode },
    { name: "GitHub", image: Github },
    { name: "Homebrew", image: Homebrew },
    { name: "Sublime Text", image: Sublime },
    { name: "Firefox", image: Firefox },
    { name: "Zoom", image: Zoom },
    { name: "Slack", image: Slack },
    { name: "Django", image: Djando },
    { name: "Python", image: Python },
    { name: "Homebrew Cask", image: Cask },
    { name: "PyCharm", image: Pycharm },
    { name: "Chrome", image: Chrome },
  ];
  const dataScienceApps = [
    { name: "VsCode", image: VisualCode },
    { name: "GitHub", image: Github },
    { name: "Homebrew", image: Homebrew },
    { name: "Python", image: Python },
    { name: "Homebrew Cask", image: Cask },
    { name: "Sublime Text", image: Sublime },
    { name: "Slack", image: Slack },
    { name: "Firefox", image: Firefox },
  ];

  let appsToShow = [];

  if (selectedRadio === "frontend") {
    appsToShow = frontendApps;
  } else if (selectedRadio === "backend") {
    appsToShow = backendApps;
  } else if (selectedRadio === "datascience") {
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
            bgcolor: "background.paper",
            width: 500,
            position: "relative",
            minHeight: 200,
            borderRadius: 2,
          }}
        >
          <div className="flex items-center gap-4 p-4">
            <input
              type="radio"
              id="frontend"
              name="appCategory"
              value="frontend"
              checked={selectedRadio === "frontend"}
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
              checked={selectedRadio === "backend"}
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
              checked={selectedRadio === "datascience"}
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
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  {appsToShow.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleAppClick(app)}
                    >
                      <img src={app.image} alt={app.name} className="h-8 w-8" />
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

            {selectedApp.name === "VsCode"
              ? "Visual Studio Code (VS Code) is a lightweight and fast source code editor developed by Microsoft. It offers cross-platform compatibility and a highly customizable interface, allowing developers to personalize their coding environment. "
              : selectedApp.name === "GitHub"
              ? "GitHub is a web-based platform that serves as a hosting service for version control repositories. It allows developers to collaborate on projects, track changes to code, and manage software development workflows. "
              : selectedApp.name === "Homebrew"
              ? "Homebrew is a package manager for macOS, designed to simplify the installation and management of software packages on Apple's operating system. It provides a command-line interface that allows users to easily install, update, and uninstall various software packages, libraries, and utilities."
              : selectedApp.name === "Sublime Text"
              ? "Sublime Text is a fast, minimalist text editor with a powerful feature set. It supports multiple platforms and provides a clean interface for distraction-free coding. It offers extensive text editing capabilities, including multiple selections and powerful search and replace functionality. "
              : selectedApp.name === "Firefox"
              ? "Firefox is a versatile web browser that emphasizes speed, security, and user privacy. Its customizable nature, extensive feature set, and commitment to open-source principles have made it a popular choice among internet users."
              : selectedApp.name === "Zoom"
              ? "Zoom is a widely used video conferencing platform that allows people to communicate and collaborate remotely. It supports high-quality video meetings with screen sharing, chat, and file sharing capabilities. Users can schedule and record meetings, integrate with calendars, and use virtual backgrounds. Zoom prioritizes security and privacy, and it is compatible with various devices and offers third-party integrations."
              : selectedApp.name === "Slack"
              ? "Slack is a communication and collaboration platform designed for teams and organizations. It provides a digital workspace where users can communicate, share files, and collaborate on projects."
              : selectedApp.name === "Django"
              ? "Django is a high-level Python web framework that promotes rapid development of web applications. It follows the MVC architectural pattern and provides an ORM for simplified database interactions. With a flexible URL routing system and built-in templating engine, developers can easily handle requests and generate dynamic content. Django includes authentication, authorization, and an admin interface for managing application data. It offers scalability, performance optimization, and has a vibrant ecosystem of third-party libraries. Django has a supportive community and comprehensive documentation. Overall, Django is a powerful framework for building robust web applications efficiently."
              : selectedApp.name === "Python"
              ? "Python's versatility, simplicity, and extensive ecosystem of libraries and frameworks have made it a popular choice among developers for a wide range of applications, from small scripts to large-scale projects."
              : selectedApp.name === "Homebrew Cask"
              ? "Homebrew Cask is an extension to the Homebrew package manager for macOS, designed to simplify the installation and management of graphical applications and larger binary files. "
              : selectedApp.name === "PyCharm"
              ? "PyCharm is widely used by Python developers for its comprehensive set of features, intelligent code assistance, and seamless integration with Python frameworks and libraries. It offers an efficient and productive environment for Python development projects of any size or complexity."
              : selectedApp.name === "Chrome"
              ? "Chrome's combination of speed, security, and extensive features has made it one of the most widely used web browsers globally, offering a user-friendly and versatile browsing experience."
              : ""}

            <button
              className="bg-red-500 text-white px-4 py-2 mt-4"
              onClick={handleCloseContainer}
            >
              Close Container
            </button>
          </div>
        )}
      </div>
    </>
  );
}
