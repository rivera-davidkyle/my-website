import './App.css';
import React, { Component } from 'react'
import Main from './components/main'
import About from './components/about'
import Exp from './components/exp'
import Edu from './components/edu'
import Proj from './components/proj'
import Contact from './components/contact'
import Navbar from './components/navbar'

const PAGES = {
  "Main": <Main />,
  "About": <About />,
  "Exp": <Exp />,
  "Edu": <Edu />,
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
        <Navbar handler={this.handler}/>
        {PAGES[this.state.active]}
      </div>  
  );
}
}

export default App;
