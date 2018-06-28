import React, {Component} from 'react';
import '../styles/home.css';
import softBlack from '../videos/softblack.mov';
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';




class Homepage extends Component {
    render(){
        console.log("Hello! Drope me a line...")
        return(
            <div>
                <div className='nav'>
                <Navbar />
                </div>
                <div className="particles">
                    <Particles />
                    </div>
                <div className="homepage">
                    <div className="name">
                    <h1> </h1>
                    </div>
                    <div className="scene">
                        <div className="wrapper">
                            <ul className="ball">
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            <li className="ring"></li>
                            </ul>
                             {/* <Link className="enter"to='/portfolio'> Enter </Link> */}
                        </div>
                        </div>

                  
                </div>
          
            </div>
        )
    }
}

export default Homepage;