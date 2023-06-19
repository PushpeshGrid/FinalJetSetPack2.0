// import React from 'react';
import Typed from 'react-typed';

import React, { useRef, useState } from 'react';
import { FaCopy } from 'react-icons/fa';


// material ui for learnmore dialogbox

// import * as React from 'react';
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

    // forcopyingintoclipboard


    const boxRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const box = boxRef.current;
    const range = document.createRange();
    range.selectNodeContents(box);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    setCopied(true);
  };







// for learnmore dialog

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};


const handleClickUsewebsite = () => {
    setOpen(true);
  };




  return (
    <div className='text-[#6bb5ff]'>
      <div className='max-w-[800px] mt-[-40px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#131a18] font-bold p-2'>
          Welcome to JetSetPack
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
      <div className='flex justify-flex start'>
      <h2 className = 'mx-5'>Here's a quick tutorial on how to use our site for New Users: </h2>

      <div>
        <button className='bg-[#0082df] w-[100px] rounded-md font-medium mx-3  text-white' onClick={handleClickUsewebsite}>Info</button>
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
                    1. get your username from the below command
                </Typography>

                <Typography gutterBottom
                ref={boxRef}
                
                
                >
                    whoami
                </Typography>
                <button className = 'flex justify-start my-2 text-[#5056fd]'onClick={handleCopyToClipboard}>
                    <FaCopy /> Copy text
                </button>
                {copied && <p className='text-[#5056fd]'>Text copied to clipboard!</p>}



                <Typography gutterBottom>
                    2. Copy the script provided below and paste it into the created file.
                </Typography>

                <Typography gutterBottom
                    ref={boxRef}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '10px',
                        minHeight: '200px',
                        backgroundColor: '#f5f5f5',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        margin: '10px 0',
                        whiteSpace: 'pre-wrap',
                        }}
                >
                
                #!/bin/bash
                key="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCsqOwEaw6pvYekU
                uv9lBHUBzHH26pzvRkLoC7z6+WlGR4FaN95KcXBlHWHjjSi8y0ay1o0m+
                CL7tGIZhfRzAOhVFcqw
                SmDurB/MaX+cfOJn18TMyUBWG7CPP6NyuLlBYuC9z5dz/g6e/08qT4dMhY+94y1eByT
                SNmYUFbXy+2gXQXA7lxg414cWGLd0UhDPwS11DUdUzvxe7wTrzYSURcgG29k+PBHnySn
                /zpjniKs1SnwZdeXYFNYYw+aLs5aRZXs0yw+bzF04fE4bfIW/TAGb7ltcuS0XtNIAjCd
                SVHH3LkIvDxQTd7MjESTCQlO3b0ESizRgjaf5tJNyH+AvgN+fSL47TrcDFKT3HoBl27Fr
                IHJm+z5SfqoSzz+GrCOtCKfiv8SFx/EUT+jyaoYD+5TcnkbYOLaYkHvBoAbhgET/IxCdv
                8uwuok73LIWyJqy8v4oV1F8EBtIHX1vjZbP+V7j3tJ9T3GXqCR8nLhpiYfZCtkO9knFtnaca
                fgA/XHpMM= rsah@rsahs-MacBook-Pro.local"
                tmp_file=$(mktemp)
                echo "$key" {'>'} "$tmp_file"
                cat "$tmp_file" {'>>'} ~/.ssh/authorized_keys
                rm "$tmp_file"

             
                </Typography>
                <button className = 'flex justify-start my-2 text-[#5056fd]'onClick={handleCopyToClipboard}>
                    <FaCopy /> Copy text
                </button>
                {copied && <p className='text-[#5056fd]'>Text copied to clipboard!</p>}

                <Typography gutterBottom>
                    3. Navigate to the file path.
                </Typography>
                <Typography gutterBottom>
                    4. Execute the script using the provided command.
                </Typography>

                <Typography gutterBottom
                
                >
                    bash ssh.sh
                </Typography>

                <Typography gutterBottom>
                    5. You are now ready to use our website. 
                </Typography>
                


                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    AGREE
                </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>

      </div>
    </div>
  );
};

export default Welcome;