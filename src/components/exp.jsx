import React, { Component } from 'react';
import { Paper, Box, Typography, Container, autocompleteClasses} from '@mui/material';
import alg from '../static/images/alg.png'
import ucn from '../static/images/ucn.png'
import '../static/css/exp.css';
import { css, keyframes } from '@emotion/react';
import django from '../static/images/django.png';
import reactjs from '../static/images/reactjs.png';
import cplus from '../static/images/cplus.png';
import python from '../static/images/python.png';
import git from '../static/images/git.png';
import ubuntu from '../static/images/ubuntu.png';

const cardEffect = keyframes`
0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
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
                        </Container>
                        <Typography variant="h3" align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"2.4vh", fontWeight:"900"}}>
                            Roles:
                        </Typography>
                        <Typography align="center" sx={{fontSize:"2.1vh", fontWeight:"5"}}>
                        Maintain and improve a microservices architecture given loosely defined customer requirements with
                        Django Framework, Redis, Celery, and Docker <br></br>
                        Follow a directive through organized team sprints and a timeline based on given requirements
                        through CI/CD and Github<br></br>
                        Developed an SMTP that periodically reaches out to more than 100 researchers through Celery and
                        Redis<br></br>
                        Developed a download feature that lets users access more than 1000 daily files through Django
                        REST Framework, with JQuery and Bootstrap used for the front-end<br></br>

                        </Typography>
                    </Paper>
                    <Paper elevation={12} sx={{padding: "20px"}}>
                    <Typography variant="h2" align="center">
                        Experienced with
                    </Typography>
                    <Container sx={{display:"inline-block", justifyContent:"center", paddingLeft:"30px"}}>
                        <img className="logo" src={django} alt=""></img>
                        <img className="logo" src={reactjs} alt=""></img>
                        <img className="logo" src={python} alt=""></img>
                        <img className="logo" src={cplus} alt=""></img>
                        <img className="logo" src={git} alt=""></img>
                        <img className="logo" src={ubuntu} alt=""></img>
                    </Container>
                        
                    </Paper>
                </Box>
            </div>
        );
    }
}
 
export default Exp;