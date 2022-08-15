import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import pfp from '../static/images/pfp.png';
import { Grid, Typography, Container, Box } from '@mui/material';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
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

const Card = styled.span`
            background-color: rgb(42, 44, 80);
            min-height: 725px;
            height: auto;
            width: 100%;
            margin-top: 70px;
            position: absolute;
            border-style: inset;
            border-color: rgb(129, 101, 255);
            border-width: 15px;
            color: white;
            justify-content: center;
            padding: 40px;
            animation: ${cardEffect} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
class About extends Component {
    render() { 
        return (
        <div className="page">
            <Card>
                    <Typography variant="h1"
                    sx={{
                        textAlign:"center",
                        fontWeight: "500",
                        fontSize: "3vh",
                        color: "white"
                        }}>
                            I am a 
                            <Box
                            sx={{
                                height: "60px",
                                color: "rgb(129, 101, 255)"
                            }}>
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
                            </Box>
                        </Typography>
                    <Container
                    sx={{
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img src={pfp} alt="" className='about'></img>
                    </Container>
                    <Container>
                    <Typography variant="p"
                    sx={{
                        fontSize: "2.1vh",
                        fontWeight: "5",
                    }}>
                    <br></br>
                            I am a senior majoring in Computer Science at the University of
                            Maryland, Baltimore County. I work for the Atmospheric Lidar Group,
                            where we provide and maintain a microservices architecture based on loosely
                            defined client requirements. <br></br><br></br>


                            I seek out challenges to expand my skillset and knowledge, and I adapt well
                            to new roles and environments. <br></br><br></br>


                            Outside of programming, I am a basketball player, a chess enthusiast, with an
                            ardent passion for music. Above everything else, my ambitions lie on partaking
                            with the world's quest for technological growth and progress. <br></br>
                    </Typography>
                    </Container>
            </Card>
            
        </div>
            );
    }
}
 
export default About;