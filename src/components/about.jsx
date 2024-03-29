import React, { Component, forwardRef } from 'react';
import Typewriter from 'typewriter-effect';
import pfp from '../static/images/pfp.png';
import { Paper, Typography, Container, Box } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import '../static/css/about.css';
class About extends Component {
    render() { 
        return (
        <div className="page" ref={this.props.aboutRef}>
            <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: "77px",
                    "& > :not(style)": {
                        m: 1,
                        width: "auto",
                        border: "inset rgb(129, 101, 255) 10px",
                        background: "rgb(42, 44, 80)",
                        color: "white",
                      }
                }}>
                
                <Paper elevation={12} sx={{padding: "20px"}}>  
                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Typography variant="h1"
                        sx={{
                            textAlign:"center",
                            fontWeight: "500",
                            fontSize: "auto",
                            color: "rgb(129, 101, 255)"
                            }}>
                            <Typography variant="h1"
                            sx={{
                                textAlign:"center",
                                fontWeight: "500",
                                fontSize: "auto",
                                color: "white"
                                }}>
                                Hi! I'm Kyle Rivera,&nbsp;
                            </Typography>
                                
                            <Typewriter
                            options={{
                            loop: true
                            }}
                            onInit={(typewriter) =>
                            {typewriter
                            .typeString("Software Engineer.")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Web Developer.")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Tech Enthusiast.")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Lifelong Learner.")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();}}/>
                        </Typography>
                    </Box>
                    <Container
                    sx={{
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img src={pfp} alt="" className='about'></img>
                    </Container>
                    <Container maxWidth="sm">
                    <Typography align="center"
                    sx={{
                        fontSize: "auto",
                        fontWeight: "5",
                        width:"auto"
                    }}>
                    <br></br>
                            I am a senior majoring in Computer Science with a minor in Staistics at the University of
                            Maryland, Baltimore County. I enjoy topics that revolve around Algorithms, Data Structures, and
                            Data Science.  I seek out challenges to expand my skillset and knowledge, and I adapt well to new roles and environments. 
                            I enjoy taking on new projects that push me out of my comfort zone, and I thrive in fast-paced,
                            dynamic environments where I can apply my problem-solving skills. 
                            <br></br><br></br>


                            I'm involved in several other activities outside of programming. As Culture Chair for the 
                            Filipino-American Student Association, I guide the executive board and organize cultural 
                            events. I'm also an organizer for HackUMBC, where I promote and moderate the event. 
                            Outside of my leadership roles, I enjoy playing music, chess, and basketball.<br></br><br></br>
                            

                            Above everything else, I'm passionate about computer science 
                            and its potential to make a positive impact on the world. 
                            I'm looking forward to putting my skills to use and continuing to grow as a software developer. <br></br><br></br>
                    </Typography>
                    </Container>
                </Paper>
                </Box>
                </AnimationOnScroll>
        </div>
            );
    }
}
 
export default forwardRef((props,ref) => <About aboutRef={ref} {...props}/>);