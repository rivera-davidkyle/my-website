import React, { Component } from 'react';
import { List, ListItemButton, ListItemText, Box, Typography, Divider, Container, Paper, Grid } from '@mui/material';
import {ListItemIcon} from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { keyframes } from '@emotion/react';


const cardRoll = keyframes`

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

`;

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page">
              
                <Box sx={{
                    height: "100vh",
                    display:"flex",
                    justifyContent: "center",
                    alignItems:"center",
                    animation:`${cardRoll} 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) both`
                }}> 
                
                    <Paper elevation={12} sx={{
                        background:"rgb(42, 44, 80)", display:"block", justifyContent:"center", border:"solid rgb(129, 101, 255) 5px"
                    }}>
                        <Typography variant="h2" align="center" sx={{fontSize:"3vh",paddingTop:"20px",paddingBottom:"30px", color:"white"}}>
                        Contact me!
                        </Typography>
                        <List sx={{display:"flex"}}>
                            <ListItemButton href="https://www.linkedin.com/in/david-kyle-rivera-897824173/"
                            sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <ListItemIcon sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <LinkedIn sx={{fontSize: "10vh", color: "white"}}/>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton href="https://github.com/rivera-davidkyle"
                            sx={{display:"flex", justifyContent:"center"}}>
                                <ListItemIcon sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <GitHub sx={{fontSize: "10vh", color: "white"}}/>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton href="mailto:rivera.davidkyle@gmail.com"
                            sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <ListItemIcon sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <Email sx={{fontSize: "10vh", color: "white"}}/>
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                    </Paper>
                </Box>
            </div>
        );
    }
}
 
export default Contact;