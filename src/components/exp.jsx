import React, { Component, forwardRef } from 'react';
import { Paper, Box, Typography, Container, autocompleteClasses} from '@mui/material';
import '../static/css/exp.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import alg from '../static/images/alg.png'
import algp from '../static/images/alg_p.png'
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
import r from '../static/images/r.png';
import js from '../static/images/js.png';

const boxStyles = {
    sx: {display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxHeight: "100%",
    "& > :not(style)": {
        m: 1,
        width: "auto",
        height: "auto",
        border: "inset rgb(129, 101, 255) 10px",
        background: "rgb(42, 44, 80)",
        color: "white",}
    }
};
const containerStyles = {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      '& img': {
        marginBottom: '20px',
      },
      '@media (min-width: 600px)': {
        flexDirection: 'row',
        justifyContent: 'center',
        '& img': {
          margin: '0 10px',
          marginBottom: 0,
        },
      },
    },
  };
class Exp extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page" ref={this.props.expRef}>
                <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
                    <Box sx={boxStyles.sx}>
                        <Paper elevation={12} sx={{padding: "20px"}}>
                            <Typography variant="h2" align="center">
                                Atmospheric Lidar Group
                            </Typography>
                            <Typography variant="h3" align="center" sx={{color:"rgb(129, 101, 255)"}}>
                                Software Engineer Intern
                            </Typography>
                            <Container maxWidth="md" sx={containerStyles.sx}>
                                <img className="exp" src={alg} alt=""></img>
                                <img className="exp" src={algp} alt=""></img>
                            </Container >
                            <Container maxWidth="md">
                            <Typography align="center" sx={{fontSize:"auto", fontWeight:"5", width:"auto"}}>
                                I have extensive experience in developing and maintaining a microservices architecture using 
                                the Django Framework, Redis, Celery, and Docker. This architecture enabled us to store, standardize,
                                and display atmospheric data collected from multiple EPA/NASA sites, while also providing 
                                researchers with asynchronous tasks to aid their work. Through organized team sprints and a timeline 
                                based on requirements, we were able to meet project goals and deliver new features such as an SMTP 
                                feature that reached out to over 100 researchers through Celery and Redis.
                            <br></br><br></br>
                                One of my most significant achievements in this project was developing a download feature that allowed users
                                to access over 5000 daily files from each ceilometer site. This feature was developed using Django REST 
                                Framework, Redis, JQuery, and Bootstrap, and required significant attention to detail to ensure that the
                                data was efficiently delivered and maintained its integrity.
                            <br></br><br></br>
                                Overall, my work with the UCN has given me a deep understanding of atmospheric science and the tools and 
                                technologies required to analyze and visualize data effectively. I am excited to continue building on this
                                experience and expanding my skills as I work on future projects.
                            </Typography>
                            </Container>
                        </Paper>
                        <Paper elevation={12} sx={{padding: "20px"}}>
                            <Container maxWidth="md">
                                <Typography variant="h2" align="center" sx={{padding:"10px"}}>
                                    Experienced with
                                </Typography>
                                <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                        OOP Languages
                                </Typography>
                                <Container maxWidth="md" sx={containerStyles.sx}>
                                    <img className="logo" src={python} alt=""></img>
                                    <img className="logo" src={r} alt=""></img>
                                    <img className="logo" src={cplus} alt=""></img>
                                    <img className="logo" src={c} alt=""></img>
                                </Container>
                                <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                        Backend
                                </Typography>
                                <Container maxWidth="md" sx={containerStyles.sx}>
                                    <img className="logo" src={django} alt=""></img>
                                    <img className="logo" src={mysql} alt=""></img>
                                    <img className="logo" src={redis} alt=""></img>
                                    <img className="logo" src={docker} alt=""></img>
                                </Container>
                                <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                        Frontend
                                </Typography>
                                <Container maxWidth="md" sx={containerStyles.sx}>
                                    <img className="logo" src={html} alt=""></img>
                                    <img className="logo" src={cs} alt=""></img>
                                    <img className="logo" src={js} alt=""></img>
                                    <img className="logo" src={reactjs} alt=""></img>
                                </Container>
                                <Typography align="center" sx={{color:"rgb(129, 101, 255)", fontSize:"auto", fontWeight:"900", padding:"5px"}}>
                                        CI/CD
                                </Typography>
                                <Container maxWidth="md" sx={containerStyles.sx}>
                                    <img className="logo" src={git} alt=""></img>
                                    <img className="logo" src={atl} alt=""></img>
                                </Container>
                            </Container>
                        </Paper>
                    </Box>
                </AnimationOnScroll>
            </div>
        );
    }
}
 
export default forwardRef((props,ref) => <Exp expRef={ref} {...props}/>);