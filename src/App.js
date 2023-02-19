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

theme.typography = {
  fontFamily: ['Poppins', 'sans-serif']
}
theme.typography.h4 = {
  fontSize: '2rem',
  color: 'rgb(42, 44, 80)',
}
theme.typography.h3 = {
  fontSize: '1.3rem',
  color: 'rgb(79, 82, 131)'
}

const PAGES = {
  "Main": <Main />,
  "About": <About />,
  "Exp": <Exp />,
  "Proj": <Proj />,
  "Contact": <Contact />
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
    ref.current.scrollIntoView({ behavior: "smooth" });
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
