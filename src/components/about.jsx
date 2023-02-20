import React, { Component, forwardRef } from 'react';
import Typewriter from 'typewriter-effect';
import pfp from '../static/images/pfp.png';
import { Paper, Typography, Container, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import '../static/css/about.css';


const TITLES = ["Software Engineer", 
3000,"Web Developer", 3000,"Tech Entusiast", 3000,"Lifelong Learner", 3000]

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

class About extends Component {
    render() { 
        return (
        <div className="page" ref={this.props.aboutRef}>
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
                        animation: `${cardEffect} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
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
                            }}><Typography variant="h1"
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
                    <Container maxWidth="md">
                    <Typography align="center"
                    sx={{
                        fontSize: "auto",
                        fontWeight: "5",
                        width:"auto"
                    }}>
                    <br></br>
                            I am a senior majoring in Computer Science with a minor in Staistics at the University of
                            Maryland, Baltimore County. I enjoy topics that revolve around Algorithms, Data Structures, and
                            Data Science. <br></br><br></br>


                            In addition to my technical skills and work experience, I seek out challenges to 
                            expand my skillset and knowledge, and I adapt well to new roles and environments. 
                            I enjoy taking on new projects that push me out of my comfort zone, and I thrive in fast-paced,
                            dynamic environments where I can apply my problem-solving skills. 
                            I'm confident in my ability to adapt to new roles and environments, 
                            and I'm excited about the prospect of taking on new challenges in my career as a software developer. <br></br><br></br>


                            Outside of programming, I am a Culture Chair and an executive board member of Filipino-American
                            Student Association where I provide counsel and organize events about the Filipino
                            culture. I also had experiences volunteering in HackUMBC, a hackathon in my university. <br></br><br></br>
                            

                            Above everything else, I'm passionate about computer science 
                            and its potential to make a positive impact on the world. 
                            I'm looking forward to putting my skills to use and continuing to grow as a software developer. <br></br><br></br>
                    </Typography>
                    </Container>
                </Paper>
                </Box>
        </div>
            );
    }
}
 
export default forwardRef((props,ref) => <About aboutRef={ref} {...props}/>);