import React, {Component} from 'react';
import me from '../imgs/me.jpg';
import '../styles/about.css';
import js from '../imgs/js.svg';
import html from '../imgs/html-5.svg';
import css from '../imgs/css.svg';
import ruby from '../imgs/ruby.svg';
import reactlogo from '../imgs/reacticon.svg';
import python from '../imgs/python.svg';
import adobe from '../imgs/adobe.svg';
import node from '../imgs/node.png';
import Particles from 'react-particles-js';
import Navbar from '../components/navbar';


class About extends Component {
    render(){ 
        return (
            <div>
                <div className="nav"> 
                    <Navbar />
                </div>
                <div className="about"> 
                    <div className="particles">
                    <Particles />
                    </div>
                    <h1 className="aboutMe"> ROSE LOU </h1>
                    <div>
                        <img className="me" src={me} alt="profile"/>
                    </div>
                        <h2 className="rose">  </h2>
                    <div className="desc">
                            <p> Rose is an East Coast transplant currently living and working in San Francisco with her Keeshond, Stella. 
                                She completed a 12-week accelerated learning program in full-stack web development at General Assembly in the spring of 2018, and is comfortable with both front end and back end development, specializing in the MERN Stack, CSS, React and JavaScript. 
                                Rose is currently freelancing as a Junior Front-End Web Developer at Mint Design Agency. </p>
                            <br />
                            <p>Rose graduated with both a Master of Fine Arts and Master of Arts from the Dual Degree Masters program at San Francisco Art Institute in 2017. She also received a BA from New York University in 2013. With a background in digital media art, Rose's interests also include explring the possibilities made possible by 3D Modeling, Augmented Reality and Virtual Reality. </p>       
                    </div>
                   

                    <br />
                    <h3> Tech Skills: </h3>
                    <div className="skills">
                        <img src={js} alt="javascript logo" />
                        <img src={html} alt="html logo" />
                        <img src={css} alt="css logo" />
                        <img src={ruby} alt="ruby logo" />
                        <img src={reactlogo} alt="react logo" />
                        <img src={python} alt = "python logo" />
                        <img src={adobe} alt="adobe creative cloud logo" />
                        <img src={node} alt="node icon"/>

                    </div>
             
                </div> 
            </div>
        )
    }
}

export default About;