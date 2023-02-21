import './App.css';
import React, { Component } from 'react'
import Main from './components/main'
import About from './components/about'
import Exp from './components/exp'
import Proj from './components/proj'
import Contact from './components/contact'
import Navbar from './components/navbar'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const animStyles = {
  sx: {
    display :'flex',
    justifyContent: 'center'
  }
}

theme.typography = {
  fontFamily: ['Poppins', 'sans-serif']
}

class App extends Component {
  constructor(props) {
    super(props);
    this.mainRef = React.createRef();
    this.aboutRef = React.createRef();
    this.expRef = React.createRef();
    this.projRef = React.createRef();
    this.contactRef = React.createRef();
  }

  scrollToMyRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  render() {
    return (
      <div className ="App">
        <ThemeProvider theme={theme}>
          <Navbar
          onMainClick={() => this.scrollToMyRef(this.mainRef)}
          onAboutClick={() => this.scrollToMyRef(this.aboutRef)}
          onExpClick={() => this.scrollToMyRef(this.expRef)}
          onProjClick={() => this.scrollToMyRef(this.projRef)}
          onContactClick={() => this.scrollToMyRef(this.contactRef)} 
          />
         
          <Main ref={this.mainRef}/>
          <About ref={this.aboutRef}/>
          <Exp ref={this.expRef}/>
          <Proj ref={this.projRef}/>
          <Contact ref={this.contactRef}/>
        </ThemeProvider>
      </div>  
    );
  }
}

export default App;
