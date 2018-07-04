import React, {Component} from 'react';
import '../styles/home.css';
import Navbar from '../components/navbar';
import Particles from 'react-particles-js';




class Homepage extends Component {
    render(){
        console.log("Hej hej! Nǐ hǎo ma? ✨🐺✨")
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