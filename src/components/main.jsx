import React, { Component } from 'react'
import { Typography, useTheme, Grid } from '@mui/material';
import { css, keyframes } from '@emotion/react'
import logo from '../static/images/logoT.png'
import '../static/css/main.css'


const textEffect = keyframes`
    0% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        text-shadow: none;
    }
    100% {
        -webkit-transform: translateX(-50px);
                transform: translateX(-50px);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
    }
    }
`;
const logoEffect = keyframes`
0% {
    -webkit-transform: rotateY(20deg) rotateX(-35deg) translate(300px, 300px) skew(35deg, -10deg);
            transform: rotateY(20deg) rotateX(-35deg) translate(300px, 300px) skew(35deg, -10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }`
class Main extends Component {
    render() { 
        return (
            <div className='page'>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
                sx={{
                    padding: '100px'
                }}
                >
                    <Grid item xs={6} xl={6} display="relative" justifyContent="flex-right" 
                    sx={{paddingBottom:'50px'}}>
                        <Typography variant='h4'
                        sx={{animation: `${textEffect} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`}}>
                            Hey! <br></br>
                            I'm Kyle, <br></br>
                            Programmer
                        </Typography>
                        <Typography variant='h3'
                        sx={{animation: `${textEffect} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`}}>
                            Software Engineer | Web Developer
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={6} xl={6} display="flex" justifyContent="right" 
                    sx={{animation: `${logoEffect} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
                }}>
                        <img src={logo} alt=""></img>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Main;