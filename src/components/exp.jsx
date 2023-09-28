import React, { Component, forwardRef } from "react";
import {
  Paper,
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import "../static/css/exp.css";
import { useState } from "react";
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
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};
const colorScheme = {
  sx: {
    display: "flex",
    flexDirection: "row",
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

const colorSchemeIcons = {
  sx: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxHeight: "100%",
    "& > :not(style)": {
      m: 1,
      width: "100%",
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
  constructor(props) {
    super(props);
    this.state = {
      expanded: "panel1",
    };
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setState({ expanded: newExpanded ? panel : false });
  };
  render() {
    const { expanded } = this.state;
    return (
      <div className="page" ref={this.props.expRef}>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <Box sx={boxStyles.sx}>
            <Grid container spacing={2} sx={{ width: "75%" }}>
              <Grid item xs={12} sm={6} sx={colorScheme.sx}>
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
                      I have extensive experience in developing and maintaining
                      a microservices architecture using the Django Framework,
                      Redis, Celery, and Docker through organized team sprints
                      and a timeline based on requirements. This architecture
                      enabled us to store, standardize, and display atmospheric
                      data collected from multiple EPA/NASA sites.
                    </Typography>
                  </Container>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} sx={colorScheme.sx}>
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
                      I have extensive experience in developing and maintaining
                      a microservices architecture using the Django Framework,
                      Redis, Celery, and Docker through organized team sprints
                      and a timeline based on requirements. This architecture
                      enabled us to store, standardize, and display atmospheric
                      data collected from multiple EPA/NASA sites.
                    </Typography>
                  </Container>
                </Paper>
              </Grid>
              <Grid item xs={12} sx={colorSchemeIcons.sx}>
                <Paper elevation={12} sx={{ padding: "20px" }}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={this.handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>Collapsible Group Item #1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={this.handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>Collapsible Group Item #2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={this.handleChange("panel3")}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>Collapsible Group Item #3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </AnimationOnScroll>
      </div>
    );
  }
}

export default forwardRef((props, ref) => <Exp expRef={ref} {...props} />);
