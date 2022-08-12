import React, { Component, useRef } from 'react'

class Navbar extends Component {
 
    render() { 
        return (      
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <div className="image-text">
                            <span className="image">
                                <button onClick={(e) => this.props.handler(e, "Main")}>
                                    <img src={require('./logo.png')} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="text logo-text" > 
                            <span className="name">Kyle Rivera</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                    </div>
                        
                    <i className="bi bi-caret-right-fill toggle" onClick={this.toggleBar}></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link"> 
                                <button onClick={(e) => this.props.handler(e, "About")}><i className="bi bi-file-person-fill icon"></i>About</button>
                            </li>
                            <li className="nav-link">
                                <button onClick={(e) => this.props.handler(e, "Exp")}><i className="bi bi-box-fill icon"></i>Experience</button>
                            </li>
                            <li className="nav-link" >
                                <button onClick={(e) => this.props.handler(e, "Edu")}><i className="bi bi-mortarboard-fill icon"></i>Education</button>
                            </li>
                            <li className="nav-link" >
                                <button onClick={(e) => this.props.handler(e, "Proj")}><i className="bi bi-journal icon"></i>Projects</button>
                            </li>
                            <li className="nav-link" >
                                <button onClick={(e) => this.props.handler(e, "Contact")}><i className="bi bi-telephone-fill icon"></i>Contact</button>
                            </li>
                            <li className="nav-link" >
                                <a href={require('./resume.pdf')} onClick={(e) => this.props.handler(e, "Exp")}><i className="bi bi-file-earmark-richtext icon"></i>Resume</a>
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
}


export default Navbar;