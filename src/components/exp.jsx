import React, { Component } from 'react';
import { Paper, Box, Typography, Container, autocompleteClasses} from '@mui/material';
import alg from '../static/images/alg.png'
import '../static/css/exp.css';
import { css, keyframes } from '@emotion/react';
import django from '../static/images/django.png';
import reactjs from '../static/images/reactjs.png';
import c from '../static/images/c.png';
import cplus from '../static/images/cplus.png';
import python from '../static/images/python.png';
import git from '../static/images/git.png';
import atl from '../static/images/atl.png';
import redis from '../static/images/redis.png';
import mysql from '../static/images/mysql.png';
import docker from '../static/images/docker.png';
import html from '../static/images/html.png';
import cs from '../static/images/css.png';
import js from '../static/images/js.png';

const cardEffect = keyframes`
0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
}
100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
}
`

class Exp extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page">
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: "77px",
                    overflow: "auto",
                    maxHeight: "100%",
                    "& > :not(style)": {
                        m: 1,
                        width: "auto",
                        height: "auto",
                        border: "inset rgb(129, 101, 255) 10px",
                        background: "rgb(42, 44, 80)",
                        color: "white",
                        animation: `${cardEffect} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
                      }
                }}>
                    <Paper elevation={12} sx={{padding: "20px"}}>
                        <Typography variant="h2" align="center">
                            Atmospheric Lidar Group
                        </Typography>
                        <Typography variant="h3" align="center" sx={{color:"rgb(129, 101, 255)"}}>
                            Software Engineer Intern
                        </Typography>
                        <Container sx={{display:"flex", justifyContent:"center", padding:"20px"}}>
                            <img className="exp" src={alg} alt=""></img>
                        </Container >
                        <Container maxWidth="md">
                        <Typography align="center" sx={{fontSize:"auto", fontWeight:"5", width:"auto"}}>
                            As a developer for ALG, we maintain and improve a microservices architecture given loosely 
                            defined customer requirements with Django Framework, Redis, Celery, and Docker. We follow 
                            a directive through organized team sprints and a timeline based on given requirements 
                            through CI/CD and Github.<br></br><br></br>
                            So far I have developed an SMTP that periodically reaches out to more than 100 researchers 
                            through Celery and Redis. Also, I have developed a download feature that lets users access 
                            more than 5000 daily files within each ceilometer site, utilizing Django REST Framework 
                            and Redis, with JQuery and Bootstrap used for the frontend<br></br>
                        </Typography>
                        </Container>
                    </Paper>
                    <Paper elevation={12} sx={{padding: "20px"}}>
                        <Container maxWidth="xs">
                            <Typography variant="h2" align="center" sx={{padding:"10px"}}>
                                Experienced with
                            </Typography>
                            <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                    OOP Languages
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center", paddingLeft:"30px"}}>
                                <img className="logo" src={python} alt=""></img>
                                <img className="logo" src={cplus} alt=""></img>
                                <img className="logo" src={c} alt=""></img>
                            </Container>
                            <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                    Backend
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center", paddingLeft:"30px"}}>
                                <img className="logo" src={django} alt=""></img>
                                <img className="logo" src={mysql} alt=""></img>
                                <img className="logo" src={redis} alt=""></img>
                                <img className="logo" src={docker} alt=""></img>
                            </Container>
                            <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                    Frontend
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center", paddingLeft:"30px"}}>
                                <img className="logo" src={html} alt=""></img>
                                <img className="logo" src={cs} alt=""></img>
                                <img className="logo" src={js} alt=""></img>
                                <img className="logo" src={reactjs} alt=""></img>
                            </Container>
                            <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                    CI/CD
                            </Typography>
                            <Container sx={{display:"flex", justifyContent:"center", paddingLeft:"30px"}}>
                                <img className="logo" src={git} alt=""></img>
                                <img className="logo" src={atl} alt=""></img>
                            </Container>
                        </Container>
                    </Paper>
                </Box>
            </div>
        );
    }
}
 
export default Exp;