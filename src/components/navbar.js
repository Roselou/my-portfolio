import React, {Component} from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import About from './about';
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

class Navbar extends Component {
    render(){
        return (
            <div className="navbar"> 
                <Tabs> 
                    <TabList> 
                        <Tab> <Link to='/about'> About Me</Link> </Tab>
                        <Tab> <Link to='/portfolio'> Portfolio </Link></Tab> 
                        <Tab> <Link to='/contact'>Contact </Link></Tab> 
                    </TabList>
                </Tabs>
            </div>
        )
    }
}

export default Navbar;