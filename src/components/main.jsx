import React, { Component, forwardRef } from 'react'
import { Typography, useTheme, Grid } from '@mui/material';
import { css, keyframes } from '@emotion/react'
import logo from '../static/images/logoT.png'
import '../static/css/main.css'


const introEffect = keyframes`
    0% {
        letter-spacing: -0.5em;
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }`
class Main extends Component {
    render() { 
        return (
            <div className='page' ref={this.props.mainRef}>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    padding: '100px'
                }}
                >
                    <Grid item xs={6} xl={6}
                    sx={{paddingBottom:'50px'}}>
                        <Typography variant='h1'
                        sx={{
                            animation: `${introEffect} 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                            color: 'rgb(42, 44, 80)'}}>
                            Hey! I'm Kyle. <br></br>
                        </Typography>
                        <Typography variant='h4'
                        sx={{
                            animation: `${introEffect}  1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                            color: 'rgb(79, 82, 131)'}}>
                            I design and build web applications.
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={6} xl={6} display="flex" justifyContent="center" 
                    sx={{animation: `${introEffect} 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
                }}>
                        <img src={logo} alt=""></img>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default forwardRef((props,ref) => <Main mainRef={ref} {...props}/>);