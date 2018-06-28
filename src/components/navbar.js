import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">   
                <Link to='/'>  Home • </Link> 
                <Link to='/about'> About •  </Link> 
                <Link to='/portfolio'> Portfolio •  </Link> 
                <Link to='/contact'>Contact  </Link>
            </div>
        )
    }
}

export default Navbar;