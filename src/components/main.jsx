import React, { Component } from 'react'
import '../static/css/main.css';

class Main extends Component {
    state = {  } 
    render() { 
        return (
            <div className='page'>
                <div className='main'>
                    <div className='intro'>
                        <h1>Hey!</h1>
                        <h1>I'm Kyle,</h1>
                        <h1>Programmer</h1>
                        <h2> Software Engineer | Web Developer </h2>
                    </div>
                    
                    <img src={require('../static/images/logoT.png')} alt=''></img>
                </div>
            </div>
        );
    }
}
 
export default Main;