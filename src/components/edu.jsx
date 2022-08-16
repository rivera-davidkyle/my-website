import React, { Component } from 'react';
import { Paper, Box, Typography, Container } from '@mui/material';
import umbcLogo from '../static/images/umbc.png';
import '../static/css/edu.css';
import { fontStyle, fontWeight } from '@mui/system';

class Edu extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page">
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    mt: "77px",
                    padding: "10px",
                    "& > :not(style)": {
                        m: 4,
                        width: 1600,
                        height: "auto"
                      }
                }}>
                    <Paper elevation={12} sx={{
                        padding: "20px",  
                        background:"rgb(42, 44, 80)",
                        border:"inset rgb(129, 101, 255)", 
                        borderWidth:"10px",
                        display:"inline",
                        justifyContent: "center",
                        alignContent:"center"
                    }}>
                        <Container sx={{display:"flex",justifyContent:"center", width:"100%", 
                        color:"white"}}>
                            <Typography variant="h2" align="center" sx={{fontWeight:"10"}}>
                                B.S. Computer Science, Minor in Music
                                <br></br>2019 - 2023
                            </Typography>
                            
                        </Container>
                       <Container sx={{display:"flex", justifyContent:"center", padding: "20px"}}>
                            <img className='edu' src={umbcLogo} alt=""></img>
                       </Container>
                       <Container sx={{display:"flex", alignContent:"center",justifyContent:"center", color:"white"}}>
                            <Typography variant="h2" align="center" sx={{
                                color:"gold",
                                fontStyle:"roman"}}>
                                University of Maryland, Baltimore County
                            </Typography>
                       </Container>
                    </Paper>
                    
                </Box>
                
            </div>
        );
    }
}
 
export default Edu;