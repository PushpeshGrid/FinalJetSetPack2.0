// import React from 'react';
import Typed from 'react-typed';


// material ui for learnmore dialogbox

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  





const Welcome = () => {


// for learnmore dialog

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};







  return (
    <div className='text-[#6bb5ff]'>
      <div className='max-w-[800px] mt-[-40px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#131a18] font-bold p-2'>
          Welcome to Our website
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with Us.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Flexible for automate tools
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['SLACK', 'GITHUB', 'TOOLS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'> Automate setup of core tools platforms.</p>




        <div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'  onClick={handleClickOpen}>Learn More</button>
                <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                JetSetPack2.0
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                A developer should not have to go through the hassle of searching for an existing virtual machine or, worse yet, manually installing the entire environment from scratch.
                </Typography>
                <Typography gutterBottom>
                Provide basic functionality to spin up development environments in the cloud with required tools installed and configured based on each company's needs. Start with a couple core options like local dev machine setup, staging environment, production, etc. Expand and customize over time.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>

            



      </div>
      <h2>Hi Click Here </h2>
    </div>
  );
};

export default Welcome;