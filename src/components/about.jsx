import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';
import pfp from '../static/images/pfp.png';
import { Grid, Typography, Container, Box } from '@mui/material';
import { borderColor } from '@mui/system';


const TITLES = ["Software Engineer", 
3000,"Web Developer", 3000,"Tech Entusiast", 3000,"Lifelong Learner", 3000]
class About extends Component {
    render() { 
        return (
        <div className="page">
            <Box display="flex"
                justifyContent="center"

            sx={{background: 'rgb(42, 44, 80)',
            height: '725px',
            width: '100%',
            mt: '100px',
            position: 'absolute',
            borderStyle: "inset",
            borderColor: "rgb(129, 101, 255)",
            borderWidth: '15px'
            }}>
                
                    <Typography variant="h1">
                        I am a &nbsp;
        
                    </Typography>
                    <Container sx={{
                        left: '0'
                    }}>
                        <img src={pfp} alt=""></img>
                    </Container>
                    <Typography variant="h2">
                    <br></br>
                            I am a Senior majoring in Computer Science at the University of
                            Maryland, Baltimore County. I work for the Atmospheric Lidar Group,
                            where we provide and maintain a microservices architecture based on loosely
                            defined client requirements. <br></br>

                            I seek out challenges to expand my skillset and knowledge, and I adapt well
                            to new roles and environments. <br></br>

                            Outside of programming, I am a basketball player, a chess enthusiast, with an
                            ardent passion for music. Above everything else, my ambitions lie on partaking
                            with the world's quest for technological growth and progress. <br></br>
                    </Typography>
        
                
            </Box>
            
        </div>
            );
    }
}
 
export default About;