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
              <p>
                <FontAwesomeIcon icon={faFile} /> VSCode
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> GitHub
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> Homebrew
              </p>
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {value === 1 && (
            <>
              <p>
                <FontAwesomeIcon icon={faFile} /> VSCode
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> GitHub
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> Homebrew
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> Sublime Text
              </p>
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {value === 2 && (
            <>
              <p>
                <FontAwesomeIcon icon={faFile} /> VSCode
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> GitHub
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> Homebrew
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> Python
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} /> PIP
              </p>
            </>
          )}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
