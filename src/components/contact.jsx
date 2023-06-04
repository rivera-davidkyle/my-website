import React, { Component, forwardRef } from 'react';
import { List, ListItemButton, ListItemText, Box, Typography, Divider, Container, Paper, Grid } from '@mui/material';
import {ListItemIcon} from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page" ref={this.props.contactRef}>
              
                <Box sx={{
                    height: "100vh",
                    display:"flex",
                    justifyContent: "center",
                    alignItems:"center",
                }}> 
                    <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='True'>
                    <Paper elevation={12} sx={{
                        background:"rgb(42, 44, 80)", display:"block", justifyContent:"center", border:"solid rgb(129, 101, 255) 5px"
                    }}>
                        <Typography variant="h2" align="center" sx={{fontSize:"3vh",paddingTop:"20px",paddingBottom:"30px", color:"white"}}>
                        Contact me!
                        </Typography>
                        <List sx={{display:"flex"}}>
                            <ListItemButton href="https://www.linkedin.com/in/rivera-davidkyle"
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
                    </AnimationOnScroll>
                </Box>
            </div>
        );
    }
}
 
export default forwardRef((props, ref) =>  <Contact contactRef={ref} {...props}/>);