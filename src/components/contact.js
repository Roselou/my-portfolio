import React, {Component} from 'react';
import github from '../imgs/github-logo.svg';
import linkedin from '../imgs/linkedin.svg';
import email from '../imgs/mail.svg';
import resume from '../imgs/webdev_resume.pdf';
import '../styles/contact.css';
import cv from '../imgs/cv.svg';

class Contact extends Component {
    render(){
        return(
            <div> 
                <h1> Contact Me Via... </h1>
                <div className="contactLogos1">
                    <a href="https://github.com/Roselou">
                        <img src={github} width="20%"/>
                    </a>
                    <a href="https://www.linkedin.com/in/roselou1/">
                        <img src={linkedin} width="20%" />
                    </a>
                </div>
                <div className="contactLogos2">
                    <a href="mailto:roselouweb@gmail.com">
                        <img src={email} width = "20%" />
                    </a>
                    <a href={resume} target="_blank">
                        <img src={cv} width="20%"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;