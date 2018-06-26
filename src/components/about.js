import React, {Component} from 'react';
import me from '../imgs/me.jpg';
import '../styles/about.css';

class About extends Component {
    render(){ 
        return (
            <div> 
                <h1> About Me </h1>
                <img className="me" src={me} />
            </div> 
        )
    }
}

export default About;