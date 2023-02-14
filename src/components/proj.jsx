import React, { Component } from 'react';
import { List, ListItemButton, ListItemText, Box, Typography, Divider, Container,Paper } from '@mui/material';
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

const listEffect = keyframes`
0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

class Proj extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page">
                <Box
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    paddingTop: "77px",
                    flexWrap: "wrap",
                    overflow: 'auto',
                    width: "auto",
                    maxHeight: '100%', animation:`${listEffect} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both` 
                }}>
                
                <List sx={{display:"inline",color:"white", width: "75%"}}>
                    <ListItemButton href="https://www.ucn-portal.org/"
                    sx={{background:"rgb(42, 44, 80)", display:"block", justifyContent:"center", border:"solid rgb(129, 101, 255) 5px", m:"10px", width:"auto"}}>
                        <ListItemText>
                            <Typography align="center" sx={{fontWeight:"50", fontSize:"auto"}}>
                                Unified Ceilometer Network
                            </Typography>
                            
                        </ListItemText>
                        <Container sx={{display:"flex", justifyContent:"center"}}>
                            <img className="proj" src={ucn} alt=""></img>
                        </Container>
                        <Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                            <img className="logol" src={django} alt=""></img> &nbsp;
                            <img className="logol" src={python} alt=""></img> &nbsp;
                            <img className="logol" src={cplus} alt=""></img> &nbsp;
                            <img className="logol" src={matlab} alt=""></img> &nbsp;
                            <br></br>
                            <br></br>Stores, displays, and standardizes data from Ceilometer LiDAR data from multiple EPA/NASA sites.
                            <br></br>Developed through Python, C++, Bash, and MatLab.
                            </Typography>
                        </Container>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton href="https://ticketingitapp.herokuapp.com/"
                    sx={{background:"rgb(42, 44, 80)", display:"block", justifyContent:"center", border:"solid rgb(129, 101, 255) 5px", m:"10px"}}>
                        <ListItemText>
                            <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                IT Ticketing Website
                            </Typography>
                            
                        </ListItemText>
                        <Container sx={{display:"flex", justifyContent:"center"}}>
                            <img className="proj" src={itw} alt=""></img>
                        </Container>
                        <Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                            <img className="logol" src={django} alt=""></img> &nbsp;
                            <img className="logol" src={python} alt=""></img> &nbsp;
                            <img className="logol" src={bs} alt=""></img> &nbsp;
                            <br></br>
                            <br></br>Provides a helpdesk portal that assists a user to create, update, or delete a ticket
                            <br></br>Sends a confirmation email that the ticket has been received, and has a login/logout and user registration system
                            <br></br>Developed through Django Framework and Bootstrap

                            </Typography>
                        </Container>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton href="https://github.com/rivera-davidkyle/my-website"
                    sx={{background:"rgb(42, 44, 80)", display:"block", justifyContent:"center", border:"solid rgb(129, 101, 255) 5px", m:"10px"}}>
                        <ListItemText>
                            <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                2022 Porfolio Website
                            </Typography>
                            
                        </ListItemText>
                        <Container sx={{display:"flex", justifyContent:"center"}}>
                            <img className="proj" src={port} alt=""></img>
                        </Container>
                        <Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                            <img className="logol" src={reactjs} alt=""></img> &nbsp;
                            <img className="logol" src={mui} alt=""></img> &nbsp;
                            <img className="logol" src={css} alt=""></img> &nbsp;
                            <br></br>
                            <br></br>A single-page application that shows my background as a developer
                            <br></br>It is hosted through Github pages
                            <br></br>Developed through React, Material UI, and CSS
                            </Typography>
                        </Container>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton href="https://github.com/rivera-davidkyle/Sorting-Algorithm-Analysis/blob/main/ML/Regression%20Analysis.ipynb"
                    sx={{background:"rgb(42, 44, 80)", display:"block", justifyContent:"center", border:"solid rgb(129, 101, 255) 5px", m:"10px"}}>
                        <ListItemText>
                            <Typography variant="h2" align="center" sx={{fontWeight:"50", fontSize:"2.5vh"}}>
                                Sorting Algorithm Test and Analysis
                            </Typography>
                            
                        </ListItemText>
                        <Container sx={{display:"flex", justifyContent:"center"}}>
                            <img className="proj" src={sort} alt=""></img>
                        </Container>
                        <Container>
                            <Typography align="center" sx={{padding:"10px"}} >
                            <img className="logol" src={cplus} alt=""></img> &nbsp;
                            <img className="logol" src={jupyter} alt=""></img> &nbsp;
                            <img className="logol" src={numpy} alt=""></img> &nbsp;
                            <img className="logol" src={sklearn} alt=""></img> &nbsp;
                            <img className="logol" src={pandas} alt=""></img> &nbsp;
                            <br></br>
                            <br></br>Exports a CSV of runtime and memory of different sorting algorithms in varying array sizes and test cases
                            <br></br>Analyzes the significant values within the CSV through Regression Analysis
                            <br></br>Developed through C++, Jupyter Notebooks, Pandas, Scikit learn, and Numpy

                            </Typography>
                        </Container>
                    </ListItemButton>
                    <Divider/>
                    
                </List>
                
                </Box>
            </div>
        );
    }
}
 
export default Proj;