import React, {Component} from 'react';
import {Switch, Route,} from 'react-router-dom';
import Homepage from './components/homepage';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';


class Routes extends Component {
    render(){
        return (
            <div>
                <main>
                        <Switch>
                            
                                <Route exact path='/' component={Homepage}/>
                                <Route exact path='/about' component={About} />
                                <Route exact path='/contact' component={Contact}/>
                                <Route exact path='/portfolio' component={Portfolio}/>
                            
                        </Switch>
                </main>
            </div>
        )
    }
}

export default Routes;