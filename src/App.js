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
  constructor(props)
  {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      active: "Main"
    }
  }
  handler(e,view)
  {
    this.setState({active: view});
  }
  render() {
    return (
      <div className ="App">
        <ThemeProvider theme={theme}>
          <Navbar handler={this.handler}/>
            {PAGES[this.state.active]}
        </ThemeProvider>
      </div>  
  );
}
}

export default App;
