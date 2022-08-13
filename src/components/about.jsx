import React, { Component } from 'react';
import '../static/css/about.css';

class About extends Component {
    render() { 
        return (
        <div className="page">
            <div className='about'>
                <div className='body'>
                    <div className='image'>
                        <img src={require('../static/images/pfp.png')} alt=''></img> 
                    </div>
                    <div className='text'>
                        <div className='wrapper'>
                            <div className='static'>I am a&nbsp;</div>
                            <ul class = "dynamic-txts">
                                <li>
                                    <span>Software Engineer.</span>
                                </li>
                                <li>
                                    <span>Fullstack Developer.</span>
                                </li>
                                <li>
                                    <span>Tech Enthusiast.</span>
                                </li>
                                <li>
                                    <span>Lifelong Learner.</span>
                                </li>
                            </ul>
                        </div>
                        <p> 
                            <br></br>
                            I am a Senior majoring in Computer Science at the University of
                            Maryland, Baltimore County. I work for the Atmospheric Lidar Group,
                            where we provide and maintain a microservices architecture based on loosely
                            defined client requirements. <br></br>
                        </p>
                        <p>
                            I seek out challenges to expand my skillset and knowledge, and I adapt well
                            to new roles and environments. <br></br>
                        </p>  
                        <p>
                            Outside of programming, I am a basketball player, a chess enthusiast, with an
                            ardent passion for music. Above everything else, my ambitions lie on partaking
                            with the world's quest for technological growth and progress. <br></br>
                        </p>
                    </div>
                </div>           
            </div>
            
        </div>
            );
    }
}
 
export default About;