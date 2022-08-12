import React, { Component, useRef } from 'react'

class Navbar extends Component {
    render() { 
        return (      
            <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <div className="image-text">
                            <span className="image">
                                <a href="/">
                                <img src={require('./logo.png')} alt=""/>
                                </a>
                            </span>
                        </div>
                        <div className="text logo-text" > 
                            <span className="name">Kyle Rivera</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                    </div>
                        
                    <i className="bi bi-caret-right-fill toggle"></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link"> 
                                <a href="/"><i className="bi bi-file-person-fill icon"></i>About Me</a>
                            </li>
                            <li className="nav-link">
                                <a href="/"><i className="bi bi-box-fill icon"></i>Experience</a>
                            </li>
                            <li className="nav-link" >
                                <a href="/"><i className="bi bi-mortarboard-fill icon"></i>Education</a>
                            </li>
                            <li className="nav-link" >
                                <a href="/"><i className="bi bi-journal icon"></i>Projects</a>
                            </li>
                            <li className="nav-link" >
                                <a href="/"><i className="bi bi-telephone-fill icon"></i>
                                <span className="text nav-text">Contact</span></a>
                            </li>
                            <li className="nav-link" >
                                <a href="/"><i className="bi bi-file-earmark-richtext icon"></i>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
        );
    }
}
 
export default Navbar;