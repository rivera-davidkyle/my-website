import React, { Component, forwardRef } from "react";
import { Paper, Box, Typography, Container, Grid } from "@mui/material";
import "../static/css/exp.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import alg from "../static/images/alg.png";
import algp from "../static/images/alg_p.png";
import django from "../static/images/django.png";
import reactjs from "../static/images/reactjs.png";
import c from "../static/images/c.png";
import cplus from "../static/images/cplus.png";
import python from "../static/images/python.png";
import git from "../static/images/git.png";
import atl from "../static/images/atl.png";
import redis from "../static/images/redis.png";
import mysql from "../static/images/mysql.png";
import docker from "../static/images/docker.png";
import html from "../static/images/html.png";
import cs from "../static/images/css.png";
import aws from "../static/images/aws.png";
import linux from "../static/images/ubuntu.png";
import js from "../static/images/js.png";
import java from "../static/images/java.png";

const boxStyles = {
  sx: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxHeight: "100%",
    "& > :not(style)": {
      m: 1,
      width: "auto",
      height: "auto",
      border: "inset rgb(129, 101, 255) 10px",
      background: "rgb(42, 44, 80)",
      color: "white",
    },
  },
};
const containerStyles = {
  sx: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    "& img": {
      marginBottom: "20px",
    },
    "@media (min-width: 600px)": {
      flexDirection: "row",
      justifyContent: "center",
      "& img": {
        margin: "0 10px",
        marginBottom: 0,
      },
    },
  },
};
const typeStyles = {
  sx: {
    color: "rgb(129, 101, 255)",
    fontSize: "2.5vh",
    fontWeight: "900",
    padding: "5px",
  },
};
class Exp extends Component {
  state = {};
  render() {
    return (
      <div className="page" ref={this.props.expRef}>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <Grid container spacing={1}>
            <Grid item xs={6} sx={boxStyles.sx}>
              <Paper elevation={12} sx={{ padding: "20px" }}>
                <Typography variant="h2" align="center">
                  Hughes Network Systems
                </Typography>
                <Typography
                  variant="h3"
                  align="center"
                  sx={{ color: "rgb(129, 101, 255)" }}
                >
                  Software Engineer
                </Typography>
                <Container maxWidth="md" sx={containerStyles.sx}>
                  <img className="exp" src={alg} alt=""></img>
                  <img className="exp" src={algp} alt=""></img>
                </Container>
                <Container maxWidth="sm">
                  <Typography
                    align="center"
                    sx={{ fontSize: "auto", fontWeight: "5", width: "auto" }}
                  >
                    I have extensive experience in developing and maintaining a
                    microservices architecture using the Django Framework,
                    Redis, Celery, and Docker through organized team sprints and
                    a timeline based on requirements. This architecture enabled
                    us to store, standardize, and display atmospheric data
                    collected from multiple EPA/NASA sites.
                  </Typography>
                </Container>
              </Paper>
              <Paper elevation={12} sx={{ padding: "20px" }}>
                <Typography variant="h2" align="center">
                  Atmospheric Lidar Group
                </Typography>
                <Typography
                  variant="h3"
                  align="center"
                  sx={{ color: "rgb(129, 101, 255)" }}
                >
                  Software Engineer
                </Typography>
                <Container maxWidth="md" sx={containerStyles.sx}>
                  <img className="exp" src={alg} alt=""></img>
                  <img className="exp" src={algp} alt=""></img>
                </Container>
                <Container maxWidth="sm">
                  <Typography
                    align="center"
                    sx={{ fontSize: "auto", fontWeight: "5", width: "auto" }}
                  >
                    I have extensive experience in developing and maintaining a
                    microservices architecture using the Django Framework,
                    Redis, Celery, and Docker through organized team sprints and
                    a timeline based on requirements. This architecture enabled
                    us to store, standardize, and display atmospheric data
                    collected from multiple EPA/NASA sites.
                  </Typography>
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Container sx={boxStyles.sx}>
              <Paper elevation={12} sx={{ padding: "20px" }}>
                <Container>
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ padding: "10px" }}
                  >
                    Experienced with
                  </Typography>
                  <Typography align="center" sx={typeStyles.sx}>
                    Programming Languages
                  </Typography>
                  <Container maxWidth="sm" sx={containerStyles.sx}>
                    <img className="logo" src={python} alt=""></img>
                    <img className="logo" src={java} alt=""></img>
                    <img className="logo" src={cplus} alt=""></img>
                    <img className="logo" src={c} alt=""></img>
                  </Container>
                  <Typography align="center" sx={typeStyles.sx}>
                    Backend Technologies
                  </Typography>
                  <Container maxWidth="sm" sx={containerStyles.sx}>
                    <img className="logo" src={django} alt=""></img>
                    <img className="logo" src={mysql} alt=""></img>
                    <img className="logo" src={redis} alt=""></img>
                    <img className="logo" src={docker} alt=""></img>
                  </Container>
                  <Typography align="center" sx={typeStyles.sx}>
                    Frontend Technologies
                  </Typography>
                  <Container maxWidth="sm" sx={containerStyles.sx}>
                    <img className="logo" src={html} alt=""></img>
                    <img className="logo" src={cs} alt=""></img>
                    <img className="logo" src={js} alt=""></img>
                    <img className="logo" src={reactjs} alt=""></img>
                  </Container>
                  <Typography align="center" sx={typeStyles.sx}>
                    Developer Tools
                  </Typography>
                  <Container maxWidth="sm" sx={containerStyles.sx}>
                    <img className="logo" src={git} alt=""></img>
                    <img className="logo" src={atl} alt=""></img>
                    <img className="logo" src={aws} alt=""></img>
                    <img className="logo" src={linux} alt=""></img>
                  </Container>
                </Container>
              </Paper>
              </Container>
            </Grid>
          </Grid>
        </AnimationOnScroll>
      </div>
    );
  }
}

export default forwardRef((props, ref) => <Exp expRef={ref} {...props} />);
