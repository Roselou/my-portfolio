import React, {Component} from 'react';
import github from '../imgs/github-logo.svg';
import linkedin from '../imgs/linkedin.svg';
import email from '../imgs/mail.svg';
import resume from '../imgs/webdev_resume.pdf';
import '../styles/contact.css';
import cv from '../imgs/cv.svg';
import Particles from 'react-particles-js';
import Navbar from '../components/navbar';

class Contact extends Component {
    render(){
        return(
            <div> 
                <div className="nav">
                    <Navbar/> 
                </div>
            <div className="contact"> 
            <div className="particles">
                    <Particles />
            </div>
                <h1 className="contactTitle"> Contact Me Via... </h1>
                <div className="contactLogos">
                    <a href="https://github.com/Roselou">
                        <img src={github} width="20%" alt="github logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/roselou1/">
                        <img src={linkedin} width="20%" alt="linkedin logo" />
                    </a>
                    <a href="mailto:roselouweb@gmail.com">
                        <img src={email} width = "20%" alt="email icon"/>
                    </a>
                    <a href={resume} target="_blank">
                        <img src={cv} width="20%" alt="resume icon"/>
                    </a>
                </div>
            </div>
            </div>
        )
    }
}

export default Contact;