import React, { Component, useRef } from 'react'
import '../static/css/navbar.css';

class Navbar extends Component {
 
    render() { 
        return (      
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <div className="image-text">
                            <span className="image">
                                <button onClick={(e) => {this.props.onMainClick(e)}}>
                                    <img src={require('../static/images/logo.png')} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="text logo-text" > 
                            <span className="name">Kyle Rivera</span>
                        </div>
                    </div>
                        
                    <i className="bi bi-caret-right-fill toggle" onClick={(e) => this.toggleBar(e)}></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link"> 
                                <button onClick={(e) => {this.props.onAboutClick(e)}}><i className="bi bi-file-person-fill icon"></i>About</button>
                            </li>
                            <li className="nav-link">
                                <button onClick={(e) => {this.props.onExpClick(e)}}><i className="bi bi-box-fill icon"></i>Experience</button>
                            </li>
                            <li className="nav-link" >
                                <button onClick={(e) => {this.props.onProjClick(e)}}><i className="bi bi-journal icon"></i>Projects</button>
                            </li>
                            <li className="nav-link" >
                                <button onClick={(e) => {this.props.onContactClick(e)}}><i className="bi bi-telephone-fill icon"></i>Contact</button>
                            </li>
                            <li className="nav-link" >
                                <a href={require('../static/others/resume.pdf')}><i className="bi bi-file-earmark-richtext icon"></i>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
        );
    }
    toggleBar() {
        const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector('.toggle');
        sidebar.classList.toggle("close");
    }
    toggleClose(){
        const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector('.toggle');
        if (!sidebar.classList.contains('close'))
        {
            sidebar.classList.toggle("close")
        }
    }
}


export default Navbar;