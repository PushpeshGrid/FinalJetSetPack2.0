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
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [copied5, setCopied5] = useState(false);











  const handleCopyToClipboard1 = () => {
    const text = document.getElementById('command1');
    const range = document.createRange();
    range.selectNodeContents(text);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    setCopied1(true);
    // const box = boxRef.current;
    // const range = document.createRange();
    // range.selectNodeContents(box);
    // const selection = window.getSelection();
    // selection.removeAllRanges();
    // selection.addRange(range);
    // document.execCommand('copy');
    // selection.removeAllRanges();
    // setCopied(true);
  };

  const handleCopyToClipboard2 = () => {

    const text = document.getElementById('command2');
    const range = document.createRange();
    range.selectNodeContents(text);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    setCopied2(true);
  };
  const handleCopyToClipboard3 = () => {
  
    const text = document.getElementById('command3');
    const range = document.createRange();
    range.selectNodeContents(text);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    setCopied3(true);
  };
  const handleCopyToClipboard4 = () => {
 
    const text = document.getElementById('command4');
    const range = document.createRange();
    range.selectNodeContents(text);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    setCopied4(true);
  };
  const handleCopyToClipboard5 = () => {
   
    const text = document.getElementById('command5');
    const range = document.createRange();
    range.selectNodeContents(text);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    setCopied5(true);
  };





















// for learnmore dialog

const [openLearnmore, setOpenLearnmore] = React.useState(false);
const [openInfo, setOpenInfo] = React.useState(false);

const handleClickLearn = () => {
  setOpenLearnmore(true);
};
const handleCloseLearn = () => {
  setOpenLearnmore(false);
};


const handleClickInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };




  return (
    <div className='text-[#6bb5ff]'>
      <div className='max-w-[800px] mt-[-140px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
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
                <button className='bg-[#00df9a] hover:bg-violet-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'  onClick={handleClickLearn}>Learn More</button>
                <BootstrapDialog
                onClose={handleCloseLearn}
                aria-labelledby="customized-dialog-title"
                open={openLearnmore}
                >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseLearn}>
                JetSetPack2.0
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                  A developer should not have to go through the hassle of searching for and installing required tools or, worse yet, manually installing the entire environment from scratch.
                  We provide basic functionality to spin up development environments on a local machine with the required tools already installed and configured based on each user''s needs. We start with a couple of core options like setting up a local development machine, staging environment, production, etc., and then expand and customize them over time.
                </Typography>
                <Typography gutterBottom>
                Provide basic functionality to spin up development environments in the cloud with required tools installed and configured based on each company's needs. Start with a couple core options like local dev machine setup, staging environment, production, etc. Expand and customize over time.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleCloseLearn}>
                    Cancel
                </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>

            



      </div>
      <div className='flex justify-flex start text-center flex-col mt-[-150px]'>
      <h2 className = ' md:text-2xl mx-auto text-center flex flex-col justify-center'>Here's a quick tutorial on how to use our site for New Users </h2>

      <div>
        <button className='bg-[#0082df] hover:bg-violet-600  w-[100px] rounded-md font-medium mx-3 text-white mt-1' onClick={handleClickInfo}>Info</button>
        <BootstrapDialog
                onClose={handleCloseInfo}
                aria-labelledby="customized-dialog-title"
                open={openInfo}
                >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseInfo}>
                    JetSetPack2.0
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom class='text-base'>
                    1. Get your username from the below command
                </Typography>

                <Typography gutterBottom

                    id = 'command1'
                    ref={boxRef}
                    className="flex justify-start border border-gray-300 rounded-md p-1 min-h-200 bg-gray-100 font-sans leading-6 my-4 whitespace-pre-wrap"
                    style = {{fontSize: '13px'}}
                >
                    whoami
                </Typography>
                <button className = 'flex justify-start my-2 text-[#bfc1c2]'onClick={handleCopyToClipboard1}>
                    <FaCopy /> 
                </button>
                {copied1 && <p className='text-[#bfc1c2]'>Copied </p>}



                <Typography gutterBottom class='text-base'>
                    2. Copy the user and keep it
                </Typography>

                <Typography gutterBottom class='text-base'>
                    3. Switch to root user
                </Typography>

                <Typography gutterBottom
                    id = 'command2'
                    ref={boxRef}
                    className="flex justify-start border border-gray-300 rounded-md p-1 min-h-200 bg-gray-100 font-sans leading-6 my-4 whitespace-pre-wrap"
                    style = {{fontSize: '13px'}}
                >
                    sudo su - 
                </Typography>
                <button className = 'flex justify-start my-2 text-[#bfc1c2]'onClick={handleCopyToClipboard2}>
                    <FaCopy /> 
                </button>
                {copied2 && <p className='text-[#bfc1c2]'>Copied </p>}



                <Typography gutterBottom class='text-base'>
                    4. Copying ansible keys to authorized keys
                </Typography>


                <Typography gutterBottom
                    id = 'command3'
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
                
                echo "ssh-rsa 
                AAAAB3NzaC1yc2EAAAADAQABAAABgQCsqOwEaw6pvYekUuv9lBHUBzHH26pzvRk
                LoC7z6+WlGR4FaN95KcXBlHWHjjSi8y0ay1o0m+CL7tGIZhfRzAOhVFcqwSmDu
                rB/MaX+cfOJn18TMyUBWG7CPP6NyuLlBYuC9z5dz/g6e/08qT4dMhY+94y1eBy
                TSNmYUFbXy+2gXQXA7lxg414cWGLd0UhDPwS11DUdUzvxe7wTrzYSURcgG29k+
                PBHnySn/zpjniKs1SnwZdeXYFNYYw+aLs5aRZXs0yw+bzF04fE4bfIW/TAGb7
                ltcuS0XtNIAjCdSVHH3LkIvDxQTd7MjESTCQlO3b0ESizRgjaf5tJNyH+AvgN+
                fSL47TrcDFKT3HoBl27FrIHJm+z5SfqoSzz+GrCOtCKfiv8SFx/EUT+jyaoYD
                +5TcnkbYOLaYkHvBoAbhgET/IxCdv8uwuok73LIWyJqy8v4oV1F8EBtIHX1v
                jZbP+V7j3tJ9T3GXqCR8nLhpiYfZCtkO9knFtnacafgA/XHpMM= rsah@rsahs-MacBook-Pro.local" {'>>'} ~/.ssh/authorized_keys
                </Typography>
                <button className = 'flex justify-start my-2 text-[#bfc1c2]'onClick={handleCopyToClipboard3}>
                    <FaCopy /> 
                </button>
                {copied3 && <p className='text-[#bfc1c2]'>Copied </p>}

                <Typography gutterBottom class='text-base'>
                    5. Adding copied user to sudoer file. Replace $user with your username
                </Typography>

                <Typography gutterBottom
                    id = 'command4'
                    ref={boxRef}
                    className="flex justify-start border border-gray-300 rounded-md p-1 min-h-200 bg-gray-100 font-sans leading-6 my-4 whitespace-pre-wrap"
                    style = {{fontSize: '13px'}}

                >
                    echo "$user ALL= (ALL) NOPASSWD:ALL" {">>"} /etc/sudeors 
                </Typography>

                <button className = 'flex justify-start my-2 text-[#bfc1c2]'onClick={handleCopyToClipboard4}>
                    <FaCopy />
                </button>
                {copied4 && <p className='text-[#bfc1c2]'>Copied </p>}



                <Typography gutterBottom class='text-base'>
                    6. Please ensure remote login is on
                </Typography>
            

                <Typography gutterBottom class='text-base'>
                    7. Restart your system
                </Typography>

                <Typography gutterBottom
                id = 'command5'
                 ref={boxRef}
                 className="flex justify-start border border-gray-300 rounded-md p-1 min-h-200 bg-gray-100 font-sans leading-6 my-4 whitespace-pre-wrap"
                 style = {{fontSize: '13px'}}  
                >
                   sudo reboot
                </Typography>
                <button className = 'flex justify-start my-2 text-[#bfc1c2]'onClick={handleCopyToClipboard5}>
                    <FaCopy /> 
                </button>
                {copied5 && <p className='text-[#bfc1c2]'>Copied</p>}


                




                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleCloseInfo}>
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