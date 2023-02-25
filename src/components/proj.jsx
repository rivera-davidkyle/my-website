import React, { Component, forwardRef } from 'react';
import { List, ListItemButton, ListItemText, Box, Typography, Divider, Container, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';
import django from '../static/images/django.png';
import python from '../static/images/python.png';
import cplus from '../static/images/cplus.png';
import matlab from '../static/images/matlab.png';
import bs from '../static/images/bootstrap.png';
import reactjs from '../static/images/reactjs.png';
import mui from '../static/images/mui.png';
import css from '../static/images/css.png'
import jupyter from '../static/images/jupyter.png'
import sklearn from '../static/images/sklearn.png'
import numpy from '../static/images/numpy.png'
import pandas from '../static/images/pandas.png'
import ucn from '../static/images/ucnpage.png';
import port from '../static/images/port.png';
import itw from '../static/images/itw.png';
import sort from '../static/images/sort.png';
import '../static/css/proj.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const listButtonStyles = 
{
    sx: {
        background:"rgb(42, 44, 80)", 
        display:"block", 
        justifyContent:"center", 
        border:"solid rgb(129, 101, 255) 5px", 
        m:"10px", 
        width: "40vw",
        height: "auto",
        color: "#ffffff",
        '@media (max-width: 600px)': {
            width:"auto",
            height:"auto",
        },
    }
  };
const centerStyle =
{
    sx: {
        display: "flex", 
        justifyContent: "center",
        alignItems: "center"
    }
};
class Proj extends Component {
    render() { 
        return (
            <div className="page" ref={this.props.projRef}>
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    maxHeight: "100%",
                    paddingTop: "77px",
                    flexWrap: "wrap",
                    overflow: 'hidden',
                    maxHeight: '100%'
                }}>
                
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} sx={centerStyle.sx}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' style={centerStyle.sx}>
                            <ListItemButton href="https://www.ucn-portal.org/" sx={listButtonStyles.sx}>
                                <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                    Unified Ceilometer Network
                                </Typography>
                
                                <Container sx={{display:"flex", justifyContent:"center"}}>
                                    <img className="proj" src={ucn} alt=""></img>
                                </Container>
                                <Container sx={{display: 'inline-flex', justifyContent: 'center'}}>
                                    <img className="logol" src={django} alt=""></img> &nbsp;
                                    <img className="logol" src={python} alt=""></img> &nbsp;
                                    <img className="logol" src={cplus} alt=""></img> &nbsp;
                                    <img className="logol" src={matlab} alt=""></img> &nbsp;
                                </Container>
                                <Container sx={centerStyle.sx}>
                                <Typography align="center" sx={{padding:"10px"}}>
                                Stores, displays, and standardizes data from Ceilometer LiDAR data from multiple EPA/NASA sites.
                                <br></br>Asynchronous standardization of uploaded raw files from ceilometers
                                <br></br>Developed through Python, C++, Bash, and MatLab.
                                </Typography>
                                </Container>
                            </ListItemButton>
                        </AnimationOnScroll>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centerStyle.sx}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' style={centerStyle.sx}>
                        <ListItemButton href="https://ticketingitapp.herokuapp.com/" sx={listButtonStyles.sx}>
                            <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                IT Ticketing Website
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center"}}>
                                <img className="proj" src={itw} alt=""></img>
                            </Container>
                            <Container sx={{display: 'inline-flex', justifyContent: 'center'}}>
                                <img className="logol" src={django} alt=""></img> &nbsp;
                                <img className="logol" src={python} alt=""></img> &nbsp;
                                <img className="logol" src={bs} alt=""></img> &nbsp;
                            </Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                            Provides a helpdesk portal that assists a user to create, update, or delete a ticket
                            <br></br>Sends a confirmation email that the ticket has been received, and has a login/logout and user registration system
                            <br></br>Developed through Django Framework and Bootstrap
                            </Typography>
                        </ListItemButton>
                        </AnimationOnScroll>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centerStyle.sx}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' style={centerStyle.sx}>
                        <ListItemButton href="https://github.com/rivera-davidkyle/my-website" sx={listButtonStyles.sx}>
                            <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                2022 Porfolio Website
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center"}}>
                                <img className="proj" src={port} alt=""></img>
                            </Container>
                            <Container sx={{display: 'inline-flex', justifyContent: 'center'}}>
                                <img className="logol" src={reactjs} alt=""></img> &nbsp;
                                <img className="logol" src={mui} alt=""></img> &nbsp;
                                <img className="logol" src={css} alt=""></img> &nbsp;
                            </Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                                A single-page application that shows my background as a developer
                                <br></br>It includes a scroll to component feature along with animation on scroll transitions
                                <br></br>It is hosted through Github pages
                                <br></br>Developed through React, Material UI, and CSS
                                </Typography>
                        </ListItemButton>
                        </AnimationOnScroll>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centerStyle.sx}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' style={centerStyle.sx}>
                        <ListItemButton href="https://github.com/rivera-davidkyle/Sorting-Algorithm-Analysis/blob/main/ML/Regression%20Analysis.ipynb" sx={listButtonStyles.sx}>
                            <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                Sorting Algorithm Test and Analysis
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center"}}>
                                <img className="proj" src={sort} alt=""></img>
                            </Container>
                            <Container sx={{display: 'inline-flex', justifyContent: 'center'}}>
                                <img className="logol" src={cplus} alt=""></img> &nbsp;
                                <img className="logol" src={jupyter} alt=""></img> &nbsp;
                                <img className="logol" src={numpy} alt=""></img> &nbsp;
                                <img className="logol" src={sklearn} alt=""></img> &nbsp;
                                <img className="logol" src={pandas} alt=""></img> &nbsp;
                            </Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                                Exports a CSV of runtime and memory of different sorting algorithms in varying array sizes and test cases
                                <br></br>Analyzes the degree of sortedness of through Regression Analysis
                                <br></br>Developed through C++, Jupyter Notebooks, Pandas, Scikit learn, and Numpy

                            </Typography>
                        </ListItemButton>
                        </AnimationOnScroll>
                    </Grid>
                    
                </Grid>
                </Box>
            </div>
        );
    }
}
 
export default forwardRef((props, ref) =>  <Proj projRef={ref} {...props}/>);