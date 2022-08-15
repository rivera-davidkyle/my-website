import React, { Component } from 'react';
import '../static/css/exp.css';

class Exp extends Component {
    state = {  } 
    render() { 
        return (
            <div className="page">
                <div className='exp1'>
                    <div className='title'>
                        Atmospheric Lidar Group
                    </div>
                    <div className='body'>
                        <div className='desc'>
                            Description 1
                            <br>
                            </br>
                            Description 2
                        </div>
                        <div className='image'>
                            <img src={require('../static/images/alg.png')} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className='exp2'>
                    <h1>Experience2</h1>
                </div>
                
            </div>
        );
    }
}
 
export default Exp;